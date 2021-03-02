function loadForm(x){
    var form = document.getElementsByClassName("right-admin-container");
    var li = document.getElementsByClassName('__select');
    for (var i = 0; i < form.length; i++)
    {
        if (i == x-1)
        {
            li[i].style.fontWeight= "bold";
            form[i].style.display = "block";
        }
        else
        {
            li[i].style.fontWeight= "normal";
            form[i].style.display = "none"; 
        }
    }
  
}