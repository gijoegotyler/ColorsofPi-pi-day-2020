## The Colors of Pi
---

I wrote this project as a coding challenge for PI Day 2020 inspired by Daniel Shiffman.

---

#### How it Works
* rgb color codes are encoded or decoded as you change the values on the inputs
* the pi color can be broken into 2 main sections:
    * the first 3 digits are the individual lengths of the rgb values. So 1, 2 or 3 always.
    * the rest of the digits make up one number which is the starting digit of the sequence within &pi;.

#### Other Important Info
* depending on the size pi.txt file you may encounter an error of node.js running out of memory. It can be fixed by using the following command to start the server.
    >   node --max-old-space-size=4096 server.js
    * Depending on the number of digits in you pi.txt you may need to increase the number but 4096 works with 1 billion digits for me.
* To download the first billion digits of pi file go here:
    * https://stuff.mit.edu/afs/sipb/contrib/pi/pi-billion.txt
* This project is inspired by ideas at the of this video:
    * https://www.youtube.com/watch?v=MEdpRYyjz_0 by Daniel Shiffman
