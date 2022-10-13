const about = document.getElementById('about')
const aboutTab = document.getElementById('aboutTab')
const social = document.getElementById('social')
const socialTab = document.getElementById('socialTab')

function toggleTabSocial() {
    about.classList.add('selected')
    aboutTab.classList.add('selected')
    social.classList.remove('selected')
    socialTab.classList.remove('selected')
}

function toggleTabAbout() {
    about.classList.remove('selected')
    aboutTab.classList.remove('selected')
    social.classList.add('selected')
    socialTab.classList.add('selected')
}