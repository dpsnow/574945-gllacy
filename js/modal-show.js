var modalLink = document.querySelector(".location__btn");

var modal = document.querySelector(".modal");
var modalClose = modal.querySelector(".feedback-modal__close");

var modalFeedback = modal.querySelector(".feedback-modal");
var feedbackFormValid = modal.querySelector(".feedback-modal__form");


modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-overlay");
  modalFeedback.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-overlay");
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (modal.classList.contains("modal-overlay")) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.remove("modal-overlay");
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

// 1. Отключаем нативную валидацию браузером
feedbackFormValid.noValidate = true;

// 2. Ловим событие отправки формы
feedbackFormValid.addEventListener("submit", function (evt) {
  var form = evt.target;
  // 3. И сразу отменяем его, т. к. нам нужно сделать проверки
  evt.preventDefault();
  // 4. Если какое-то из 3-х полей содержит ошибку:
  if ( !form[0].checkValidity() || !form[1].checkValidity() || !form[2].value ) {
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else { // 5. Если ошибки нет — отправляем
    form.sumbit();
  }
});
