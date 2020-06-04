fetch('https://gh-pinned-repos.now.sh/?username=yuchenliu15')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementsByClassName("container")[0];
        const cardContainer = document.createElement("div");
        cardContainer.setAttribute('class', 'card-container');
        container.appendChild(cardContainer);

        for (let index in data) {
            const title = data[index].repo;
            const div = document.createElement("div");
            div.setAttribute('class', 'card');
            div.textContent = title;
            cardContainer.appendChild(div);
        }

    })