import environment from '@core/environment.json';

export const get = () => localStorage.getItem(environment.SESSION.KEY);
export const set = token =>localStorage.setItem(environment.SESSION.KEY, token);
