var modalLink = document.querySelector(".location__btn");

var modal = document.querySelector(".modal");
var modalClose = modal.querySelector(".feedback-modal__close");

var modalFeedback = modal.querySelector(".feedback-modal");
var feedbackFormValid = modal.querySelector(".feedback-modal__form");


modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-overlay");
  modalFeedback.classList.add("modal-show");
  feedbackFormValid.noValidate = true;
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

feedbackFormValid.addEventListener("submit", function (evt) {
  var formField = evt.target;
  if (!formField[0].checkValidity() || !formField[1].checkValidity() || !formField[2].checkValidity()) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    feedbackFormValid.noValidate = false;
  }
});
