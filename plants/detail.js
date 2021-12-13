import { getPlant } from '../fetch-utils.js';

const plantDetailEl = document.querySelector('.plant-detail');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const plant = await getPlant(id);

    const plantEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const waterEl = document.createElement('p');
    const soilEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    
    nameEl.textContent = plant.name;
    waterEl.textContent = plant.water_need;
    soilEl.textContent = plant.soil_type;
    descriptionEl.textContent = plant.description;

    plantEl.append(nameEl, waterEl, soilEl, descriptionEl);

    plantDetailEl.append(plantEl);
});