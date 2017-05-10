var wrap=document.getElementsByClassName('valign_wrapp');
var contentBox=document.getElementsByClassName('valign');
var mTop=[];

function verH() {
    for (var i=0; i< wrap.length; i++) {
        contentBox[i].style.marginTop = '0';
        mTop[i] = (wrap[i].offsetHeight - contentBox[i].offsetHeight)/2;
        contentBox[i].style.marginTop = mTop[i] + 'px';
    }
}
verH();

window.onresize = function () {
    verH();
}

