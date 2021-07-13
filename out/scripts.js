// FaceBook Pixel Code
!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
);
fbq('init', '683242128890367');
fbq('track', 'PageView');
<noscript>
    <img
        height='1'
        width='1'
        style='display:none'
        src='https://www.facebook.com/tr?id=683242128890367&ev=PageView&noscript=1'
    />
</noscript>;
//End FaceBook Pixel Code

// Accordion Code
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}
