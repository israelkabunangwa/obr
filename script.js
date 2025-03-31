/*AFFICHER TOUTES LES ARCTUALITES*/

    /*=========Actualite principale==========*/

    function afficherActualitePrincipale(){

      
        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        const articlesDiv = document.querySelector('.mainActulite');
        const articlesDivSec = document.querySelector('.secondaryActualite');
        const mainActualite=articles[articles.length - 1]
        
        console.log(articles)
        console.log(articlesDiv)
        articlesDiv.innerHTML=`
            <div class="mainActuliteContainer">
                    <div class="mainActuliteImgDescription">
                        <div class="mainActuliteImgDescriptionContainer">
                            <div class="mainActuliteImgDescriptionSubContainer">
                                <button>Actualite</button>
                                <h2>Communique : <span>${mainActualite.titre}</span></h2>
                                <div class="time-plus">
                                <a href="actualite.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    
                                </div>   
                            </div> 
                        </div>
                    </div>
                    <div class="mainActuliteImg">
                        <img src="${mainActualite.image}" alt="">
                    </div>
            </div>`
        
            articles.forEach(article => {
                const articleElement =  `
                <div class="secondaryActualiteItem">
                    <a href="actualite.html">${article.titre}</a>
                </div>
        `
                articlesDivSec.insertAdjacentHTML('afterbegin', articleElement)
              
                });
             
  }
  afficherActualitePrincipale()

