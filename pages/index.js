
const profileEdit = document.querySelector('.profile__edit');
const openPopup = document.querySelector('.popup');
const closePopup = openPopup.querySelector('.popup__close');

const valueInputName = document.querySelector('.popup__input-name');
const valueName = document.querySelector('.profile__info-name');

const valueInputProfession = document.querySelector('.popup__input-profession');
const valueProfession = document.querySelector('.profile__info-profession');

const savePopup = openPopup.querySelector('.popup__input-button');
const popupForm = openPopup.querySelector('.popup__form');

function clickOpenPopup() {
  openPopup.classList.add('popup_opened');

  valueInputName.value = valueName.innerHTML;
  valueInputProfession.value = valueProfession.innerHTML;
}

profileEdit.addEventListener('click', clickOpenPopup);


function clickClosePopup() {
  openPopup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', clickClosePopup);


popupForm.addEventListener('submit', saveFormSubmit);

function saveFormSubmit(event) {

  event.preventDefault();

  const name = valueInputName.value
  valueName.innerHTML = name;

  valueProfession.textContent = profession
  openPopup.classList.remove('popup_close');
}
