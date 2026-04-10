---
date: 2026-03-03 19:15:00 -0500
tag: Cogitator, Explorator
title: Connecting the Pipes
---

It's going to take a week or so to get a Teensy 4.1 in, so work on Instinctus has stopped for a minute. Instead, I took some time to continue working out how data will flow from one system to the next. As a starting point, Instinctus will transmit ToF and IMU data to Cogitator over serial. Cogitator will take that data and make it available to Explorator over a WebSocket connection.

The Instinctus code will have to wait, but it will basically consist of a loop that reads the data and dumps it into a serial buffer on the Teensy. Nothing earth-shaking.

Cogitator is Python code written for the Jetson Orin Nano. It will be composed of several independent services coordinated by ZeroMQ. Initially, these services are:

- **serial:** This is the counterpart to the Instinctus serial connection. It takes data off the buffer and makes it available to subscribing services through a broker.
- **gateway:** The gateway manages WebSocket connections and serves up data for Explorator to consume.
- **dummy:** `dummy` is just a drop-in replacement for `serial` that generates fake data so I can incrementally build and test the system. For now, it's what I'm using.

There is also a `broker`- a dumb pipe that routes data from publishers to subscribers. Right now, that's just `dummy` publishing and `gateway` subscribing.

Over on Explorator, a WebSocket connection is created and maintained. For now, this is all running on my Mac, so it's just a local connection — no Jetson involved. Data is then put in a Pania store, and UI elements react to changes. The result is a real-time chart of the data being produced by dummy. Once Instinctus is up and running, the full path from Instinctus to Cogitator to Explorator will be complete.

![Real time chart of simulated ToF data](/assets/images/real-time-tof-data-chart.webp)
