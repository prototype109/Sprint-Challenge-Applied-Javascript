// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(cardData => {
        let articleKeys = Object.values(cardData.data.articles);
        //const dataArray = Array.from(cardData.data.articles);
        const cardContainer = document.querySelector('.cards-container');
        articleKeys.forEach(arrItem => {
            //console.log(arrItem);
            arrItem.forEach(itemObj => {
                console.log(itemObj);
                cardContainer.appendChild(Cards(itemObj));
            })
        })
        //console.log(data.data.articles);
        //console.log('array: ', dataArray);
    }).catch(err => {
        console.log('error in cards: ', err);
    });

function Cards(cardValue){
    const card = document.createElement('div');
    card.classList.add('card');

    const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = cardValue.headline;

    card.appendChild(headLine);

    const authorHolder = document.createElement('div');
    authorHolder.classList.add('author');

    card.appendChild(authorHolder);

    const imgHolder = document.createElement('div');
    imgHolder.classList.add('img-container');

    authorHolder.appendChild(imgHolder);

    const img = document.createElement('img');
    img.src = cardValue.authorPhoto;

    imgHolder.appendChild(img);

    const createdBy = document.createElement('span');
    createdBy.textContent = `By ${cardValue.authorName}`;

    authorHolder.appendChild(createdBy);

    card.appendChild(authorHolder);

    return card;
}