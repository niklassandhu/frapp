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


document.addEventListener('init', function(event) {
  if(event.target.id == "home") {
    openDb();
  }
});

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

var db = null;

function onError(tx, e) {
  alert("Etwas ist fehlgeschlagen:" + e.Message);
}

function onSucces(tx, r) {
  alert("Vorgang erfolgreich:" + r.Message);
}

function openDb() {
  db = openDatabase("SurveyOne", "1", "Wahl-Umfrage", 4096*4096);

  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS results (ID INTEGER PRIMARY KEY ASC, answer1 TEXT", []);
  }); 
}

function getData() {
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM results", [], onSuccess, onError)
  })
}


function addData() {
  var answer = document.getElementById("q11.1")
  var value = answer.value;

  db.transaction(function(tx) {
    tx.executeSql("INSERT INTO results (answer1) VALUES (?)", [value], onSucces, onError);
  });

  // reset var after input
}


// function renderItems(tx, r) {
//   var output ="";
// }