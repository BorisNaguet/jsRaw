# jsRaw
Port of famous dcraw image processing to Javascript via emscripten &amp; asm.js

The goal is to be able to process any [Raw image](https://en.wikipedia.org/wiki/Raw_image_format) within a browser simple page locally (i.e. without network).

You can test the last version live here:
http://borisnaguet.github.io/jsRaw/jsRaw.html

-- Full support on Firefox (might run very slow on other browsers) --

## Status
It's in a very early stage, currently compiles without any dependency (especially lcms2 for color profiles) and shows up the help page

## References:
* https://www.cybercom.net/~dcoffin/dcraw/
* http://kripken.github.io/emscripten-site/index.html
* http://asmjs.org/
* https://wiki.mozilla.org/Javascript:SpiderMonkey:OdinMonkey
