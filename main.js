function checkForMatchingBrackets() {
    let string = document.getElementById("myText").value;
    let pattern = /^(\{(?:[^}{]|\{(?:[^}{]|\{[^}{]*\})*\})*\})/g;
    let braces = 0;
    
    // Looping through each string character
    for(var i = 0; i < string.length; i++) {
        //if index matches an opening or closing curly brace, increment braces count
        if(i === "{" || i === "}")
            ++braces
    }

    if(string === "" || string.match(pattern))
        alert("true");
    else 
        alert("false");
}
