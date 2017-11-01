import connect from "../../index";
import "../styles.css";

// Notification UI.
const notification = document.createElement('div');
notification.classList = 'connect-notification';
notification.innerHTML = 'Hello world'

document.body.appendChild(notification);
notification.addEventListener('click', () => notification.classList.remove('show'));

// Messages.
const messageBox = connect.open('messageBox');
messageBox.listen('show-message', () => notification.classList.add('show'));




// Send info to background.js that content is active.
chrome.runtime.sendMessage({ ready : true });
