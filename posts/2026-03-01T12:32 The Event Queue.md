---
date: 2026-03-01T12:32
tag: Instinctus
title: The Event Queue
---

I wanted an architecture that provided maximum isolation for the M4 core. If anything were to interrupt other systems, the M4 core shoudl be lean and reliable. But we still need a way for other parts of the system to get information to the M4 (things like where to go, or to handle emergencies generated outside of the M4). The best way to do this is to create an inter-core event queue (this is in the InstinctusKit code, which is everything that needs to be shared by both cores).

The event queue allows either core to add events, and eitehr core to process those events. The only way to communicate with the M4 is through the M7 using teh event Que. This is possible because htere is a small amount of RAM that is accessible to both the M7 and M4. The details are dense, but long story short, careful memory management allows for safe, atomic, non-blocking communication into and out of the M4.

So what are the events? There aren't many right now, but that will change in the futuer. For now, the only events implemented are:

```
  EVENT_BALANCE_IMU_DATA   : sends a stream of data from the IMU to the M7 core (each event is a data point)
  EVENT_TOF_DATA           : sends a stream of data from the two ToF sensors to the M7 core
  EVENT_PROXIMITY_WARNING  : broadcasts a warning to both cores that an object is too close.
  EVENT_EMERGENCY STOP     : broadcasts a warning to both cores that power will be shut down immediately.
```

The events are processed by the destination core as they are received. As of now, the M4 is just sending a stream of data to the M7, triggering a proximity warning if the ToF sensors detect something too close, and triggering an e stop if the tilt angle is too large.