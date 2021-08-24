// файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API

// Создай небольшое приложение поиска данных о стране по ее частичному или полному имени. Используй Rest Countries API, а именно ендпоинт /name, возвращающий массив объектов стран попавших под критерий поиска.

export default function fetchCountries(searchQuery) {
 return fetch(`https://www.restcountries.eu/rest/v2/name/${searchQuery}`)
 .then(response => response.json()) 
}



