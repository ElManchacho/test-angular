import { Injectable } from '@angular/core';
import { routes } from 'src/environments/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  
  async signUp(body : any): Promise<any> {
    try{
      const response = await fetch(routes.createUserRoute, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body:body
      });
  
      return ((await response.json()) as string)
    }

    catch{
      return null
    }
  }
}
