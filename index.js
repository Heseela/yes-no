function nextPage(){
    window.location.href="yes.html"
}

function movebtn() {
    var x = Math.random() * (window.innerWidth - document.getElementById('no_btn').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('no_btn').offsetHeight);
    document.getElementById('no_btn').style.left = `${x}px`;
    document.getElementById('no_btn').style.top = `${y}px`;
}