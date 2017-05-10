var wrap=document.getElementsByClassName('valign_wrapp')[0];
var contentBox=document.getElementsByClassName('valign')[0];


var hWrapp;
var hContentBox;
function verH() {
    hWrapp = wrap.offsetHeight;
    console.log(hWrapp);
    hContentBox = contentBox.offsetHeight;
    console.log(hContentBox);
    mTop = (hWrapp - hContentBox)/2;
    console.log(mTop);
    contentBox.style.marginTop = mTop + 'px';
}
verH();

window.onresize = function () {
    contentBox.style.marginTop = '0';
    verH();
}

