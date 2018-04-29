
const el = document.getElementById('root');
fetch('https://www.reddit.com/r/javascript.json?limit=9')
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.data.children.length; i++) {
      console.log(response);
      el.innerHTML += `<h3>${response.data.children[i].data.title}</h3>`;
      el.innerHTML += `<p>${response.data.children[i].data.selftext}</p>`
      el.innerHTML += `<p>${'https://www.reddit.com/r/javascript.json'+response.data.children[i].data.permalink}</p>`;
    }
  });


