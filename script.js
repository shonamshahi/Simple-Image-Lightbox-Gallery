var image_count = 0
var image_current = 0

// Creates Lightbox working area
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

// Functionally Buttons (Next, Previous, Clost)
const btn_next = document.createElement('div')
const btn_previous = document.createElement('div')
const btn_close = document.createElement('div')

btn_next.id = 'btn-next'
btn_previous.id = 'btn-previous'
btn_close.id = 'btn-close'

document.body.appendChild(btn_next)
document.body.appendChild(btn_previous)
document.body.appendChild(btn_close)
document.body.appendChild(lightbox)


// List of all images
const images = document.querySelectorAll('.grid > img')

// number of images
image_count = images.length
// window.alert('total images = ' + image_count)

/* 
    Iterate through all images and add a 'click' event listener
    When clicked, image is added to the lightbox and then displayed
*/
images.forEach((image, index) => {
    image.addEventListener('click', e => {

        // if clicked, makes lightbox active
        lightbox.classList.add('active')

        // activate Buttons also
        btn_next.classList.add('active')
        btn_previous.classList.add('active')
        btn_close.classList.add('active')

        // create new image variable/element
        const img = document.createElement('img')

        // Assign image from the data-src attribute to the lightbox 
        // or the src image to lightbox if there is no data-src
        if (image.getAttribute('data-src') == null) {
            img.src = image.src
        } else {
            img.src = image.getAttribute('data-src')
        }
        image_current = index

        // remove old images already in the lightbox
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        // add image to the lightbox
        lightbox.appendChild(img)
        // window.alert('image index = ' + image_current)
    })
})

/*
    Lightbox event listener
    If clicked outside the image while lightbox is active, lightbox will de-activate
*/
lightbox.addEventListener('click', e => {
    // if clicked outside of the image in the lightbox,
    // de-activate lightbox
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')

    // de-activate Buttons also
    btn_next.classList.remove('active')
    btn_previous.classList.remove('active')
    btn_close.classList.remove('active')
})

/*
    Close/de-activate lightbox button event listener
*/
btn_close.addEventListener('click', e => {
    // if clicked outside of the image in the lightbox,
    // de-activate lightbox
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')

    // de-activate Buttons also
    btn_next.classList.remove('active')
    btn_previous.classList.remove('active')
    btn_close.classList.remove('active')
})

/*
    Next image button event listener
*/
btn_next.addEventListener('click', e => {
    // create new image variable/element
    const img = document.createElement('img')

    // assign previous image element to new image
    // If no data-src attribute image, use the same photo
    if (images[image_current + 1].getAttribute('data-src') == null) {
        img.src = images[image_current + 1].src
    } else {
        img.src = images[image_current + 1].getAttribute('data-src')
    }

    // current image index increment
    image_current += 1;

    // remove images already in the lightbox
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    // applies new image
    lightbox.appendChild(img)
})

/*
    Previous image button event listener
*/
btn_previous.addEventListener('click', e => {
    // create new image variable/element
    const img = document.createElement('img')

    // assign previous image element to new image
    // If no data-src attribute image, use the same photo
    if (images[image_current - 1].getAttribute('data-src') == null) {
        img.src = images[image_current - 1].src
    } else {
        img.src = images[image_current - 1].getAttribute('data-src')
    }

    // current image index deincrement
    image_current -= 1;

    // remove images already in the lightbox
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    // applies new image
    lightbox.appendChild(img)
})

/*
    ArrowKey Next, Previous and Escape event listeners
*/
document.addEventListener('keydown', e => {
    // right arrow check
    if (e.code == 'ArrowRight') {
        // create new image variable/element
        const img = document.createElement('img')

        // assign previous image element to new image
        // If no data-src attribute image, use the same photo
        if (images[image_current + 1].getAttribute('data-src') == null) {
            img.src = images[image_current + 1].src
        } else {
            img.src = images[image_current + 1].getAttribute('data-src')
        }

        // current image index increment
        image_current += 1;

        // remove images already in the lightbox
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // applies new image
        lightbox.appendChild(img)
    }

    // left arrow check 
    else if (e.code == 'ArrowLeft') {
        // create new image variable/element
        const img = document.createElement('img')

        // assign previous image element to new image
        // If no data-src attribute image, use the same photo
        if (images[image_current - 1].getAttribute('data-src') == null) {
            img.src = images[image_current - 1].src
        } else {
            img.src = images[image_current - 1].getAttribute('data-src')
        }

        // current image index deincrement
        image_current -= 1;

        // remove images already in the lightbox
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // applies new image
        lightbox.appendChild(img)
    }

    // Escape key
    else if (e.code == 'Escape') {
        lightbox.classList.remove('active')
        btn_next.classList.remove('active')
        btn_previous.classList.remove('active')
        btn_close.classList.remove('active')
    }
})