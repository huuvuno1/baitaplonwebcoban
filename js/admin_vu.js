function addFileImage()
{
    var inp = document.createElement("input");
    inp.setAttribute("type", "file");
    document.getElementById("image_sss").appendChild(document.createElement("br"));
    document.getElementById("image_sss").appendChild(inp);
}

function showFormAdd()
{
    document.getElementsByClassName("show-form")[0].style.display = "block";

}

function editProduct(x)
{
    document.getElementsByClassName("show-form")[1].style.display = "block";

    var trCurrent =  x.parentNode.parentNode;
    
}