const babies = [
    {
      id: 0,
      name: "Lexi",
      breed: "Pitbull",
      summary: function(){
    	return `Name: ${this.name}\n Breed: ${this.breed}`;
    }

    },
  
    {
      id: 1,
      name: "Miggy",
      breed: "Chihuahua Mix",
      summary: function(){
    	return `Name: ${this.name}\n Breed: ${this.breed}`;
    }

    },
  
    {
      id: 2,
      name: "Kj",
      breed: "Chihuahua Mix",
      summary: function(){
    	return `Name: ${this.name}\n Breed: ${this.breed}`;
    }
    },
  
    {
      id: 3,
      name: "Mimi",
      breed: "cat",
      summary: function(){
    	return `Name: ${this.name}\n Breed: ${this.breed}`;
    }
    }
];

    let isOpen = false; 
    
    document.getElementById("summary").innerHTML =babies[0].summary();


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
    