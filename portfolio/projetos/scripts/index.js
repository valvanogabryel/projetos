window.sr = ScrollReveal({ reset: true });
const divisions = document.getElementsByTagName('div');

for (let i = 0; i < divisions.length + 1; i++) {
    sr.reveal(`#project${i}`, {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 500
    });
};