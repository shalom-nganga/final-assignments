# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.ts >> Checkout >> selects a product, adds it to the cart, and completes checkout
- Location: tests/checkout/checkout.spec.ts:4:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'View Cart', exact: true })

```

# Page snapshot

```yaml
- generic [ref=f6e1]:
  - banner [ref=f6e2]:
    - generic [ref=f6e5]:
      - link [ref=f6e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f6e9]
      - list [ref=f6e12]:
        - listitem [ref=f6e13]:
          - link " Home" [ref=f6e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f6e15]: 
            - text: Home
        - listitem [ref=f6e16]:
          - link " Products" [ref=f6e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f6e18]: 
            - text: Products
        - listitem [ref=f6e19]:
          - link " Cart" [ref=f6e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f6e21]: 
            - text: Cart
        - listitem [ref=f6e22]:
          - link " Signup / Login" [ref=f6e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f6e24]: 
            - text: Signup / Login
        - listitem [ref=f6e25]:
          - link " Test Cases" [ref=f6e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f6e27]: 
            - text: Test Cases
        - listitem [ref=f6e28]:
          - link " API Testing" [ref=f6e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f6e30]: 
            - text: API Testing
        - listitem [ref=f6e31]:
          - link " Video Tutorials" [ref=f6e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f6e33]: 
            - text: Video Tutorials
        - listitem [ref=f6e34]:
          - link " Contact us" [ref=f6e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f6e36]: 
            - text: Contact us
  - generic [ref=f6e39]:
    - generic [ref=f6e41]:
      - heading "Category" [level=2] [ref=f6e42]
      - generic [ref=f6e43]:
        - heading [level=4] [ref=f6e46]:
          - link " Women" [ref=f6e47] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f6e48]: 
            - text: Women
        - heading [level=4] [ref=f6e52]:
          - link " Men" [ref=f6e53] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f6e54]: 
            - text: Men
        - heading [level=4] [ref=f6e58]:
          - link " Kids" [ref=f6e59] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f6e60]: 
            - text: Kids
      - generic [ref=f6e62]:
        - heading "Brands" [level=2] [ref=f6e63]
        - list [ref=f6e65]:
          - listitem [ref=f6e66]:
            - link "(6) Polo" [ref=f6e67] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f6e68]: (6)
              - text: Polo
          - listitem [ref=f6e69]:
            - link "(5) H&M" [ref=f6e70] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f6e71]: (5)
              - text: H&M
          - listitem [ref=f6e72]:
            - link "(5) Madame" [ref=f6e73] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f6e74]: (5)
              - text: Madame
          - listitem [ref=f6e75]:
            - link "(3) Mast & Harbour" [ref=f6e76] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f6e77]: (3)
              - text: Mast & Harbour
          - listitem [ref=f6e78]:
            - link "(4) Babyhug" [ref=f6e79] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f6e80]: (4)
              - text: Babyhug
          - listitem [ref=f6e81]:
            - link "(3) Allen Solly Junior" [ref=f6e82] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f6e83]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f6e84]:
            - link "(3) Kookie Kids" [ref=f6e85] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f6e86]: (3)
              - text: Kookie Kids
          - listitem [ref=f6e87]:
            - link "(5) Biba" [ref=f6e88] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f6e89]: (5)
              - text: Biba
    - generic [ref=f6e90]:
      - generic [ref=f6e91]:
        - img "ecommerce website products" [ref=f6e94]
        - generic [ref=f6e96]:
          - img "ecommerce website products" [ref=f6e97]
          - heading "Blue Top" [level=2] [ref=f6e98]
          - paragraph [ref=f6e99]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=f6e100]
          - generic [ref=f6e101]:
            - generic [ref=f6e102]: Rs. 500
            - generic [ref=f6e103]: "Quantity:"
            - spinbutton [ref=f6e104]: "1"
            - button " Add to cart" [active] [ref=f6e105] [cursor=pointer]:
              - generic [ref=f6e106]: 
              - text: Add to cart
          - paragraph [ref=f6e107]: "Availability: In Stock"
          - paragraph [ref=f6e108]: "Condition: New"
          - paragraph [ref=f6e109]:
            - text: "Brand:"
            - link "Polo" [ref=f6e110] [cursor=pointer]:
              - /url: "#"
      - generic [ref=f6e113]:
        - list [ref=f6e115]:
          - listitem [ref=f6e116]:
            - link "Write Your Review" [ref=f6e117]:
              - /url: "#reviews"
        - generic [ref=f6e119]:
          - generic [ref=f6e120]:
            - textbox "Your Name" [ref=f6e121]
            - textbox "Email Address" [ref=f6e122]
          - textbox "Add Review Here!" [ref=f6e123]
          - button "Submit" [ref=f6e124] [cursor=pointer]
  - insertion [ref=f6e126]:
    - generic [ref=f6e129]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f6e131]: Discover more
      - link "Fashion & Style" [ref=f6e132] [cursor=pointer]
      - link "Fashion accessories" [ref=f6e137] [cursor=pointer]
      - link "Kookie Kids apparel" [ref=f6e142] [cursor=pointer]
  - contentinfo [ref=f6e147]:
    - generic [ref=f6e152]:
      - heading "Subscription" [level=2] [ref=f6e153]
      - generic [ref=f6e154]:
        - textbox "Your email address" [ref=f6e155]
        - button "" [ref=f6e156] [cursor=pointer]
        - paragraph [ref=f6e158]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f6e162]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class ProductDetailsPage {
  4  |   readonly productInformation: Locator;
  5  |   readonly addToCartButton: Locator;
  6  |   readonly viewCartLink: Locator;
  7  | 
  8  |   constructor(private readonly page: Page) {
  9  |     this.productInformation = page.locator('.product-information');
  10 |     this.addToCartButton = page.getByRole('button', { name: /Add to cart/ });
  11 |     this.viewCartLink = page.getByRole('link', { name: 'View Cart', exact: true });
  12 |   }
  13 | 
  14 |   async expectVisible(): Promise<void> {
  15 |     await expect(this.productInformation).toBeVisible();
  16 |   }
  17 | 
  18 |   async addProductToCart(): Promise<void> {
  19 |     await this.addToCartButton.click();
  20 |   }
  21 | 
  22 |   async openCart(): Promise<void> {
> 23 |     await this.viewCartLink.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |   }
  25 | }
```