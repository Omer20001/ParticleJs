let textLength = 0;
let text = 'The worst part about cancer is not what it does to you, but what it does to the people you love.';

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 50);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});


function myFunc(){
    document.getElementById('front').src="img/3-2-deadpool-full-body-png.png"

}
function outFunc(){
    document.getElementById('front').src="img/imgbin_deadpool-spider-man-negasonic-teenage-warhead-film-x-men-png.png"
  
}

function myFunc1(){
    document.getElementById('front1').src="img/image-removebg-preview (4).png"

}
function outFunc1(){
    document.getElementById('front1').src="img/kindpng_2552201.png"
  
}


function myFunc2(){
    document.getElementById('front2').src="img/1111.png"

}
function outFunc2(){
    document.getElementById('front2').src="img/imgbin_brianna-hildebrand-negasonic-teenage-warhead-deadpool-2-domino-png.png"
  
}

