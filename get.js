let queryString = window.location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let getkleur = urlParams.get('kleur')
console.log(getkleur);