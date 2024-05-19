document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('#nav-div ul').classList.toggle('show');
});
const recent1 = document.getElementById('recent1');
recent1.addEventListener('click', () => {
    window.location.href = 'blogpost2.html'; 
});


