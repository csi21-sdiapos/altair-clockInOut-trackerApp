/**************************** Ripple Buttons *********************************** */
const buttons = document.querySelectorAll('a');

buttons.forEach(button => {
  button.addEventListener('mouseenter', function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const ripples = document.createElement('span');

    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;

    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 600);
  });

  button.onclick = function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const ripples = document.createElement('span');

    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;

    this.appendChild(ripples);
    setTimeout(function () {
      ripples.remove();
    }, 600); // 1second = 1000ms
  }
})