"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
function renderCoursesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.name}</td>
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
    return totalCredits / totalSeries;
}
