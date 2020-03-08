const langLabel = document.querySelector('.lang__value');

if (!!langLabel) {
    langLabel.addEventListener('click', function () {
        const showBlock = this.nextElementSibling;

        showBlock.classList.toggle('lang__show-block--active');
    });
}