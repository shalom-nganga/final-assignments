# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup/signup.spec.ts >> Signup >> creates a new account
- Location: tests/signup/signup.spec.ts:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-qa="months"]')

```

# Page snapshot

```yaml
- generic [ref=f8e1]:
  - banner [ref=f8e2]:
    - generic [ref=f8e5]:
      - link [ref=f8e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f8e9]
      - list [ref=f8e12]:
        - listitem [ref=f8e13]:
          - link " Home" [ref=f8e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f8e15]: 
            - text: Home
        - listitem [ref=f8e16]:
          - link " Products" [ref=f8e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f8e18]: 
            - text: Products
        - listitem [ref=f8e19]:
          - link " Cart" [ref=f8e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f8e21]: 
            - text: Cart
        - listitem [ref=f8e22]:
          - link " Signup / Login" [ref=f8e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f8e24]: 
            - text: Signup / Login
        - listitem [ref=f8e25]:
          - link " Test Cases" [ref=f8e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f8e27]: 
            - text: Test Cases
        - listitem [ref=f8e28]:
          - link " API Testing" [ref=f8e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f8e30]: 
            - text: API Testing
        - listitem [ref=f8e31]:
          - link " Video Tutorials" [ref=f8e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f8e33]: 
            - text: Video Tutorials
        - listitem [ref=f8e34]:
          - link " Contact us" [ref=f8e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f8e36]: 
            - text: Contact us
  - generic [ref=f8e40]:
    - generic [ref=f8e41]:
      - heading "Enter Account Information" [level=2] [ref=f8e42]
      - generic [ref=f8e43]:
        - generic [ref=f8e44]:
          - generic [ref=f8e45]: Title
          - generic [ref=f8e47]:
            - radio "Mr." [checked] [ref=f8e49]
            - text: Mr.
          - generic [ref=f8e51]:
            - radio "Mrs." [ref=f8e53]
            - text: Mrs.
        - generic [ref=f8e54]:
          - generic [ref=f8e55]:
            - text: Name
            - superscript [ref=f8e56]: "*"
          - textbox "Name *" [ref=f8e57]: mash
        - generic [ref=f8e58]:
          - generic [ref=f8e59]:
            - text: Email
            - superscript [ref=f8e60]: "*"
          - textbox "Email *" [disabled] [ref=f8e61]: cleanco889+179033377889242434@gmail.com
        - generic [ref=f8e62]:
          - generic [ref=f8e63]:
            - text: Password
            - superscript [ref=f8e64]: "*"
          - textbox "Password *" [active] [ref=f8e65]: Cleanco@179033377889242434
        - generic [ref=f8e66]:
          - generic [ref=f8e67]: Date of Birth
          - generic [ref=f8e68]:
            - combobox [ref=f8e71]:
              - option "Day"
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8"
              - option "9"
              - option "10"
              - option "11"
              - option "12"
              - option "13" [selected]
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21"
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=f8e74]:
              - option "Month" [selected]
              - option "January"
              - option "February"
              - option "March"
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August"
              - option "September"
              - option "October"
              - option "November"
              - option "December"
            - combobox [ref=f8e77]:
              - option "Year" [selected]
              - option "2021"
              - option "2020"
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004"
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995"
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=f8e78]:
          - checkbox "Sign up for our newsletter!" [ref=f8e79]
          - text: Sign up for our newsletter!
        - generic [ref=f8e80]:
          - checkbox "Receive special offers from our partners!" [ref=f8e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=f8e82]
        - paragraph [ref=f8e83]:
          - generic [ref=f8e84]:
            - text: First name
            - superscript [ref=f8e85]: "*"
          - textbox "First name *" [ref=f8e86]
        - paragraph [ref=f8e87]:
          - generic [ref=f8e88]:
            - text: Last name
            - superscript [ref=f8e89]: "*"
          - textbox "Last name *" [ref=f8e90]
        - paragraph [ref=f8e91]:
          - generic [ref=f8e92]: Company
          - textbox "Company" [ref=f8e93]
        - paragraph [ref=f8e94]:
          - generic [ref=f8e95]:
            - text: Address
            - superscript [ref=f8e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=f8e97]
        - paragraph [ref=f8e98]:
          - generic [ref=f8e99]: Address 2
          - textbox "Address 2" [ref=f8e100]
        - paragraph [ref=f8e101]:
          - generic [ref=f8e102]:
            - text: Country
            - superscript [ref=f8e103]: "*"
          - combobox "Country *" [ref=f8e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=f8e105]:
          - generic [ref=f8e106]:
            - text: State
            - superscript [ref=f8e107]: "*"
          - textbox "State *" [ref=f8e108]
        - paragraph [ref=f8e109]:
          - generic [ref=f8e110]:
            - text: City
            - superscript [ref=f8e111]: "*"
          - textbox "City * Zipcode *" [ref=f8e112]
        - paragraph [ref=f8e113]:
          - generic [ref=f8e114]:
            - text: Zipcode
            - superscript [ref=f8e115]: "*"
          - textbox [ref=f8e116]
        - paragraph [ref=f8e117]:
          - generic [ref=f8e118]:
            - text: Mobile Number
            - superscript [ref=f8e119]: "*"
          - textbox "Mobile Number *" [ref=f8e120]
        - button "Create Account" [ref=f8e121] [cursor=pointer]
    - insertion [ref=f8e123]:
      - generic [ref=f8e126]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f8e128]: Discover more
        - link "API testing tools" [ref=f8e129] [cursor=pointer]
        - link "Automation exercise platform" [ref=f8e134] [cursor=pointer]
        - link "Register A Trademark" [ref=f8e139] [cursor=pointer]
  - contentinfo [ref=f8e144]:
    - generic [ref=f8e149]:
      - heading "Subscription" [level=2] [ref=f8e150]
      - generic [ref=f8e151]:
        - textbox "Your email address" [ref=f8e152]
        - button "" [ref=f8e153] [cursor=pointer]
        - paragraph [ref=f8e155]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f8e159]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f8e161]:
    - generic [ref=f8e164]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f8e166]: Discover more
      - link "Automation software solutions" [ref=f8e167] [cursor=pointer]
      - link "Login system development" [ref=f8e172] [cursor=pointer]
      - link "Website design templates" [ref=f8e177] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | import { SignupData } from '../builders/signup-data.builder';
  4  | 
  5  | export class SignupPage {
  6  |   readonly signupNameInput: Locator;
  7  |   readonly signupEmailInput: Locator;
  8  |   readonly signupButton: Locator;
  9  |   readonly accountInformationHeading: Locator;
  10 |   readonly createAccountButton: Locator;
  11 |   readonly accountCreatedMessage: Locator;
  12 |   readonly emailAlreadyExistsError: Locator;
  13 | 
  14 |   constructor(private readonly page: Page) {
  15 |     this.signupNameInput = page.locator('[data-qa="signup-name"]');
  16 |     this.signupEmailInput = page.locator('[data-qa="signup-email"]');
  17 |     this.signupButton = page.locator('[data-qa="signup-button"]');
  18 |     this.accountInformationHeading = page.getByText('Enter Account Information');
  19 |     this.createAccountButton = page.locator('[data-qa="create-account"]');
  20 |     this.accountCreatedMessage = page.getByText('Account Created!');
  21 |     this.emailAlreadyExistsError = page.getByText('Email Address already exist!');
  22 |   }
  23 | 
  24 |   async startSignup(name: string, email: string): Promise<void> {
  25 |     await this.signupNameInput.fill(name);
  26 |     await this.signupEmailInput.fill(email);
  27 |     await this.signupButton.click();
  28 |     await expect(this.accountInformationHeading).toBeVisible();
  29 |   }
  30 | 
  31 |   async attemptSignup(name: string, email: string): Promise<void> {
  32 |     await this.signupNameInput.fill(name);
  33 |     await this.signupEmailInput.fill(email);
  34 |     await this.signupButton.click();
  35 |   }
  36 | 
  37 |   async completeSignup(data: SignupData): Promise<void> {
  38 |     await this.page.locator('#id_gender1').check();
  39 |     await this.page.locator('[data-qa="password"]').fill(data.password);
  40 |     await this.page.locator('[data-qa="days"]').selectOption(data.birthDay, { force: true });
> 41 |     await this.page.locator('[data-qa="months"]').selectOption(data.birthMonth, { force: true });
     |                                                   ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  42 |     await this.page.locator('[data-qa="years"]').selectOption(data.birthYear, { force: true });
  43 |     await this.page.locator('#newsletter').check({ force: true });
  44 |     await this.page.locator('#optin').check({ force: true });
  45 |     await this.page.locator('[data-qa="first_name"]').fill(data.firstName);
  46 |     await this.page.locator('[data-qa="last_name"]').fill(data.lastName);
  47 |     await this.page.locator('[data-qa="company"]').fill(data.company);
  48 |     await this.page.locator('[data-qa="address"]').fill(data.address);
  49 |     await this.page.locator('[data-qa="address2"]').fill(data.address2);
  50 |     await this.page.locator('[data-qa="country"]').selectOption({ label: data.country });
  51 |     await this.page.locator('[data-qa="state"]').fill(data.state);
  52 |     await this.page.locator('[data-qa="city"]').fill(data.city);
  53 |     await this.page.locator('[data-qa="zipcode"]').fill(data.zipcode);
  54 |     await this.page.locator('[data-qa="mobile_number"]').fill(data.mobileNumber);
  55 |     await this.createAccountButton.click({ force: true });
  56 |     await expect(this.accountCreatedMessage).toBeVisible();
  57 |   }
  58 | 
  59 |   async continueToApplication(): Promise<void> {
  60 |     await this.page.locator('[data-qa="continue-button"]').click();
  61 |   }
  62 | }
```