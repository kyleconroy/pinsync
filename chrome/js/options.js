// Saves options to chrome.storage.sync.
function submit(e) {
  e.preventDefault();
  var token = document.getElementById('token').value;
  chrome.storage.sync.set({
    token: token,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore() {
  chrome.storage.sync.get({
    token: '',
  }, function(items) {
    document.getElementById('token').value = items.token;
  });
}

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('options').addEventListener('submit', submit);
