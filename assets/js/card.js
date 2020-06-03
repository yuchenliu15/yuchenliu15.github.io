fetch('https://gh-pinned-repos.now.sh/?username=yuchenliu15')
    .then(res => res.json())
    .then(data => {
        const node = document.getElementsByClassName("card-container");
        for (let index in data) {
            node[0].innerHTML += data[index].repo + "\n";
        }

    })