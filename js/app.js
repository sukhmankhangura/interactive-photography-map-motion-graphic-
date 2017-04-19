  $(document).ready(function () {
            var wHeight = $(window).height();

            function parallax() {
                var pHeight = $(this).outerHeight();
                var pMiddle = pHeight / 2;
                var wMiddle = wHeight / 2;
                var fromTop = $(this).offset().top;
                var scrolled = $(window).scrollTop();
                var speed = $(this).attr('data-parallax-speed');
                var rangeA = (fromTop - wHeight);
                var rangeB = (fromTop + pHeight);
                var rangeC = (fromTop - wHeight);
                var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));

                if (rangeA < 0) {
                    rangeA = 0;
                    rangeB = wHeight
                }

                var percent = (scrolled - rangeA) / (rangeB - rangeA);
                percent = percent * 100;
                percent = percent * speed;
                percent = percent.toFixed(2);

                var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
                animFromBottom = animFromBottom.toFixed(2);

                if (animFromBottom >= 1) {
                    animFromBottom = 1;
                }

                $(this).css('background-position', 'center ' + percent + '%');
                $(this).find('.parallax-content').css('opacity', animFromBottom);
                $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
            }

            $('.parallax').each(parallax);
            $(window).scroll(function (e) {
                $('.parallax').each(parallax);
            });
            $("#algonquinmaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#algonquin").offset().top
    }, 2000);
    });
     $("#horseshoemaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#horseshoe").offset().top
    }, 2000);
    });
     $("#barriemaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#barrie").offset().top
    }, 2000);
    });
     $("#wasagamaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#wasaga").offset().top
    }, 2000);
    });
     $("#lakesimcoemaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#lakesimcoe").offset().top
    }, 2000);
    });
     $("#collingwoodmaplink").click(function() {
                $('html, body').animate({
                    scrollTop: $("#collingwood").offset().top
    }, 2000);
});
        });
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal1() {
  document.getElementById('myModal1').style.display = "block";
}

function closeModal1() {
  document.getElementById('myModal1').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide1(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide2(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide3(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide4(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openModal5() {
  document.getElementById('myModal5').style.display = "block";
}

function closeModal5() {
  document.getElementById('myModal5').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide5(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
