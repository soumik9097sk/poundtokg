const poundsEl = document.getElementById('pounds');
const kilosEl = document.getElementById('kilograms');

function round(value){
  return Math.round(value * 100) / 100;
}

function lbToKg(lb){
  return lb * 0.45359237;
}

function kgToLb(kg){
  return kg / 0.45359237;
}

let suppress = false;

poundsEl.addEventListener('input', (e) => {
  if (suppress) return;
  const v = parseFloat(e.target.value);
  if (Number.isFinite(v)){
    suppress = true;
    kilosEl.value = round(lbToKg(v));
    suppress = false;
  } else {
    kilosEl.value = '';
  }
});

kilosEl.addEventListener('input', (e) => {
  if (suppress) return;
  const v = parseFloat(e.target.value);
  if (Number.isFinite(v)){
    suppress = true;
    poundsEl.value = round(kgToLb(v));
    suppress = false;
  } else {
    poundsEl.value = '';
  }
});

// Keyboard: Enter selects all in field
document.querySelectorAll('input').forEach(i=>i.addEventListener('focus', (e)=>e.target.select()));
