    let quotes = [
      {
        quote:
          "Be kind, for everyone you meet is fighting a hard battle.",
        author: "Plato"
      },
      {
        quote:
          "One day I will find the right words, and they will be simple.",
        author: " Jack Kerouac"
      },
      {
        quote:
          "Everything is hard before it is easy.",
        author: "Goethe"
      },
      {
        quote: "Life is a journey, not a destination.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote:
          "As you start to walk on the way, the way appears.",
        author: "Rumi"
      }
    ]
  
    let btn = document.querySelector("button")
    let text =  document.getElementById("quote")
    let author = document.querySelector(".author")
    btn.addEventListener("click", getQuote) 
       function getQuote() {
       let randonNumber = parseInt(Math.random() * quotes.length)
       text.innerHTML = quotes[randonNumber].quote
       author.innerHTML = quotes[randonNumber].author
       }
       
  
  
  