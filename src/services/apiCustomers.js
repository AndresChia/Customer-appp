const url = 'http://localhost:3001/costumers';

export const apiFetchCustomers = () => fetch(url).then(v => v.json());