document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('#nav-div ul').classList.toggle('show');
    });
});
