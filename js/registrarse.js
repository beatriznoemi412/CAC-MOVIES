"use strict";
/*
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    if (!validateForm()) {
        console.log('El formulario no es válido. Por favor, corrige los errores.');
    } else {
        console.log('El formulario es válido. Enviar datos...');
    
    // Simulación de envío con retraso de 2 segundos
      setTimeout(() => {
        console.log('El formulario se enviaría aquí si tuviéramos un destino.');
        setTimeout(function () {
            form.submit();
          }, 3000);// Tiempo de retraso en milisegundos (en este caso, 3 segundos)
});
const validateForm = () => {
    let isValid = true;

    isValid = validateField('nombre', 'El nombre es obligatorio') && isValid;
    isValid = validateField('apellido', 'El apellido es obligatorio') && isValid;
    isValid = validateField('edad', 'La edad es obligatoria') && isValid;
    isValid = validateField('fech', 'La fecha de nacimiento es obligatoria') && isValid;
    isValid = validateEmailField('correo', 'El correo electrónico no es válido') && isValid;
    isValid = validateField('contraseña', 'La contraseña es obligatoria') && isValid;
    isValid = validateField('pais-select', 'Selecciona un país') && isValid;

    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        isValid = false;
        setErrorFor(document.getElementById('terminos'), 'Debes aceptar los términos y condiciones');
    } else {
        setSuccessFor(document.getElementById('terminos'));
    }

    return isValid;
};

const validateField = (fieldId, errorMessage) => {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    if (value === '') {
        setErrorFor(field, errorMessage);
        return false;
    } else {
        setSuccessFor(field);
        return true;
    }
};

const validateEmailField = (fieldId, errorMessage) => {
    const field = document.getElementById(fieldId);
    const email = field.value.trim();
    if (email === '') {
        setErrorFor(field, 'El correo electrónico es obligatorio');
        return false;
    } else if (!isEmail(email)) {
        setErrorFor(field, errorMessage);
        return false;
    } else {
        setSuccessFor(field);
        return true;
    }
};

const setErrorFor = (input, message) => {
    console.log('Setting error for:', input.id);
    const formControl = input.closest('div');
    const errorText = formControl.querySelector('.error-text');
    formControl.classList.add('error');
    errorText.innerText = message;
    input.focus();
};

const setSuccessFor = (input) => {
    const formControl = input.closest('div');
    formControl.classList.remove('error');
    const errorText = formControl.querySelector('.error-text');
    errorText.innerText = '';
};


const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
*/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    let isValid = true;

    isValid = validateField('nombre', 'El nombre es obligatorio') && isValid;
    isValid = validateField('apellido', 'El apellido es obligatorio') && isValid;
    isValid = validateField('edad', 'La edad es obligatoria') && isValid;
    isValid = validateField('fech', 'La fecha de nacimiento es obligatoria') && isValid;
    isValid = validateEmailField('correo', 'El correo electrónico no es válido') && isValid;
    isValid = validateField('contraseña', 'La contraseña es obligatoria') && isValid;
    isValid = validateField('pais-select', 'Selecciona un país') && isValid;

    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        isValid = false;
        setErrorFor(document.getElementById('terminos'), 'Debes aceptar los términos y condiciones');
    } else {
        setSuccessFor(document.getElementById('terminos'));
    }

    if (isValid) {
        console.log('El formulario es válido. Enviar datos...');
        
        // Simulación de envío con retraso de 2 segundos
        setTimeout(() => {
            console.log('El formulario se enviaría aquí si tuviéramos un destino.');
            setTimeout(function () {
                form.submit();
            }, 3000); // Tiempo de retraso en milisegundos (en este caso, 2 segundos)
        }, 2000); // Tiempo de retraso en milisegundos para la simulación de envío
    } else {
        console.log('El formulario no es válido. Por favor, corrige los errores.');
    }
});

const validateField = (fieldId, errorMessage) => {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    if (value === '') {
        setErrorFor(field, errorMessage);
        return false;
    } else {
        setSuccessFor(field);
        return true;
    }
};

const validateEmailField = (fieldId, errorMessage) => {
    const field = document.getElementById(fieldId);
    const email = field.value.trim();
    if (email === '') {
        setErrorFor(field, 'El correo electrónico es obligatorio');
        return false;
    } else if (!isEmail(email)) {
        setErrorFor(field, errorMessage);
        return false;
    } else {
        setSuccessFor(field);
        return true;
    }
};
const setErrorFor = (input, message) => {
    const formControl = input.closest('div');
    formControl.classList.add('error');
    const errorText = formControl.querySelector('.error-text');
    errorText.innerText = message;
};

const setSuccessFor = (input) => {
    const formControl = input.closest('div');
    formControl.classList.remove('error');
    const errorText = formControl.querySelector('.error-text');
    errorText.innerText = '';
};


const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
