---
layout: post
title: Crisalix 3D Model Exporter
---

I'm currently working on a client project involving plastic surgery. There's a lot of 3-dimensional data involved, so I wanted to get my hands on some 3d patient data.

The platform that the doctor is using, [Crisalix](http://crisalix.com/), doesn't expose a proper export feature, so I put together an [open-source scraper tool](https://github.com/DavidYKay/crisalix-exporter) to log in and grab the files automatically.

If you're in the same situation as me, you may want to use my tool rather than write your own.

You'll need to:

1. Clone the [sources](https://github.com/DavidYKay/crisalix-exporter)
2. Install [Leiningen](http://leiningen.org/), the Clojure build tool
3. run `lein run [username password]`

Best of luck and let me know how it goes!
