/** Escape text and wrap any TODO marker so unfinished content is visible. */
export function hl(s: string | number): string {
  const esc = String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/TODO(:[^·→]*)?/g, (m) => `<mark class="todo">${m.trim()}</mark>`);
}
