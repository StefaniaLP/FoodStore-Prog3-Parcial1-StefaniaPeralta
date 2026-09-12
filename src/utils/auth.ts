import type { IUser } from '../types/Iuser';
import type { Rol } from '../types/Rol';

import { getUser, removeUser } from './localStorage';
import { navigate } from './navigate';

export const checkAuthUser = (
    redireccionSinSesion: string,
    redireccionRolIncorrecto: string,
    rol: Rol
    ): void => {

        const user = getUser();

        if (!user) {
            navigate(redireccionSinSesion);
            return;
        }

        const usuario: IUser = JSON.parse(user);

        if (usuario.rol !== rol) {
            navigate(redireccionRolIncorrecto);
            return;
        }
};

export const logout = (): void => {
    removeUser();

    navigate('/src/pages/auth/login/login.html');
};