const selectLangSelected = document.querySelector('.select-lang__selected');

if (!!selectLangSelected) {
    selectLangSelected.addEventListener('click', function () {
        const dropDown = this.parentNode;
        dropDown.classList.toggle('select-lang__wrapper--active');
    });
}