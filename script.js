document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggleButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggleButton && navLinks) {
        menuToggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggleButton.classList.toggle('active'); 

           
            const isExpanded = navLinks.classList.contains('active');
            menuToggleButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    
    const allNavLinks = document.querySelectorAll('#nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggleButton.classList.remove('active');
                menuToggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });



    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

   
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
        
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 65) ){
                current = section.getAttribute('id');
            }
        })

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href').substring(1) === current){
                a.classList.add('active');
            }
        })
    });


});