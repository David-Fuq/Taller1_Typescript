"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    console.log("Desplegando series en la tabla");
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeason(series) {
    let totalCredits = 0;
    let totalSeries = 0;
    series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
    series.forEach((serie) => totalSeries = totalSeries + 1);
    const avr = totalCredits / totalSeries;
    let table = document.getElementById('tabla');
    const html = '<p> &nbsp; Seasons average: ' + avr + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
renderSeriesInTable(data_js_1.series);
getAverageSeason(data_js_1.series);
