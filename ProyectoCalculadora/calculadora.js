/*document.addEventListener('DOMContentLoaded', ()=>{

    let listaBtn = document.querySelectorAll("#btn button")
   // console.log(listaBtn);
   listaBtn.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
    })
   })

   
})*/

function suma(){
    document.calc.ans.value+="+";
}

function resta(){
    document.calc.ans.value+="-";
}

function multiplicar(){
    document.calc.ans.value+="*";
}

function dividir(){
    document.calc.ans.value+="/";
}

function porcentaje(){
    let num = parseInt(document.calc.ans.value);
    let result = 1;

    result = num / 100;
    document.calc.ans.value = result;
}

function factorial() {
    let num = parseInt(document.calc.ans.value);
    let result = 1;

    if (num === 0 || num === 1) {
        result = 1;
    } else {
        for (i = 2; i <= num; i++) {
            result *= i;
        }
    }

    document.calc.ans.value = result;
}

function elevadoADos() {
    let num = parseInt(document.calc.ans.value);
    let result = 1;

    result = num * num;

    document.calc.ans.value = result;
}

function elevadoAY() {
    document.calc.ans.value+="**";
}

//No soy el autor de sin(), pido disculpas
function sinWithoutMath(angle) {
    angle %= 360;

    var radians = angle * Math.PI / 180;

    if (angle > 90 && angle <= 180) {
        radians = Math.PI - radians;
    } else if (angle > 180 && angle <= 270) {
        radians = radians - Math.PI;
    } else if (angle > 270) {
        radians = 2 * Math.PI - radians;
    }

    var result = 0;
    var sign = 1;
    for (var i = 0; i < 10; i++) {
        var term = Math.pow(radians, 2 * i + 1) / factorialsin(2 * i + 1);
        result += sign * term;
        sign *= -1;
    }

    return result;
}

function factorialsin(n) {
    if (n === 0 || n === 1) return 1;
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function sin() {
    var angle = parseFloat(document.calc.ans.value);
    var result = sinWithoutMath(angle);

    document.calc.ans.value = result.toFixed(0);
}

function cos() {
    let num = parseFloat(document.calc.ans.value);
    document.calc.ans.value = Math.cos(num * Math.PI / 180);
}

function tan() {
    let num = parseFloat(document.calc.ans.value);
    document.calc.ans.value =Math.round(Math.tan(num * Math.PI / 180));
}

function raizCuadrada() {
    let num = document.calc.ans.value;
    let result = Math.sqrt(eval(num));

    document.calc.ans.value = result;
}

function raizCuadrada3() {
    let num = parseFloat(document.calc.ans.value);
    document.calc.ans.value = Math.pow(num, 1 / 3);
}

//AC
function limpiarTodo() {
    document.calc.ans.value = ''; 
}

//C
function borrarUltimoCaracter() {
    let input = document.calc.ans.value;
    document.calc.ans.value = input.slice(0, -1);
}

//M+
var memoria = 0;

function almacenarMemoria() {
    memoria = parseFloat(document.calc.ans.value);

   // return memoria;
}

function mostrarMemoria() {
    //let memoria = almacenarMemoria();

    document.calc.ans.value = memoria;
}

function updateDateTime() {
    var now = new Date();
    var dateTimeContainer = document.getElementById('datetime');
    var dateStr = now.toLocaleDateString('es-ES', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    var timeStr = now.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    dateTimeContainer.textContent = dateStr + ' - ' + timeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);

function tituloAnimado(iniciar){
    if (iniciar){
        document.title = document.title.replaceAll(" ", "\xA0");

        iniciar = false
    }

    var actual = document.title;
    var ind;

    if(actual[0] == "\xA0"){
        ind = 2
    }else{
        ind = 1
    }

    sp = actual.substring(0, ind);
    document.title = actual.substr(ind) + sp;
    setTimeout(tituloAnimado, 600, iniciar);
}