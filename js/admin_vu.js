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


//
document.getElementById('name-admin').addEventListener('click', function(){
    var x = document.getElementsByClassName('option-x')[0];
    if (x.style.display == 'none')
        x.style.display = 'block';
    else
        x.style.display = 'none';
});

// detailed article about of product
//
function addParagraph(){
    var amount = document.getElementsByClassName('paragraph').length + 1;
    var fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'paragraph');
    var html = "<legend class='index'><button type='button' onclick='removeParagraph(this)'>Xóa đoạn văn này</button></legend><br><br>";
    html += "<input type='text' placeholder='Nhập tiêu đề đoạn văn' class='paragraph_title'>";
    html += "<textarea name='paragraph1' id='' cols='30' rows='10' class='paragraph_content' placeholder='Nội dung đoạn văn'></textarea>";
    html += "<br>Chọn ảnh hiển thị trong đoạn văn: <input class='paragraph_file' type='file' name='imgPost" + amount + "'>";
    fieldset.innerHTML = html;
    document.getElementById('post').appendChild(fieldset)
}

function resetForm()
{
    var x = confirm("Bạn muốn reset lại form");
    if (x)
        document.forms[0].reset();
}

function removeParagraph(x)
{
    var fieldset = x.parentNode.parentNode;
    var txtTitle = fieldset.getElementsByClassName('paragraph_title')[0].value;
    var txtContent = fieldset.getElementsByClassName('paragraph_content')[0].value;
    if (txtTitle != '' || txtContent != '')
    {
        var x = confirm("Đoạn văn đang được viết, bạn có muốn xóa?")
        x ? fieldset.remove() : ''
    }
    else
    {
        fieldset.remove();
    }
    
}

function saveProduct()
{
    let textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'html');
    let html = "";
    let paragraph = document.getElementsByClassName('paragraph');
    for (let i = 0; i < paragraph.length; i++)
    {
        let title = paragraph[i].getElementsByClassName('paragraph_title')[0].value;
        let content = paragraph[i].getElementsByClassName('paragraph_content')[0].value;
        let filename = paragraph[i].getElementsByClassName('paragraph_file')[0].value;
        // example: filenam = "C:\\desktop\file1.png"
        let x = filename.split('\\');
        filename = x[x.length - 1];

        html += "<h3>" + title + "</h3>";
        html += "<p>" + content + "</p>";

        // file name sẽ được replace trên server
        html += "<p><img src='filename" + i + "' ></p>";
    }
    
    textarea.innerHTML = html;
    document.forms[0].appendChild(textarea);
    //document.forms[0].submit();
}