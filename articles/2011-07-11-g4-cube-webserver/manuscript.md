## G4 Cube Webserver
*11th July 2011*

I have been making websites for a long time. I have never hosted any of them, until this year.

My employer’s hardware cupboard is an Aladdin’s cave of Apple hardware. When it was last cleaned out, I was lucky enough to adopt an [Apple Power Mac G4 Cube][g4-cube]. It would’ve been beautiful new, but the reality distortion field has no kind effect on ageing hardware. The transparent, acrylic case was cracked, but it still started up.

I’d had the best intentions of operating my own web server for years. What had stopped me was the lack of support for static IP addresses in consumer broadband packages and the lack of appropriate hardware. Now that [O2][o2] support static IP addresses in their consumer broadband packages, I had a chance. The Cube’s passively-cooled hardware, famously dispersing its heat by the convection of air through a vent that runs from the bottom of the system to the top, immediately appealed to me.

The Cube was old, though such machines can thrive as webservers. HTTP servers have been written for many platforms, including many aging systems and formats. The Cube wasn’t going to be the oldest webserver in the world by a long way. The [C64 webserver][c64-webserver] is an example, although probably not the most archaic.

Its age did create a few problems. It came with a vintage install of Mac OS X 10.3 Panther. Panther felt surprisingly zippy and responsive when it booted, although it was too old to run MacPorts, Mac OS X’s popular open-source port project. To install [MacPorts][macports], I would need OS X 10.4 Tiger as a minimum.

A copy of Tiger wasn’t hard to find. Once installed, the 2005-vintage operating system was thankfully responsive and stable. After installing MacPorts, it is simply a case of invoking the installation of PHP5, MySQL and Apache through the command-line interface.

It was here that the Cube really began to show its age. In total, it took the Cube the better part of twelve hours to compile and install the PHP/MySQL/Apache stack. I’m also feeling pinched for space – my Cube has a noisy 20GB hard disk drive, and the system files and applications account for around 10G alone.

That’s plenty for my needs, though. Now I have a web server of my own, that I can configure and operate to my heart’s content. I get good amounts of uptime, I get administrator access, I have no competing virtually-hosted sites draining performance.

If you’ve got a dusty piece of computer hardware that you’ve got in the back of a cupboard, I highly recommend that you try making your own webserver. [You can find the guide that I used here][guide]. MacPorts makes it easy. I daresay Apt is very friendly too. You’ll get so much value out of computers that up until yesterday did nothing.

[g4-cube]: http://en.wikipedia.org/wiki/Power_Mac_G4_Cube
[o2]:    http://www.o2.co.uk/broadband/
[c64-webserver]: http://www.c64web.com/
[macports]: http://www.macports.org/
[guide]: http://2tbsp.com/content/install_apache_2_and_php_5_macports
