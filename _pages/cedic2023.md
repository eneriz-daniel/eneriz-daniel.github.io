---
layout: page
permalink: /cedic2023/
title: Congreso de Estudiantes de Doctorado Iberus Connect 2023
description: página de recursos y contacto
nav: false
social: true  # includes social icons at the bottom of the page
---

# ¡Hola! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="40">

Soy Daniel Enériz, del Instituto Universitario de Investigación en Ingeniería de Aragón (aunque trabajo en la Facultad de Ciencias). Tienes mi información de contacto 📧 al final de esta página, ¡no dudes en contactarme si quieres saber más sobre el trabajo del póster!

En esta jornada presento un trabajo que surgió en la estancia que realicé en el [Instituto Universitario de Microelectrónica Aplicada](https://www.iuma.ulpgc.es/) de la [Universidad de Las Palmas de Gran Canaria](https://www.ulpgc.es/) (IUMA-ULPGC) durante los meses de marzo y abril de 2022. Es en un sistema de ayuda al diagnóstico de enfermedades cardiovasculares, dentro de lo cual evaluamos el uso de un modelo convolucional para segmentar fonocardiogramas en ciclos cardiacos. Con la intención de implementar el modelo sobre plataformas de bajo coste y bajas prestaciones, identificamos tres parámetros de reducción del modelo, cuyo efectos en las métricas del modelo son controlables. Esto nos permitió encontrar modelos reducidos que se ajusten a los recursos disponibles en la FPGAs del SoC de Xilinx Zynq 7020. Además, más recientemente, hemos trabajado en optimizar la implementación de los sistemas, comparando dos paradigmas de implementación: el uso de bloques de memoria compartidos para guardar las _feature maps_ y el uso de _streaming dataflow_ para la ejecución del modelo. Hemos comprobado que bajo este último paradigma, la implementación es más eficiente en términos de recursos y además, la latencia de la inferencia es menor. Finalmente, también hemos realizado un estudio del efecto del tipo de dato de punto fijo en la precisión de los resultados y el consumo de recursos de la FPGA, mostrando que al menos 6 bits en la parte decimal y 6 bits en la parte entera son necesarios para evitar los efectos de cuantización y overflow, respectivamente.

Para más información te dejo aquí los enlaces al [póster](https://eneriz-daniel.com/assets/pdf/CEDIC2023_poster.pdf) y al [abstract](https://eneriz-daniel.com/assets/pdf/CEDIC2023_abstract.pdf) de una carilla presentado, y si necesitas algo más concreto, no dudes en contactarme.