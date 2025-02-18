Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Unauthorized')) {
      return false; // Impede o Cypress de falhar
    }
  });
  
