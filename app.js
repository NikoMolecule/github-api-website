const githubDisplayer = document.getElementById('main-container')
const errorP = document.getElementById('error')
const imageNode = document.querySelector('.image-node')
const image = document.querySelector('img')
const button = document.querySelector('button')
const username = document.querySelector('input')

fetch(`https://api.github.com/users/NikoMolecule`)
.then(data => data.json())
.then(data => {
    const {avatar_url, followers, following, login, public_repos} = data
    githubDisplayer.innerText = `Username: ${login}\nFollowers: ${followers}\nFollowing: ${following}\n Respositories: ${public_repos}`
    image.src = avatar_url
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username.value}`)
    .then(data => data.json())
    .then(data => {
        if(data.message == "Not Found"){
            githubDisplayer.innerText = `Username: \nFollowers: \nFollowing: \n Respositories: `
            image.src = "./assets/Info_non-talk.svg.png"
            errorP.innerText = "Error! User is not found, try a correct name"
        } else {
            imageNode.appendChild(image)
            const {avatar_url, followers, following, login, public_repos} = data
            githubDisplayer.innerText = `Username: ${login}\nFollowers: ${followers}\nFollowing: ${following}\n Respositories: ${public_repos}`
            image.src = avatar_url
            errorP.innerText = ''
        }
})
.catch(error => {
    console.log(error)
})
})
