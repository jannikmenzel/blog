document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 180, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)`;
    });
});
