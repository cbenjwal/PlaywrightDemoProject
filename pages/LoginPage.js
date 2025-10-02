export class LoginPage
{

  constructor(page) 
  {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Enter Email');
    this.passwordInput = page.getByPlaceholder('Enter Password');
    this.signInBtn = page.getByText('Sign in').last();
    this.errorMessage=page.locator("errorMessage")
  }

  
  async gotoURL() 
  {
    await this.page.goto("https://freelance-learn-automation.vercel.app/login");

  }

  async fillEmail(email) 
  {
    await this.emailInput.fill(email);
  }


  async fillPassword(password) 
  {
    await this.passwordInput.fill(password);
  }


  async submit() {
    await this.signInBtn.click()
  }

}
