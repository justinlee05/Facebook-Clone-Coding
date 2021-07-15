const key = {
    modal_wrapper : document.getElementById('post-modal-wrapper'),
    modal_title : document.getElementById('title'),
    modal_info : document.getElementById('info'),
    modal_postbutton :document.getElementById('dopost'),


}

class Posting {
    constructor(id, title, date, description){
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
    }
}

var enablepost = 0;
var arr1 = new Array(new Posting(1,'제목','몰라','내용'),new Posting(1,'제목','몰라','내용'));
console.log(arr1);


fetch(`https://api.dsm-dms.com/meal/2021-04-23`)
.then(res => res.json())
.then(res => {console.log(res)});

function ModalOn(){
    key.modal_wrapper.style.display = 'flex';

}

function ModalOff(){
    key.modal_wrapper.style.display = 'none';
    
}

/* 인풋 값 입력 감지 */
var Button=document.getElementById('dopost');
Button.classList.remove('on','off');
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

