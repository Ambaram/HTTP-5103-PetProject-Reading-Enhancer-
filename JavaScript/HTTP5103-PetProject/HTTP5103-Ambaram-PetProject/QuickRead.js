window.onload = execute;
function execute() {
    var article = document.getElementById("Text")
    var elem = document.getElementsByName("level");
    for (i = 0; i < elem.length; i++) {
        elem[i].onclick = display;
        function display() {
            var files = new XMLHttpRequest();
            console.log(this.id);
            switch (this.id) {
                case "ezbtn":
                    setInterval(easytime, 1000);
                    files.open("GET", "hard2.txt", true);
                    files.send(null);
                    break;
                case "mdmbtn":
                    document.getElementById("medcon").style.display = "block";
                    setInterval(mediumtime, 1000);
                    files.open("GET", "med1.txt", true);
                    files.send(null);
                    break;
                case "hrdbtn":
                    document.getElementById("hardcon").style.display = "block";
                    setInterval(hardtime, 1000);
                    files.open("GET", "hard1.txt", true);
                    files.send(null);
                    break;
            }
            document.getElementById("next").onclick = next;
            files.overrideMimeType("text/html");
            files.onreadystatechange = function () {
                if (files.readystate === 4) {
                    if (files.status === 200) {
                        article.innerHTML = files.responseText;
                    }
                    else {
                        alert("Connection unsuccessful.")
                    }
                }
            }
        }
        function easytime() {
            var present = document.getElementById("easytime").innerHTML;
            var timeArray = present.split(/[:]+/);
            var m = timeArray[0];
            var s = checkseconds((timeArray[1] - 1));
            if (s == 59) { m = m - 1 }
            document.getElementById("easytime").innerHTML = m + ":" + s;
        }
        function mediumtime() {
            var present = document.getElementById("mediumtime").innerHTML;
            var timeArray = present.split(/[:]+/);
            var m = timeArray[0];
            var s = checkseconds((timeArray[1] - 1));
            if (s == 59) { m = m - 1 }
            document.getElementById("mediumtime").innerHTML = m + ":" + s;
        }
        function hardtime() {
            var present = document.getElementById("hardtime").innerHTML;
            var timeArray = present.split(/[:]+/);
            var m = timeArray[0];
            var s = checkseconds((timeArray[1] - 1));
            if (s == 59) { m = m - 1 }
            document.getElementById("hardtime").innerHTML = m + ":" + s;
        }
        function checkseconds(sec) {
            if (sec < 10 && sec >= 0) { sec = "0" + sec };
            if (sec < 0) { sec = "59" };
            return sec;
        }
    }
}
function next() {
    var x = new XMLHttpRequest();
    console.log(elem[i].id);
    switch (elem[i].id) {
        case "ezbtn":
            easytime;
            files.open("GET", "Easy2.txt", true);
            files.send(null);
            break;
        case "mdmbtn":
            mediumtime;
            files.open("GET", "Med2.txt", true);
            files.send(null);
            break;
        case "hrdbtn":
            hardtime;
            files.open("GET", "Hard2.txt", true);
            files.send(null);
            break;
    }
    x.overrideMimeType("text/html");
    x.onreadystatechange = function () {
        if (x.readystate === 4) {
            if (x.status === 200) {
                article.innerHTML = x.responseText;
            }
            else {
                alert("Connection unsuccessful.")
            }
        }
    }
}
