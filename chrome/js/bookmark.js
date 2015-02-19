function add(id, bookmark) {
  chrome.storage.sync.get({
    token: '',
  }, function(items) {
    if (items.token == '') {
      console.error("token is not set");
      return;
    }

    $.get("https://api.pinboard.in/v1/posts/add", {
      url: bookmark.url,
      description: bookmark.title,
      auth_token: items.token,
    });
  });
}

chrome.bookmarks.onCreated.addListener(add);
