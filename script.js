const nav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", () => {
    
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navtoggle.setAttribute("aria-expanded", true)
    }else {
        nav.setAttribute("data-visible", false)
        navtoggle.setAttribute("aria-expanded", false)
    }
})