1. API Test Automation (tests/api/automation-exercise.spec.ts)

Executes in serial execution mode to maintain state consistency across tests:

API 1 (GET): Validates retrieval of the complete product list (/api/productsList).

API 11 (POST): Tests new account creation with form-encoded payload body (/api/createAccount).

API 7 (POST): Validates user authentication with valid credentials (/api/verifyLogin).

API 13 (PUT): Verifies updating user profile details (/api/updateAccount).

API 12 (DELETE): Validates user account deletion and cleanup (/api/deleteAccount).

Validations Covered: HTTP status codes (200), internal response codes (200, 201), JSON schema structure, and response message strings.

2. UI E2E Test Automation (tests/)

Signup Workflow (tests/signup/): Dynamic user registration, duplicate email rejection checks.

Login Workflow (tests/login/): Valid credentials login, authentication checks.

Checkout Workflow (tests/checkout/): Product selection, adding items to cart, entering checkout details, completing payment, verifying order confirmation (data-qa="order-placed"), and downloading invoices.

🚀 Local Setup & Execution Guide

Prerequisites

Node.js: v18 or higher installed

npm: v9 or higher installed

1. Installation

Clone the repository and install npm packages along with browser binaries:

# Clone repository
git clone https://github.com/shalom-nganga/final-assignments.git
cd final-assignments

# Install dependencies
npm ci

# Install Playwright browsers and dependencies
npx playwright install --with-deps


2. Environment Setup

Create a .env file in the project root (optional for local credential overrides):

TEST_EMAIL=shalomnganga119@gmail.com
TEST_PASSWORD=@C7FH93yiZa9Qm


3. Running Tests

# Run all UI and API tests headlessly
npx playwright test

# Run tests in headed browser mode
npx playwright test --headed

# Run a specific spec file
npx playwright test tests/checkout/checkout.spec.ts

# Run tests in UI mode
npx playwright test --ui


📊 Allure Reporting (Local)

To generate and view interactive Allure Reports locally:

# Generate the Allure report from allure-results
npm run allure:generate

# Launch local preview server
npm run allure:serve


Note for WSL / Headless Users: If browser auto-launch is restricted, copy the generated local HTTP link (e.g., http://127.0.0.1:44283) directly into your browser.

⚙️ CI/CD Pipeline Configuration

The GitHub Actions workflow (.github/workflows/playwright.yml) automates testing and deployment:

Trigger: Fires on push or pull_request to main/master branches.

Environment Setup: Spins up ubuntu-latest, installs Node.js, dependencies, and Playwright browsers.

Execution: Runs npx playwright test in CI mode.

Report Generation: Builds static HTML Allure reports using allure-commandline.

Deployment: Publishes test evidence directly to the gh-pages branch for hosting.