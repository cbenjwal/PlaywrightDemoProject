
export class LoginPage
{

  constructor(page) 
  {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Enter Email');
    this.passwordInput = page.getByPlaceholder('Enter Password');
    this.signInBtn = page.getByText('Sign in').last();
    this.errorMessage=page.locator("errorMessage")
    // add locator for //a[normalize-space()='New user? Signup']
    this.newUserSignup=page.locator("//a[normalize-space()='New user? Signup']")
    // add a locator for Signup successfully, Please login!
    this.successMessage=page.locator("//div[contains(text(),'Signup successfully, Please login!')]")
  }

  
  async gotoURL() 
  {
    await this.page.goto("https://freelance-learn-automation.vercel.app/login");

  }
// add method for clicking on New user? Signup link
  async clickNewUserSignup()
  {
    await this.newUserSignup.click()
  }
  // add method for getting Signup successfully, Please login! message
  async getSuccessMessageText()
  {
    return await this.successMessage.textContent()
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
