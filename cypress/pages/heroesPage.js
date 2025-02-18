class HeroesPage {

      getUserData() {
               
                 return {
                       
                                RegisterHeroes:{ name:'Aries Beth' , price:'50' , fans:'555' , saves:'255' }
                 }                 
      }

      selectorsList() {


                const selectors = {
                       
                                nameHero:"[data-cy='nameInput']",
                                priceField:"[data-cy='priceInput']",
                                fansHeroField:"[data-cy='fansInput']",
                                savesHeroField:"[data-cy='savesInput']",
                                powersHeros:"select[data-cy='powersSelect']",                         
                                submitButton:"[novalidate=''] .bg-blue-700"

                };return selectors;
      }

AcessAvatar() {

                               cy.visit('http://localhost:3000/heroes/new')
                            
}

createHero(name,price,fans,saves) {

                              
                               cy.get(this.selectorsList().nameHero).type(name)
                               cy.get(this.selectorsList().priceField).type(price)
                               cy.get(this.selectorsList().fansHeroField).type(fans)
                               cy.get(this.selectorsList().savesHeroField).type(saves)
                               cy.get(this.selectorsList().powersHeros).select('Super Speed')                      
                               cy.get(this.selectorsList().submitButton).click()

}

}

export default HeroesPage








