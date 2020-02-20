const url = 'http://localhost:3001';


export const getCustomers = () => fetch(`${url}/costumers`).then(v => v.json());

export const updateCustomer = (id, customer) => fetch(`${url}/costumers/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json());