---
layout: page
title: instin
description: a Raspberry-based wireless instrumentation control system
img: /assets/img/oscilloscope.jpg
importance: 3
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/instin-scheme.png' | relative_url }}" data-zoomable alt="" title="Instin's scheme"/>
    </div>
</div>
<div class="caption">
    Instin-based system scheme. Each gateway can be connected to up to four instruments.
</div>

**Instin** is a wireless instrumentation control system based on gateways, which are in charge of receive the instrumentation commands from the host computer, send them to the instruments and reply the requested information (if any) to the host.

The gateways are based on SBCs (*Single Board Computers*), concretely Raspberries Pi Zero W, which are extremely low-cost. To ease the connection of the instruments to the raspberries, a USB hub specifically engineered for these SBCs, the Zero4U hub, was coupled to each RPi, thus allowing the connection of up to four instruments using type-A-to-type-B USB buses.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/instin-gw.jpg' | relative_url }}" data-zoomable alt="" title="Gateway"/>
    </div>
</div>
<div class="caption">
    Complete gateway (Raspberry Pi Zero W + Zero4U USB hub) with two instruments connected through the type-A USB ports.
</div>

The developed software, which enables the wireless communication between the host computer and the instrumentation has been developed in Python and it is composed by two scripts.

- The first one is `instin.py`, a package composed of all the needed function to control instrumentation but adapted to the wireless system, thus making this process transparent for the user. Basically it sends formatted packets containing the input information -desired function and SCPI (*Standard Commands for Programmable Instruments*) commands- to the gateways.
- The other one is `autorun.py`. This is a program that is launched automatically every time the gateway boots. Once the connection with the host computer is established, it reads the formatted packets, detecting the desired function and sending the corresponding SCPI command to the instrument.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/instin-example.png' | relative_url }}" data-zoomable alt="" title="Communication example"/>
    </div>
</div>
<div class="caption">
    Example of the communication between the host computer and the gateway using the formatted packets sent from <code>instin.py</code> to <code>autorun.py</code>.
</div>


The connection between the gateways and the instrumentation is based in the VISA (*Virtual Instrument Software Architecture*) API. There is a community-developed Python package, [`pyvisa`](https://pyvisa.readthedocs.io/en/latest/), that embeds this API and allows its interface using Python. In the case of the PC-to-gateway communication, it is based on the TCP (*Transfer Control Protocol*) protocol, over a WiFi network. This protocol is supported on Python with the [`socket`](https://docs.python.org/3/library/socket.html) package.

This project is open-source, the code is publicly available in [GitHub](https://github.com/eneriz-daniel/instin). Additionally, there is a documentation webpage [here](https://instin.readthedocs.io/en/latest/). Besides, there is an extensive explanation of this project available in the following articles:

- D. Enériz, N. Medrano and B. Calvo, "A Wireless Instrumentation Control System Based on Low-Cost Single Board Computer Gateways," in _IEEE Access_, vol. 9, pp. 115632-115642, 2021, doi: [10.1109/ACCESS.2021.3104903](https://doi.org/10.1109/ACCESS.2021.3104903).
- D. Enériz, N. Medrano, B. Calvo and J. Pérez-Bailón, "A Wireless Instrumentation Control System Based on Low-Cost Single Board Computers," _2020 IEEE International Instrumentation and Measurement Technology Conference (I2MTC)_, 2020, pp. 1-5, doi: [10.1109/I2MTC43012.2020.9129142](https://doi.org/10.1109/I2MTC43012.2020.9129142).
- D. Enériz, N. Medrano and B. Calvo, "Live Demonstration: A Low-Cost Wireless Instrumentation Control System," _2020 IEEE International Symposium on Circuits and Systems (ISCAS)_, 2020, pp. 1-1, doi: [10.1109/ISCAS45731.2020.9180681](https://doi.org/10.1109/ISCAS45731.2020.9180681).
