const axios = require('axios');

    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then(({data})=>{
        console.log(data[0]);
        const quote = data[0];

        const simpsonshtml = `
            <article>
                <h3><strong>${quote.character}</strong></h3>
                <img src="${quote.image}" />
                <p><strong>${quote.quote}</strong></p>
                <p><strong>${quote.characterDirection}</strong></p>
            <article>
        `;
        const divSimps = document.querySelector('#simpson');
        divSimps.innerHTML = simpsonshtml;
    });

