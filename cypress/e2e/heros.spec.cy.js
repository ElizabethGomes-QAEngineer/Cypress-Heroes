import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import heroesPage from "../pages/heroesPage"
import CheckHeroesPage from '../pages/checkHeroesPage'


const LoginPageInstance = new LoginPage()
const heroesPageInstance = new heroesPage()
const CheckHeroesPageInstance = new CheckHeroesPage()


describe('New Hero ',()=>{


         
      it('Login Admin',()=>{


          LoginPageInstance.acessLoginPage()
          LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password)        

      })
    
    
      it('Create a New Hero',()=>{

          heroesPageInstance.AcessAvatar()
          const userData = heroesPageInstance.getUserData().RegisterHeroes
          heroesPageInstance.createHero(userData.name,userData.price,userData.fans,userData.saves)


      })
      
      
      it('Smoker Hero ', () => {
    
          CheckHeroesPageInstance.acessMainPage()
          LoginPageInstance.acessLoginPage()
          LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password)  
          CheckHeroesPageInstance.theSmokerHero() 



      it(' Warp Speed Hero ',() => {
        
          CheckHeroesPageInstance.acessMainPage()
          LoginPageInstance.acessLoginPage()
          LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
          CheckHeroesPageInstance.theWarpSpeedHero()
    
      })
          

      it(' Cyoni Hero',() => {
        
          CheckHeroesPageInstance.acessMainPage()
          LoginPageInstance.acessLoginPage()
          LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
          CheckHeroesPageInstance.theCyonicHero()
       
      })
          
      it(' Librarian Hero',() => {
        
         CheckHeroesPageInstance.acessMainPage()
         LoginPageInstance.acessLoginPage()
         LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
         CheckHeroesPageInstance.theLibrarianHero()
        
      })
          

      it('Mr Angular Hero',() => {
        
         CheckHeroesPageInstance.acessMainPage()
         LoginPageInstance.acessLoginPage()
         LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
         CheckHeroesPageInstance.theMrAngularHero()
       
      })
          

      it('Collect Call Paul Hero',() => {
        
         CheckHeroesPageInstance.acessMainPage()
         LoginPageInstance.acessLoginPage()
         LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
         CheckHeroesPageInstance.theCollectCallPaulHero()
    
      })
          
      it('Fly Girl Hero',() => {

         CheckHeroesPageInstance.acessMainPage()
         LoginPageInstance.acessLoginPage()
         LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password) 
         CheckHeroesPageInstance.theFlyGirlHero()

      })
        
         
})

})