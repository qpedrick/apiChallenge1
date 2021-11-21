const baseURL = "https://api.covid19api.com/"

/* Fetch for drop down */

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Country';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const dropURL = 'https://api.covid19api.com/countries';

fetch(dropURL)
    .then(
        function(response) {
            if(response.status !== 200) {
                console.warn('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            //Examine text in the response

            response.json().then(function(data) {
                let option;

                for (let i = 0; i < data.length; i ++) {
                    option = document.createElement('option');
                    option.text = data[i].Country;
                    option.value = data[i].Slug;
                    dropdown.add(option);
                    let country = option.innerHTML
                    //console.log(country);
                }
            });
        }
    )
    .catch(function(err) {
        console.error('Fetch error -', err);
    });

const searchForm = document.querySelector('form')
const submitBtn = document.querySelector('.submit')
searchForm.addEventListener('submit',fetchResults);

function fetchResults(e) {
    e.preventDefault()

url = `${baseURL}summary`
fetch(url)
    .then(function(result) {
    //console.log(result)
    return result.json()
    })
    .then (function(json) {
        console.log(json.Global);
        displayResults(json);
    })
}

function displayResults(json) {
    const result1 = document.getElementById('results1')
    result1.innerHTML = json.Global.TotalConfirmed
    const result2 = document.getElementById('results2')
    result2.innerHTML = json.Global.TotalDeaths
}
    /*let newConfirmed = results.NewConfirmed
    let totalConfirmed = results.TotalConfirmed
    let newDeaths = results.NewDeaths
    let totalDeaths = results.TotalDeaths
    let newRecovered = results.NewRecovered
    let totalRecovered = results.TotalRecovered
    */

    document.getElementById('results').addEventListener('click',() =>
    document.createElement('results'))


/*

{
  "Global": {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  },

fetch(‘https://rickandmortyapi.com/api/character/’)   
.then(response => response.json())   
.then(characters => showCharacters(characters.results));

showCharacters = characters => {  
const charactersDiv = document.querySelector(‘#rick-and-morty-  characters’);  
characters.forEach(character => {    
    const characterElement = document.createElement(‘p’);
    characterElement.innerText = `Character Name: ${character.name}`;
    charactersDiv.append(characterElement);  });
}

*/



/*document.getElementById('getLocation').addEventListener('click',()=>
{retrieveLocation(document.getElementById('locationId').value).then(name=>{document.getElementById('locationName').innerHTML=name;});});

*/