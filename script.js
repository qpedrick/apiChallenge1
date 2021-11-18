const baseURL = "https://api.covid19api.com/"

/* Sample Request

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(`${baseURL}countries`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .then(error => console.log('error', error));

*/

//Drop Down Selector for Country

        /* VanillaJS

        let dropdown = document.getElementById('locality-dropdown');
        dropdown.length = 0;

        let defaultOption = document.createElement('option');
        defaultOption.text = 'Choose Country';

        dropdown.add(defaultOption);
        dropdown.selectedIndex = 0;

        const dropURL = 'https://api.covid19api.com/countries';

        const request = new XMLHttpRequest();
        request.open('GET', dropURL, true);

        request.onload = function() {
            if(request.status === 200) {
                const data = JSON.parse(request.responseText);
                let option;
                for (let i = 0; i < data.length; i ++) {
                    option = document.createElement('option');
                    option.text = data[i].name;
                    option.value = data[i].abbreviation;
                    dropdown.add(option);
                }
            } else {}
        }

        request.onerror = function() {
            console.error('An error occured fetching the JSON from the ' + dropURL);
        };

        request.send()

        */

/* Fetch */

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
                }
            });
        }
    )
    .catch(function(err) {
        console.error('Fetch error -', err);
    })

fetch(baseURL)
    .then(
        response => {
            
        }
    )