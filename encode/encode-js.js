let ASCII = ["", ",", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
    "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6",
     "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C",
      "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
       "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]",
        "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
         "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"];
function reset()
{
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
}
function encodeuri()
{
    let a = document.getElementById("textarea1").value;
    let b = encodeURI(a);
    document.getElementById("textarea2").value = b;
}
function encodeuricomponent()
{
    let c = document.getElementById("textarea1").value;
    let d = encodeURIComponent(c);
    document.getElementById("textarea2").value = d;
}
function multiple_encode()
{
    let e = document.getElementById()
}