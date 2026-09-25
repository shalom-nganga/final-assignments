import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelper {
  constructor(private request: APIRequestContext) {}


  async getAllProducts(): Promise<APIResponse> {
    return await this.request.get('https://www.automationexercise.com/api/productsList');
  }

  
  async verifyLogin(email: string, password: string): Promise<APIResponse> {
    return await this.request.post('https://www.automationexercise.com/api/verifyLogin', {
      form: {
        email,
        password,
      },
    });
  }

  
  async createAccount(userData: Record<string, string>): Promise<APIResponse> {
    return await this.request.post('https://www.automationexercise.com/api/createAccount', {
      form: userData,
    });
  }

  async updateAccount(userData: Record<string, string>): Promise<APIResponse> {
    return await this.request.put('https://www.automationexercise.com/api/updateAccount', {
      form: userData,
    });
  }

  async deleteAccount(email: string, password: string): Promise<APIResponse> {
    return await this.request.delete('https://www.automationexercise.com/api/deleteAccount', {
      form: {
        email,
        password,
      },
    });
  }
}