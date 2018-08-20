/* Your code */
/* set global variable i */

var i = 0;

function increment() {
    i += 1;
    /* function for automatic increament of feild's "Name" attribute*/
}

/* 
---------------------------------------------

function to extract form data
---------------------------------------------

*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].type);

            if (response[i].type == "text") {
                nameFunction(response[i].title);
            }
            else if (response[i].type == "email") {
                emailFunction(response[i].title);
            }
            else if (response[i].type == "number") {
                contactFunction(response[i].title);
            }
            else if (response[i].type == "textarea") {
                textareaFunction(response[i].title);
            }
            else if (response[i].type == "checkbox") {
                checkBoxFunction(response[i].title, response[i].id);
            }
            else if (response[i].type == "radio") {
                radioBoxFunction(response[i].title, response[i].id);
            }
        }

    }
};
xhttp.open("GET", "http://localhost:8000/questions", true);
xhttp.send();


function getOptionsData(id) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            return JSON.parse(xhttp.responseText);
        }
    };
    xhttp.open("GET", "http://localhost:8000/options?question=" + id, true);
    xhttp.send();
}


/* 
---------------------------------------------

function to remove fom elements dynamically
---------------------------------------------

*/

function removeElement(parentDiv, childDiv) {


    if (childDiv == parentDiv) {
        alert("The parent div cannot be removed.");
    }
    else if (document.getElementById(childDiv)) {
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else {
        alert("Child div has already been removed or does not exist.");
        return false;
    }
}


/* 
----------------------------------------------------------------------------
 
functions for Name text field
 
---------------------------------------------------------------------------
*/
function nameFunction(title) {
    var r = document.createElement('div');
    var y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
}


/*
-----------------------------------------------------------------------------

functions  for Email text field

------------------------------------------------------------------------------
*/
function emailFunction(title) {
    var r = document.createElement('div');
    var y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  for Contact text field

------------------------------------------------------------------------------
*/

function contactFunction(title) {
    var r = document.createElement('div');
    var y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  for radio field

------------------------------------------------------------------------------
*/

function radioBoxFunction(title, id) {
    var r = document.createElement('div');
    var label = document.createElement('label')

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);

            for (i = 0; i < response.length; i++) {
                var y = document.createElement("INPUT");
                y.setAttribute('type', 'radio');
                y.setAttribute('value', response[i].value);
                y.setAttribute("Name", "textelement_" + i);
                r.appendChild(y);
                label.htmlFor = response[i].value;
                label.appendChild(document.createTextNode(response[i].label.toString()));
                r.appendChild(label);
            }
            var g = document.createElement("IMG");
            g.setAttribute("src", "delete.png");
            increment();
            g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
            r.appendChild(g);
            r.setAttribute("id", "id_" + i);
            document.getElementById("myForm").appendChild(r);
        }
    };
    xhttp.open("GET", "http://localhost:8000/options?question=" + id, true);
    xhttp.send();
}

/*
-----------------------------------------------------------------------------

functions  for checkbox field

------------------------------------------------------------------------------
*/

function checkBoxFunction(title, id) {

    var r = document.createElement('div');
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);

            for (i = 0; i < response.length; i++) {
                var y = document.createElement("INPUT");
                var label = document.createElement('label')
                y.setAttribute('type', 'checkbox');
                y.setAttribute('value', response[i].value);
                y.setAttribute("Name", "textelement_" + i);
                r.appendChild(y);
                label.htmlFor = response[i].value;
                label.appendChild(document.createTextNode(response[i].label.toString()));
                r.appendChild(label);
            }
            var g = document.createElement("IMG");
            g.setAttribute("src", "delete.png");
            increment();
            g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
            r.appendChild(g);
            r.setAttribute("id", "id_" + i);
            document.getElementById("myForm").appendChild(r);
        }
    };
    xhttp.open("GET", "http://localhost:8000/options?question=" + id, true);
    xhttp.send();



}

/*
-----------------------------------------------------------------------------

functions  for textarea field

------------------------------------------------------------------------------
*/

function textareaFunction(title) {
    var r = document.createElement('div');

    var y = document.createElement("TEXTAREA");
    var g = document.createElement("IMG");
    y.setAttribute("cols", "17");
    y.setAttribute("placeholder", title);
    g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Reset Button

------------------------------------------------------------------------------
*/
function resetElements() {
    document.getElementById('myForm').innerHTML = '';
}

