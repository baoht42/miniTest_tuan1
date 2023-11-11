//bai tap 1
function bai1() {
    let inputNum = +prompt('Nhap so: ')
    let outputNum = inputNum * inputNum;
    alert('Binh phuong cua so nhap vao la: ' + outputNum);
}
//bai tap 2
function bai2() {
    let num1 = +document.getElementById('text1').value;
    let num2 = +document.getElementById('text2').value;
    let S = num1 * num2;
    document.getElementById('result').innerText = S;
}

//bai tap 3
function bai3(){
    let a = +document.getElementById('numA').value;
    let b = +document.getElementById('numB').value;
    let c = +document.getElementById('numC').value;
let bai3_a1 = a * 4;
let bai3_a2 = a * a;
document.getElementById('bai3_a').innerHTML= 'Chu vi: ' + bai3_a1 +'  ' + 'Dien tich: ' + bai3_a2;
let bai3_b1 = a**a;
let bai3_b2 = a**b;
document.getElementById('bai3_b').innerHTML= 'a^a = '+bai3_b1 + '  ' + 'a^b: ' +bai3_b2;


}