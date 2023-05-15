const Card = (article) => {
  const dcard = document.createElement('div')
  const dheadline =document.createElement('div')
  const dauthor = document.createElement('div')
  const dimg = document.createElement('div')
  const img = document.createElement('img')
  const sby = document.createElement('span')

  dcard.appendChild(dheadline)
  dcard.appendChild(dauthor)
  dauthor.appendChild(dimg)
  dimg.appendChild(img)
  dauthor.appendChild(sby)

  dcard.classList.add('card')
  dheadline.classList.add('headline')
  dauthor.classList.add('author')
  dimg.classList.add('img-container')

  dheadline.textContent = `${article.headline}`
  img.src = article.authorPhoto
  sby.textContent = `By ${article.authorName}`

  dcard.addEventListener('click', () => {
    console.log(dheadline)
  })

  return dcard



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

import axios from 'axios'

const cardAppender = (selector) => {
  const entry = document.querySelector(selector)
  axios.get(`http://localhost:5001/api/articles`)
  .then( res => {
    console.log(res)
    
    res.data.articles.bootstrap.forEach( article => {
      entry.appendChild(Card(article))
    })
    res.data.articles.javascript.forEach( article => {
      entry.appendChild(Card(article))
    })
    res.data.articles.jquery.forEach( article => {
      entry.appendChild(Card(article))
    })
    res.data.articles.node.forEach( article => {
      entry.appendChild(Card(article))
    })
    res.data.articles.technology.forEach( article => {
      entry.appendChild(Card(article))
    })  
  })
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
