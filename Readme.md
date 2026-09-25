🎭 Playwright Test Automation Framework

An enterprise-grade, end-to-end (E2E) UI and API test automation framework built with Playwright and TypeScript for the Automation Exercise platform.

📊 Live Test Report

View Live Allure Report:

🔗 https://shalom-nganga.github.io/final-assignments/

The test suite runs automatically on every push and pull_request via GitHub Actions, publishing live execution reports directly to GitHub Pages.

🏗️ Project Architecture & Design Patterns

The framework follows modular software engineering design principles for maximum maintainability:

Page Object Model (POM): UI selectors and page interactions are isolated inside pages/.

Custom Test Fixtures: Extends Playwright’s base runner to inject page objects, test credentials, and builder data into tests (fixtures/).

Data Builder Pattern: Dynamic data generators located in builders/ create consistent payloads for user signups, checkouts, and API requests.

API Utilities: Reusable API wrappers in utils/api-helper.ts handle HTTP requests and JSON validations.

📂 Project Structure

.
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD GitHub Actions pipeline & Pages deployment
├── builders/                     # Dynamic test data generators
│   ├── api-data.builder.ts
│   ├── login-data.builder.ts
│   ├── payment-data.builder.ts
│   └── signup-data.builder.ts
├── fixtures/                     # Custom Playwright test fixtures
│   ├── checkout.fixture.ts
│   ├── login.fixture.ts
│   └── signup.fixture.ts
├── pages/                        # Page Object Models (UI Layer)
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── home.page.ts
│   ├── login.page.ts
│   ├── product-details.page.ts
│   ├── products.page.ts
│   └── signup.page.ts
├── tests/                        # Test Suites
│   ├── api/
│   │   └── automation-exercise.spec.ts  # GET, POST, PUT, DELETE API validations
│   ├── checkout/
│   │   └── checkout.spec.ts          # E2E Product Checkout workflow
│   ├── login/
│   │   └── login.spec.ts             # User Authentication scenarios
│   └── signup/
│       └── signup.spec.ts            # Account Registration workflows
├── utils/                        # Utilities & Helpers
│   ├── api-helper.ts
│   └── test-config.ts
├── .env                          # Local environment variables
├── package.json                  # Dependencies & scripts
└── playwright.config.ts          # Core Playwright configuration


🧪 Test Coverage

1. API Test Automation

Location: tests/api/automation-exercise.spec.ts (Serial Execution Mode)

API 1 (GET): Validates retrieval of the complete product list (/api/productsList).

API 11 (POST): Tests new account creation with form-encoded payloads (/api/createAccount).

API 7 (POST): Validates user authentication with valid credentials (/api/verifyLogin).

API 13 (PUT): Verifies updating user profile details (/api/updateAccount).

API 12 (DELETE): Validates user account deletion and cleanup (/api/deleteAccount).

Validations: Asserts HTTP status 200, internal application response codes (200, 201), JSON schema structures, and response message strings.

2. UI E2E Test Automation

Location: tests/

Signup Workflow: Dynamic user registration and duplicate email rejection checks.

Login Workflow: Valid credential authentication and error handling.

Checkout Workflow: Product search/selection, adding items to cart, entering checkout details, payment processing, verifying order confirmation (data-qa="order-placed"), and downloading invoices.

🚀 Local Setup & Execution Guide

Prerequisites

Node.js: v18 or higher

npm: v9 or higher

1. Installation

Clone the repository and install dependencies along with browser binaries:

# Clone repository
git clone https://github.com/shalom-nganga/final-assignments.git
cd final-assignments

# Install dependencies
npm ci

# Install Playwright browsers and system dependencies
npx playwright install --with-deps


2. Environment Setup

Create a .env file in the project root:

TEST_EMAIL=shalomnganga119@gmail.com
TEST_PASSWORD=@C7FH93yiZa9Qm


3. Running Tests

# Run all UI and API tests headlessly
npx playwright test

# Run tests in headed browser mode
npx playwright test --headed

# Run a specific spec file
npx playwright test tests/checkout/checkout.spec.ts

# Open Playwright Interactive UI Mode
npx playwright test --ui


📊 Local Allure Reporting

To generate and view interactive Allure Reports locally:

# Generate the static Allure report from results
npm run allure:generate

# Launch local preview server
npm run allure:serve


⚙️ CI/CD Pipeline Configuration

The GitHub Actions workflow (.github/workflows/playwright.yml) automates testing and deployment:

Trigger: Runs on push or pull_request targeting main/master branches.

Environment: Sets up ubuntu-latest, Node.js, and installs browser binaries.

Execution: Executes npx playwright test in CI mode.

Report Generation: Builds static HTML Allure reports using allure-commandline.

Deployment: Pushes test reports to the gh-pages branch for hosting.