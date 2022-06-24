(function () {
    


// ----------------- PROPIEDADES DEL SLIDE MENU ----------------- //

var propSlideMenu = {

    menu: document.getElementById('estudio-menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a'),
}


// ----------------- METODOS DEL SLIDE MENU ----------------- //

var metSlideMenu = {

    inicio: function () {
        
        propSlideMenu.menu.addEventListener('click', metSlideMenu.toggleMenu);

        for (let i = 0; i < propSlideMenu.elem_menu.length; i++) {
            propSlideMenu.elem_menu[i].addEventListener('click', metSlideMenu.ocultarMenu);
            
        }
    },

    toggleMenu: function () {
        
        if (propSlideMenu.menu_activo == false) {
            
            propSlideMenu.menu_activo = true;
            propSlideMenu.slideMenu.className = propSlideMenu.slideMenu.className + ' active';

        } else {

            propSlideMenu.menu_activo = false;
            propSlideMenu.slideMenu.className = propSlideMenu.slideMenu.className.replace('active', '');
        }
    },

    ocultarMenu: function () {
        
        propSlideMenu.menu_activo = false;
        propSlideMenu.slideMenu.className = propSlideMenu.slideMenu.className.replace('active', '');
    }
    
}

metSlideMenu.inicio();

}())