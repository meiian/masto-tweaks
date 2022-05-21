chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message && message.type == 'back') {
      // Simple example: Get data from extension's local storage
      
      chrome.tabs.goBack();
      // Reply result to content script
      sendResponse({success: "yes"});
  }
});