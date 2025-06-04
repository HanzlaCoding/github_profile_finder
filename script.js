function myCode() {
    const searchBtn = document.querySelector('button');
    const searchInput = document.querySelector('#usernameInput');
    const loading = document.querySelector('#loadingAnimation')
    const userCard = document.querySelector('#userDataDisplay')
    const inside = document.querySelector('#userDataDisplay .inside')
    const notFoundAnimation = document.querySelector('.not-found-container')

    searchBtn.addEventListener('click', () => {
        fetch(`https://api.github.com/users/${searchInput.value}`)
            .then((raw) => {
                if (raw.status === 404 || raw.ok === false) {
                    console.log(raw);
                    loading.style.display = 'none';
                    loadingDone = notFoundAnimation.style.display = 'block';
                    inside.innerHTML = loadingDone;
                    userCard.textContent = ''
                    return;
                }
                return raw.json();
            })
            .then((data) => {
                loading.style.display = 'none';
                const {
                    avatar_url,
                    company,
                    followers,
                    following,
                    location,
                    login,
                    name,
                    public_repos,
                    blog,
                    bio // Bio field bhi add kiya gaya hai
                } = data;
                userCard.innerHTML = `
                    <div class="flex-shrink-0">
                        <img
                            src=${avatar_url}
                            alt="Placeholder Avatar"
                            class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                        >
                    </div>
                
                    <div class="flex-grow text-gray-200"> <div class="">
                            <h2 class="text-sm md:text-2xl font-bold text-white leading-tight">${name}</h2>
                            <p class="text-blue-400 text-base md:text-lg mt-1 md:mt-0">@${login}</p>
                        </div>
                        
                        <p class="text-sm text-gray-300 mb-4 leading-relaxed">
                            ${bio ? bio : 'No bio available...'}
                        </p>
                
                        <div class="flex whitespace-nowrap gap-x-3 gap-y-2 text-sm font-medium mb-2">
                            <div class="items-center">
                                <span class="text-gray-400">Public Repos: <span class="font-semibold text-white">${public_repos}</span></span>
                            </div>
                            <div class="items-center">
                                <span class="text-gray-400">Followers: <span class="font-semibold text-white">${followers}</span></span>
                            </div>
                            <div class="items-center">
                                <span class="text-gray-400">Location: <span class="font-semibold text-white">Placeholder City</span></span>
                            </div>
                        </div>
                
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium">
                            <div class="flex items-center">
                                <span class="text-gray-400">Company: <span class="font-semibold text-white">Placeholder Inc.</span></span>
                            </div>
                            <div class="flex items-center">
                                <span class="text-gray-400">Blog: <a href="#" target="_blank" class="text-blue-400 hover:underline">${blog ? blog : 'No blog available...'}</a></span>
                            </div>
                        </div>
                    </div>
                `;
            })

    }
    )
}

function updatedCode() {
    const searchBtn = document.querySelector('button');
    const searchInput = document.querySelector('#usernameInput');
    const loading = document.querySelector('#loadingAnimation')
    const userCard = document.querySelector('#userDataDisplay')
    const inside = document.querySelector('#userDataDisplay .inside')
    const notFoundAnimation = document.querySelector('.not-found-container')

    searchBtn.addEventListener('click', () => {
        fetch(`https://api.github.com/users/${searchInput.value}`)
            .then((raw) => {
                if (raw.status === 404 || raw.ok === false) {
                    console.log(raw);
                    loading.style.display = 'none';
                    loadingDone = notFoundAnimation.style.display = 'block';
                    inside.innerHTML = loadingDone;
                    userCard.textContent = ''
                    location.reload()
                    return;
                }
                return raw.json();
            })
            .then((data) => {
                loading.style.display = 'none';
                const {
                    avatar_url,
                    company,
                    followers,
                    following,
                    location,
                    login,
                    name,
                    public_repos,
                    blog,
                    bio // Bio field bhi add kiya gaya hai
                } = data;
                userCard.innerHTML = `
                <div class="flex-shrink-0 m-auto">
                    <img
                        src=${avatar_url}
                        alt="Placeholder Avatar"
                        class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                    >
                </div>
            
                <div class="flex-grow text-gray-200 w-full"> <div class="">
                        <h2 class="text-sm md:text-2xl font-bold text-white leading-tight">${name}</h2>
                        <p class="text-blue-400 text-base md:text-lg mt-1 md:mt-0">@${login}</p>
                    </div>
                    
                    <p class="text-sm text-gray-300 mb-4 leading-relaxed">
                        ${bio ? bio : 'No bio available...'}
                    </p>
            
                    <div class="flex whitespace-nowrap gap-x-3 gap-y-2 text-sm font-medium mb-2 md:whitespace-normal flex-wrap">
                        <div class="items-center">
                            <span class="text-gray-400">Public Repos: <span class="font-semibold text-white">${public_repos}</span></span>
                        </div>
                        <div class="items-center">
                            <span class="text-gray-400">Followers: <span class="font-semibold text-white">${followers}</span></span>
                        </div>
                        <div class="items-center">
                            <span class="text-gray-400">Location: <span class="font-semibold text-white">Placeholder City</span></span>
                        </div>
                    </div>
            
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium">
                        <div class="flex items-center">
                            <span class="text-gray-400">Company: <span class="font-semibold text-white">Placeholder Inc.</span></span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-gray-400">Blog: <a href="#" target="_blank" class="text-blue-400 hover:underline">${blog ? blog : 'No blog available...'}</a></span>
                        </div>
                    </div>
                </div>
            `;
            })

    }
    )
}

geminiCode();
