document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navList = document.querySelector('.navlist');

    // Toggle visibility of navlist on menu icon click
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('dropdown-menu');
    });

    // Close dropdown if user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('dropdown-menu');
        }
    });
});
