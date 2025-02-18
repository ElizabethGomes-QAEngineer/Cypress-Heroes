class CheckHeroesPage {

         selectorList() {


                const selectors = {
                          
                        
                          theGenericLike:"[data-cy='like']",
                          theGenericMoney:"[data-cy='money']",
                          theGenericPencil:"[data-cy='pencil']",
                         
                          
                };return selectors;
         }


acessMainPage() {

                         cy.visit('http://localhost:3000/heroes')
}

theSmokerHero() {
                        
                         cy.get(this.selectorList().theGenericLike).eq(0).click({force:true})
                         cy.get(this.selectorList().theGenericMoney).eq(0).click({force:true})
                         cy.get(this.selectorList().theGenericPencil).eq(0).click({force:true})
                        

}

theWarpSpeedHero() {

                         cy.get(this.selectorList().theGenericLike).eq(1).click()
                         cy.get(this.selectorList().theGenericMoney).eq(1).click()
                         cy.get(this.selectorList().theGenericPencil).eq(1).click()
   
}

theCyonicHero() {

                        cy.get(this.selectorList().theGenericLike).eq(2).click()
                        cy.get(this.selectorList().theGenericMoney).eq(2).click()
                        cy.get(this.selectorList().theGenericPencil).eq(2).click()
   
}

theLibrarianHero() {

                        cy.get(this.selectorList().theGenericLike).eq(3).click()
                        cy.get(this.selectorList().theGenericMoney).eq(3).click()
                        cy.get(this.selectorList().theGenericPencil).eq(3).click()
   
}

theMrAngularHero() {

                        cy.get(this.selectorList().theGenericLike).eq(4).click()
                        cy.get(this.selectorList().theGenericMoney).eq(4).click()
                        cy.get(this.selectorList().theGenericPencil).eq(4).click()
   
}

theCollectCallPaulHero() {

                        cy.get(this.selectorList().theGenericLike).eq(5).click()
                        cy.get(this.selectorList().theGenericMoney).eq(5).click()
                        cy.get(this.selectorList().theGenericPencil).eq(5).click()
   
}

theFlyGirlHero() {

                        cy.get(this.selectorList().theGenericLike).eq(6).click()
                        cy.get(this.selectorList().theGenericMoney).eq(6).click()
                        cy.get(this.selectorList().theGenericPencil).eq(6).click()
    
}

}

export default CheckHeroesPage