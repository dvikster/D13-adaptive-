var wrap=document.getElementsByClassName('valign_wrapp');
var contentBox=document.getElementsByClassName('valign');


var hWrapp=[];
var hContentBox=[];
var mTop=[];


function verH() {
    for (var i=0; i< wrap.length; i++) {
        hWrapp[i] = wrap[i].offsetHeight;
        console.log(hWrapp[i]);
        hContentBox[i] = contentBox[i].offsetHeight;
        console.log(hContentBox[i]);
        mTop[i] = (hWrapp[i] - hContentBox[i])/2;
        console.log(mTop[i]);
        contentBox[i].style.marginTop = mTop[i] + 'px';
    }
}
verH();

window.onresize = function () {
    for (var i=0; i< wrap.length; i++) {
        contentBox[i].style.marginTop = '0';
    }
    verH();
}

