document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.classList.add("coffee-canvas"); // important
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const beans = [];

  function createBean() {
    return {
      x: Math.random() * canvas.width,
      y: -10,
      radius: 4 + Math.random() * 3,
      speed: 1 + Math.random() * 2
    };
  }

  function drawBean(bean) {
    ctx.beginPath();
    ctx.ellipse(bean.x, bean.y, bean.radius, bean.radius / 1.5, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#4B2E2E";
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    beans.push(createBean());

    beans.forEach((bean) => {
      bean.y += bean.speed;
      drawBean(bean);
    });

    for (let i = beans.length - 1; i >= 0; i--) {
      if (beans[i].y > canvas.height) {
        beans.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Optional: adjust on resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
