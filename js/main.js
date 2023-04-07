function nt(){
const carousel = document.querySelectorAll('.carousel-item');

if(carousel.classList.add("active"))
{
    carousel.style.display = 'block';
    carousel.style.opacity = 1;
}
else
{
    carousel.style.display = 'none';
}
}

nt();
