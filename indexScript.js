document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('#nav-div ul').classList.toggle('show');
    });
    
    const video = document.getElementById('myVideo1');
    const thumbnail = document.getElementById('thumbnail1');
    const videoContainer1 = document.getElementById('containter1');
    videoContainer1.addEventListener('mouseenter', () => {
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.style.position = 'relative';
        videoContainer1.style.cursor = 'pointer';
        video.play();
    });
    
    videoContainer1.addEventListener('mouseleave', () => {
        thumbnail.style.display = 'block';
        video.style.display = 'none';
        video.style.position = 'absolute';
        video.pause();
        video.currentTime = 0;
    });

    videoContainer1.addEventListener('click', () => {
        window.location.href = 'blogpost/blogpost.html'; 
    });

    const video2 = document.getElementById('myVideo2');
    const thumbnail2 = document.getElementById('thumbnail2');
    const videoContainer2 = document.getElementById('containter2');
    videoContainer2.addEventListener('mouseenter', () => {
        thumbnail2.style.display = 'none';
        video2.style.display = 'block';
        video2.style.position = 'relative';
        videoContainer2.style.cursor = 'pointer';
        video2.play();
    });
    
    videoContainer2.addEventListener('mouseleave', () => {
        thumbnail2.style.display = 'block';
        video2.style.display = 'none';
        video2.style.position = 'absolute';
        video2.pause();
        video2.currentTime = 0;
    });

    videoContainer2.addEventListener('click', () => {
        window.location.href = 'blogpost/blogpost2.html'; 
    });


});
