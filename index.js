let apiBase = 'https://api.github.com/'
let user = 'Vladoxx'
let endpoint = `users/${user}/repos`

let requestUrl = apiBase + endpoint

function displayRepos(repos) {
    let container = document.querySelector('#repos')
    
    for ( let repo of repos ) {
        let card = document.createElement('a')
        card.textContent = repo.name
        card.href = repo.link
        card.target = '_blank'
        card.rel = 'noopener'
        card.classList.add('card')
        container.appendChild(card)
    }  
}

fetch(requestUrl)
.then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => {
    let repos = []
    data.forEach(repo => {
        repos.push({
            name: repo.name,
            link: repo.html_url
        })
    })
    displayRepos(repos)
})
