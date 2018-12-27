// =======================
// SCROLL TO TOP FUNCTION
// ========================
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// =======================
// STICKY HEADER FUNCTION
// ========================
window.onscroll = function() {stickyFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    // } else {
    //     header.classList.remove("sticky");
    }
}

const photospotterImg = document.getElementById('photospotterImg');
const reactCitalImg = document.getElementById('reactCitalImg')

photospotterImg.addEventListener('mouseover', () => {
    photospotterImg.src = "../images/photospotter-fast.gif"
});

photospotterImg.addEventListener('mouseout', () => {
    photospotterImg.src = "../images/photospotter-screenshot-min.jpg"
});

reactCitalImg.addEventListener('mouseover', () => {
    reactCitalImg.src= "../images/react-cital-piano.gif"
})

reactCitalImg.addEventListener('mouseout', () => {
    reactCitalImg.src= "../images//Users/ameliaschulz/digitalcrafts/amelias-web/images/React-cital-screenshot.png"
})