
 const adapters = {
    getShows: getShows,
    createUser: createUser,
    getFirstUser: getFirstUser,
    getGenres: getGenres,
    addShow: addShow,
    loginUser: loginUser
}

export default adapters

function getShows() {
    return fetch("http://localhost:3000/api/v1/shows")
}

function loginUser(data) {
    return fetch('http://localhost:3000/auth/login', {
        "method": "POST",
        "body": data,
        "headers": {
            "Accept": "application/json",
        }
    })

}

function addShow(data) {
    return fetch('http://localhost:3000/api/v1/shows', {
        "method": "POST",
        "body": data,
        "headers": {
            "Accept": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    })
}

function createUser(data) {
    return fetch(`http://localhost:3000/api/v1/users`, {
        "method": "POST",
        "body": data,
        "headers": {
            "Accept": "application/json"
        }
    })
}

function getFirstUser() {
    return fetch(`http://localhost:3000/api/v1/users/1`)
    .then(r => r.json())
}

function getGenres() {
    return fetch(`http://localhost:3000/api/v1/genres`)
    .then(r => r.json())
}