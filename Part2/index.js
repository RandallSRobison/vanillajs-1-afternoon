console.log('The house always wins! Kind of. I guess. Maybe?');

const color = document.getElementById('colorInput')
const id = document.getElementById('idInput')
console.log(colorInput);
console.log(idInput);

function setCard(){
 const card = document.getElementById(idInput.value)
 card.style.color = colorInput.value
}