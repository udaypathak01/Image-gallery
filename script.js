let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const galleryItems = document.querySelectorAll('.gallery_item img');



// Function to open the lightbox with the clicked image
function openLightbox(index) {
    lightbox.style.display = 'flex';
    currentIndex = index;
    showImage(currentIndex);
}
// Adding click event listeners for each gallery item
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});
// Function to display the selected image
function showImage(index) {
    lightboxImg.src = galleryItems[index].src;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}
// Close button event listener
document.querySelector('.close').addEventListener('click', closeLightbox);

// Close lightbox when clicked outside of the image
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
// Function to navigate between images
function changeSlide(n) {
    currentIndex += n;
    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }
    showImage(currentIndex);
}





