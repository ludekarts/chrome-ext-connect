import connect from "../../index";

connect.start();

const main = (id) => {
	chrome.pageAction.show(id);
	connect.pipe('menu', 'show-message').to('messageBox');
	connect.pipe('messageBox', 'change-color').to('menu');
};

// Activate menu if current tab was reloaded.
chrome.tabs.onUpdated.addListener((id, {status}) => status === 'complete' && main(id));
