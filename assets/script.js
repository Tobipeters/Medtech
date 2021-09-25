let brandDiv = document.getElementById('brand-toggle-holder')

stickyNav = () => {
    let heightScrolled = document.documentElement.scrollTop || document.body.scrollTop
    console.log(heightScrolled)
    if (heightScrolled > 50) {
        brandDiv.style.cssText = 'display:none !important';
    } else {
        brandDiv.style.cssText = 'display:flex !important';
    }

}

setInterval(() => {
    stickyNav()
}, 1000);

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})