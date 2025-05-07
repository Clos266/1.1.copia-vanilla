function showContent(option, button) {
  const content = {
    option1: {
      image: "https://bookmark-agency-page.netlify.app/static/media/illustration-features-tab-1.0da3d302.svg",
      title: "Bookmark in one click",
      paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      buttonText: "More Info"
    },
    option2: {
      image: "https://bookmark-agency-page.netlify.app/static/media/illustration-features-tab-2.e933bd6d.svg",
      title: "Share your bookmarks",
      paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      buttonText: "More Info"
    },
    option3: {
      image: "https://bookmark-agency-page.netlify.app/static/media/illustration-features-tab-3.a4206aab.svg",
      title: "Bookmark in one click",
      paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      buttonText: "More Info"
    }
    
  };

  // Actualizar contenido
  document.getElementById("content-image").src = content[option].image;
  document.getElementById("content-title").innerText = content[option].title;
  document.getElementById("content-paragraph").innerText = content[option].paragraph;
  document.getElementById("content-button").innerText = content[option].buttonText;

  // Marcar botón activo
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach(btn => btn.classList.remove('border-b-[2px]', 'border-[#F6A5A5]', 'font-semibold'));
  button.classList.add('border-b-[2px]', 'border-[#F6A5A5]', 'font-semibold');
}
let currentOpen = null;

function toggleAccordion(index) {
  if (currentOpen !== null) {
    document.getElementById(`content-${currentOpen}`).classList.add('hidden');
    document.getElementById(`icon-${currentOpen}`).classList.remove('rotate-180');
  }

  if (currentOpen === index) {
    currentOpen = null;
  } else {
    document.getElementById(`content-${index}`).classList.remove('hidden');
    document.getElementById(`icon-${index}`).classList.add('rotate-180');
    currentOpen = index;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const defaultButton = document.getElementById('option1-btn');
  showContent('option1', defaultButton);
});
//lógica para mostrar el menú en móvil 

const hamburgerButton = document.getElementById('hamburgerButton');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});