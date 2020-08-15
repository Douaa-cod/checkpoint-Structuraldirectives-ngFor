import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-person-model',
  templateUrl: './person-model.component.html',
  styleUrls: ['./person-model.component.css']
})
export class PersonModelComponent implements OnInit {

  personTab: Personne [];
  constructor() { }

  ngOnInit(): void {
    this.personTab = [
      new Personne (1, 'Yazidi', 'Douaa', 29, 11111111, 'Développeur', ""),
      new Personne (2, 'Marvel', 'John', 35, 22222222, 'CEO', ""),
      new Personne (1, 'Andrew', 'Mike', 30, 33333333, 'Développeur', ""),
      new Personne (1, 'Corman', 'Inna', 26, 44444444, 'Product Manager', "")
    ]
  }
}
