var wrap=document.getElementsByClassName('valign_wrapp');
var contentBox=document.getElementsByClassName('valign');

function verH() {
    for (var i=0; i< wrap.length; i++) {
        contentBox[i].style.marginTop = (wrap[i].offsetHeight - contentBox[i].offsetHeight)/2 + 'px';
    }
}
verH();

// сокращенная запись
window.onresize = verH;


// развернутая запись
// window.onresize = function () {
//     verH();
// }