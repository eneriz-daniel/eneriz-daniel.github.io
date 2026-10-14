export type Lang = 'en' | 'es';

// Global facts. Anything marked TODO renders highlighted until filled in.
export const site = {
  name: 'Daniel Enériz',
  // Never rendered as plain text: obfuscated at build time, decoded in the browser.
  email: 'eneriz.daniel@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/eneriz-daniel' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/enerizdaniel' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=zD5tJIQAAAAJ' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0001-5709-1183' },
  ],
};

export const thesisTitle = 'Methodologies for Efficient Neural Network Implementation Applied to Edge AI Sensor Fusion';

export const stack = [
  { group: { en: 'Platform', es: 'Plataforma' }, items: ['Kubernetes', 'Helm', 'Argo CD', 'GitOps', 'Proxmox VE', 'Linux'] },
  { group: { en: 'Cloud', es: 'Cloud' }, items: ['GCP', 'AWS'] },
  { group: { en: 'ML', es: 'ML' }, items: ['Python', 'PyTorch', 'TensorFlow / TFLite Micro', 'Quantization'] },
  { group: { en: 'Hardware', es: 'Hardware' }, items: ['FPGA (Zynq, HLS)', 'Arm Cortex-M', 'Fixed-point arithmetic'] },
];

const en = {
  meta: {
    title: 'Daniel Enériz — ML Platform & Edge AI Engineer',
    description: 'Daniel Enériz, PhD. Engineer at Veridas working on compute infrastructure for machine-learning research and on model optimization for edge devices.',
  },
  nav: { home: 'home', research: 'research', theme: 'Toggle colour theme', lang: 'Español' },
  hero: {
    role: 'ML Platform & Edge AI Engineer',
    at: 'at',
    lead: 'I work on bringing machine-learning models into production: from the compute platforms where research teams train them to the resource-constrained devices where they are deployed.',
  },
  sections: { now: 'current role', work: 'focus areas', path: 'background', research: 'research', lab: 'beyond work', contact: 'contact' },
  now: [
    'Engineer at <strong>Veridas</strong>, a company specialising in digital identity verification and biometrics, since May 2024.',
    'My main responsibility is the internal compute platform used by the research teams: Kubernetes clusters managed declaratively through GitOps with Argo CD and Helm. The aim is a reliable environment that allows researchers to focus on their experiments rather than on the underlying infrastructure.',
    'I also continue to work on model optimization for edge deployment, the field in which I completed my doctorate.',
  ],
  work: [
    { title: 'ML platform', body: 'Design and operation of shared compute infrastructure for research teams, with reproducible environments and declarative, Git-based management.' },
    { title: 'Edge optimization', body: 'Quantization, model compression and latency and memory profiling to bring models from research to embedded hardware.' },
    { title: 'Cloud', body: 'Working knowledge of Google Cloud and AWS for workloads that do not run on-premises.' },
  ],
  stackLabel: 'stack',
  path: [
    { when: '2024 → now', what: 'Veridas', detail: 'ML platform and edge AI' },
    { when: '2020 → 2026', what: 'PhD in Electronic Engineering, University of Zaragoza', detail: 'Efficient neural network implementation for edge AI · GEPM group, I3A · Teaching in Digital Systems and Physical Techniques II' },
    { when: '2020', what: 'MSc in Physics and Physical Technologies', detail: 'University of Zaragoza' },
    { when: '2019', what: 'BSc in Physics', detail: 'University of Zaragoza' },
  ],
  research: {
    intro: `My doctoral thesis, <em>${thesisTitle}</em> (University of Zaragoza, 2026), addressed the deployment of neural networks on FPGAs and microcontrollers: fixed-point quantization, latency and resource trade-offs, and energy per inference. Applications included EEG-based brain–computer interfaces, heart-sound screening and food-quality monitoring.`,
    selected: 'Selected publications',
    all: 'All publications and theses',
  },
  lab: 'Outside work I maintain a small homelab: a Proxmox cluster with Proxmox Backup Server, video surveillance and Home Assistant. It serves as a testbed for ideas band projects. My interest in hardware goes back further, to Arduino, Raspberry Pi and 3D printing.',
  contact: 'For professional enquiries, please get in touch by email. You can also find me on:',
  emailFallback: 'Enable JavaScript to see the address.',
  researchPage: {
    title: 'Research',
    intro: 'Publications from my research at the University of Zaragoza (2020–2026), most recent first. Source code is available for most of them.',
    journal: 'Journal',
    conference: 'Conference',
    local: 'Workshops & teaching (in Spanish)',
    theses: 'Theses',
    code: 'code',
    back: '← back',
  },
  footer: 'Built with Astro. No tracking.',
};

const es: typeof en = {
  meta: {
    title: 'Daniel Enériz — ML Platform & Edge AI Engineer',
    description: 'Daniel Enériz, doctor en Ingeniería Electrónica. Ingeniero en Veridas: infraestructura de cómputo para investigación en machine learning y optimización de modelos para dispositivos edge.',
  },
  nav: { home: 'inicio', research: 'investigación', theme: 'Cambiar tema de color', lang: 'English' },
  hero: {
    role: 'ML Platform & Edge AI Engineer',
    at: 'en',
    lead: 'Trabajo en llevar modelos de machine learning a producción: desde las plataformas de cómputo donde los equipos de investigación los entrenan hasta los dispositivos con recursos limitados donde se despliegan.',
  },
  sections: { now: 'puesto actual', work: 'áreas', path: 'trayectoria', research: 'investigación', lab: 'fuera del trabajo', contact: 'contacto' },
  now: [
    'Ingeniero en <strong>Veridas</strong>, empresa especializada en verificación de identidad digital y biometría, desde mayo de 2024.',
    'Mi responsabilidad principal es la plataforma de cómputo interna que utilizan los equipos de investigación: clusters de Kubernetes gestionados de forma declarativa mediante GitOps con Argo CD y Helm. El objetivo es ofrecer un entorno fiable que permita a los investigadores centrarse en sus experimentos y no en la infraestructura subyacente.',
    'Además, sigo trabajando en la optimización de modelos para su despliegue en el edge, el área en la que realicé mi doctorado.',
  ],
  work: [
    { title: 'Plataforma ML', body: 'Diseño y operación de infraestructura de cómputo compartida para equipos de investigación, con entornos reproducibles y gestión declarativa basada en Git.' },
    { title: 'Optimización edge', body: 'Cuantización, compresión de modelos y caracterización de latencia y memoria para llevar modelos de la investigación al hardware embebido.' },
    { title: 'Cloud', body: 'Conocimientos prácticos de Google Cloud y AWS para cargas de trabajo que no se ejecutan on-premises.' },
  ],
  stackLabel: 'stack',
  path: [
    { when: '2024 → hoy', what: 'Veridas', detail: 'Plataforma ML y edge AI' },
    { when: '2020 → 2026', what: 'Doctorado en Ingeniería Electrónica, Universidad de Zaragoza', detail: 'Implementación eficiente de redes neuronales para edge AI · grupo GEPM, I3A · Docencia en Sistemas Digitales y Técnicas Físicas II' },
    { when: '2020', what: 'Máster en Física y Tecnologías Físicas', detail: 'Universidad de Zaragoza' },
    { when: '2019', what: 'Grado en Física', detail: 'Universidad de Zaragoza' },
  ],
  research: {
    intro: `Mi tesis doctoral, <em>${thesisTitle}</em> (Universidad de Zaragoza, 2026), abordó el despliegue de redes neuronales en FPGAs y microcontroladores: cuantización en punto fijo, compromisos entre latencia y recursos, y energía por inferencia. Las aplicaciones incluyeron interfaces cerebro-computador basadas en EEG, cribado mediante sonidos cardiacos y monitorización de la calidad de alimentos.`,
    selected: 'Publicaciones seleccionadas',
    all: 'Todas las publicaciones y tesis',
  },
  lab: 'Fuera del trabajo mantengo un pequeño homelab: un cluster Proxmox con Proxmox Backup Server, videovigilancia y Home Assistant. Me sirve como banco de pruebas para ideas y proyectos. Mi interés por el hardware viene de antes, de Arduino, Raspberry Pi y la impresión 3D.',
  contact: 'Para consultas profesionales, la vía preferida es el correo electrónico. También puede encontrarme en:',
  emailFallback: 'Active JavaScript para ver la dirección.',
  researchPage: {
    title: 'Investigación',
    intro: 'Publicaciones de mi etapa investigadora en la Universidad de Zaragoza (2020–2026), de la más reciente a la más antigua. La mayoría dispone de código fuente.',
    journal: 'Revista',
    conference: 'Congreso',
    local: 'Jornadas y docencia',
    theses: 'Tesis',
    code: 'código',
    back: '← volver',
  },
  footer: 'Hecha con Astro. Sin rastreo.',
};

export const t = { en, es };

export const paths = {
  en: { home: '/', research: '/research/' },
  es: { home: '/es/', research: '/es/research/' },
};
