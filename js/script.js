window.onload = function() {
    // Typewriter
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    let css = document.createElement("style");
    css["type"] = "text/css";
    css.innerHTML = `
        .typewrite > .wrap {
            display: inline-block;
            position: relative;
        }
        .typewrite > .wrap::after {
            content: "";
            display: inline-block;
            width: 2px;
            height: 0.8em;
            background-color: #ccc;
            right: -5px;
            top: 0.1em;
            animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
    `;
    document.body.appendChild(css);

    // Carousel
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);

    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
};