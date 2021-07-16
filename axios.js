const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


// const getData = async () => {

// }

function doStuff() {
    getData();
    dosomething();
}

async function getData () {
    try {
        const response = await axios.get('https://reqres.in/api/users?delay=3');
        console.log(response);        
    } catch (error) {
        console.log(error);
    }
}

function dosomething() {
    console.log('Waiting for the data');
}

const postData = () => {
    axios.post('https://reqres.in/api/register' , {
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then( response => {
        console.log(response);
    })
    .catch( err => {
        console.log(err , err.response);
    })
}



getBtn.addEventListener('click' , doStuff);
postBtn.addEventListener('click' , postData);