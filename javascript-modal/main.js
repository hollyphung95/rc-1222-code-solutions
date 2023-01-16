var modalButton = document.createElement('button');
modalButton.setAttribute('class', 'open-modal');
modalButton.innerText = 'Open Modal';
document.body.append(modalButton);

var modal = document.createElement('div');
modal.classList.add('modal-container');
document.body.appendChild(modal);

var displayText = document.createElement('p');
displayText.classList.add('display-text');
displayText.innerText = 'Would you like to take a survey?';
modal.appendChild(displayText);

var noBtn = document.createElement('button');
noBtn.setAttribute('class', 'no-btn');
noBtn.innerText = 'NO';
modal.appendChild(noBtn);

modalButton.onclick = function () {
  modal.style.display = 'block';
};

noBtn.onclick = function () {
  modal.style.display = 'none';
};
