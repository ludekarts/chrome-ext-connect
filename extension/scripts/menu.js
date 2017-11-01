import connect from "../../index";

const main = () => {
  const menu = connect.open('menu');

  // Send message on button click.
  const show = document.getElementById('show');
  show.addEventListener('click', () => menu.send('show-message'));

  // Recieve messgae from messgaeBox.
  menu.listen('change-color', ({color}) => show.style.borderColor = how.style.color = color);
};

// Run after document is loaded.
document.addEventListener("DOMContentLoaded", main);
