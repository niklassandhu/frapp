window.fn = {};
var db = null;

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
  };

  if (document.getElementById("q1.2").checked) {
    a = document.getElementById("q1.2").value;
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
  db = openDatabase("umfrage", "1", "Wahl-Umfrage", 100000);

  db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS answers (ID INTEGER PRIMARY KEY ASC, answer TEXT)", []);
  });
}

function addData() {
  db.transaction(function (tx) {
    tx.executeSql("INSERT INTO answers (answer) VALUES (?)", [a], onSucces, onError);
  });
}

// function renderItems(tx, rs) {
//   var output = "";
//   liste = document.getElementById('solution');

//   for (i = 0; i < rs.rows.lenght; i++) {

//     var row = rs.rows.answer(i);
//     output += "<ons-list-item>" + row.item + "</ons-list-item>";
//   }

//   liste.innerHTML = output;
// }

// function getData() {
//   db.transaction(function (tx) {
//     tx.executeSql("SELECT * FROM answers", [], renderItems, onError)
//   });
// }

function getData() {

  db.transaction(function (tx) { 
    tx.executeSql('SELECT * FROM answers', [], function (tx, results) { 
       var len = results.rows.length, i; 
       msg = "<p>Found rows: " + len + "</p>"; 
       document.querySelector('solution').innerHTML +=  msg; 

       for (i = 0; i < len; i++) { 
          msg = "<ons-list-item>" + results.rows.item(i).log + "</ons-list-item>"; 
          document.querySelector('solution').innerHTML +=  msg; 
       } 
    }, null);
  }); 
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