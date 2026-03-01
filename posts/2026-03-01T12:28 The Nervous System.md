---
date: 2026-03-01T12:28
tag: Instinctus
title: The Nervous System
---

Calvin's "nervous system" is handled by the Arduino GIGA R1 Wifi board. The GIGA is a dual core microcontroller (M4 and M7), Both cores run separate sketches that share hardware access.

The most fundamental functions - balancing, motor control, and basic safety like object collision detection are run on the M4 core. The only hardware attached to the M4 is an IMU two Time of Flight (ToF) sensors. 

The IMU is used to balance Calvin, and also to detect collisions by looking at accelerometer data spikes.

The two ToF sensors look out for obstacles. One looks forward, and the other to the rear. Their purpose is simply to provide a reliable notification that something is in the way without having to wait for other, less reliable systems.

The M4's code is designed to be simple, reliable, and isolated from other more complex (and finicky) systems on the M7 core and the Jetson. If something else fails, the M4 should still be able provide basic functionality.