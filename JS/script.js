const navMenu = document.getElementById('nav_menu'),
    navToogle = document.getElementById('nav_toogle'),
    navClose = document.getElementById('nav_close')

if (navToogle) {
    navToogle.addEventListener('click', ( ) =>
    {
        navMenu.classList.add('tampil')
    })
}

if (navClose) {
    navClose.addEventListener('click', ( ) =>
    {
        navMenu.classList.remove('tampil')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('tampil')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let item =document.querySelectorAll('.item_package')
    document.querySelector('.package_slide').appendChild(item[0])
})

prev.addEventListener('click', function(){
    let item =document.querySelectorAll('.item_package')
    document.querySelector('.package_slide').prepend(item[item.length - 1])
})

// Validate Form
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}
