document.addEventListener("DOMContentLoaded", () => {
  // TABS
  const tabLinks = document.querySelectorAll(".tablinks");
  const tabContents = document.querySelectorAll(".tabcontent");

  function openTab(evt, tabName) {
    tabContents.forEach(content => content.style.display = "none");
    tabLinks.forEach(link => link.classList.remove("active"));

    const target = document.getElementById(tabName);
    if (target) {
      target.style.display = "block";
      evt.currentTarget.classList.add("active");
    }
  }

  tabLinks.forEach(button => {
    button.addEventListener("click", (e) => {
      const tabName = button.getAttribute("data-tab");
      openTab(e, tabName);
    });
  });

  const defaultTab = document.querySelector(".tablinks[data-tab='Simple']");
  if (defaultTab) defaultTab.click();

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq li');
  faqItems.forEach(item => {
    const toggleFaqButton = item.querySelector('.toggle-faq');
    const answer = item.querySelector('.faq-answer');

    toggleFaqButton.addEventListener('click', () => {
      item.classList.toggle('open');

      if (item.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });

  // Accordion Toggle
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Scroll Scaling
  const features = document.querySelector(".features");
  if (features) {
    window.addEventListener("scroll", () => {
      const scale = 0.9 + Math.min(window.scrollY / 500, 0.3);
      features.style.transform = `scale(${scale})`;
    });
  }

  // Footer Visibility
  const footer = document.querySelector(".footer");
  const marker = document.querySelector("#bottom-marker");
  if (footer && marker) {
    const observer = new IntersectionObserver(entries => {
      footer.style.display = entries[0].isIntersecting ? "flex" : "none";
    });
    observer.observe(marker);
  }
});
