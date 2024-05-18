const MOON_TEXT_FORMAT_ID = 'MOON_TEXT_FORMAT_ID';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "moon format text",
    id: MOON_TEXT_FORMAT_ID,
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((event) => {
  if (event && event.menuItemId == MOON_TEXT_FORMAT_ID) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {ops: 'format'})
    });
  }
});
