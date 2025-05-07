
function openTab(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
window.addEventListener('scroll', () => {
  const features = document.querySelector('.features');
  const scrollY = window.scrollY;

  // Ajusta el crecimiento según el scroll (máximo scale 1.2)
  let scale = 0.9 + Math.min(scrollY / 500, 0.3); // de 0.9 a 1.2
  features.style.transform = `scale(${scale})`;
});
document.querySelectorAll('.toggle-faq').forEach(button => {
  button.addEventListener('click', () => {
    const li = button.closest('li');
    li.classList.toggle('open');
  });
});
//footer//
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector('.footer');
  const marker = document.querySelector('#bottom-marker');

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      footer.style.display = 'flex'; // O 'block' según tu diseño
    } else {
      footer.style.display = 'none';
    }
  });

  observer.observe(marker);
});
