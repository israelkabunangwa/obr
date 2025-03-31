export const navBar=()=>{
    return `<div class="logo">
                <img src="IMG/download (2).png" alt="">
                <div class="media">
                    <div>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    
                </div>
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="aboutUs.html">A propos  </li>
                        <li><a href="#">Publication <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Magazines<b>+</b></a>
                                    <ul>
                                        <li><a href="#">Magazines trimestriels</a></li>
                                        <li><a href="#">Bulletins trimestriels des strategies</a></li>
                                        <li><a href="#">Javascript</a></li>
                                    </ul> 
                                </li>
                                <li><a href="#">Accords</a></li>
                                <li><a href="#">Dépliants</a> </li>
                                <li><a href="#">Livrets et autres</a> </li>
                                <li><a href="#">Plan stratégique de l'OBR</a> </li>
                                <li><a href="#">Stratégie de lutte contre la corruption</a> </li>
                            </ul>
                        </li>
                        <li><a href="actualite.html">Actualités</a></li>
                        <li><a href="#">Communiqués</a></li>
                        <li><a href="#">Opportunités  <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Appel d'offres</a></li>
                                <li><a href="#">Offres d'emploi</a></li>
                                <li><a href="#">Ventes aux enchères</a></li>
                               
                            </ul>
                        </li>
                        <li><a href="contact.html">Contacts</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </nav>
            </div>`
}

export const footer=()=>{
    return `
         <div class="footerContainer">
            <div class="footerContainerLogo footerContainerItem">
                <div class="footerContainerLogoImg">
                    <img src="IMG/download (2).png" alt="">
                </div>
                <div class="footerContainerLogoTitle">
                    <h3>
                        <span>Office</span>
                        <span>Burundaise des</span>
                        <span>Recettes</span>
                    </h3>
                </div>
                
            </div>
            <div class="footerContainerMenu footerContainerItem">
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">A propos</a></li>
                    <li><a href="">Actualites</a></li>
                    <li><a href="">Communiques</a></li>
                    <li><a href="">Opportunites</a></li>
                    <li><a href="">Contacts</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>
            </div>
            <div class="footerContainerMenu2 footerContainerItem">
                <ul>
                    <li><a href="">Publication</a>
                        <ul>
                            <li><a href="">Magazines</a></li>
                            <li><a href="">Accords</a></li>
                            <li><a href="">Depliants</a></li>
                            <li><a href="">Livret et autres</a></li>
                            <li><a href="">Plans Strategique OBR</a></li>
                            <li><a href="">Strategie de lutte contre la corruption</a></li>
                        </ul>
                    </li>
                    <li><a href="">Opportunites</a>
                        <ul>
                            <li><a href="">Appel d'offres</a></li>
                            <li><a href="">Offres d'emplois</a></li>
                            <li><a href="">Ventes aux enchers</a></li>
                        </ul>
                
                    </li>
                    
                </ul>
            </div>
            <div class="footerContainerNews footerContainerItem">
                <h3>NewsLetter</h3>
                <div class="newsLetter">
                    <input type="text" placeholder="email">
                    <button>S'abonner</button>
                </div>
                <div class="footerMedia">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                
            </div>
        
        </div>
    `
}

/*export const addButton=()=>{

    return `
        <button>ADD ARTICLES</button>
    `

}*/