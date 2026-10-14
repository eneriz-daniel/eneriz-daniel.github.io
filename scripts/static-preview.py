#!/usr/bin/env python3
"""Copy dist/ into a self-contained preview that opens with a double click (file://).

Astro emits root-relative paths (/_astro/...), which only work behind a web server.
This rewrites them to relative paths and zips the result for sharing.
"""
import glob
import os
import re
import shutil
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'preview', 'eneriz-web-preview')

shutil.rmtree(OUT, ignore_errors=True)
shutil.copytree(DIST, OUT)
os.chdir(OUT)

for f in glob.glob('_astro/*.css'):
    with open(f) as fh:
        s = fh.read().replace('url(/_astro/', 'url(./')
    with open(f, 'w') as fh:
        fh.write(s)

for f in glob.glob('**/*.html', recursive=True):
    up = '../' * f.count('/') or './'

    def fix(m):
        attr, path = m.group(1), m.group(2)
        if path.endswith('/'):
            path += 'index.html'
        return f'{attr}="{up}{path.lstrip("/")}"'

    with open(f) as fh:
        s = re.sub(r'\b(href|src|srcset)="(/(?!/)[^"]*)"', fix, fh.read())
    with open(f, 'w') as fh:
        fh.write(s)

zip_path = OUT + '.zip'
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in glob.glob('**/*', recursive=True):
        z.write(f, os.path.join('eneriz-web-preview', f))
print(zip_path)
