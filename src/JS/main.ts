import '../CSS/global.css'

console.log("Bonsoir !");


// Fonctionnalité TS permettant de switch du mode claire au mode sombre

console.log(localStorage.theme);
let theme = 'light'
const themeChanger = document.getElementById('themeToggler');
console.log(themeChanger);
const storedTheme = localStorage.theme;


window.addEventListener('load', () => {
    if (themeChanger) {
        console.log(storedTheme, storedTheme === 'dark');
        storedTheme === 'dark' ? document.documentElement.classList.toggle("dark") : null;
        storedTheme === 'dark' ? themeChanger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>` : themeChanger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    }
})

function ToggleTheme() {
    let newTheme = theme === 'light' ? 'dark' : 'light'
    theme = newTheme
    console.log(`Now theme is ${theme}`, theme === 'dark');
    if (themeChanger) {
        theme === 'dark' ? themeChanger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>` : themeChanger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        console.log(localStorage.theme);
    }

}

themeChanger?.addEventListener('click', ToggleTheme);


// Defaut header menu openner

console.log("Bonsoir Menu !");

const menuButton = document.getElementById("toggleMenu");
const menu = document.getElementById("nav_menu")
console.log(menuButton, menu);
let menuShowed = false


menuButton?.addEventListener("click", ()=> {
    if(!menuShowed) {
        menuShowed = true;
        menu?.classList.add('active_nav')
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
    }else {
        menuShowed = false;
        menu?.classList.remove('active_nav')
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
    }


})
