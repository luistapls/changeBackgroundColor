const buttonChangeColor = document.getElementById('changeColor');
buttonChangeColor.addEventListener('click', () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbBackground = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = rgbBackground;
  buttonChangeColor.style.backgroundColor = rgbBackground;
});
