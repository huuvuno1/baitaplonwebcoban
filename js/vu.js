
function btnClose(form) {
    var x = document.getElementsByClassName("show-form")[0];
    x.style.display = "none";
}
function btnShowForm(form) {
    var x = document.getElementsByClassName("show-form")[0];
    x.style.display = "block";
    if (form == 1) {
        x.firstElementChild.style.display = "block";
        x.lastElementChild.style.display = "none";
    }
    else {
        x.firstElementChild.style.display = "none";
        x.lastElementChild.style.display = "block";
    }
}

function showImage(img) {
    var urlImage = img.getAttribute('src');
    document.getElementById('bigImg').setAttribute('src', urlImage);
}

// hơi thừa để sau dùng ajax xử lí lại
window.onload = function hideImg() {
    var a = document.getElementsByClassName('small-img');

    for (var i = 3; i < a.length; i++) {
        a[i].style.display = "none";
    }

}

var start = 0, end = 2;

function nextImg() {
    var a = document.getElementsByClassName('small-img');
    if (end >= a.length - 1) {
        document.getElementsByClassName('chuyen')[1].style.display = "none";
    }
    else {
        document.getElementsByClassName('chuyen')[0].style.display = "block";
        end = (end + 3 >= a.length) ? a.length - 1 : end + 3;
        start = end - 2;

        for (var i = 0; i < a.length; i++) {
            if (i >= start && i <= end)
                a[i].style.display = "block";
            else
                a[i].style.display = "none";
        }
    }


}

function backImg() {
    var a = document.getElementsByClassName('small-img');
    if (start <= 0) {
        document.getElementsByClassName('chuyen')[0].style.display = "none";
        
    }
    else {
        document.getElementsByClassName('chuyen')[1].style.display = "block";
        start = (start - 3 <= 0) ? 0 : start - 3;
        end = start + 2;

        for (var i = 0; i < a.length; i++) {
            if (i >= start && i <= end)
                a[i].style.display = "block";
            else
                a[i].style.display = "none";
        }
    }
}
var b = 0;
function a()
{
    if (b == 0)
    {
        b = 1
        document.title = "ok"
        window.history.pushState('page2', 'Title', '/page2.php');
    } 
    else
    {
        b = 0
        document.title = "ok lun"
        window.history.pushState('page2', 'Title', '/page1.php');
    }
}