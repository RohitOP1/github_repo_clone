document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.querySelector('.repo-list');
    const searchInput = document.getElementById('search');
    const languageFilter = document.getElementById('language-filter');

    const repositories = [
        
        { name: 'Repo 1', description: 'Description for repo 1', stars: 10, language: 'JavaScript' },
        { name: 'Repo 2', description: 'Description for repo 2', stars: 20, language: 'Python' },
        { name: 'Repo 3', description: 'Description for repo 1', stars: 10, language: 'JavaScript' },
        { name: 'Repo 4', description: 'Description for repo 2', stars: 20, language: 'Python' },
        { name: 'Repo 5', description: 'Description for repo 1', stars: 10, language: 'JavaScript' },
        { name: 'Repo 6', description: 'Description for repo 2', stars: 20, language: 'Python' },
        { name: 'Repo 7', description: 'Description for repo 1', stars: 10, language: 'JavaScript' },
        { name: 'Repo 8', description: 'Description for repo 2', stars: 20, language: 'Python' },
        
    ];

    const displayRepositories = (repos) => {
        repoList.innerHTML = '';
        repos.forEach(repo => {
            const repoItem = document.createElement('div');
            repoItem.className = 'repo-item';
            repoItem.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <p>Stars: ${repo.stars}</p>
                <button class="star-btn">Star</button>
            `;
            repoList.appendChild(repoItem);
        });
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredRepos = repositories.filter(repo => repo.name.toLowerCase().includes(query));
        displayRepositories(filteredRepos);
    });

    languageFilter.addEventListener('change', () => {
        const language = languageFilter.value;
        const filteredRepos = repositories.filter(repo => !language || repo.language === language);
        displayRepositories(filteredRepos);
    });

    displayRepositories(repositories);

    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    let loggedIn = false;

    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
    ];

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            loggedIn = true;
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            alert('Login successful!');
        } else {
            alert('Invalid credentials!');
        }
    });

    logoutBtn.addEventListener('click', () => {
        loggedIn = false;
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        alert('Logged out!');
    });
});
