
 const adapters = {
    getShows: getShows,
    createUser: createUser,
    getFirstUser: getFirstUser
}

export default adapters

function getShows() {
    return fetch("http://localhost:3000/api/v1/shows")
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
    return fetch(`http://localhost:3000/api/v1/users/2`)
    .then(r => r.json())
}