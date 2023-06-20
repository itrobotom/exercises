const serverUrl = 'https://api.genderize.io';

export async function RequestGenderize(name) {
    console.log(`имя для урла ${name}`);
    let url = `${serverUrl}?name=${name}`;
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      console.log(json);
      if(name === ''){
        alert('Вы не ввели имя!')
        //console.log('Не знаю такого имени!')
      } else {
        return json;
      }
    } else {
      console.log(`Ошибка HTTP: ${response.status}`);
    } 
}