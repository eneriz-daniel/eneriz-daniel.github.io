---
layout: page
title: PYNQ-Z2 Pinout
description: let's find the ZYNQ pin label associated to each board pin
img: /assets/img/pynqz2-pinout-v2.svg
importance: 1
category: work
---

As I posted in the [PYNQ forum](https://discuss.pynq.io/t/pynq-z2-pinout/4256/5), I found the way to find the ZYNQ pin label associated to each board pin too tedious, since the schematic may be too complex. For this reason, I decided to create a simple tool to help you find the pin label associated to each board pin. Inspired by the pinouts available for Arduinos and ESP32s dev boards, I drew a simple pinout for the PYNQ-Z2 board.

Tim Frey and the user [@Lipetka](https://discuss.pynq.io/u/lipetka) of the PYNQ forum pointed out some errors. Here is the updated version:


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pynqz2-pinout-v2.svg' | relative_url }}" data-zoomable alt="" title="PYNQ-Z2 pinout"/>
    </div>
</div>
<div class="caption">
    PYNQ-Z2's pinout. Only the main IO pins are labeled.
</div>

Since it is helpful for the PYNQ community and it can be extended, I've published the original file (vector graphic) on the PYNQ forum and its also available [here](/assets/data/PYNQ-Z2-pinout-v2.zip). It's licensed under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
