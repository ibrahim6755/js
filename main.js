function add(){
  let n1 = document.getElementById('txt-1').value;
  let n2 = document.getElementById('txt-2').value;
  let r = parseInt(n1) + parseInt(n2);
  let n3 = document.getElementById('txt-3').value = r;
}
function subtract(){
    let n1 = document.getElementById('txt-1').value;
    let n2 = document.getElementById('txt-2').value;
    let r = parseInt(n1) - parseInt(n2);
    let n3 = document.getElementById('txt-3').value = r;
}
function multiply(){
    let n1 = document.getElementById('txt-1').value;
    let n2 = document.getElementById('txt-2').value;
    let r = parseInt(n1) * parseInt(n2);
    let n3 = document.getElementById('txt-3').value = r;
}
function division(){
    let n1 = document.getElementById('txt-1').value;
    let n2 = document.getElementById('txt-2').value;
    let r = parseInt(n1) / parseInt(n2);
    let n3 = document.getElementById('txt-3').value = r;
}
function exponential(){
    let n1 = document.getElementById('txt-1').value;
    let n2 = document.getElementById('txt-2').value;
    let r = parseInt(n1) ** parseInt(n2);
    let n3 = document.getElementById('txt-3').value = r;
}
