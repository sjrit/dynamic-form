/* Your code */
/* set global variable i */

var index = 0;
var response;

function increment() {
    index++;
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
        response = JSON.parse(xhttp.responseText);
        for (let i = 0; i < response.length; i++) {
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
            else if (response[i].type == "rating") {
                ratingFunction(response[i].title);
            }
        }

    }
};
xhttp.open("GET", "http://localhost:8000/questions", true);
xhttp.send();


/* 
----------------------------------------------------------------------------
 
functions for Name text field
 
---------------------------------------------------------------------------
*/
function ratingFunction(title) {
    let r = document.createElement('div');
    let label = document.createElement('label');
    let y = document.createElement("INPUT");
    r.appendChild(label);
    label.appendChild(document.createTextNode(title));
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "range");
    y.setAttribute("min", 1);
    y.setAttribute("max", 10);
    y.setAttribute("value", 5);
    increment();
    y.setAttribute("Name", "textelement_" + index);
    r.appendChild(y);
    r.setAttribute("id", "id_" + index);
    document.getElementById("myForm").appendChild(r);
}


/* 
----------------------------------------------------------------------------
 
functions for Name text field
 
---------------------------------------------------------------------------
*/
function nameFunction(title) {
    let r = document.createElement('div');
    let y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    increment();
    y.setAttribute("Name", "textelement_" + index);
    r.appendChild(y);
    r.setAttribute("id", "id_" + index);
    document.getElementById("myForm").appendChild(r);
}


/*
-----------------------------------------------------------------------------

functions  for Email text field

------------------------------------------------------------------------------
*/
function emailFunction(title) {
    let r = document.createElement('div');
    let y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    increment();
    y.setAttribute("Name", "textelement_" + index);
    r.appendChild(y);
    r.setAttribute("id", "id_" + index);
    document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  for Contact text field

------------------------------------------------------------------------------
*/

function contactFunction(title) {
    let r = document.createElement('div');
    let y = document.createElement("INPUT");
    r.setAttribute("class", "type-1");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", title);
    increment();
    y.setAttribute("Name", "textelement_" + index);
    r.appendChild(y);
    r.setAttribute("id", "id_" + index);
    document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  for radio field

    
------------------------------------------------------------------------------
*/

function radioBoxFunction(title, id) {
    let r = document.createElement('div');
    let p = document.createElement('div');
    let s = document.createElement('p');
    let xhttp = new XMLHttpRequest();
    increment();
    let index = this.index;
    r.setAttribute("id", "id_" + index);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            for (let i = 0; i < response.length; i++) {
                let label = document.createElement("label");
                let radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "textelement_" + index;
                radio.value = response[i].value;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(response[i].label));
                p.appendChild(label);
            }
            s.appendChild(document.createTextNode(title));
            r.appendChild(s);
            r.appendChild(p);
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
    let r = document.createElement('div');
    let p = document.createElement('div');
    let s = document.createElement('p');
    increment();
    let index = this.index;
    let xhttp = new XMLHttpRequest();
    r.setAttribute("id", "id_" + index);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            for (let i = 0; i < response.length; i++) {
                let label = document.createElement("label");
                let radio = document.createElement("input");
                radio.type = "checkbox";
                radio.name = "textelement_" + index;
                radio.value = response[i].value;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(response[i].label));
                p.appendChild(label);
            }
            s.appendChild(document.createTextNode(title));
            r.appendChild(s);
            r.appendChild(p);
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
    let r = document.createElement('div');

    let y = document.createElement("TEXTAREA");

    y.setAttribute("cols", "17");
    y.setAttribute("placeholder", title);

    increment();
    y.setAttribute("Name", "textelement_" + index);
    r.appendChild(y);


    r.setAttribute("id", "id_" + index);
    document.getElementById("myForm").appendChild(r);

}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the submit Button

------------------------------------------------------------------------------
*/
function validateForm() {
    for (let i = 0; i < response.length; i++) {
        if (response[i].mandatory && !response[i].has_options) {
            if(document.forms["myForm"]["textelement_" + (i + 1)].value == ''){
                return
            }
        }
        else if (response[i].mandatory && response[i].has_options) {
            if (response[i].type == "checkbox") {
                var chk_arr = document.forms["myForm"]["textelement_" + (i + 1)];
                var chklength = chk_arr.length;
                let isChecked = false;

                for (k = 0; k < chklength; k++) {
                    // chk_arr[k].checked = false;
                    if (chk_arr[k].checked) {
                        isChecked = chk_arr[k].checked;
                    }
                }
                if (!isChecked) {
                    return
                }
            }
            else if (document.forms["myForm"]["textelement_" + (i + 1)].value == '') {
                return

            }

        }




    }
    alert("form submitted")

}

