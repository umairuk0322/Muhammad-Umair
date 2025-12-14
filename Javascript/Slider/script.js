const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    //slide images acording to the slide button clicks
    
    slideButtons.forEach(button => {
        button.addEventListener("click" , () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = image-list.clientwidth * direction;
            imageList.scrollBy({left:scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft <= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbposition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (imageList.clientWidth - document.querySelector(".slider-scrollbar .scrollbar-thumb").clientWidth);
    }
    
        imageList.addEventListener("scroll", () => {
            handleSlideButtons();
            updateScrollThumbposition();
            
        })
    }



window.addEventListener("load", initSlider);
