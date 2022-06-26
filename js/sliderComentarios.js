(function () {
    
/* ----------- OBJETO CON LAS PROP DEL SLIDER ----------- */

let propSlider = {

    slider: document.getElementById('sliderComentarios'),
    primerSlide: null,

}

/* ----------- OBJETO CON LOS METODOS DEL SLIDER ----------- */

let metSlider = {

    inicio: function () {
        setInterval(metSlider.moverSlide, 4000)
    },

    moverSlide: function () {
        propSlider.slider.style.transition = 'all 2s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function () {
            propSlider.primerSlide = propSlider.slider.firstElementChild;
            propSlider.slider.appendChild(propSlider.primerSlide);
            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = '0%';
        }, 2000);
    }
}

metSlider.inicio();

}())