   (function() {
    const pictures = [
      "contBcg-0",
      "contBcg-1",
      "contBcg-2",
      "contBcg-3",
      "contBcg-4"
    ];
  
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('#img-container')
    let counter = 0
  
    buttons.forEach(function(button){
      button.addEventListener('click', function(){
        if (button.classList.contains('btn-left')){
          counter--
          if(counter < 0){
            counter = parseInt(Math.random() *pictures.length)
          }
      
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }
        if (button.classList.contains('btn-right')){
          counter++
          if(counter > 0 ){
            counter = parseInt(Math.random() *pictures.length)
          };
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }
      })
    })
  })();
