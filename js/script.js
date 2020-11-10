/* --- Navigation Bar Section ---*/
var headerNavMenu_button_click = true;
var petaStateOneVar = document.getElementsByClassName("petaStateOne");
var petaStateTwoVar = document.getElementsByClassName("petaStateTwo");
var headerMenuItemContainerChanger = document.getElementsByClassName("headerMenuItemContainer");
var getClassElement = document.getElementById("mainBody");
var mediaQuery = window.matchMedia('((max-width: 992px))');

function menuButtonState() {

    if (headerNavMenu_button_click) {
        petaStateOneVar[0].style.animation = "spin 1s linear 1";
        petaStateOneVar[0].style.transform = "rotate(45deg)";
        petaStateTwoVar[0].style.animation = "spin 1s linear 1";
        petaStateTwoVar[0].style.transform = "rotate(-45deg)";
        headerMenuItemContainerChanger[0].style.display = "flex";
        getClassElement.classList.add("scrollLock");
        var getClassPositionElement = document.getElementsByClassName("headerTagContainer");
        getClassPositionElement[0].style.height = "100%";
        headerNavMenu_button_click = false;
    } else {
        petaStateOneVar[0].style.animation = "spin 1s linear 1";
        petaStateOneVar[0].style.transform = "rotate(0deg)";
        petaStateTwoVar[0].style.animation = "spin 1s linear 1";
        petaStateTwoVar[0].style.transform = "rotate(-0deg)";
        headerMenuItemContainerChanger[0].style.display = "none";
        getClassElement.classList.remove("scrollLock");
        headerNavMenu_button_click = true;
    }
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").src = "images/logo/nesh-mini-icon.png";
        var headerColorVar = document.getElementById("headerItemsContainer");
        headerColorVar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    } else {
        document.getElementById("logo").src = "images/logo/nesh-Thumbnail.png";
        var headerColorVar = document.getElementById("headerItemsContainer");
        headerColorVar.style.backgroundColor = "#ffffff";
    }
}

/* Navigation anchor links for small devices */
function jumpToSection(specificId) {
    switch (specificId) {
        case 'jumpHome':
            petaStateOneVar[0].style.animation = "spin 1s linear 1";
            petaStateOneVar[0].style.transform = "rotate(0deg)";
            petaStateTwoVar[0].style.animation = "spin 1s linear 1";
            petaStateTwoVar[0].style.transform = "rotate(-0deg)";
            if (mediaQuery.matches) {
                headerMenuItemContainerChanger[0].style.display = "none";
            }
            getClassElement.classList.remove("scrollLock");
            headerNavMenu_button_click = true;
            var homeElement = document.getElementById("home");
            homeElement.scrollIntoView();
            break;

        case 'jumpAbout':
            petaStateOneVar[0].style.animation = "spin 1s linear 1";
            petaStateOneVar[0].style.transform = "rotate(0deg)";
            petaStateTwoVar[0].style.animation = "spin 1s linear 1";
            petaStateTwoVar[0].style.transform = "rotate(-0deg)";
            if (mediaQuery.matches) {
                headerMenuItemContainerChanger[0].style.display = "none";
            }
            getClassElement.classList.remove("scrollLock");
            headerNavMenu_button_click = true;
            var aboutElement = document.getElementById("about");
            aboutElement.scrollIntoView();
            break;

        case 'jumpProjects':
            petaStateOneVar[0].style.animation = "spin 1s linear 1";
            petaStateOneVar[0].style.transform = "rotate(0deg)";
            petaStateTwoVar[0].style.animation = "spin 1s linear 1";
            petaStateTwoVar[0].style.transform = "rotate(-0deg)";
            if (mediaQuery.matches) {
                headerMenuItemContainerChanger[0].style.display = "none";
            }
            getClassElement.classList.remove("scrollLock");
            headerNavMenu_button_click = true;
            var projectsElement = document.getElementById("projects");
            projectsElement.scrollIntoView();
            break;

        case 'jumpExperience':
            petaStateOneVar[0].style.animation = "spin 1s linear 1";
            petaStateOneVar[0].style.transform = "rotate(0deg)";
            petaStateTwoVar[0].style.animation = "spin 1s linear 1";
            petaStateTwoVar[0].style.transform = "rotate(-0deg)";
            if (mediaQuery.matches) {
                headerMenuItemContainerChanger[0].style.display = "none";
            }
            getClassElement.classList.remove("scrollLock");
            headerNavMenu_button_click = true;
            var experienceElement = document.getElementById("experience");
            experienceElement.scrollIntoView();
            break;

        case 'jumpContact':
            petaStateOneVar[0].style.animation = "spin 1s linear 1";
            petaStateOneVar[0].style.transform = "rotate(0deg)";
            petaStateTwoVar[0].style.animation = "spin 1s linear 1";
            petaStateTwoVar[0].style.transform = "rotate(-0deg)";
            if (mediaQuery.matches) {
                headerMenuItemContainerChanger[0].style.display = "none";
            }
            getClassElement.classList.remove("scrollLock");
            headerNavMenu_button_click = true;
            var contactElement = document.getElementById("contact");
            contactElement.scrollIntoView();
            break;

        default:
            console.log();

    }
}

/*--- Home Section ---*/
document.getElementById("changeButton").onmouseover = function() {
    this.title = "United States of America";
}

document.getElementById("changeButton").onmouseout = function() {
    this.title = "I'm Here >";
}

/* Technology Stack Carousel */

var carousel = document.querySelector('.carousel');
var cellCount = 15;
var selectedIndex = 0;

var tz = Math.round((210 / 2) / Math.tan(Math.PI / 15));
console.log("output: ");
console.log(tz);

function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
    selectedIndex--;
    rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
    selectedIndex++;
    rotateCarousel();
});



/* Services Section */
function openServiceDetails(givenid) {

    switch (givenid) {
        case 'webDevButton':
            let webDevButtonStatus = document.getElementById('showWebDevContent');
            if (webDevButtonStatus.style.display === "none" || webDevButtonStatus.style.display === "") {
                webDevButtonStatus.style.display = "block";
            } else {
                webDevButtonStatus.style.display = "none";
            }
            break;
        case 'wordpressDevButton':
            let wordpressDevButtonStatus = document.getElementById('showWordpressDevContent');
            if (wordpressDevButtonStatus.style.display === "none" || wordpressDevButtonStatus.style.display === "") {
                wordpressDevButtonStatus.style.display = "block";
            } else {
                wordpressDevButtonStatus.style.display = "none";
            }
            break;
        case 'webSupportButton':
            let webSupportButtonStatus = document.getElementById('showWebSupportContent');
            if (webSupportButtonStatus.style.display === "none" || webSupportButtonStatus.style.display === "") {
                webSupportButtonStatus.style.display = "block";
            } else {
                webSupportButtonStatus.style.display = "none";
            }
            break;
        case 'webManageButton':
            let webManageButtonStatus = document.getElementById('showWebManageContent');
            if (webManageButtonStatus.style.display === "none" || webManageButtonStatus.style.display === "") {
                webManageButtonStatus.style.display = "block";
            } else {
                webManageButtonStatus.style.display = "none";
            }
            break;
        case 'webDesignButton':
            let webDesignButtonStatus = document.getElementById('showWebDesignContent');
            if (webDesignButtonStatus.style.display === "none" || webDesignButtonStatus.style.display === "") {
                webDesignButtonStatus.style.display = "block";
            } else {
                webDesignButtonStatus.style.display = "none";
            }
            break;
        case 'perfSeoButton':
            let perfSeoButtonStatus = document.getElementById('showPerfSeoContent');
            if (perfSeoButtonStatus.style.display === "none" || perfSeoButtonStatus.style.display === "") {
                perfSeoButtonStatus.style.display = "block";
            } else {
                perfSeoButtonStatus.style.display = "none";
            }
            break;
        default:
            console.log();

    }
}

/*--- Experience Section ---*/
function showCurrentExpFunction(evtExp, detailsName) {

    let experienceCompanyLogoLinks, currentCompanyContent;
    currentCompanyContent = document.getElementsByClassName("currentCompanyContent");
    for (let i = 0; i < currentCompanyContent.length; i++) {
        currentCompanyContent[i].style.display = "none";
    }
    experienceCompanyLogoLinks = document.getElementsByClassName("experienceCompanyLogoLinks");
    for (let i = 0; i < experienceCompanyLogoLinks.length; i++) {
        experienceCompanyLogoLinks[i].className = experienceCompanyLogoLinks[i].className.replace(" active", "");
    }
    document.getElementById(detailsName).style.display = "block";
    evtExp.currentTarget.className += " active";

}

function autoOpenFirstExpButtonOnClickContent() {
    let subButtonContent = document.getElementById("secondSubExpContainerButton");
    subButtonContent.click();
}

/* Copyright Year */

function getCopyRightCurrentYear() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

document.getElementById("copyRightYear").innerHTML = getCopyRightCurrentYear();