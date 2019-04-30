
 const adapters = {
    getShows: getShows
}

export default adapters

function getShows() {
    return fetch("http://localhost:3000/api/v1/shows")
}