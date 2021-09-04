class Snowflake {
  constructor(x, y, r) {
    (this.x = x), (this.y = y), (this.r = r);
  }

  update() {
    this.y += this.r / 2;
  }
}

let snowflakes = [];

const init = () => {
  requestAnimationFrame(draw);
};

const draw = () => {
  const canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.1) {
    const xPosition = Math.random() * canvas.width;
    snowflakes.push(new Snowflake(xPosition, 0, Math.random() * 3));
  }

  snowflakes.forEach((flake) => flake.update());
  snowflakes = snowflakes.filter((flake) => flake.y < canvas.height);

  for (let i = 0; i < snowflakes.length; i++) {
    const s = snowflakes[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0.2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  //Snowman body
  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2,
    window.innerHeight - 370,
    60,
    0,
    Math.PI * 2,
    false
  );
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2,
    window.innerHeight - 250,
    80,
    0,
    Math.PI * 2,
    false
  );
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2,
    window.innerHeight - 100,
    100,
    0,
    Math.PI * 2,
    false
  );
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  //Snow on ground
  ctx.fillStyle = "white";
  ctx.fillRect(0, window.innerHeight - 20, window.innerWidth, 20);

  //Face
  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 - 20,
    window.innerHeight - 390,
    10,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 + 20,
    window.innerHeight - 390,
    10,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  //Nose
  ctx.beginPath();
  ctx.moveTo(window.innerWidth / 2 - 10, window.innerHeight - 370);
  ctx.lineTo(window.innerWidth / 2 + 10, window.innerHeight - 370);
  ctx.lineTo(window.innerWidth / 2, window.innerHeight - 340);
  ctx.fillStyle = "darkorange";
  ctx.fill();

  //Mouth
  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 - 25,
    window.innerHeight - 340,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 - 15,
    window.innerHeight - 330,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath(); //middle
  ctx.arc(
    window.innerWidth / 2,
    window.innerHeight - 328,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 + 15,
    window.innerHeight - 330,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    window.innerWidth / 2 + 25,
    window.innerHeight - 340,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "black";
  ctx.fill();

  //Arms
  ctx.beginPath();
  ctx.moveTo(window.innerWidth / 2 + 80, window.innerHeight - 250);
  ctx.lineTo(window.innerWidth / 2 + 150, window.innerHeight - 300);
  ctx.lineWidth = "5";
  ctx.strokeStyle = "brown";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(window.innerWidth / 2 - 80, window.innerHeight - 250);
  ctx.lineTo(window.innerWidth / 2 - 150, window.innerHeight - 300);
  ctx.lineWidth = "5";
  ctx.strokeStyle = "brown";
  ctx.stroke();

  window.requestAnimationFrame(draw);
};

init();
