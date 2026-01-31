
    let slideIndex = 0;
    showSlides(slideIndex);
    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        
       
        if (n >= slides.length) { slideIndex = 0 }
        
        
        if (n < 0) { slideIndex = slides.length - 1 }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex].style.display = "block";  
    }

    
    const contactForm = document.querySelector('.contact-form');

    
    contactForm.addEventListener('submit', function(event) {
        
     
        event.preventDefault();

        
        const name = document.getElementById('name').value;
        const button = document.querySelector('.btn-submit');

       
        const originalText = button.innerText;
        button.innerText = "Sending...";
        button.style.backgroundColor = "#555"; 

        
        setTimeout(() => {
            
            button.innerText = "Message Sent!";
            button.style.backgroundColor = "#28a745"; 
            
           
            contactForm.reset();

          
            alert(`Thanks ${name}! I have received your message and will get back to you shortly.`);

            
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = "#00bcd4"; 
            }, 3000);

        }, 1500); 
    });
