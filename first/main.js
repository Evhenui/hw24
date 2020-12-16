let tableBlocks = document.querySelector('#tableBlocks');
let newText;
let newTD;
let textArea = document.createElement('input');

function editBlock(td, state) {
  (state) ? td.innerHTML = td.firstChild.value : td.innerHTML = newText.data;
  td.classList.remove('new-td');
  newText = false;
}

tableBlocks.onclick = function(event) {
  let target = event.target.closest('td, .save, .cancel');

  if (!tableBlocks.contains(target)) {
   return false;
  } 
  else if (target.className === 'save') {
    editBlock(newText.elem, true);
  } 
  else if (target.className === 'cancel') {
    editBlock(newText.elem, false);
  }
  else if (target.nodeName === 'TD') {
    if (newText) return; 
    newEditTable(target);
  }
};

function newEditTable(td) {
  newText = {
    elem: td,
    data: td.innerHTML
  };

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();
  td.insertAdjacentHTML("beforeEnd",'<div> <button class="save"> SAVE </button> <button class="cancel"> CANCEL </button> </div>');
}



