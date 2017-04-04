import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    public  title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then((heroes) => {
            this.heroes = heroes;
        });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
