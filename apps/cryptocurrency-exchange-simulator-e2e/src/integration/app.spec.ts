import { getMenu, getSignUpButton } from '../support/app.po';

describe('cryptocurrency-exchange-simulator', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    // Function helper example, see `../support/app.po.ts` file
    getMenu().contains('Learn how to invest');
  });

  it('should display sign up button', () => {
    // Function helper example, see `../support/app.po.ts` file
    getSignUpButton().should('be.visible');
  });
});
