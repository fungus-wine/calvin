---
date: 2026-04-10 21:35:00 -0500
tag: Mechanical
title: Engraving Plastic
---

I wanted to add some nice labels for the various switches and knobs that will find their way onto Calvin. Currently, that means 4 power switches - one for each motor (sinister and dexter), one for the Teensy (Instinctus), and one for the Jetson Orin Nano (Cogitator). I thought I'd give the Carvera another run and use an engraving bit out on some engraving plastic (the stuff where you machine away teh top layer to reveal a different color underneath).

I ran into a couple problems. One is that getting Autodesk Fusion to make decent toolpaths for this is not easy and obvious. You have to do a lot of guessing and trial and error. The second is that the plastic will melt and gum up the bits easily, which I found out when cutting out the holes. It takes a combination of light but decisive cuts with a one flute end mill to get it done well. Over time the bit heats up, and the plastic doesn't transfer heat well, so it melts. Long running operations might have to be broken up.

The combination I found that worked for the engraving was to use a 15 degree, 0.2mm D bit with the Engracing operation, setting the Bottom Height in Fusion to be -0.1 mm from the Top Height (the same depth as the modeled text). It's also very finicky about the font. I had the best luck with Helvetica Bold at 2.5 mm text height. Strangely, Arial did not work well at all.  

Eventually, I got it right, and I think the plate came out well. 

![Partially assembled motor plates](/assets/images/label-plate.webp)
