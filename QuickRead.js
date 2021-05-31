window.onload = execute;
function execute() {
    var article = document.getElementById("Text")
    var elem = document.getElementsByName("level");
    document.getElementById("content").style.display="none";
    for (i = 0; i < elem.length; i++) {
        elem[i].onclick = display;
        function display() {
            var files = new XMLHttpRequest();
            document.getElementById("difficulty").style.display="none";
            document.getElementById("content").style.display="block";
            console.log(this.id);
            switch (this.id) {
                case "ezbtn":
                    console.assert(this.id==="ezbtn","Easy button");
                    document.getElementById("mediumtime").style.display="none";
                    document.getElementById("hardtime").style.display="none";
                    setInterval(easytime, 1000);
                    files.open("GET", "hard2.txt", true);
                    files.send(null);
                    break;
                case "mdmbtn":
                    setInterval(mediumtime, 1000);
                    console.assert(this.id==="ezbtn","Medium button");
                    document.getElementById("easytime").style.display="none";
                    document.getElementById("hardtime").style.display="none";
                    files.open("GET", "med1.txt", true);
                    files.send(null);
                    break;
                case "hrdbtn":
                    setInterval(hardtime, 1000);
                    console.assert(this.id==="hrdbtn","Hard button");
                    document.getElementById("mediumtime").style.display="none";
                    document.getElementById("easytime").style.display="none";
                    files.open("GET", "hard1.txt", true);
                    files.send(null);
                    break;
            }
            files.onreadystatechange = function () {
                console.log(files.readyState)
                if (files.readyState === 4) {
                    if (files.status === 200) {
                        console.log("file accessed");
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
