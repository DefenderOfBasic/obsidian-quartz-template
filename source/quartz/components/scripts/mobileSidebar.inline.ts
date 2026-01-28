const sidebar = document.getElementById("mobile-sidebar")
const backdrop = document.getElementById("mobile-sidebar-backdrop")
const closeButton = document.getElementById("mobile-sidebar-close")
const menuButton = document.getElementById("mobile-sidebar-toggle")

function openSidebar() {
  sidebar?.classList.add("active")
  backdrop?.classList.add("active")
  document.body.style.overflow = "hidden" // Prevent scrolling when sidebar is open
}

function closeSidebar() {
  sidebar?.classList.remove("active")
  backdrop?.classList.remove("active")
  document.body.style.overflow = "" // Restore scrolling
}

// Open sidebar when menu button is clicked
menuButton?.addEventListener("click", (e) => {
  e.preventDefault()
  e.stopPropagation()
  openSidebar()
})

// Close sidebar when close button is clicked
closeButton?.addEventListener("click", (e) => {
  e.preventDefault()
  e.stopPropagation()
  closeSidebar()
})

// Close sidebar when backdrop is clicked
backdrop?.addEventListener("click", () => {
  closeSidebar()
})

// Close sidebar when clicking links inside it
sidebar?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar()
  })
})

// Handle navigation events (SPA routing)
document.addEventListener("nav", () => {
  closeSidebar()
  
  // Re-attach click listeners to links after navigation
  sidebar?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar()
    })
  })
})

// Clean up on page unload
window.addCleanup?.(() => {
  document.body.style.overflow = ""
})
