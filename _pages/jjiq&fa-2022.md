---
layout: page
permalink: /jjiq&fa-2022/
title: Jornada de Jóvenes Investigadores de Química y Física de Aragón 2022
description: sitio web de apoyo
nav: false
social: true  # includes social icons at the bottom of the page
---

¡Hola! 👋 Este es mi sitio web, si quieres saber más sobre mí, puedes visitar mi [página principal](https://eneriz-daniel.com). Mi información de contacto 📧, perfiles académicos 🎓 y enlaces a redes sociales 📱 están disponibles en el pie de página. ¡No dudes en contactarme si tienes alguna pregunta o sugerencia!

Mi participación en la Jornada de Jóvenes Investigadores de Química y Física de Aragón 2022 consiste en la presentación de una implementación en una Matriz de Puertas Lógicas Programables en Campo ([FPGA](https://es.wikipedia.org/wiki/Field-programmable_gate_array)) de un modelo de segmentación de fonocardiogramas ([PCGs](https://es.wikipedia.org/wiki/Fonocardiograma)), un trabajo desarrollado junto con el Instituto Universitario de Microelectrónica Aplicada de la Universidad de Las Palmas de Gran Canaria. Esta basado en el modelo presentado por [F. Renna _et al._](https://ieeexplore.ieee.org/abstract/document/8620278) en 2019, donde se adaptó la U-Net para usarse para segmentación se señales unidimensionales, como son los PCGs.

La implementación se ha realizado usando herramientas de Síntesis de Alto Nivel ([HLS](https://en.wikipedia.org/wiki/High-level_synthesis)), que permite la programación de las FPGAs desde una descripción algorítmica usando lenguajes como C/C++. Además, permite hacer uso de datos de punto fijo de baja resolución, reduciendo así el impacto que el modelo tiene en los recursos de la FPGA. Para poder controlar también dicho impacto, se han encontrado tres parámetros de la arquitectura del modelo que permiten controlar su tamaño, cuyo efecto en el rendimiento del modelo y en los recursos de la FPGA han sido determinados.

Puedes encontrar una versión digital del **póster** [aquí](/assets/pdf/JJIQYF2022-poster.pdf), y el PDF de la **comunicación** [aquí](/assets/pdf/JJIQYF2022-abstract.pdf).
