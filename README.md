# Playwright Demo Project

This is a JavaScript-based automation testing project built using **Playwright**.  
It demonstrates a complete end-to-end test framework design including **Page Object Model (POM)**, **data-driven testing**, reusable utilities, and **Allure reporting**.

The project uses the demo web application:  
👉 [https://freelance-learn-automation.vercel.app/](https://freelance-learn-automation.vercel.app/)

---

## Tech Stack

- **Language:** JavaScript (Node.js)
- **Framework:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Allure Reports
- **Version Control:** Git & GitHub
- **Editor:** Visual Studio Code

---

## Project Structure

```
PlaywrightDemoProject/
├─ allure-results/          # Allure report output
├─ fixtures/                # Common fixtures (setup/teardown)
├─ pages/                   # Page Object Model files
├─ testdata/                # Test data files (JSON)
├─ tests/                   # Test scripts/spec files
├─ utils/                   # Helper utilities
├─ package.json
├─ playwright.config.js
└─ README.md
```

---

## Getting Started

### Prerequisites
- Node.js v14 or higher  
- npm installed  
- Git installed and configured  

### Installation
Clone the project and install dependencies:
```bash
git clone https://github.com/cbenjwal/PlaywrightDemoProject.git
cd PlaywrightDemoProject
npm install
```

---

## Running Tests

To run all tests:
```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test tests/login.spec.js
```

To run tests on a specific browser (Chromium, Firefox, WebKit):
```bash
npx playwright test --project=chromium
```

---

## Viewing Reports

To generate and view Allure Reports after running tests:
```bash
npx allure serve allure-results
```
This command will open a detailed interactive report showing passed/failed tests, screenshots, and duration.

---

## Sample Test

```js
// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const userData = require('../testdata/loginData.json');

test.describe('Login Functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.valid.username, userData.valid.password);
    await expect(page.locator('text=Welcome')).toBeVisible();
  });
});
```

---

## Key Features

- Simple, modular **Page Object Model (POM)** design  
- **Data-driven** test execution using JSON data files  
- **Reusable utilities** and fixtures  
- **Cross-browser testing** (Chromium, Firefox, WebKit)  
- **Allure report integration** for detailed results  
- Easily extendable for CI/CD integration  

---

## Troubleshooting

| Issue | Solution |
|-------|-----------|
| Browser not launching | Run `npx playwright install` to install browsers |
| Allure not generating | Install globally: `npm install -g allure-commandline` |
| Timeout errors | Adjust `timeout` settings in `playwright.config.js` |

---

## Future Enhancements

- Add CI/CD pipeline integration (GitHub Actions or Jenkins)  
- Include API tests using Playwright request context  


---

## About

**Author:** Chitra Rajput  
**GitHub:** [https://github.com/cbenjwal](https://github.com/cbenjwal)  
**LinkedIn:** [https://linkedin.com/in/cbenjwal](https://linkedin.com/in/cbenjwal)

> QA Engineer with hands-on experience in test automation and Playwright-based frameworks.  
> Focused on building clean, scalable, and data-driven automation projects for learning and demo purposes.

---

## License

This project is distributed under the **MIT License**.  
You are welcome to use, modify, and share it for learning or demonstration purposes.
