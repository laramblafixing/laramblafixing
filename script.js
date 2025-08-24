// Global variables
let activeSection = "inicio"
let isMenuOpen = false

// Smooth scroll to section
function scrollToSection(sectionId) {
  activeSection = sectionId
  isMenuOpen = false

  // Close mobile menu
  const mobileNav = document.getElementById("mobileNav")
  mobileNav.classList.remove("active")

  // Update active states
  updateActiveStates()

  // Scroll to section
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen
  const mobileNav = document.getElementById("mobileNav")

  if (isMenuOpen) {
    mobileNav.classList.add("active")
  } else {
    mobileNav.classList.remove("active")
  }
}

// Update active navigation states
function updateActiveStates() {
  // Update desktop nav
  const desktopNavItems = document.querySelectorAll(".nav-item")
  desktopNavItems.forEach((item) => {
    const section = item.getAttribute("data-section")
    if (section === activeSection) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })

  // Update mobile nav
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item")
  mobileNavItems.forEach((item) => {
    const section = item.getAttribute("data-section")
    if (section === activeSection) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

// Intersection Observer for automatic section detection
function setupIntersectionObserver() {
  const sections = document.querySelectorAll("section[id]")
  const options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection = entry.target.id
        updateActiveStates()
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupIntersectionObserver()
  updateActiveStates()

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const mobileNav = document.getElementById("mobileNav")
    const menuBtn = document.querySelector(".mobile-menu-btn")

    if (isMenuOpen && !mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
      toggleMobileMenu()
    }
  })
})
