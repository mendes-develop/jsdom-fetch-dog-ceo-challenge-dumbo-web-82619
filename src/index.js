console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {

// Constants
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// Variables
  let dogDiv = document.querySelector("#dog-image-container")
  let dogUl = document.querySelector("#dog-breeds")

// Dog images FETCH
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(jsonObject => {

      let dogArray = jsonObject.message
      dogArray.forEach(function(dogUrl) {
        // Do Something?
        dogDiv.innerHTML += `<img src="${dogUrl}" alt="dogImage">`

      })

    })


// Dog breeds FETCH
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(jsonObject => {

      let dogBreedHash = jsonObject.message
      let breedArray = Object.keys(dogBreedHash)

      breedArray.forEach( breed => {
        dogUl.innerHTML += `<li>${breed}</li>`
      })

    })

// Change li element color
  dogUl.addEventListener('click', function(evt){

    if (evt.target.tagName === 'LI') {
      evt.target.style.color = 'green'
    }

  })

// Filter elements

function checkContainsLetter(letter) {
 arrayLiElements = dogUl.querySelectorAll('li').map(li => {
   if (li.textContent.includes(letter)) {
    li
  }
  return arrayLiElements
})






} )
