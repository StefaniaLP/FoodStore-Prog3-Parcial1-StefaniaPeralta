import type { IUser } from '../types/Iuser';

export const saveUser = (user: IUser): void => {
	const userString = JSON.stringify(user);

	localStorage.setItem('userData', userString);
};

export const getUser = (): string | null => {
	return localStorage.getItem('userData');
};

export const removeUser = (): void => {
	localStorage.removeItem('userData');
};