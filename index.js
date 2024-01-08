// Code your solutions in this file

  function writeCards(names, eventName) {
    let cards = [];
  
      for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return cards;
  }

  const namesArray = ["Alice", "Bob", "Charlie"];
  
  
  const thankYouCards = writeCards(namesArray, event);
  
     console.log(thankYouCards);
  
  
  
     function countDown(startingNumber) {
        if (startingNumber < 0) {
          console.log("Please provide a positive integer.");
          return;
        }
      
        for (let i = startingNumber; i >= 0; i--) {
          console.log(i);
        }
      }
      