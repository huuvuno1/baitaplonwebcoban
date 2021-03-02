function sendCommentLevel1(id)
{
    let comment = document.getElementById('comment').value;
    if (comment == '')
        return;
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function ()
    // {
    //     if (this.readyState == 4 && this.status == 200)
    //     var reponse = this.responseText;
    //      set response tra ve true false
    // if false -> alert
    // if true -> add element
    // }
    // xhttp.open("POST", "/api/comment", false);
    // xhttp.send("id=" + id + "&comment=" + comment + "&level=1");

    
    let child = document.createElement("div");

    child.setAttribute("class", "detail_comment flex");
    let listComment = document.getElementById('list_comment');
    let html = htmlCommentLv1("Nguyễn Hữu Vũ", comment, "admin", "Hôm nay");
    child.innerHTML = html;
    listComment.appendChild(child);
}


function htmlCommentLv1(fullname, comment, role, time)
{
    let rolename = role == "admin" ? "<span class='role'>Quản trị viên</span>" : "";
    
    fullname = fullname.trim();
    let words = fullname.split(' ');
    // "Nguyen Huu Vu" -> "NHV"
    let x = '';
    for (let i = 0 ; i < words.length; i++)
        x += words[i][0];

    let html = "<div class='avatar_comment'>";
        html += x;
        html += "</div>";
        html += "<div class='user_comment'>";
        html += "    <div class='flex'>";
        html += "        <h4>" + fullname + "</h4> " + rolename;
        html += "        <span class='time'>" + time + "</span>";
        html += "    </div>";
        html += "    <span class='content_comment'>";
        html +=           comment;
        html += "    </span>";
        html += "    <a class='btn_reply' onclick='addCommentLevel2(this)'>Trả lời</a>";
        html += "</div>";
    return html;
}


function sendCommentLevel2(_this, id)
{
    let comment = _this.parentNode.getElementsByClassName('commentlv2')[0].value;
    if (comment == '')
        return;
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function ()
    // {
    //     if (this.readyState == 4 && this.status == 200)
    //     var reponse = this.responseText;
    //      set response tra ve true false
    // if false -> alert
    // if true -> add element
    // }
    // xhttp.open("POST", "/api/comment", false);
    // xhttp.send("id=" + id + "&comment=" + comment + "&level=1");

    
    let child = document.createElement("div");

    child.setAttribute("class", "reply");
    let listComment = _this.parentNode.parentNode;
    let html = htmlCommentLv2("Nguyễn Hữu Vũ", comment, "admin", "Hôm nay");
    child.innerHTML = html;
    listComment.appendChild(child);
}

function htmlCommentLv2(fullname, comment, role, time)
{
    let rolename = role == "admin" ? "Quản trị viên" : "";
    let html  = "   <div class='user_comment'>"; 
        html += "       <div class='flex'>"
        html += "           <h4>" + fullname +"</h4> <span class='role'>" + rolename + "</span>";
        html += "           <span class='time'>1 ngay truoc</span>";
        html += "       </div>";
        html += "       <span class='content_comment'>";
        html +=               comment;
        html += "       </span>";
        html += "   </div>"
    return html;
}
function addCommentLevel2(x)
{
    let nodeForm = x.parentNode.getElementsByClassName('relative');
    if (nodeForm.length > 0)
    {
        x.innerHTML = "Trả lời";
        nodeForm[0].remove();
        return;
    }
    x.innerHTML = "Thôi";
    let formComment = document.createElement('div');
    formComment.setAttribute('class', 'relative');
    let html = "   <textarea placeholder='Viết câu hỏi của bạn' name='' class='commentlv2' cols='30' rows='3'></textarea>";
        html += "   <button type='button' onclick='sendCommentLevel2(this, 1)'>Gửi bình luận</button>";
    formComment.innerHTML = html;
    x.parentNode.appendChild(formComment);
}


function login()
{
    window.location.href = "/login";
}