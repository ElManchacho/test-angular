import { Injectable } from '@angular/core';
import { routes } from 'src/environments/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUsersPseudos(): Promise<string[]> {
    const response = await fetch(routes.getUserPseudosRoute, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return ((await response.json()) as string[]);

  }

  async getUserByPseudo(pseudo: string): Promise<any> {
    try {
      const response = await fetch(routes.getUserByPseudoRoute + `${pseudo}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });

      return ((await response.json()) as string)
    }

    catch {
      return null
    }
  }

  async getUserById(id:string): Promise<any> {
    try{
      const response = await fetch(routes.getUserByIdRoute+`${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
  
      return ((await response.json()) as string)
    }

    catch{
      return null
    }
  }

}
