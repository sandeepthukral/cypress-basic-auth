describe('Basic Auth Test', () => {
    it('should be able to login to a website using basic auth', () => {
        cy.visit('http://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        cy.get('p').should('contain', 'Congratulations');
    });
});