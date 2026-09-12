import './style.css'
import { navigate } from './utils/navigate';
import { checkAuthUser, logout} from './utils/auth';

const rutaActual: string = window.location.pathname;

if (rutaActual === '/') {
    navigate('/src/pages/auth/login/login.html');
}

if (rutaActual.includes('/admin/')) {
    checkAuthUser(
        '/src/pages/auth/login/login.html',
        '/src/pages/client/home/home.html',
        'admin'
    );
}

if (rutaActual.includes('/client/')) {
    checkAuthUser(
        '/src/pages/auth/login/login.html',
        '/src/pages/admin/home.html',
        'client'
    );
}

const botonLogout = document.querySelector<HTMLButtonElement>('#btn-logout');

botonLogout?.addEventListener('click', () => {
    logout();
});