const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }



const app = express();
const port = 3000;
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/update-request', (req, res) => {
    const { origin, destination, cabinSelection } = req.body;

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    };

    const jsonData = {
        origin: origin,
        destination: destination,
        partnerPrograms: [
            'Air Canada',
            'United Airlines',
            'KLM',
            'Qantas',
            'American Airlines',
            'Etihad Airways',
            'Alaska Airlines',
            'Qatar Airways',
            'LifeMiles',
        ],
        stops: 2,
        departureTimeFrom: '2024-07-09T00:00:00Z',
        departureTimeTo: '2024-10-07T00:00:00Z',
        isOldData: false,
        limit: 302,
        offset: 0,
        cabinSelection: cabinSelection, // Updated cabinSelection based on user input
        date: '2024-07-09T12:00:17.796Z',
    };

    axios.post('https://cardgpt.in/apitest', jsonData, { headers })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            res.status(500).json({ error: 'Something went wrong' });
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
