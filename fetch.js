const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
    return fetch(url , {
        method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {},
    })
    .then(response => {
        if (!response.ok) {
            return response.json()
            .then(errData => {
                // You have to parse the response to get that errData variable (At least that how I understand it)
                const error = new Error('Something Went wrong');
                error.data = errData;
                throw error // This is used so we can reach the catch statement when use the function
            })
        } 
        return response.json();
    })
}
const getData = () => {
    sendHttpRequest('GET',  'https://reqres.in/api/users?page=2')
        .then(response => {
            console.log(response);
        })
        
}

const postData = () => {
    sendHttpRequest('POST',  'https://reqres.in/api/register', {
        email: "sydney@fife"
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
        console.log(err.data);
    }) 
}

// Browser support is not broad and good as xhr object
getBtn.addEventListener('click' , getData);
postBtn.addEventListener('click' , postData);