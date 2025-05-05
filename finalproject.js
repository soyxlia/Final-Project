const babies = [
    {
      id: 0,
      name: "Lexi",
      breed: "Pitbull",
      age: 8,
      lifestory:" Baby Lexi is the youngest and she is my younger older brother's dog, he brought her on a whim. She is still with us today and even though PitBulls get a bad rep she is such a loveBug. She was the only one friendly towards people, her cousins would try to fight anybody bigger than them. Though I believe she has been super depressed and lonely because she lost her cousins :( No one is here to yell at her anymore. Fun Fact even though she is my brother's dog I named her after Lexie from Grey's Anatomy. ",
      summary: function(){
        return `Name: ${this.name}\nBreed: ${this.breed}\nAge: ${this.age}\nLife Story: ${this.lifestory}`;
    }

    },
  
    {
      id: 1,
      name: "Miggy",
      breed: "Chihuahua Mix",
      age: 11,
      lifestory:"Miggy was the light of my life and more than just a pet, she was my baby. Meeting her was like fate because she came into my life at a time where I needed her most. From then on she was the best companion anybody could ask for. She had to be put to rest in November and coincidentally Mimi passed away the next day :(. Mimi didn't want her to be alone. It's undescribable how much I miss her and it was genuinely so hard being in your class because the TA named Siggy. It felt like the universe was trying to set me up ",
      summary: function(){
        return `Name: ${this.name}\nBreed: ${this.breed}\nAge: ${this.age}\nLife Story: ${this.lifestory}`;
    }

    },
  
    {
      id: 2,
      name: "Kj",
      breed: "Chihuahua Mix",
      age: 13,
      lifestory: "Kj, was the oldest dog. He was technically my mom's baby, so by extension he was like another older brother to me. He came home to us because a family friend wasn't able to keep him because he kept getting bullied by the other dogs. Lol I know he was glad to come live with us because my mom spoiled him.  Unfortunately, he passed away at the beginning of February. It's hard to think about but I try to remember that he lived a long-fruitful life and he is no longer suffering. ",
      summary: function(){
    	return `Name: ${this.name}\nBreed: ${this.breed}\nAge: ${this.age}\nLife Story: ${this.lifestory}`;
    }
    },
  
    {
      id: 3,
      name: "Mimi",
      breed: "cat",
      age: 14,
      lifestory:"Mimi was the oldest, she came with the house I moved into when I was 11 years old because the previous owners abandoned her there. We never had a cat before because my oldest older brother was always allergic to cats, but Mimi was the exception I guess. And you know what that means, that was he daughter and my niece by extension lol.  Her nickname was Queen Mimi because even though she was surrounded by dogs, they all knew who was the Boss and took no chance messing with her. R.I.P to the Queen",
      summary: function(){
        return `Name: ${this.name}\nBreed: ${this.breed}\nAge: ${this.age}\nLife Story: ${this.lifestory}`;
    }
    }
];

    let isOpen = false; 

    document.getElementById("summary").innerHTML =babies[0].summary();
    document.getElementById("summary1").innerHTML =babies[1].summary();
    document.getElementById("summary2").innerHTML =babies[2].summary();
    document.getElementById("summary3").innerHTML =babies[3].summary();



    function handleModal(id){
    
        if(isOpen){
      
          id.style.display = 'none'
        isOpen = false 
      }
      
      else {
      id.style.display = "block"
      isOpen = true 
      
      }
    
    }
    