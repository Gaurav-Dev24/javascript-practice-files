const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  const data = await response.json();
//   console.log(data);
  const card = `
    <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    `;
    main.innerHTML = card;
    getRepos(username);
};


const getRepos = async (username) => {
    const repos = document.querySelector("#repos");

    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    data.forEach(item    => {
        const element = document.createElement("a");
        element.classList.add("repo");
        element.href= item.html_url;
        element.target= "_blank";
        element.innerText = item.name;
        repos.appendChild(element);
    });
}

const formSubmit = () => {
    if(searchBox != ""){
        getUser(searchBox.value);
        searchBox.value = "";
    }  
    
    return false; // this line stop refreshing the page on formSubmit
}

searchBox.addEventListener(
    "focusout",
    function(){
        formSubmit();
    }
    )

