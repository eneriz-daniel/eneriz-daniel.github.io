export type PubKind = 'journal' | 'conference' | 'local';

export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  /** Short venue tag shown in mono, e.g. "TIM" */
  tag: string;
  kind: PubKind;
  doi?: string;
  url?: string;
  code?: string;
  lang?: 'es';
  note?: { en: string; es: string };
  /** Shown on the home page */
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    year: 2024,
    title: 'Low-Cost FPGA Implementation of Deep Learning-based Heart Sound Segmentation for Real-Time CVDs Screening',
    authors: 'D. Enériz, A. J. Rodriguez-Almeida, H. Fabelo, S. Ortega, F. J. Balea-Fernandez, G. M. Callico, N. Medrano, B. Calvo',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    tag: 'TIM',
    kind: 'journal',
    doi: '10.1109/TIM.2024.3392271',
    code: 'https://github.com/eneriz-daniel/PCG-Segmentation-Model-Optimization',
    selected: true,
  },
  {
    year: 2024,
    title: 'Remote Low-Cost Differential Isolated Probe for Voltage Measurements',
    authors: 'D. Antolín-Cañada, F. J. Perez-Cebolla, D. Enériz, B. Calvo, N. Medrano',
    venue: 'Applied Sciences',
    tag: 'APPSCI',
    kind: 'journal',
    doi: '10.3390/app14020589',
  },
  {
    year: 2023,
    title: 'Low-power EEGNet-based Brain-Computer Interface implemented on an Arduino Nano 33 Sense',
    authors: 'D. Enériz, N. Medrano, B. Calvo, D. Antolín',
    venue: '38th Conference on Design of Circuits and Integrated Systems (DCIS)',
    tag: 'DCIS',
    kind: 'conference',
    doi: '10.1109/DCIS58620.2023.10335978',
    selected: true,
  },
  {
    year: 2023,
    title: 'High Resolution Current Measurement Using TMR Sensors',
    authors: 'N. Medrano, D. Antolin, D. Enériz, B. Calvo',
    venue: '38th Conference on Design of Circuits and Integrated Systems (DCIS)',
    tag: 'DCIS',
    kind: 'conference',
    doi: '10.1109/DCIS58620.2023.10336007',
  },
  {
    year: 2022,
    title: 'Real-Time EEG Acquisition System for FPGA-based BCI',
    authors: 'D. Enériz, N. Medrano, B. Calvo, A. C. Hernández-Ruiz, D. Antolín',
    venue: '37th Conference on Design of Circuits and Integrated Systems (DCIS)',
    tag: 'DCIS',
    kind: 'conference',
    doi: '10.1109/DCIS55711.2022.9970028',
  },
  {
    year: 2022,
    title: '10 mA Precision Contactless Current Sensing Using Low-Cost Hall-Effect Devices',
    authors: 'N. Medrano, D. Antolin, B. Calvo, D. Enériz',
    venue: '37th Conference on Design of Circuits and Integrated Systems (DCIS)',
    tag: 'DCIS',
    kind: 'conference',
    doi: '10.1109/DCIS55711.2022.9970200',
  },
  {
    year: 2022,
    title: 'Exploring a Segmentation-Classification Deep Learning-based Heart Murmurs Detector',
    authors: 'D. Enériz, A. J. Rodríguez-Almeida, H. Fabelo, S. Ortega, F. Balea-Fernandez, N. Medrano, B. Calvo, G. M. Callicó',
    venue: 'Computing in Cardiology (CinC)',
    tag: 'CinC',
    kind: 'conference',
    doi: '10.22489/CinC.2022.266',
  },
  {
    year: 2022,
    title: 'Hacia la implementación on the edge de un segmentador de PCG basado en la U-Net',
    authors: 'D. Enériz, A. J. Rodriguez-Almeida, H. Fabelo, N. Medrano, B. Calvo',
    venue: 'Jornada de Jóvenes Investigadores del I3A',
    tag: 'I3A',
    kind: 'local',
    lang: 'es',
  },
  {
    year: 2022,
    title: 'Herramienta Didáctica para el Autoaprendizaje del Cálculo de Disipadores',
    authors: 'D. Antolín, D. Enériz, F. J. Pérez-Cebolla, J. Ponce, et al.',
    venue: 'XV Congreso de Tecnología, Aprendizaje y Enseñanza de la Electrónica (TAEE)',
    tag: 'TAEE',
    kind: 'local',
    lang: 'es',
    code: 'https://github.com/dantolin-zgz/CalculadorDisipadores',
  },
  {
    year: 2022,
    title: 'Píldoras Audiovisuales como Apoyo a las sesiones de Laboratorio',
    authors: 'J. Pérez-Bailón, B. Calvo, D. Enériz, N. Medrano, et al.',
    venue: 'XV Congreso de Tecnología, Aprendizaje y Enseñanza de la Electrónica (TAEE)',
    tag: 'TAEE',
    kind: 'local',
    lang: 'es',
  },
  {
    year: 2022,
    title: 'Sistemas de Medida Remotos en el Máster en Física y Tecnologías Físicas',
    authors: 'N. Medrano, B. Calvo, D. Enériz, D. Antolín, et al.',
    venue: 'XV Congreso de Tecnología, Aprendizaje y Enseñanza de la Electrónica (TAEE)',
    tag: 'TAEE',
    kind: 'local',
    lang: 'es',
  },
  {
    year: 2021,
    title: 'An FPGA-Based Machine Learning Tool for In-Situ Food Quality Tracking Using Sensor Fusion',
    authors: 'D. Enériz, N. Medrano, B. Calvo',
    venue: 'Biosensors',
    tag: 'BIOSENS',
    kind: 'journal',
    doi: '10.3390/bios11100366',
    code: 'https://github.com/eneriz-daniel/MeatNet',
    selected: true,
  },
  {
    year: 2021,
    title: 'A Wireless Instrumentation Control System Based on Low-Cost Single Board Computer Gateways',
    authors: 'D. Enériz, N. Medrano, B. Calvo',
    venue: 'IEEE Access',
    tag: 'ACCESS',
    kind: 'journal',
    doi: '10.1109/ACCESS.2021.3104903',
    code: 'https://github.com/eneriz-daniel/instin',
  },
  {
    year: 2021,
    title: 'Motor-Imagery EEGNet-Based Processing on a Low-Spec SoC Hardware',
    authors: 'A. C. Hernandez-Ruiz, D. Enériz, N. Medrano, B. Calvo',
    venue: 'IEEE Sensors',
    tag: 'SENSORS',
    kind: 'conference',
    doi: '10.1109/SENSORS47087.2021.9639747',
    code: 'https://github.com/eneriz-daniel/MIBCI-QCNNs',
    selected: true,
  },
  {
    year: 2021,
    title: 'Brain-Computer Interface basada en el procesado de EEG on the edge para reconocimiento de tareas de imaginación motora',
    authors: 'D. Enériz, A. C. Hernández-Ruiz, N. Medrano, B. Calvo',
    venue: 'Jornada de Jóvenes Investigadores de Química y Física de Aragón',
    tag: 'JJIQFA',
    kind: 'local',
    lang: 'es',
    code: 'https://github.com/eneriz-daniel/MIBCI-QCNNs',
    note: { en: 'Best oral presentation award', es: 'Premio a la mejor comunicación oral' },
  },
  {
    year: 2021,
    title: 'Procesado on the edge de señales EEG para reconocimiento de tareas de imaginación motora',
    authors: 'D. Enériz, A. C. Hernández-Ruiz, N. Medrano, B. Calvo',
    venue: 'Jornada de Jóvenes Investigadores del I3A',
    tag: 'I3A',
    kind: 'local',
    lang: 'es',
    code: 'https://github.com/eneriz-daniel/MIBCI-QCNNs',
  },
  {
    year: 2020,
    title: 'A Wireless Instrumentation Control System Based on Low-Cost Single Board Computers',
    authors: 'D. Enériz, N. Medrano, B. Calvo, J. Pérez-Bailón',
    venue: 'IEEE International Instrumentation and Measurement Technology Conference (I2MTC)',
    tag: 'I2MTC',
    kind: 'conference',
    doi: '10.1109/I2MTC43012.2020.9129142',
    code: 'https://github.com/eneriz-daniel/instin',
  },
  {
    year: 2020,
    title: 'Live Demonstration: A Low-Cost Wireless Instrumentation Control System',
    authors: 'D. Enériz, N. Medrano, B. Calvo',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
    tag: 'ISCAS',
    kind: 'conference',
    doi: '10.1109/ISCAS45731.2020.9180681',
    code: 'https://github.com/eneriz-daniel/instin',
  },
  {
    year: 2020,
    title: 'Implementación de redes neuronales en FPGAs usando tipos de datos de punto fijo',
    authors: 'D. Enériz, N. Medrano, B. Calvo',
    venue: 'IX Jornada de Jóvenes Investigadores del I3A',
    tag: 'I3A',
    kind: 'local',
    lang: 'es',
    code: 'https://github.com/eneriz-daniel/sensorialfusionQNNs',
  },
];

import { thesisTitle } from '../i18n/content';

export interface Thesis {
  degree: { en: string; es: string };
  year: number | string;
  title: string;
  note?: { en: string; es: string };
}

export const theses: Thesis[] = [
  {
    degree: { en: 'PhD', es: 'Doctorado' },
    year: 2026,
    title: thesisTitle,
  },
  {
    degree: { en: 'MSc', es: 'Máster' },
    year: 2020,
    title: 'Aplicación de sistemas digitales programables en la extracción de información por fusión sensorial en dispositivos ubicuos',
    note: { en: 'IEEE Spain Sensors Chapter distinction', es: 'Distinción del IEEE Spain Sensors Chapter' },
  },
  {
    degree: { en: 'BSc', es: 'Grado' },
    year: 2019,
    title: 'Control de instrumentación para medidas físicas mediante protocolo inalámbrico de bajo coste',
  },
];
