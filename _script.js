
  if (document.getElementById("q1.2").checked) {
    a = document.getElementById("q1.2").value;
  };

  if (document.getElementById("q2.1").checked) {
    b = document.getElementById("q2.1").value;
  };

  if (document.getElementById("q2.2").checked) {
    b = document.getElementById("q2.2").value;
  };

  if (document.getElementById("q2.3").checked) {
    b = document.getElementById("q2.3").value;
  };

  if (document.getElementById("q3.1").checked) {
    c = document.getElementById("3.1").value;
  };

  if (document.getElementById("q3.2").checked) {
    c = document.getElementById("q3.2").value;
  };

  if (document.getElementById("q3.3").checked) {
    c = document.getElementById("q3.3").value;
  };

  if (document.getElementById("q3.4").checked) {
    c = document.getElementById("q3.4").value;
  };

  if (document.getElementById("q3.5").checked) {
    c = document.getElementById("q3.5").value;
  };

  if (document.getElementById("q4.1").checked) {
    d = document.getElementById("q4.1").value;
  };

  if (document.getElementById("q4.2").checked) {
    d = document.getElementById("q4.2").value;
  };

  if (document.getElementById("q5.1").checked) {
    e = document.getElementById("q5.1").value;
  };

  if (document.getElementById("q5.2").checked) {
    e = document.getElementById("q5.2").value;
  };

  if (document.getElementById("q5.3").checked) {
    e = document.getElementById("q5.3").value;
  };

  if (document.getElementById("q5.4").checked) {
    e = document.getElementById("q5.4").value;
  };

  if (document.getElementById("q6.1").checked) {
    f = document.getElementById("q6.1").value;
  };

  if (document.getElementById("q6.2").checked) {
    f = document.getElementById("q6.2").value;
  };

  if (document.getElementById("q6.3").checked) {
    f = document.getElementById("q6.3").value;
  };

  if (document.getElementById("q6.4").checked) {
    f = document.getElementById("q6.4").value;
  };

  if (document.getElementById("q7.1").checked) {
    g = document.getElementById("q7.1").value;
  };

  if (document.getElementById("q7.2").checked) {
    g = document.getElementById("q7.2").value;
  };

  if (document.getElementById("q7.3").checked) {
    g = document.getElementById("q7.3").value;
  };

  if (document.getElementById("q8.1").checked) {
    h = document.getElementById("q8.1").value;
  };

  if (document.getElementById("q8.2").checked) {
    h = document.getElementById("q8.2").value;
  };

  if (document.getElementById("q8.3").checked) {
    h = document.getElementById("q8.3").value;
  };

  if (document.getElementById("q8.4").checked) {
    h = document.getElementById("q8.4").value;
  };

  if (document.getElementById("q8.5").checked) {
    h = document.getElementById("q8.5").value;
  };

  if (document.getElementById("q9.1").checked) {
    i = document.getElementById("q9.1").value;
  };

  if (document.getElementById("q9.2").checked) {
    i = document.getElementById("q9.2").value;
  };

  if (document.getElementById("q9.3").checked) {
    i = document.getElementById("q9.3").value;
  };

  if (document.getElementById("q10.1").checked) {
    j = document.getElementById("q10.1").value;
  };

  if (document.getElementById("q10.2").checked) {
    j = document.getElementById("q10.2").value;
  };

  if (document.getElementById("q10.3").checked) {
    j = document.getElementById("q10.3").value;
  };

  if (document.getElementById("q11.1").checked) {
    k = document.getElementById("q11.1").value;
  };

  if (document.getElementById("q11.2").checked) {
    k = document.getElementById("q11.2").value;
  };

  if (document.getElementById("q11.3").checked) {
    k = document.getElementById("q11.3").value;
  };

  if (document.getElementById("q11.4").checked) {
    k = document.getElementById("q11.4").value;
  };

  if (document.getElementById("q11.5").checked) {
    k = document.getElementById("q11.5").value;
  };

    l = document.getElementById("q12.1").value;
    document.getElementById("test").innerHTML = l;



    db.transaction(function (tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS klaus (ID INTEGER PRIMARY KEY ASC, answer1 TEXT, answer2 TEXT, answer3 TEXT, answer4 TEXT, answer5 TEXT, answer6 TEXT, answer7 TEXT, answer8 TEXT, answer9 TEXT, answer10 TEXT, answer11 TEXT, answer12 TEXT", []);
    });


    function addData() {
      db.transaction(function (tx) {
        tx.executeSql("INSERT INTO klaus (answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [a, b, c, d, e, f, g, h, i, j, k, l], onSucces, onError);
      });
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
    }