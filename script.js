var img1Element=document.getElementById('img1');
var img2Element=document.getElementById('img2');
var img3Element=document.getElementById('img3');
var img4Element=document.getElementById('img4');



img1Element.onclick=function(){
    var imageUrl = img1Element.getAttribute('src');
    var mainImageElement= document.getElementById('mainImage');
    mainImageElement.setAttribute('src',imageUrl);
    
};

img2Element.onclick=function(){
    var imageUrl = img2Element.getAttribute('src');
    var mainImageElement= document.getElementById('mainImage');
    mainImageElement.setAttribute('src',imageUrl);
    
};

img3Element.onclick=function(){
    var imageUrl = img3Element.getAttribute('src');
    var mainImageElement= document.getElementById('mainImage');
    mainImageElement.setAttribute('src',imageUrl);
    
};
img4Element.onclick=function(){
    var imageUrl = img4Element.getAttribute('src');
    var mainImageElement= document.getElementById('mainImage');
    mainImageElement.setAttribute('src',imageUrl);
    
};




img1Element.onmouseover=function(){
    img1Element.style.border='2px solid red';
}
img1Element.onmouseout=function(){
    img1Element.style.border='none';
}

img2Element.onmouseover=function(){
    img2Element.style.border='2px solid red';
}
img2Element.onmouseout=function(){
    img2Element.style.border='none';
}

img3Element.onmouseover=function(){
    img3Element.style.border='2px solid red';
}
img3Element.onmouseout=function(){
    img3Element.style.border='none';
}

img4Element.onmouseover=function(){
    img4Element.style.border='2px solid red';
}
img4Element.onmouseout=function(){
    img4Element.style.border='none';
}




//var slideUpBtnElement =document.getElementById('slideUpBtn');
//slideUpBtnElement.onclick=function() {
//    var divOneElement = document.getElementById('divOne');
//    divOneElement.style.height="0px";
//    divOneElement.style.transition="2s";
//   
//}
//
//var slideDownBtnElement =document.getElementById('slideDownBtn');
//slideDownBtnElement.onclick=function() {
//    var divOneElement = document.getElementById('divOne');
//    divOneElement.style.height="250px";
//    divOneElement.style.transition="2s";
//    
//}

//var btnRed = document.getElementById('redBtn');
//btnRed.onclick= function() {
//var divOneElement = document.getElementById('divOne');
//    divOneElement.style.backgroundColor="red";
//    divOneElement.style.borderRadius ="10px";
//}
//
//var btnGreen = document.getElementById('greenBtn');
//btnGreen.onclick= function() {
//var divOneElement = document.getElementById('divOne');
//    divOneElement.style.backgroundColor="green";
//    divOneElement.style.borderRadius ="0px";
//}
//
//var btnYellow = document.getElementById('yellowBtn');
//btnYellow.onclick= function() {
//var divOneElement = document.getElementById('divOne');
//    divOneElement.style.backgroundColor="yellow";
//    divOneElement.style.borderRadius ="100px";
//}
//




