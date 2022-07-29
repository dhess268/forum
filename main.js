// your code here
let submitButton = document.querySelector('#submit') 
submitButton.addEventListener('click', (event) => {
  let namePart = document.createElement('div')
  let wholePart = document.createElement('div')
  let msgPart = document.createElement('div')
  let upvote = document.createElement('i')
  let downvote = document.createElement('i')
  let scorePart = document.createElement('div')
  wholePart.score = 0
  upvote.addEventListener('click', (evt) => {
    evt.target.parentElement.parentElement.score += 1
    evt.target.parentElement.parentElement.children[2].innerText = evt.target.parentElement.parentElement.score
    // console.log(evt.target.parentElement.parentElement.children[2])
    shuffleList()
  })

  downvote.addEventListener('click', (evt) => {
    evt.target.parentElement.parentElement.score -= 1
    evt.target.parentElement.parentElement.children[2].innerText = evt.target.parentElement.parentElement.score
    // console.log(evt.target.parentElement.parentElement.children[2])
    shuffleList()
  })
  upvote.className = "fa fa-solid fa-angles-up upvote fa-lg"
  downvote.className = "fa-solid fa-angles-down downvote fa-lg"
  
  // Need to create the grid layout by using diff html elements
  wholePart.appendChild(namePart)
  wholePart.appendChild(msgPart)
  wholePart.appendChild(scorePart)
  wholePart.className = 'row sick'
  namePart.className = "row"
  msgPart.className = "row"
  scorePart.className = "row score"
  // for readability we hold the values in variables
  let name = document.querySelector('#name').value
  let message = document.querySelector('#message').value

  let strong = document.createElement('strong')
  strong.innerText = name
  let messageTextElem = document.createTextNode(message)
  wholePart.style.borderTop = "solid 1px gray"
  scorePart.innerText = wholePart.score
  
  
  // To make sure the ordering is correct...
  namePart.appendChild(upvote)
  msgPart.appendChild(downvote)
  namePart.appendChild(strong)
  msgPart.appendChild(messageTextElem)


  //styling
  wholePart.style.paddingLeft = "5%"
  wholePart.style.paddingTop = "2%"
  wholePart.style.paddingBottom = "2%"
  msgPart.style.paddingTop = ".5%"
  upvote.style.paddingRight = "1%"
  scorePart.style.paddingTop = ".5%"
  downvote.style.paddingRight = "1%"
  upvote.style.color = "orange"
  downvote.style.color = "blue"
  // reset submit fields and append to the DOM
  document.querySelector('.posts').appendChild(wholePart)
  document.querySelector('#name').value = ""
  document.querySelector('#message').value = ""
  shuffleList()
})



function shuffleList(){  
  const frag = document.createDocumentFragment();
  const list = document.querySelector(".posts");
  const items = list.querySelectorAll(".sick");
  const sortedList = [...items].sort((a, b) => {
      const c = a.score
      const d = b.score 
    return c < d ? 1 : c > d ? -1 : 0;
  });
  for (const item of sortedList) {
    frag.appendChild(item);
  }
  list.appendChild(frag);
}
