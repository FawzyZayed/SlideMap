    var slideItem = '.slideItem';
            var slideCount = slideItem().length;
            var slideWidth = 100.0 / slideCount;
            var slideIndex = 0;
            
            
            slideItem.find("img").each(function(slideImg) {
                var leftPercent = (slideWidth * slideImg) + "%";
                $(this).css({"left":leftPercent});
                $(this).css({width:(100 / slideCount) + "%"});
            });
            
            
            // Listen for click of prev button
            $(".slideRight").click(function() {
                console.log("prev button clicked");
                slide(slideIndex - 1);
            });

            // Listen for click of next button
            $(".slideLeft").click(function() {
                console.log("next button clicked");
                slide(slideIndex + 1);
            });
            
            function slide(newSlideIndex) {   
                if(newSlideIndex < 0 || newSlideIndex >= slideCount) return; 
                var marginLeft = (newSlideIndex * (-100)) + "%";
                slideItem.animate({"margin-left": marginLeft}, 400, function() {
                    slideIndex = newSlideIndex
                });
            }
            