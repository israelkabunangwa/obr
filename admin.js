

/*========AUTOCALL FUNCTION TO DISPLAY DATA IN THE ACTUALITE PAGE======*/
(() => {
  document.querySelector('.actualite').classList.add('menuItemDescriptionActive')
})();

document.getElementById('articleForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const titre = document.getElementById('titre').value;
    const contenu = document.getElementById('contenu').value;
    const date = document.getElementById('date').value;
    const image = document.getElementById("image").value;
   
    const article = { titre, contenu, date , image };

    // Récupérer les articles existants ou initialiser un tableau vide
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
 
    // Sauvegarder les articles dans le stockage local
    localStorage.setItem('articles', JSON.stringify(articles));

    // Réinitialiser le formulaire
    document.getElementById('articleForm').reset();
})
function afficherArticles(){
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const articlesDiv = document.getElementById('articles');
 
   //console.log(articles[articles.length - 1])
  // console.log(localStorage.getItem('articles'))
    /*if (articles.length === 0){
        articlesDiv.innerHTML = '<p>Aucun article publié.</p>';
        return; }*/
 
       articles.forEach( (article,index) => {
            const articleElement =  `
            <div class="articlesItem">
                <img src="${article.image}" alt="${article.titre}" style="max-width: 150px;">
                <h3>${article.titre}</h3>
                <p>${article.contenu}</p>
                <p><strong>${article.date}</strong></p>
                 
                  <button onclick="supprimerArticle(${index})">Supprimer</button>
            </div>
    `
            ;
            //articlesDiv.innerHTML=articleElement
            articlesDiv.insertAdjacentHTML('afterbegin', articleElement)
           //articlesDiv.appendChild(articleElement);
            });
            
           
  }
  afficherArticles();
 
 
  function supprimerArticle(index) {
     let articles = JSON.parse(localStorage.getItem('articles')) || [];
     articles.splice(index, 1);
     localStorage.setItem('articles', JSON.stringify(articles));
   
     // Rafraîchir l'affichage sur la page d'administration
     const articlesAdminDiv = document.getElementById('articles');
     articlesAdminDiv.innerHTML = '';
     afficherArticles();
   }

    /*==========MENU ACTIVE==========================*/

 const adminMenu=document.querySelectorAll('.menuItem')

 adminMenu.forEach(item=>{
    item.addEventListener('click', ()=>{
        
        document.querySelector('.menuDataActive').classList.remove('menuDataActive')
        item.classList.add('menuDataActive')
        document.querySelector('.menuItemDescriptionActive').classList.remove('menuItemDescriptionActive')
        const idGot=item.getAttribute('id')
        
        
       document.querySelector('.'+idGot+'').classList.add('menuItemDescriptionActive')
    })
 })
    /*==========ADD ARTICLES BUTTON==========================*/

 /*const addArticles=document.querySelector('.add')
 addArticles.addEventListener('click',()=>{
   document.querySelector('.form').style.display='block'
 })*/
   const addArticles=document.querySelectorAll('.add')
   addArticles.forEach(buttonAdd=>{
      buttonAdd.addEventListener('click',()=>{
        document.querySelector('.form').style.display='block'
      })
   } )
  
   /*==========REMOVE FORM==========================*/

const removeForm=document.querySelector('.form #articleForm i')
removeForm.addEventListener('click',()=>{
   document.querySelector('.form').style.display='none'
})

document.getElementById('articleFormEvent').addEventListener('submit', (event)=>{
  event.preventDefault();

  const titreEvent = document.getElementById('titreEvent').value;
    const contenuEvent = document.getElementById('contenuEvent').value;
    const dateEvent = document.getElementById('dateEvent').value;
    const imageEvent = document.getElementById("imageEvent").value;
   
    const articleEvent = { titreEvent, contenuEvent, dateEvent , imageEvent };

    let articlesEvent = JSON.parse(localStorage.getItem('articlesEvent')) || [];
    articlesEvent.push(articleEvent);

    // Sauvegarder les articles dans le stockage local
    localStorage.setItem('articlesEvent', JSON.stringify(articlesEvent));

    // Réinitialiser le formulaire
    document.getElementById('articleFormEvent').reset();


})

function afficherArticlesEvent(){
  const articlesEvent = JSON.parse(localStorage.getItem('articlesEvent')) || [];
  const articlesEventDiv = document.getElementById('articlesEvent');

  articlesEvent.forEach( (articleEvent,index) => {
    const articleEventElement =  `
    <div class="articlesItem">
        <img src="${articleEvent.image}" alt="${articleEvent.titre}" style="max-width: 150px;">
        <h3>${articleEvent.titre}</h3>
        <p>${articleEvent.contenu}</p>
        <p><strong>${articleEvent.date}</strong></p>
         
          <button onclick="supprimerArticle(${index})">Supprimer</button>
    </div>
`
    ;
    //articlesDiv.innerHTML=articleElement
    articlesEventDiv.insertAdjacentHTML('afterbegin', articleEventElement)
   //articlesDiv.appendChild(articleElement);
    });
}
afficherArticlesEvent()
 



 
