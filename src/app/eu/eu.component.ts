import { Component, OnInit } from '@angular/core';
import { EuService } from '../service/eu.service';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  eu: any;
  age: any;
  cosas: any;
  imgg: string;

  constructor(eu: EuService) {

    
    this.eu = eu.getName();

    this.age = eu.getAge();

    this.cosas = eu.getHobbies();

    this.imgg = eu.getUrl();

   }

  ngOnInit(): void {
  }

}
