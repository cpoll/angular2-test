import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public  title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
