import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  Personnes  : Personne []
  PersonToShow : Personne
  constructor() { }

  ngOnInit(): void {
    this.Personnes = [
      new Personne (1, 'Yazidi', 'Douaa', 29, 11111111, 'Développeur', "capture1.png"),
      new Personne (2, 'Marvel', 'John', 35, 22222222, 'CEO', "capture2.png"),
      new Personne (1, 'Andrew', 'Mike', 30, 33333333, 'Développeur', "capture3.png"),
      new Personne (1, 'Corman', 'Inna', 26, 44444444, 'Product Manager', "capture4.png")
    ]
  }
  treatDataPerson(dataPerson){
    this.PersonToShow = dataPerson
  }

}
