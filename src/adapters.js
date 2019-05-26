
 const adapters = {
    getShows: getShows,
    createUser: createUser,
    getFirstUser: getFirstUser,
    getGenres: getGenres,
    addShow: addShow
}

export default adapters

function getShows() {
    return fetch("http://localhost:3000/api/v1/shows")
}

function addShow(data) {
    return fetch('http://localhost:3000/api/v1/shows', {
        "method": "POST",
        "body": data,
        "headers": {
            "Accept": "application/json"
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