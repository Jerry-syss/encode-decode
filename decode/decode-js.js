function reset()
{
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
}
function decodeuri()
{
    let a = document.getElementById("textarea1").value;
    let b = decodeURI(a);
    document.getElementById("textarea2").value = b;
}
function decodeuricomponent()
{
    let c = document.getElementById("textarea1").value;
    let d = decodeURIComponent(c);
    document.getElementById("textarea2").value = d;
}