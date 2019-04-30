
 const adapters = {
    getShows: getShows,
    createUser: createUser,
    getFirstUser: getFirstUser
}

export default adapters

function getShows() {
    return fetch("http://localhost:3000/api/v1/shows")
}

function createUser(newCredentials) {
    const { username, password, file} = newCredentials
    return fetch(`http://localhost:3000/api/v1/users`, {
        "method": "POST",
        "body": JSON.stringify({user:{username: username, password: password, avatar: file}}),
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
}

function getFirstUser() {
    return fetch(`http://localhost:3000/api/v1/users/1`)
    .then(r => r.json())
}