---
date: 2026-03-10T12:24
tag: Mechanical
title: Cutting Metal
image: assets/images/carvera-test-piece.webp
image_alt: Test piece used to dial in the Carvera
---

The Teensy 4.1 has arrived. I didn’t realize it had a USB micro connector, so now I’m waiting for a USB cable. In the meantime, I decided to finally put to use the Carvera CNC mill I bought almost a year ago. Calvin’s mechanical design uses 3D-printed PLA and ABS as much as possible, but there are a few parts that really ought to be aluminum — mainly the plates that mount the motors.

The motor plates have pockets for some 10 mm OD bearings that need to hit a pretty tight tolerance: ±0.001” on the diameter. I was a little concerned that such a small machine might not be able to hit that, but I’m happy to note that the Carvera is more than capable of that kind of precision. It does require careful setup, light passes, and a little bit of compensation in the NC code. The pockets were about 0.002” undersize, so adding negative 0.002" "stock to leave" brought them right to where they're supposed to be. Once I sorted that out with a test part, I’m very happy with the results - the bearings are a tight slip fit. The next step is to machine the actual parts. I’m waiting on some drill bits for that, but they should be here soon.