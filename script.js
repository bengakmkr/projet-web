// recuperer toutes les balises de classe 'panel'


// pour chaque DIV de la collection d'objets de classe 'panel'
    // ajouter un ecouteur d'evenement 'clic'
    // la fonction de callback associée doit :
        // enlever la classe active de toutes les DIV
        // ajouter la classe active pour la DIV ayant déclenchée l'évenement 'clic'
const myDiv = document.getElementsByClassName('panel');
 
for (let i = 0; i < myDiv.length; i++) {
      myDiv[i].addEventListener("click", box);
    }
        
     function box() {
            for (let i = 0; i < myDiv.length; i++) {
                myDiv[i].classList.remove('active');
            }
            this.classList.add('active');
        }