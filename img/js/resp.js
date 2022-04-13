burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addeventlistener('click', () => {
    rightnav.classlist.toggle('v-class-resp');
    navList.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');
})
