// import functions and grab DOM elements
import { getAllPlants } from './fetch-utils.js';

const plantsEl = document.querySelector('.plants');

  // - on load . . .
window.addEventListener('load', async() => {
    // - get plants from the database
    // this function "returns a promise"
    const plants = await getAllPlants();
    
    // - display those plants (loop, render, and append)

    // now it's just a normal array
    // "i know how to loop through an array! what could be more delightful! oh what joy!"
    for (let plant of plants) {
        const plantEl = document.createElement('a');
        const nameEl = document.createElement('p');
        const waterEl = document.createElement('p');
        const soilEl = document.createElement('p');

        plantEl.classList.add('plant');
        plantEl.href = `./plants/?id=${plant.id}`; 
        nameEl.textContent = plant.name;
        waterEl.textContent = plant.water_need;
        soilEl.textContent = plant.soil_type;

        plantEl.append(nameEl, soilEl, waterEl);
        plantsEl.append(plantEl);
    }
});

