import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'


const LoginPageInstance = new LoginPage()


describe('Login Sucessful',() => {


       it('Sucessful Login Admin ',() => {
  
             
             LoginPageInstance.acessLoginPage()
             LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password)

       })
 
       it('Fail Login',() =>{


            LoginPageInstance.acessLoginPage()
            LoginPageInstance.loginWithUser(userData.userFail.email,userData.userFail.password)
            LoginPageInstance.invalidLogin()


       })

})