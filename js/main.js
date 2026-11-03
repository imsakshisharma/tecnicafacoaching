/**
 * Tecnica FA Coaching Ltd - Main Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header ---
  const header = document.querySelector('.site-header-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('is-sticky');
    } else {
      header?.classList.remove('is-sticky');
    }
  });

  // --- 2. Mobile Drawer Overlay Toggle ---
  const mobileHamburger = document.getElementById('mobileHamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawerOverlay');
  const mobileDrawerClose = document.getElementById('mobileDrawerCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-drawer-link');

  function openMobileMenu() {
    mobileDrawer?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  mobileHamburger?.addEventListener('click', openMobileMenu);
  mobileDrawerClose?.addEventListener('click', closeMobileMenu);
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeMobileMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 3. Smooth Anchor Scrolling & Active Nav Highlighting ---
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Highlight active nav item on scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-menu-row .nav-single-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('is-active');
      }
    });
  });

  // --- 4. Academy Sessions Filter ---
  const sessionFilterPills = document.querySelectorAll('.session-filter-pill');
  const sessionCards = document.querySelectorAll('.session-program-card');

  sessionFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      sessionFilterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const category = pill.getAttribute('data-category');

      sessionCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
          card.classList.add('fade-in-anim');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. Gallery Filters & Lightbox Modal ---
  const galleryFilterPills = document.querySelectorAll('.gallery-filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-card-item');
  const galleryModal = document.getElementById('galleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryModalTitle = document.getElementById('galleryModalTitle');
  const galleryModalDesc = document.getElementById('galleryModalDesc');
  const galleryModalClose = document.getElementById('galleryModalClose');

  galleryFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      galleryFilterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const category = pill.getAttribute('data-gallery-category');

      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-gallery-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      const title = item.querySelector('.gallery-item-title')?.textContent || 'Tecnica FA Action';
      const desc = item.querySelector('.gallery-item-location')?.textContent || 'Elite Academy Session';
      if (img && galleryModal && galleryModalImg) {
        galleryModalImg.src = img.src;
        galleryModalImg.alt = title;
        if (galleryModalTitle) galleryModalTitle.textContent = title;
        if (galleryModalDesc) galleryModalDesc.textContent = desc;
        galleryModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeGalleryModal() {
    galleryModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  galleryModalClose?.addEventListener('click', closeGalleryModal);
  galleryModal?.addEventListener('click', e => {
    if (e.target === galleryModal) closeGalleryModal();
  });

  // --- 6. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close other accordion items
      faqItems.forEach(f => {
        f.classList.remove('is-open');
        f.querySelector('.faq-accordion-trigger')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- 7. Booking & Enquiry Form Submission ---
  const trialForm = document.getElementById('trialBookingForm');
  const toastSuccess = document.getElementById('toastSuccess');
  const bookingSuccessModal = document.getElementById('bookingSuccessModal');
  const modalPlayerName = document.getElementById('modalPlayerName');
  const modalParentPhone = document.getElementById('modalParentPhone');
  const modalHub = document.getElementById('modalHub');
  const closeSuccessModalBtn = document.getElementById('closeSuccessModalBtn');

  trialForm?.addEventListener('submit', e => {
    e.preventDefault();
    const parentName = document.getElementById('parentName')?.value.trim();
    const childName = document.getElementById('childName')?.value.trim();
    const parentPhone = document.getElementById('parentPhone')?.value.trim();
    const ageGroup = document.getElementById('ageGroup')?.value;
    const hubLocation = document.getElementById('hubLocation')?.value;

    if (!parentName || !childName || !parentPhone || !ageGroup || !hubLocation) {
      alert('Please fill in all required fields (Parent Name, Child Name, Phone, Age Group, Hub).');
      return;
    }

    const submitBtn = trialForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Processing Booking...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Populate success modal
      if (modalPlayerName) modalPlayerName.textContent = childName;
      if (modalParentPhone) modalParentPhone.textContent = parentPhone;
      if (modalHub) modalHub.textContent = hubLocation;

      if (bookingSuccessModal) {
        bookingSuccessModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      } else if (toastSuccess) {
        toastSuccess.classList.add('is-visible');
        setTimeout(() => toastSuccess.classList.remove('is-visible'), 5000);
      }

      trialForm.reset();
    }, 600);
  });

  closeSuccessModalBtn?.addEventListener('click', () => {
    bookingSuccessModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  });

  // Quick book triggers
  const bookTriggers = document.querySelectorAll('.trigger-booking-modal');
  bookTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const trialSection = document.getElementById('contact');
      if (trialSection) {
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPos = trialSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('parentName')?.focus();
        }, 500);
      }
    });
  });

  // ESC key listener for modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeGalleryModal();
      bookingSuccessModal?.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });
});
