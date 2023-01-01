const links = document.querySelectorAll('.btn');
const heading = document.querySelector('.sec-intro-h');
const para = document.querySelector('.sec-intro-p');
const secImg = document.querySelector('.sec-img-section');
const toggle = document.querySelectorAll('.toggle');
const content = document.querySelectorAll('.content');
const arrowIcon = document.querySelectorAll('.arrow-icon');
const faqPText = document.querySelectorAll('.faq-p-text');

window.addEventListener("load", () => {

    secImg.innerHTML = `
    <img class="tab-img" src="./images/illustration-features-tab-1.svg" alt="hero-img">
    <div class="tab-img-illustration"></div>
    `
    heading.textContent = 'Bookmark in one click'
    para.textContent = ' Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        switch (e.target.textContent) {
            case "Simple Bookmarking":
                secImg.innerHTML = `
        <img class="tab-img" src="./images/illustration-features-tab-1.svg" alt="hero-img">
        <div class="tab-img-illustration"></div>
        `
                heading.textContent = 'Bookmark in one click'
                para.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
                break;

            case "Speedy Searching":
                secImg.innerHTML = `
            <img class="tab-img" src="./images/illustration-features-tab-2.svg" alt="hero-img">
            <div class="tab-img-illustration"></div>
            `
                heading.textContent = 'Intelligent search'
                para.textContent = 'Our powerful search feature will help you find saved sites in no time at all.  No need to trawl through all of your bookmarks.'
                break;

            case "Easy Sharing":
                secImg.innerHTML = `
                    <img class="tab-img" src="./images/illustration-features-tab-3.svg" alt="hero-img">
                    <div class="tab-img-illustration"></div>
                    `
                heading.textContent = 'Share your bookmarks'
                para.textContent = ' Easily share your bookmarks and collections with others. Create a shareable  link that you can send at the click of a button.'
                break;

            default:
                break;
        }

    })
})

toggle.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (parseInt(content[i].style.height) != content[i].scrollHeight) {
            content[i].style.height = content[1].scrollHeight + "px"
            if (faqPText[i].textContent.length <= 200) {
                content[i].style.height = content[1].scrollHeight - 70 + "px"
            }
            console.log(faqPText[i].textContent.length)
            arrowIcon[i].classList.add('rotate-arrow-icon')
        } else {
            content[i].style.height = "0px"
            arrowIcon[i].classList.remove('rotate-arrow-icon')
        }
    })
})

