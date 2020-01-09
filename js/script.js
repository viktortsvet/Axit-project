window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.effects__tab'),
        tabs = document.querySelector('.effects__tabs'),
        contents = document.querySelectorAll('.effects__content');

    function hideContent(number) {
        contents[number].style.display = "none";
    }

    function showContent(number) {
        contents[number].style.display = "block";
    }

    function getActive(number) {
        tab[number].classList.add('active');
    }

    getActive(0);
    showContent(0);


    tabs.addEventListener('click', function(event) {
        let target = event.target;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].classList.contains('active')) {
                tab[i].classList.remove('active');
                hideContent(i);
            }
            if (target == tab[i]) {
                getActive(i);
                showContent(i);
            }
        }
    });



});