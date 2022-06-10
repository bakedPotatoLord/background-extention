

chrome.webNavigation.onCompleted.addListener(function(e) {
    alert(e.url)
  });