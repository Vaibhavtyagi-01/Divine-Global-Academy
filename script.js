

// 3. Fees Section Toggle Function
const toggleBtn = document.getElementById('toggle-fees-btn');
const feesSection = document.getElementById('fees-details');
if (toggleBtn && feesSection) {
  toggleBtn.addEventListener('click', function () {
    if (feesSection.style.display === 'none' || feesSection.style.display === '') {
      feesSection.style.display = 'block';
    } else {
      feesSection.style.display = 'none';
    }
  });
}

// 4. Gallery Image Lightbox
const galleryImgs = document.querySelectorAll('#gallery img');
galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '80vh';
    fullImg.style.borderRadius = '10px';

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});

// 5. Typewriter Effect for Principal Message
const principalPara = document.querySelector('#principal-message p:last-child');
if (principalPara) {
  const originalText = principalPara.textContent;
  principalPara.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < originalText.length) {
      principalPara.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }
  typeWriter();
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  // Open/close the mobile nav
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();  
    mobileNav.classList.toggle("active");

    // Lock scroll on mobile nav open
    if (mobileNav.classList.contains("active")) {
      document.body.style.overflow = 'hidden';  
      document.documentElement.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = '';       
      document.documentElement.style.overflow = '';  
    }
  });

  // Close the mobile nav when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
      mobileNav.classList.remove("active");
      document.body.style.overflow = '';  
      document.documentElement.style.overflow = ''; 
    }
  });

  // Prevent clicks inside the mobile nav from closing it
  mobileNav.addEventListener("click", function (event) {
    event.stopPropagation();  
  });
});








  