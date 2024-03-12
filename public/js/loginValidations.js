window.onload = function() {
    let form = document.querySelector(".form-login");

    // Verificar si el formulario se encontró correctamente
    if (form === null) {
        console.error("No se encontró el formulario con la clase '.form-login'");
        return; // Detener la ejecución si el formulario no se encontró
    }

    // Intentar acceder a los elementos del formulario
    let usernameInput = form.querySelector('input[name="username"]');
    let passwordInput = form.querySelector('input[name="password"]');

    // Validaciones de los campos del formulario
    usernameInput.focus();

    // Validación para el campo de usuario
    usernameInput.addEventListener('blur', () => {
        if (usernameInput.value.trim() === "") {            
            showError(usernameInput, "El nombre de usuario no puede estar vacío");
        } else {
            clearError(usernameInput);
        } 
    });

    

    // Validación para el campo de contraseña
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value.trim() === "") {            
            showError(passwordInput, "La contraseña no puede estar vacía");
        } else {
            clearError(passwordInput);
        } 
    });

    passwordInput.addEventListener('blur', ()=> {
        if (passwordInput.value.length < 8) {
            showError(passwordInput, "La contraseña debe tener al menos 8 caracteres");
          }else {
            clearError(passwordInput);
        } 

    })

    // Función para mostrar un mensaje de error y resaltar el campo
    function showError(inputElement, errorMessage) {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
        alert(errorMessage);
    }

    // Función para eliminar el mensaje de error y restablecer el estilo del campo
    function clearError(inputElement) {
        inputElement.classList.add("is-valid");
        inputElement.classList.remove("is-invalid");
    }
};