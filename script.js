
var fenster;
function berechnen() {
    var groesse = document.getElementById("groesse").value;
    var kg = document.getElementById("kg").value;

    if (isNaN(kg)) {
        alert("Im Feld KG ist keine Nummer");
        document.getElementById("kg").focus();
        document.getElementById("kg").select();
    }
    else if (isNaN(groesse)) {
        alert("Im Feld Größe ist keine Nummer");
        document.getElementById("groesse").focus();
        document.getElementById("groesse").select();
    }
    else {
        var bmi = bmiberechnen(kg, groesse);
        var ausgabe = "";

        ausgabe = bmiausgabe(bmi);
        if (document.getElementById("1").checked) {
            fenster = window.open("", "MsgWindow", "width=300,height=400");
            fenster.document.write("<p>Dein BMI beträgt: " + bmi + "</p>");
            fenster.document.write("<p>Sie haben " + ausgabe + "</p><br><br>");
            fenster.document.write("<button onclick='window.close()'>Fenster Schließen</button>");
        }
        else if (document.getElementById("2").checked) {
            var startgew = 50;
            var fensterTabelle1 = window.open("", "MsgWindow", "width=300,height=400");
            fensterTabelle1.document.write("<style>table, td{border:2px solid black}</style>");
            fensterTabelle1.document.write("<h2>BMI Tabelle bei einer Größe von " + groesse + " m</h2>");
            fensterTabelle1.document.write("<table>");
            fensterTabelle1.document.write("<tr><td>Gewicht</td><td>BMI</td><td>Klassifikation</td></tr>");
            while (startgew <= 120) {
                var bmineu = bmiberechnen(startgew, groesse);
                ausgabe = bmiausgabe(bmineu);
                fensterTabelle1.document.write("<tr><td>" + startgew + "</td><td>" + bmineu + "</td><td>" + ausgabe + "</td></tr>");
                startgew += 5;
            }
            fensterTabelle1.document.write("</table><br><br>");
            fensterTabelle1.document.write("<button onclick='window.close()'>Fenster Schließen</button>");
        }
        else if (document.getElementById("3").checked) {
            var startgroesse = 1.50;
            var fensterTabelle2 = window.open("", "MsgWindow", "width=300,height=400");
            fensterTabelle2.document.write("<style>table, td{border:2px solid black}</style>");
            fensterTabelle2.document.write("<h2>BMI Tabelle bei einem Gewicht von " + kg + " kg</h2>");
            fensterTabelle2.document.write("<table>");
            fensterTabelle2.document.write("<tr><td>Größe</td><td>BMI</td><td>Klassifikation</td></tr>");
            while (startgroesse <= 2.10) {
                var bmineu = bmiberechnen(kg, startgroesse);
                ausgabe = bmiausgabe(bmineu);
                startgroesse = Math.round(startgroesse * 100) / 100;
                fensterTabelle2.document.write("<tr><td>" + startgroesse + "</td><td>" + bmineu + "</td><td>" + ausgabe + "</td></tr>");
                startgroesse += 0.05;
            }
            fensterTabelle2.document.write("</table><br><br>");
            fensterTabelle2.document.write("<button onclick='window.close()'>Fenster Schließen</button>");
        }
    }
}
function bmiberechnen(kg, groesse) {
    var bmi = kg / (groesse * groesse);
    bmi = Math.round(bmi * 100) / 100;

    return bmi;
}
function bmiausgabe(bmi) {
    if (bmi < 18.5) {
        ausgabe = "<span style='color:orange'>Untergewicht</span>";
    }
    else if (bmi < 24.9) {
        ausgabe = "<span style='color:green'>Normalgewicht</span>";
    }
    else if (bmi < 29.9) {
        ausgabe = "<span style='color:red'>Übergewicht</span>";
    }
    else if (bmi > 30) {
        ausgabe = "<span style='color:purple'>starkes Übergewicht</span>";
    }
    return ausgabe;
}
function loeschen() {
    document.getElementById("kg").value = null;
    document.getElementById("groesse").value = null;
}