localStorage.setItem('num', 0);
function clickBtn(btn) {
    var ipt = document.getElementById('input');
    if (btn == '') {
        ipt.value = '0';
        localStorage.setItem('num', 0);
    } else {
        var num = localStorage.getItem('num');
        if (num == 0) {
            var s = ipt.value.substring(1,);
            localStorage.setItem('num', 1);
        } else {
            var s = ipt.value;
        }
        ipt.value = s + btn;
        console.log(s)
    }
}

function cal() {
    var ipt = document.getElementById('input');
    ipt.value = eval(ipt.value);
    localStorage.setItem('num', 1);
}

function del() {
    var ipt = document.getElementById('input');
    ipt.value = ipt.value.slice(0, -1);
}