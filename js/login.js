const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const passwordIcon = document.getElementById('passwordIcon');

togglePassword.addEventListener('click', () => {
    const isPasswordVisible = passwordField.type === 'text';
    passwordField.type = isPasswordVisible ? 'password' : 'text';

    // Cambiar el ícono del ojo
    passwordIcon.src = isPasswordVisible 
        ? 'assets/images/icons-login/eye-closed-icon.svg' 
        : 'assets/images/icons-login/eye-open-icon.svg';
});