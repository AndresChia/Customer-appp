const url = 'http://localhost:3001';


//GET
export const getCustomers = () => fetch(`${url}/costumers`).then(v => v.json());
//PUT
export const updateCustomer = (id, customer) => fetch(`${url}/costumers/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json()).then(r => {
        if (r.error) {
            // r.validation depende del nombre que le pongan en back
            return Promise.reject(r.validation);
        }
        return r;
    });
//POST
export const insertCustomer = (customer) => fetch(`${url}/costumers`,
    {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json()).then(r => {
        if (r.error) {
            // r.validation depende del nombre que le pongan en back
            return Promise.reject(r.validation);
        }
        return r;
    });