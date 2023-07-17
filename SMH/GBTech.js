const toggleSwitch = document.querySelector('#mode-toggle');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  document.querySelector('.content').textContent = 'Content in Dark Mode';
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  document.querySelector('.content').textContent = 'Content in Light Mode';
}

var alanBtnInstance = alanBtn({
          key: "54edce81d6ca1925db274129ed6049b02e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: function (commandData) {
            if (commandData.command === "go:back") {
              //call client code that will react to the received command
            }
          },
          rootEl: document.getElementById("alan-btn"),
        });