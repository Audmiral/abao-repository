document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('#nav-div ul').classList.toggle('show');
});
const recent2 = document.getElementById('recent2');
recent2.addEventListener('click', () => {
    window.location.href = 'blogpost.html'; 
});
