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
            else{
                radioBoxFunction(response[i].title);
            }
        }

    }
};
xhttp.open("GET", "http://localhost:8000/questions", true);
xhttp.send();



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
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
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
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
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
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
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

function radioBoxFunction(title) {
    // create the necessary elements
    var label = document.createElement("label");
    var description = document.createTextNode(pair);
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";    // make the element a checkbox
    checkbox.name = "slct[]";      // give it a name we can check on the server side
    checkbox.value = pair;         // make its value "pair"

    label.appendChild(checkbox);   // add the box to the element
    label.appendChild(description);// add the description to the element
    document.getElementById('myForm').appendChild(label);
}

/*
-----------------------------------------------------------------------------

functions  for checkbox field

------------------------------------------------------------------------------
*/

function checkBoxFunction(title) {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "checkbox");
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

functions  for textarea field

------------------------------------------------------------------------------
*/

function textareaFunction(title) {
    var r = document.createElement('span');

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

