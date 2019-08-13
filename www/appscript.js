window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var notify = function() {
  ons.notification.alert('Diese Funktion ist noch nicht verfügbar!');
};

function checkRadio() {
  var x = document.getElementById("q11.1").checked;
  document.getElementById("demo").innerHTML = x;
}

function checkRadio1() {
  if (document.getElementById("q11.1").checked) {
    var x = document.getElementById("q11.1").value;
    document.getElementById("test").innerHTML = x;
  };
}

var createAlertDialog = function() {
  var dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }

  setTimeout(hideAlertDialog,5000);

};

var hideAlertDialog = function() {
  document
    .getElementById('my-alert-dialog')
    .hide();
};