export {BTN, NUM1, NUM2_DOM, DOM_RESULT, CALC_DOM}

//const BTN: HTMLElement | null = document.getElementById("give-result");
//const BTN: HTMLButtonElement | null = document.querySelector("#give-result");
const BTN = document.getElementById("give-result");

let NUM1: string = (document.getElementById("number-1") as HTMLInputElement).value;
//или надо сначала переменную объявить с типом HTMLInputElement: const DOM_NUM: HTMLInputElement = document.getElementById("number-1")!;
//! мы указываем, что элемент точно есть, а если мы неможем быть точно уверенны, то есть создаем элемент в процессе рендера страницы, то указать стоит так?
//const DOM_NUM: HTMLInputElement | null | undifined = document.getElementById("number-1");
const NUM2_DOM: HTMLInputElement | null = document.getElementById("number-2") as HTMLInputElement | null;


const CALC_DOM: HTMLInputElement | null = document.getElementById("calculate") as HTMLInputElement | null;


let DOM_RESULT: HTMLElement | null = document.getElementById("return-result") as HTMLElement | null;