import { Serie } from "./serie";

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeason(series: Serie[]): number {
    let totalCredits: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
    series.forEach((serie) => totalSeries = totalSeries + 1);
    return totalCredits/totalSeries;
  }
