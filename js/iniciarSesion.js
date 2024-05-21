document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario en el DOM
    const form = document.querySelector('form');
   
    // Agrega un evento de escucha para cuando se envía el formulario
    form.addEventListener('submit', (event) => {
       
        if (!validateForm()) {
            // mensaje en consola indica que el formulario no es válido
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            // Evita que el formulario se envíe
            event.preventDefault();
        } else {
            console.log('El formulario es válido. Enviar datos...');
        }
    });
    // Función para validar todo el formulario
    const validateForm = () => {
        let isValid = true;
        isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;
        isValid = validateField('password', 'La contraseña es obligatoria') && isValid;
        return isValid;
    };

    // Función para validar un campo específico
    const validateField = (fieldId, errorMessage) => {
        // Obtiene el elemento del campo mediante su ID
        const field = document.getElementById(fieldId);
        const value = field.value.trim();
        // Si el valor del campo está vacío
        if (value === '') {
            // Establece un mensaje de error para el campo
            setErrorFor(field, errorMessage);
            // Devuelve false:la validación ha fallado
            return false;
        } else {
            // Si el valor del campo no está vacío, elimina cualquier mensaje de error anterior
            setSuccessFor(field);
            // Devuelve true indicando que la validación ha tenido éxito
            return true;
        }
    };

    // Función para validar el campo de correo electrónico
    const validateEmailField = (fieldId, errorMessage) => {
        // Obtiene el elemento del campo de correo electrónico mediante su ID
        const field = document.getElementById(fieldId);
        // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
        const email = field.value.trim();
        // Si el campo de correo electrónico está vacío
        if (email === '') {
            // Establece un mensaje de error para el campo de correo electrónico
            setErrorFor(field, 'El correo electrónico es obligatorio');
            // Devuelve false indicando que la validación ha fallado
            return false;
        // Si el campo de correo electrónico no está vacío pero no es válido
        } else if (!isEmail(email)) {
            // Establece un mensaje de error para el campo de correo electrónico
            setErrorFor(field, errorMessage);
            // Devuelve false indicando que la validación ha fallado
            return false;
        } else {
            // Si el campo de correo electrónico es válido, elimina cualquier mensaje de error anterior
            setSuccessFor(field);
            // Devuelve true indicando que la validación ha tenido éxito
            return true;
        }
    };
    // Función para establecer un mensaje de error en un campo
    const setErrorFor = (input, message) => {
        const formControl = input.closest('div');
        const errorText = formControl.querySelector('.error-text');
        // Agrega clase error
        formControl.classList.add('error');
        // Establece el texto del mensaje de error
        errorText.innerText = message;
        // Establece el foco en el campo de entrada
        input.focus();
    };

    // Función para eliminar un mensaje de error de un campo
    const setSuccessFor = (input) => {
        // Encuentra el elemento padre del campo de entrada
        const formControl = input.closest('div');
        // Elimina la clase de error 
        formControl.classList.remove('error');
        // Encuentra el elemento de texto de error 
        const errorText = formControl.querySelector('.error-text');
        // Establece el texto de error como vacío
        errorText.innerText = '';
    };

    // Función para validar cadena correo
    const isEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Verifica si el correo electrónico cumple con el formato
        return re.test(email);
    };
     form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value.trim();
            // Si el campo no está vacío, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(input);
            }
        });
    });
     // Agrega eventos para borrar las clases de error 
     form.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => {
            // Obtiene el valor del campo 
            const value = select.value;
            // Si se selecciona una opción, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(select);
            }
        });
    });

   
});