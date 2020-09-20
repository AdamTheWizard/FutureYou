window.onload = function () {
  const menuButton = document.getElementById("menu-button");
  const slideMenu = document.getElementById("slide-menu-container");

  menuButton.onclick = function () {
    this.classList.toggle("open");
    slideMenu.classList.toggle("open");
  };

  // Set the date we're counting down to
  var countDownDate = new Date("Dec 25, 2020 00:01:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const countdown = document.querySelector('.countdown');

    // Output the result in an element with id="demo"
    countdown.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";


    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      countdown.innerHTML = "EXPIRED";
    }
  }, 1000);



  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
};
