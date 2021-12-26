   (function() {
    const pictures = [
      "contBcg-0",
      "contBcg-1",
      "contBcg-2",
      "contBcg-3",
      "contBcg-4"
    ];
  
    const button = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('#img-container')
    let counter = parseInt(Math.random() *pictures.length)

    imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    button.forEach(function(button){
      button.addEventListener('click' ,function(){
        if (button.classList.entries('btn-left','btn-right')){
          counter--
          if(counter < parseInt(Math.random() *pictures.length)){
            // counter = parseInt(Math.random() *pictures.length)
          }
      
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }

        // img-container.style.backgroundImage
        // if (button.classList.contains('btn-right')){
        //   counter++
        //   if(counter > 0 ){
        //     counter = parseInt(Math.random() *pictures.length)
        //   };
        //   imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        // }
      })
    })
  })();
