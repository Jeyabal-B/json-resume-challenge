// fetch data from data.json and iterate through the data.body and display the sectionDetails in div the html page


var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = function () {
    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var output = "";
        var i;
        var data2 = data.body;
        for (i = 0; i < data2.length; i++) {
            output += "<ul>";
            output += data2[i].sectionName;
            output += "<li>" + data2[i].sectionDetails + "</li>";
            output += "</ul>";

        }
        document.getElementById("data").innerHTML = output;
    }
}

xhr.send();