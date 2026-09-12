import type { IUser } from '../../../types/Iuser';
import { navigate } from '../../../utils/navigate';
import { saveUser } from '../../../utils/localStorage';
import '../../../style.css';

const formulario =
    document.querySelector<HTMLFormElement>('#form-login');

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

    const users: IUser[] = usersGuardados
        ? JSON.parse(usersGuardados)
        : [];

    const usuarioEncontrado = users.find(
        (user) =>
            user.email === email &&
            user.password === password
    );

    if (!usuarioEncontrado) {
        alert('Email o contraseña incorrectos');
        return;
    }

    usuarioEncontrado.loggedIn = true;

    saveUser(usuarioEncontrado);

    //redirecciono a cada usuario segun su rol
    if (usuarioEncontrado.rol === 'admin') {
        navigate('/src/pages/admin/home.html');
    } else {
        navigate('/src/pages/client/home/home.html');
    }

});