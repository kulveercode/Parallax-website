let text = document.getElementById("text");

window.addEventListener('scroll', () => {
    let value = window.screenY;
    text.style.marginTop = value * 2.5 + 'px';
});

