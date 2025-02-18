class LoginPage {


    SelectorsList() {

             const selectors = { 

                      userName:"[data-cy='email']",
                      password:"[data-cy='password']",
                      signIn:".insert-0 button",
                      buttonHeader:"header button",
                      InvalidCredential:"[novalidate=''] .text-red-500"

             };return selectors;    

    }


acessLoginPage () {

                     cy.visit('http://localhost:3000')
                     cy.get(this.SelectorsList().buttonHeader).click()

}

loginWithUser (email,password) {
  
                     cy.get(this.SelectorsList().userName).type(email)
                     cy.get(this.SelectorsList().password).type(password)
                     cy.get(this.SelectorsList().signIn).click()

}

invalidLogin () {

                     cy.get(this.SelectorsList().InvalidCredential).should('be.visible').and('contain','Invalid email or password')

}



}



export default LoginPage