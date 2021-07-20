const key = {
    modal_wrapper : document.getElementById('post-modal-wrapper'),
    modal_title : document.getElementById('title'),
    modal_info : document.getElementById('info'),
    edit_modal_wrapper : document.getElementById('edit-modal-wrapper'),
    edit_title : document.getElementById('edit-title'),
    edit_info : document.getElementById('edit-info'),
    edit_button : document.getElementById('doedit'),
    modal_postbutton :document.getElementById('dopost'),
    postpoint : document.getElementById('post-point')


}



var Len;
var Data;
var id;
var title;
var content;




function ModalOn(){
    key.modal_wrapper.style.display = 'flex';
    enablepost = 0;
    
}

function ModalOff(){
    key.modal_wrapper.style.display = 'none';
    key.modal_info.value = "";
    key.modal_title.value = "";
    
}

function ConfigPost(){
    if (enablepost){
        Post(key.modal_info.value,key.modal_title.value);
        ModalOff();
        setTimeout(function() {
            location.reload(true);
            ation.href = location.href;
            history.go(0);
        }, 500);
        
    }
}

function Delete(){
    var tempstart = event.currentTarget;
    var start = ((((tempstart.parentNode).firstChild).nextSibling).nextSibling).nextSibling;
    var idnode = ((((((((((start.parentNode).parentNode).firstChild).nextSibling).firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling);
    var tempid = idnode;
    var temptitle = (((((((((((start.parentNode).parentNode).parentNode).firstChild).nextSibling).nextSibling).nextSibling).firstChild).nextSibling).firstChild).nextSibling);
    var tempcontent = (((((((((((start.parentNode).parentNode).parentNode).firstChild).nextSibling).nextSibling).nextSibling).firstChild).nextSibling).nextSibling).nextSibling);
    ConfigDelete(tempid.innerText)
    
    var target = (((start.parentNode).parentNode).parentNode);
    target.parentNode.removeChild(target);
    console.log(target)
}

function EditOn(){
    key.edit_modal_wrapper.style.display = 'flex';
    var start = event.currentTarget;
    var idnode = ((((((((((start.parentNode).parentNode).firstChild).nextSibling).firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling);
    var tempid = idnode;
    var temptitle = (((((((((((start.parentNode).parentNode).parentNode).firstChild).nextSibling).nextSibling).nextSibling).firstChild).nextSibling).firstChild).nextSibling);
    var tempcontent = (((((((((((start.parentNode).parentNode).parentNode).firstChild).nextSibling).nextSibling).nextSibling).firstChild).nextSibling).nextSibling).nextSibling);
    id = tempid;
    title = temptitle;
    content = tempcontent;
    key.edit_info.value = content.innerText;
    key.edit_title.value = title.innerText;
    enablepost2 = 0;
    console.log(title)
}

function ConfigEdit(){
    if (enablepost2){
        Patch(id.innerText, key.edit_title.value, key.edit_info.value);
        EditOff()
        location.reload(true);
        ation.href = location.href;
        history.go(0);
    }
}

function EditOff(){
    key.edit_modal_wrapper.style.display = 'none';
    
}

/* 인풋 값 입력 감지 */
var enablepost = 0;
var enablepost2 = 0;
var Button=document.getElementById('dopost');
var Button2=document.getElementById('doedit');
Button.classList.remove('on','off');
Button2.classList.remove('on','off');
key.modal_title.oninput = function(){
	if(key.modal_title.value != "" && key.modal_info.value != ""){
        enablepost = 1;
        key.modal_postbutton.style.backgroundColor = '#2D88FF';
        key.modal_postbutton.style.color = 'white'
        console.log("1")
        Button.classList.remove('on','off');
        Button.classList.add('on');
    }
    else{
        enablepost = 0;
        key.modal_postbutton.style.backgroundColor = '#505151';
        key.modal_postbutton.style.color = '#858686'
        console.log("0")
        Button.classList.remove('on','off');
        Button.classList.add('off');
    }
}
key.modal_info.oninput = function(){
	if(key.modal_title.value != "" && key.modal_info.value != ""){
        enablepost = 1;
        key.modal_postbutton.style.backgroundColor = '#2D88FF';
        key.modal_postbutton.style.color = 'white'
        console.log("1")
        Button.classList.remove('on','off');
        Button.classList.add('on');
    }
    else{
        enablepost = 0;
        key.modal_postbutton.style.backgroundColor = '#505151';
        key.modal_postbutton.style.color = '#858686'
        console.log("0")
        Button.classList.remove('on','off');
        Button.classList.add('off');
    }
}

key.edit_title.oninput = function(){
	if(key.edit_title.value != "" && key.edit_info.value != ""){
        enablepost2 = 1;
        key.edit_button.style.backgroundColor = '#2D88FF';
        key.edit_button.style.color = 'white'
        console.log("1")
        Button2.classList.remove('on','off');
        Button2.classList.add('on');
    }
    else{
        enablepost2 = 0;
        key.edit_button.style.backgroundColor = '#505151';
        key.edit_button.style.color = '#858686'
        console.log("0")
        Button2.classList.remove('on','off');
        Button2.classList.add('off');
    }
}
key.edit_info.oninput = function(){
	if(key.edit_title.value != "" && key.edit_info.value != ""){
        enablepost2 = 1;
        key.edit_button.style.backgroundColor = '#2D88FF';
        key.edit_button.style.color = 'white'
        console.log("1")
        Button2.classList.remove('on','off');
        Button2.classList.add('on');
    }
    else{
        enablepost2 = 0;
        key.edit_button.style.backgroundColor = '#505151';
        key.edit_button.style.color = '#858686'
        console.log("0")
        Button2.classList.remove('on','off');
        Button2.classList.add('off');
    }
}


function Post(info , title){
    fetch('http://18.118.206.83:8080/feed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: info,
            title: title
        }),
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });
}

 function ConfigDelete(id){
    fetch(`http://18.118.206.83:8080/feed/${id}`,{
    method:"DELETE"})
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
} 

function Patch(id , title , content){
    fetch(`http://18.118.206.83:8080/feed/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    })
  .then((response) => response.json())
  .then((data) => console.log(data))
}

fetch(`http://18.118.206.83:8080/feed`)
.then (res => res.json())
.then (res => {
    console.log(res);
    Len = (res.posts).length;
    Data = res;

    for (let i=0;i<Len;i++){
        key.postpoint.insertAdjacentHTML('afterend' ,`
            <div class="postings">
                            <div class="posting-header">
                                <div class="posting-header-left">
                                    <img src="./assets/왼프로필.png" alt="">
                                    <div class="posting-header-left-text">
                                        <p>사용자</p>
                                        <div id="posting-date">${Data.posts[i].createdAt}</div>
                                    </div>
                                    <p id='post-id'>#${Data.posts[i].id}</p>
                                </div>
                                <div class="posting-header-right-wrapper">
                                    <div class="posting-header-right2" onclick="Delete()">
                                        <img src="./assets/삭제.png" alt="">
                                    </div>
                                    <div class="posting-header-right" onclick="EditOn()">
                                        <img src="./assets/게시글더보기.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="posting-body">
                                <div class="posting-title">
                                    <p>${Data.posts[i].title}</p>
                                </div>
                                <p>${Data.posts[i].content}</p>
                            </div>
                            <div class="posting-footer">
                                <div class="posting-footer-top">
                                    <div class="posting-footer-top-left">
                                        <img src="./assets/좋아요.png" alt="">
                                        <p>좋아요</p>
                                    </div>
                                    <div class="posting-footer-top-right">
                                        <img src="./assets/댓글 달기.png" alt="">
                                        <p>댓글 달기</p>
                                    </div>
                                </div>
                                <div class="posting-footer-bottom">
                                    <img src="./assets/왼프로필.png" alt="">
                                    <div class="comment">
                                        <p>댓글을 입력하세요...</p>
                                        <div class="comment-imgs">
                                            <div>
                                                <img id="img1" src="assets/이모티콘 추가.png" alt="">
                                            </div>
                                            <div>
                                                <img id="img2" src="./assets/사진 첨부.png" alt="">
                                            </div>
                                            <div>
                                                <img id="img3" src="./assets/GIF.png" alt="">
                                            </div>
                                            <div>
                                                <img id="img4" src="./assets/스티커.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `)
    }
})
     
        