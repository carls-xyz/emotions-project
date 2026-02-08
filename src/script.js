document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".eye").forEach(eye => {
    const pupil = eye.querySelector(".pupil");
    const rect = eye.getBoundingClientRect();

    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeX;
    const dy = e.clientY - eyeY;

    const angle = Math.atan2(dy, dx);
    const radius = 7;

    pupil.style.transform = `
      translate(${Math.cos(angle) * radius}px,
                ${Math.sin(angle) * radius}px)
    `;
  });
});

const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

