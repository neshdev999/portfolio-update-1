/* --- Navigation Bar Section Variables ---*/
var headerNavMenu_button_click = true;
var petaStateOneVar = document.getElementsByClassName("petaStateOne");
var petaStateTwoVar = document.getElementsByClassName("petaStateTwo");
var headerMenuItemContainerChanger = document.getElementsByClassName("headerMenuItemContainer");
var getClassElement = document.getElementById("mainBody");
var mediaQuery = window.matchMedia('(max-width: 992px)');

/*Technology Stack -More Item Custom Dilog Box Variables */
var dialogbox = document.getElementById('dialogbox');
var Alert = new CustomAlert();


/* --- Navigation Bar Section---*/
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

/* Calculate Value of carousel cell width based on choosen number of cell
var tz = Math.round((210 / 2) / Math.tan(Math.PI / 15));
console.log("output: "+ tz);
*/

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


/*Technology Stack -More Item Custom Dilog Box Section */

function CustomAlert() {
    this.render = function(dialog) {

        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = dialog;
        document.getElementById('dilogSplButton').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
    }
}

/*Technology Stack Image Weblink Selection */
function goToWebLink(imageId) {

    switch (imageId) {
        case 'htmlFiveSource':
            window.location.assign("https://www.w3.org/html/");
            break;
        case 'cssSource':
            window.location.assign("https://www.w3.org/Style/CSS/");
            break;
        case 'javascriptSource':
            window.location.assign("https://www.ecma-international.org/");
            break;
        case 'reactSource':
            window.location.assign("https://reactjs.org/");
            break;
        case 'atlassianSource':
            window.location.assign("https://www.atlassian.com/");
            break;
        case 'jQuerySource':
            window.location.assign("https://jquery.com/");
            break;
        case 'postgreSQLSource':
            window.location.assign("https://www.postgresql.org/");
            break;
        case 'adobePhotoshopSource':
            window.location.assign("https://www.adobe.com/products/photoshop.html");
            break;
        case 'invisionSource':
            window.location.assign("https://www.invisionapp.com/");
            break;
        case 'angularJSSource':
            window.location.assign("https://angularjs.org/");
            break;
        case 'wordpressSource':
            window.location.assign("https://wordpress.com/");
            break;
        case 'bootstrapSource':
            window.location.assign("https://getbootstrap.com/");
            break;
        case 'awsSource':
            window.location.assign("https://aws.amazon.com/");
            break;
        case 'moreSource':
            Alert.render("&nbsp;" + "&nbsp;" + '<i class="fa fa-user-circle" aria-hidden="true"></i>' + "&nbsp;" + "&nbsp;" + "Hey Visitor! Wait..." + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "It's Coming Soon!!!" + "&nbsp;");
            break;
        default:
            console.log();
    }
}



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