import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EuService {

  hobbies: any [];
  url: string;

  constructor() { 

    this.hobbies= [
    'Viking metal/Folk Metal',
    'Frio e a serra',
    'Ferias Medievais',
    'E minha esposa <3'
    ];

    this.url = "https://i.ibb.co/QnPhGnz/Avila.jpg";


  }

  getName(): string {
    return "Erick Ramos"
  }

  getAge(): Number {
    return 35;
  }

  getHobbies(): any {
    return this.hobbies;
  }

  getUrl(): string {
    return this.url
  }

}
