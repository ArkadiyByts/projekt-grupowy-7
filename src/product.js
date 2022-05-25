let btn = document.querySelectorAll('.grid__btn');

for (let i = 0; i<btn.length; i++) {
    btn[i].addEventListener('click', function () {
        btn[i].parentNode.parentNode.classList.toggle
            ('is-active');
     });
}