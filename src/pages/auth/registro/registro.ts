import type { IUser } from '../../../types/Iuser';
import { navigate } from '../../../utils/navigate';
import '../../../style.css';

const formulario =
    document.querySelector<HTMLFormElement>('#form-registro');

const inputEmail =
    document.querySelector<HTMLInputElement>('#email');

const inputPassword =
    document.querySelector<HTMLInputElement>('#password');

formulario?.addEventListener('submit', (event: SubmitEvent) => {

    event.preventDefault();

    if (!inputEmail || !inputPassword) {
        return;
    }

    const email: string = inputEmail.value;
    const password: string = inputPassword.value;

    const usersGuardados = localStorage.getItem('users');

    const users: IUser[] = usersGuardados ? JSON.parse(usersGuardados)  : [];

    // Voy a validar antes si el usuario ya existe, para no ingresar un dupl.
    const usuarioExistente = users.find(
        (user) => user.email === email
    );

    if (usuarioExistente) {
        alert('El usuario ya está registrado');
        return;
    }

    const nuevoUsuario: IUser = {
        email: email,
        password: password,
        rol: email === 'admin@gmail.com' ? 'admin' : 'client',
        loggedIn: false
    };

    users.push(nuevoUsuario);

    localStorage.setItem(
        'users',
        JSON.stringify(users)
    );

    alert('Usuario registrado correctamente');

    navigate('../login/login.html');

});