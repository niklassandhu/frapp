window.fn = {};
var db = null;
a = "";
b = "";
c = "";
d = "";
e = "";
f = "";
g = "";
h = "";
i = "";
j = "";
k = "";
l = "";

window.fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};


document.addEventListener('init', function (event) {
  if (event.target.id == "home") {
    openDb();
  }
});

var notify = function () {
  ons.notification.alert('Diese Funktion ist noch nicht verfügbar!');
};


function checkRadio() {
  if (document.getElementById("q1.1").checked) {
    a = document.getElementById("q1.1").value;
    document.getElementById("test").innerHTML = a;
  };

  if (document.getElementById("q1.2").checked) {
    a = document.getElementById("q1.2").value;
    document.getElementById("test").innerHTML = a;
  };
  addData();
}

var hideAlertDialog = function () {
  document.getElementById('alert-dialog')
    .hide();
    checkRadio();
};

function onError(tx, e) {
  alert("Etwas ist fehlgeschlagen:" + e.Message);
}

function onSucces(tx, r) {
  alert("Vorgang erfolgreich:" + r.Message);
}

function openDb() {
  db = openDatabase("umfrage", "1", "Wahl-Umfrage", 4096 * 4096);

  db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS answers (ID INTEGER PRIMARY KEY ASC, answer1 TEXT", []);
  });
}

function addData() {
  db.transaction(function (tx) {
    tx.executeSql("INSERT INTO answers (answer1) VALUES (?)", [a], onSucces, onError);
  });
  a = "";
}

function getData() {
  db.transaction(function (tx) {
    tx.executeSql("SELECT * FROM answers", [], renderItems, onError)
  });
}

function renderItems(tx, r) {
  var output ="";
  var list = document.getElementById('ergebnisse_s1');

  for(i = 0; i < rs.rows.lenght; i++) {
    var row = rs.rows.answer1(i);
    output += "<ons-list-item>" + row.item + "</ons-list-item>";
  }

  list.innerHTML = output;
}

var createAlertDialog = function () {
  var dialog = document.getElementById('alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function (dialog) {
        dialog.show();
      });
  }

  setTimeout(hideAlertDialog, 1000);
};