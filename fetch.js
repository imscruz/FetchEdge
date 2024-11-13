const fetch = require('node-fetch');
const https = require('https');

// Settings
const URL = 'example.com'; // URL
const REQUEST_TYPE = 'GET'; // Fetch type: 'GET', 'POST', 'PUT', 'DELETE'
const INTERVAL = 1000; // Fetch interval ( 1000 ms = 1 second)
const FETCH_COUNT = 100; // Number of fetches to be sent each time

let previousError = null;
const agent = new https.Agent({
    rejectUnauthorized: false // ssl 
});

async function sendRequest() {
    const requests = [];
    for (let i = 0; i < FETCH_COUNT; i++) {
        const options = {
            method: REQUEST_TYPE,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        requests.push(fetch(URL, options).catch(error => error));
    }
    // at the same time
    const responses = await Promise.all(requests);
    responses.forEach(response => {
        if (response instanceof Error) {
            // error yes or no
            if (!previousError || previousError.message !== response.message) {
                console.error(`ERROR: ${response.message}`);
                previousError = response; // error message (404, 296...)
            }
        } else {
            // no error 
            if (!response.ok) {
                console.error(`HTTP error code: ${response.status}`);
            } else {
                console.log(`${new Date().toLocaleTimeString()} - Başarılı istek gönderildi.`);
            }
        }
    });
}
// loop
setInterval(sendRequest, INTERVAL);
