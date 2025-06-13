export const setToken = (token: string) => {
  localStorage.setItem('jwt', token);
};

export const getToken = (): string | null => {
  return typeof window !== 'undefined' ? localStorage.getItem('jwt') : null;
};

export const removeToken = () => {
  localStorage.removeItem('jwt');
};
