const hex_box = document.querySelector('.hex-box');
const panel = document.querySelector('.panel')
let green_value = 0
let red_value = 0
let blue_value = 0
//將數值轉為16進位
const hex = number => {
  return parseInt(number).toString(16)
}
//將rgb值轉為hex
const to_hex = (r, g, b) => {
  hex_box.innerText = '#' + hex(r) + hex(g) + hex(b);
}

panel.addEventListener("input", function () {
  let guideValue = event.target.value;
  //讓後方的方塊顯示數字
  event.target.nextElementSibling.innerHTML = guideValue;
  switch (event.target.id) {
    case 'red':
      red_value = guideValue;
      break;
    case 'blue':
      blue_value = guideValue;
      break;
    case 'green':
      green_value = guideValue;
      break;
  }
  to_hex(red_value, green_value, blue_value);
  document.body.style.backgroundColor = "rgb(" + red_value + "," + green_value + "," + blue_value + ")";
});