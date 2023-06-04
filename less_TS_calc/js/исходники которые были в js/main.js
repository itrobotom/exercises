//калькулятор
import {appendResult} from './saveDelRes.js';

let button = document.getElementById("give-result");

button.addEventListener("click", function(){
    let num1 = document.getElementById("number-1").value;
    let num2 = document.getElementById("number-2").value;
    let calc = document.getElementById("calculate").value;
    //console.log(`${num1}, ${num2}, ${calc}`);
    getResult(num1, num2, calc);
});

function getResult(num1, num2, calc){
  let operations = {
    '+': Number(num1) + Number(num2),
		'-': Number(num1) - Number(num2),
		'*': Number(num1) * Number(num2),
		'/': Number(num1) / Number(num2),
  }
  if (Number(num2) === 0 && calc === '/') {
    console.log('Ошибка!! Делить на ноль нельзя!');
    document.getElementById('return-result').textContent = 'error';
  } else {
    const result = operations[calc];
    //записываем в поле для результата после равно, что получилось
    document.getElementById('return-result').textContent = result;
    //добавляем ниже результат в новый див
    appendResult(result);
  }
}


