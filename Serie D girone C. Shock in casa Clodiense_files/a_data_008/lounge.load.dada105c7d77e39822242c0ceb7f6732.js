!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.56ee1ee1b2f8109c8e5779c47a5ec128.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.e32a93f6bbedfbb21af0fa5c845ec85a.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.5018287d05b2fa3bc388022cb540d0b3.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.6dd0bd4924a2cd12ee7c955bcb3718e4.js",a.body.appendChild(c)}();