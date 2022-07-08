import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../../entities/hero";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: IHero;

  constructor() { }

  ngOnInit(): void {
  }

}
