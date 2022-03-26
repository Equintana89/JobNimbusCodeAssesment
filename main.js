function checkForMatchingBrackets() {
    let string = document.getElementById("myText").value;
    let pattern = /^(\{(?:[^}{]|\{(?:[^}{]|\{[^}{]*\})*\})*\})/g;
    let braces = 0;

    for(var i = 0; i < string.length; i++) {
        if(i === "{" || i === "}")
            ++braces
    }

    if(string === "" || string.match(pattern))
        alert("true");
    else 
        alert("false");
}
