//калькулятор
import { appendResult } from './saveDelRes';
import { BTN, NUM1, NUM2_DOM, DOM_RESULT, CALC_DOM } from './constant';
if (BTN)
    BTN.addEventListener("click", getResult); //есил BTN будет найден, то все ок и мы повешаем прослушку события 
function getResult() {
    let num2Value = "";
    if (NUM2_DOM != null)
        num2Value = NUM2_DOM.value;
    const operations = {
        '+': Number(NUM1) + Number(num2Value),
        '-': Number(NUM1) - Number(num2Value),
        '*': Number(NUM1) * Number(num2Value),
        '/': Number(NUM1) / Number(num2Value),
    };
    let calc_value = "";
    if (CALC_DOM != null)
        calc_value = CALC_DOM.value;
    if (Number(num2Value) === 0 && calc_value === '/') {
        console.log('Ошибка!! Делить на ноль нельзя!');
        if (DOM_RESULT != null)
            DOM_RESULT.textContent = 'error'; //при экспорте нельзя менять значение, поэтому textContent не в отдельном файле constant
    }
    else {
        const result = operations[calc_value];
        //записываем в поле для результата после равно, что получилось
        if (DOM_RESULT != null)
            DOM_RESULT.textContent = String(result);
        //добавляем ниже результат в новый див
        appendResult(result);
    }
}
