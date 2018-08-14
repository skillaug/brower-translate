// var trans = function (text) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.responseText !== '') {
//             var data = JSON.parse(this.responseText).data;
//             updateTransBox(data.translations[0].translatedText);
//
//         }
//     };
//     xhttp.open("POST", "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAuS8uCy6DqRD2V2hQAxPyqQSAtCYWyvDY", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify({
//         'q': text,
//         'source': 'en',
//         'target': 'vi',
//         'format': 'text'
//     }));
// };
//
// var updateTransBoxPosition = function (event) {
//     var x = 0 //event.pageX;
//     var y = 0 //event.pageY;
//     var e = document.getElementsByClassName('skillaug-google-translate')[0];
//     e.style = 'position: fixed;\n' +
//         'display: block;\n' +
//         'z-index: 9999;\n' +
//         'top: '+x+'px;\n' +
//         'left: '+y+'px;\n' +
//         'background: #fff;\n' +
//         'padding: 2px 10px;';
//     return e;
// };
//
// var hideTransBox = function () {
//     var e = document.getElementsByClassName('skillaug-google-translate')[0];
//     e.style = 'display: none;';
// };
//
// var updateTransBox = function (text) {
//     var e = document.getElementsByClassName('skillaug-google-translate')[0];
//     e.innerHTML = text;
//     return e;
// };
//
// document.addEventListener("mouseup", function(e){
//     var selection;
//     if (window.getSelection) {
//         selection = window.getSelection();
//     } else if (document.selection) {
//         selection = document.selection.createRange();
//     }
//
//     if (selection.toString() !== '') {
//         updateTransBoxPosition(e);
//         trans(selection.toString());
//         console.log(selection.toString());
//     } else {
//         hideTransBox();
//     }
// });

var createTransBox = function () {
    var e = document.createElement('div');
    e.style = 'position: fixed;\n' +
        'display: none;\n' +
        'z-index: 9999;\n' +
        'top: 0px;\n' +
        'left: 0px;\n' +
        'background: #fff;\n' +
        'padding: 2px 10px;';
    e.className = 'skillaug-google-translate';
    return e;
};
window.onload = function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = 'var trans = function (text) {\n' +
        '    var xhttp = new XMLHttpRequest();\n' +
        '    xhttp.onreadystatechange = function() {\n' +
        '        if (this.readyState === 4 && this.responseText !== \'\') {\n' +
        '            var data = JSON.parse(this.responseText).data;\n' +
        '            updateTransBox(data.translations[0].translatedText);\n' +
        '\n' +
        '        }\n' +
        '    };\n' +
        '    xhttp.open("POST", "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAuS8uCy6DqRD2V2hQAxPyqQSAtCYWyvDY", true);\n' +
        '    xhttp.setRequestHeader("Content-type", "application/json");\n' +
        '    xhttp.send(JSON.stringify({\n' +
        '        \'q\': text,\n' +
        '        \'source\': \'en\',\n' +
        '        \'target\': \'vi\',\n' +
        '        \'format\': \'text\'\n' +
        '    }));\n' +
        '};\n' +
        '\n' +
        'var updateTransBoxPosition = function (event) {\n' +
        '    var x = 0 //event.pageX;\n' +
        '    var y = 0 //event.pageY;\n' +
        '    var e = document.getElementsByClassName(\'skillaug-google-translate\')[0];\n' +
        '    e.style = \'position: fixed;\\n\' +\n' +
        '        \'display: block;\\n\' +\n' +
        '        \'z-index: 9999;\\n\' +\n' +
        '        \'top: \'+x+\'px;\\n\' +\n' +
        '        \'left: \'+y+\'px;\\n\' +\n' +
        '        \'background: #fff;\\n\' +\n' +
        '        \'padding: 2px 10px;\';\n' +
        '    return e;\n' +
        '};\n' +
        '\n' +
        'var hideTransBox = function () {\n' +
        '    var e = document.getElementsByClassName(\'skillaug-google-translate\')[0];\n' +
        '    e.style = \'display: none;\';\n' +
        '};\n' +
        '\n' +
        'var updateTransBox = function (text) {\n' +
        '    var e = document.getElementsByClassName(\'skillaug-google-translate\')[0];\n' +
        '    e.innerHTML = text;\n' +
        '    return e;\n' +
        '};\n' +
        '\n' +
        'document.addEventListener("mouseup", function(e){\n' +
        '    var selection;\n' +
        '    if (window.getSelection) {\n' +
        '        selection = window.getSelection();\n' +
        '    } else if (document.selection) {\n' +
        '        selection = document.selection.createRange();\n' +
        '    }\n' +
        '\n' +
        '    if (selection.toString() !== \'\') {\n' +
        '        updateTransBoxPosition(e);\n' +
        '        trans(selection.toString());\n' +
        '        console.log(selection.toString());\n' +
        '    } else {\n' +
        '        hideTransBox();\n' +
        '    }\n' +
        '});';
    try
    {
        document.body.appendChild(createTransBox());
        s.appendChild(document.createTextNode(code));
        document.body.appendChild(s);
    } catch (e) {
        s.text = code;
        document.body.appendChild(s);
    }
};

