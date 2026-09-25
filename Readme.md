# 🎭 Playwright Test Automation Framework

An enterprise-grade, end-to-end (E2E) UI and API test automation framework built with **Playwright** and **TypeScript** for the [Automation Exercise](https://www.automationexercise.com) platform.

---

## 📊 Live Test Report

> **View Live Allure Report:**  
> 🔗 [https://shalom-nganga.github.io/final-assignments/](https://shalom-nganga.github.io/final-assignments/)

The test suite executes automatically on every `push` and `pull_request` via GitHub Actions, publishing live execution reports directly to GitHub Pages.

---

## 🏗️ Project Architecture & Design Patterns

The framework follows modular software engineering design principles for maximum maintainability and scalability:

* **Page Object Model (POM):** UI selectors and interaction methods are isolated inside `pages/`.
* **Custom Test Fixtures:** Extends Playwright’s base runner to inject page objects, test credentials, and dynamic builder data (`fixtures/`).
* **Data Builder Pattern:** Dynamic data generators located in `builders/` generate consistent payloads for signups, checkouts, and API requests.
* **API Utilities:** Reusable API wrappers in `utils/api-helper.ts` handle HTTP requests and JSON schema assertions.

---

## 📂 Project Structure

```
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
├── utils/                         # Utilities & Helpers
│   ├── api-helper.ts
│   └── test-config.ts
├── .env                           # Local environment variables
├── package.json                   # Dependencies & scripts
└── playwright.config.ts           # Core Playwright configuration
```

---

## 🧪 Test Coverage

### 1. API Test Automation
**Location:** `tests/api/automation-exercise.spec.ts` *(Serial Execution Mode)*

* **API 1 (GET):** Validates retrieval of complete product list (`/api/productsList`).
* **API 11 (POST):** Tests new account creation with form-encoded payload body (`/api/createAccount`).
* **API 7 (POST):** Validates user authentication credentials (`/api/verifyLogin`).
* **API 13 (PUT):** Verifies updating user profile details (`/api/updateAccount`).
* **API 12 (DELETE):** Validates user account deletion and cleanup (`/api/deleteAccount`).
* **Validations Covered:** HTTP status code `200`, internal application response codes (`200`, `201`), JSON schema structure, and response message strings.

### 2. UI E2E Test Automation
**Location:** `tests/`

* **Signup Workflow (`tests/signup/`):** Dynamic user registration, duplicate email rejection checks.
* **Login Workflow (`tests/login/`):** Valid credentials login, authentication checks.
* **Checkout Workflow (`tests/checkout/`):** Product selection, adding items to cart, entering checkout details, completing payment, verifying order confirmation (`data-qa="order-placed"`), and downloading invoices.

---

## 🚀 Local Setup & Execution Guide

### Prerequisites
* **Node.js:** v18 or higher
* **npm:** v9 or higher

### 1. Installation

Clone the repository and install npm packages along with browser binaries:

```bash
git clone https://github.com/shalom-nganga/final-assignments.git
cd final-assignments
npm ci
npx playwright install --with-deps
```

### 2. Environment Setup

Create a `.env` file in the project root:

```env
TEST_EMAIL=shalomnganga119@gmail.com
TEST_PASSWORD=@C7FH93yiZa9Qm
```

---

## 🏃 Running Tests

### Run all UI and API tests headlessly
```bash
npx playwright test
```

### Run tests in headed browser mode
```bash
npx playwright test --headed
```

### Run a specific spec file
```bash
npx playwright test tests/checkout/checkout.spec.ts
```

### Open Playwright Interactive UI Mode
```bash
npx playwright test --ui
```

---

## 📊 Local Allure Reporting

To generate and view interactive Allure Reports locally:

### Generate the static Allure report from results
```bash
npm run allure:generate
```

### Serve the Allure report locally
```bash
npm run allure:serve
```

---

## ⚙️ CI/CD Pipeline Details

The GitHub Actions workflow (`.github/workflows/playwright.yml`) automates testing and deployment:

1. **Triggers:** Runs on every `push` or `pull_request` to the main branch.
2. **Execution:** Runs in an `ubuntu-latest` container with full Playwright browser dependencies.
3. **Report Deployment:** Automatically generates the Allure HTML report and deploys it to the `gh-pages` branch for live viewing.