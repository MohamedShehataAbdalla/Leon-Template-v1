document.querySelector("footer .year").innerHTML = new Date().getFullYear();


let icon_header  = document.querySelectorAll('header .icon');

icon_header.forEach((ele) => {
    ele.addEventListener("click", function(){
        this.classList.toggle('open');
    });
});

