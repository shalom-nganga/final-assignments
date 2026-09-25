🎭 Playwright Test Automation Framework

An enterprise-grade, end-to-end (E2E) UI and API test automation framework built with Playwright and TypeScript for the Automation Exercise platform.

📊 Live Test Report

View Live Allure Report:

🔗 https://shalom-nganga.github.io/final-assignments/

The test suite executes automatically on every push and pull_request via GitHub Actions, publishing live execution reports to GitHub Pages.

🏗️ Project Architecture & Design Patterns

The framework follows modular software engineering design principles for maximum maintainability and scalability:

Page Object Model (POM): UI selectors and interaction methods are isolated inside pages/.

Custom Test Fixtures: Extends Playwright’s base runner to inject page objects, test credentials, and dynamic builder data (fixtures/).

Data Builder Pattern: Dynamic data generators located in builders/ generate consistent payloads for signups, checkouts, and API requests.

API Utilities: Reusable API wrappers in utils/api-helper.ts handle HTTP requests and JSON schema assertions.

📂 Project Structure

.
├── .github/
│   └── workflows/
│       └── playwright.yml         # CI/CD GitHub Actions pipeline
├── builders/                      # Dynamic test data generators
│   ├── api-data.builder.ts
│   ├── login-data.builder.ts
│   ├── payment-data.builder.ts
│   └── signup-data.builder.ts
├── fixtures/                      # Custom Playwright test fixtures
│   ├── checkout.fixture.ts
│   ├── login.fixture.ts
│   └── signup.fixture.ts
├── pages/                         # Page Object Models (UI Layer)
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── home.page.ts
│   ├── login.page.ts
│   ├── product-details.page.ts
│   ├── products.page.ts
│   └── signup.page.ts
├── tests/                         # Test Suites
│   ├── api/
│   │   └── automation-exercise.spec.ts  # API GET, POST, PUT, DELETE tests
│   ├── checkout/
│   │   └── checkout.spec.ts           # E2E Product Checkout workflow
│   ├── login/
│   │   └── login.spec.ts              # Authentication scenarios
│   └── signup/
│       └── signup.spec.ts             # User Registration scenarios
├── utils/                         # Utilities & Configuration
│   ├── api-helper.ts
│   └── test-config.ts
├── .env                           # Local environment variables
├── package.json                   # Dependencies & npm scripts
└── playwright.config.ts           # Playwright runner configuration


🧪 Test Coverage

1. API Test Automation

Location: tests/api/automation-exercise.spec.ts (Runs in Serial Execution Mode)

API 1 (GET): Validates retrieval of complete product list (/api/productsList).

API 11 (POST): Tests user account creation with form-encoded payload (/api/createAccount).

API 7 (POST): Validates user authentication credentials (/api/verifyLogin).

API 13 (PUT): Verifies updating user profile details (/api/updateAccount).

API 12 (DELETE): Validates account deletion and cleanup (/api/deleteAccount).

Assertions Covered: HTTP status 200, application response codes (200, 201), JSON schema structure, and error message strings.

2. UI E2E Test Automation

Location: tests/

Signup Workflow: Dynamic user registration and duplicate email rejection validation.

Login Workflow: Valid credential authentication and error notifications.

Checkout Workflow: Product search/selection, shopping cart management, address entry, payment processing, order confirmation verification (data-qa="order-placed"), and invoice downloads.

🚀 Local Setup & Execution Guide

Prerequisites

Node.js: v18 or higher

npm: v9 or higher

1. Installation

Clone the repository and install dependencies along with Playwright browser binaries:

git clone https://github.com/shalom-nganga/final-assignments.git
cd final-assignments
npm ci
npx playwright install --with-deps


2. Environment Setup

Create a .env file in the root directory:

TEST_EMAIL=shalomnganga119@gmail.com
TEST_PASSWORD=@C7FH93yiZa9Qm


3. Running Tests

Execute test suites locally using the following CLI commands:

Run all UI and API tests headlessly

npx playwright test


Run tests in headed browser mode

npx playwright test --headed


Run a specific test spec file

npx playwright test tests/checkout/checkout.spec.ts


Launch interactive Playwright UI mode

npx playwright test --ui


📊 Local Allure Reporting

Generate and view interactive Allure Reports on your local machine:

Generate static report from test results

npm run allure:generate


Serve report on local web server

npm run allure:serve


⚙️ CI/CD Pipeline Configuration

The GitHub Actions pipeline (.github/workflows/playwright.yml) automates test execution and report publishing:

Trigger: Runs automatically on push or pull_request to main/master.

Environment: Spawns an ubuntu-latest runner with Node.js and Playwright browser binaries.

Execution: Executes npx playwright test.

Reporting: Generates Allure HTML reports and deploys them directly to GitHub Pages (gh-pages branch).