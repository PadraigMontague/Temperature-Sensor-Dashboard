let temperatureObject = {};
let status_1 = '';
let status_2 = '';
let status_3 = '';

function fetchAPI() {
    fetch('PLACE URL HERE')
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            temperatureObject = {
                currentT: jsonData['Current_Temperature'],
                lowestT: jsonData['Lowest_Temperature'],
                highestT: jsonData['Highest_Temperature']
            }
            outputData(temperatureObject.lowestT, temperatureObject.currentT, temperatureObject.highestT);
            let out = temperatureDesign(temperatureObject.lowestT);
            out('1');
            let out_2 = temperatureDesign(temperatureObject.currentT);
            out_2('2');
            let out_3 = temperatureDesign(temperatureObject.highestT);
            out_3('3');
        })
        .catch(function (error) {
            console.log('Fetch Error:', error);
        });
};
setInterval(fetchAPI, 500);

let temperatureDesign = function (data) {

    return function (cl) {
        let outline;
        if (data >= 28) {
            outline = document.querySelector('.output_' + cl).style.borderColor = '#960202';
        } else if (data <= 10) {
            outline = document.querySelector('.output_' + cl).style.borderColor = '#0000ac';
        } else {
            outline = document.querySelector('.output_' + cl).style.borderColor = '#008f00';
        }
    }
};
let outputData = function (data_one, data_two, data_three) {
    let output;
    if (status_1 === 'LowestTempFahrenheit') {
        output = document.getElementById('temp_1').textContent = convertLowestTempFahrenheit(data_one) + 'F';
    } else if (status_1 === 'celsius') {
        output = document.getElementById('temp_1').textContent = data_one + 'C';
    } else {
        output = document.getElementById('temp_1').textContent = data_one + 'C';
    }
    if (status_2 === 'currentTempFahrenheit') {
        output = document.getElementById('temp_2').textContent = convertCurrentTempFahrenheit(data_two) + 'F';
    } else if (status_2 === 'celsius') {
        output = document.getElementById('temp_2').textContent = data_two + 'C';
    } else {
        output = document.getElementById('temp_2').textContent = data_two + 'C';
    }
    if (status_3 === 'HighestTempFahrenheit') {
        output = document.getElementById('temp_3').textContent = convertHighestTempFahrenheit(data_three) + 'F';
    } else if (status_3 === 'celsius') {
        output = document.getElementById('temp_3').textContent = data_three + 'C';
    } else {
        output = document.getElementById('temp_3').textContent = data_three + 'C';
    }
};
let convertLowestTempFahrenheit = function (data) {
    result = (data * 1.8) + 32;
    return Math.round(result);
};
let convertCurrentTempFahrenheit = function (data) {
    result = (data * 1.8) + 32;
    return Math.round(result);
};
let convertHighestTempFahrenheit = function (data) {
    result = (data * 1.8) + 32;
    return Math.round(result);
};
let lowTempCelsiusStatus = function () {
    status_1 = 'celsius';
};
let lowTempFahrenheitStatus = function () {
    status_1 = 'LowestTempFahrenheit';
};
let currentTempCelsiusStatus = function () {
    status_2 = 'celsius';
};
let currentTempFahrenheitStatus = function () {
    status_2 = 'currentTempFahrenheit';
};
let highestTempCelsiusStatus = function () {
    status_3 = 'celsius';
};
let highestTempFahrenheitStatus = function () {
    status_3 = 'HighestTempFahrenheit';
}; 
{
    document.getElementById('celsius_1').addEventListener('click', lowTempCelsiusStatus);
    document.getElementById('fahrenheit_1').addEventListener('click', lowTempFahrenheitStatus);
    document.getElementById('celsius_2').addEventListener('click', currentTempCelsiusStatus);
    document.getElementById('fahrenheit_2').addEventListener('click', currentTempFahrenheitStatus);
    document.getElementById('celsius_3').addEventListener('click', highestTempCelsiusStatus);
    document.getElementById('fahrenheit_3').addEventListener('click', highestTempFahrenheitStatus);
}