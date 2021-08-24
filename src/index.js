import './sass/main.scss';
import debounce from 'lodash.debounce';
import { refs } from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import searchedCountriesTpl from './templates/searched-countries.hbs';
import searchedCountryTpl from './templates/searched-country.hbs';
import { alert, defaultModules, notice, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

refs.searchInput.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(){
  const inputValue = refs.searchInput.value;
  if (inputValue === "") {
    refs.container.innerHTML = "";
    return notice({text: 'Enter country name '})
  }
  fetchCountries(inputValue)
  .then(searchedNames => { 
    if (searchedNames.length > 10) {     
     refs.container.innerHTML = "";
      return alert({ text: 'Too many matches found. Please enter a more specific query!' });
    };
   if (searchedNames.length>=2 && searchedNames.length<=10) {
     return refs.container.innerHTML = searchedCountriesTpl(searchedNames);
    };
    return refs.container.innerHTML = searchedCountryTpl(...searchedNames);
    
 })
   .catch(err => {
     refs.container.innerHTML = "";
     error({ text: err })
   });
}


