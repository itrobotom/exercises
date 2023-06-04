export { BTN, NUM1, NUM2_DOM, DOM_RESULT, CALC_DOM };
//const BTN: HTMLElement | null = document.getElementById("give-result");
//const BTN: HTMLButtonElement | null = document.querySelector("#give-result");
const BTN = document.getElementById("give-result");
let NUM1 = document.getElementById("number-1").value;
//или надо сначала переменную объявить с типом HTMLInputElement: const DOM_NUM: HTMLInputElement = document.getElementById("number-1")!;
//! мы указываем, что элемент точно есть, а если мы неможем быть точно уверенны, то есть создаем элемент в процессе рендера страницы, то указать стоит так?
//const DOM_NUM: HTMLInputElement | null | undifined = document.getElementById("number-1");
const NUM2_DOM = document.getElementById("number-2");
const CALC_DOM = document.getElementById("calculate");
let DOM_RESULT = document.getElementById("return-result");
