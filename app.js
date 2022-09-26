// https://www.omnicalculator.com/construction/concrete-weight

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const weightRadio = document.getElementById('weightRadio');
const volumeRadio = document.getElementById('volumeRadio');
const densityRadio = document.getElementById('densityRadio');

let weight;
let volume = v1;
let density = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Density';
  volume = v1;
  density = v2;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Density';
  weight = v1;
  density = v2;
  result.textContent = '';
});

densityRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  variable2.textContent = 'Volume';
  weight = v1;
  volume = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(2)}`;

  else if(densityRadio.checked)
    result.textContent = `Density = ${computedensity().toFixed(2)}`;
})

// calculation

function computeweight() {
  return Number(volume.value) * Number(density.value);
}

function computevolume() {
  return Number(weight.value) / Number(density.value);
}

function computedensity() {
  return Number(weight.value) / Number(volume.value);
}