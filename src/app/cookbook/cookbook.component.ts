import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { Recipe } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss'],
})

export class CookbookComponent extends Animations implements OnInit  {
  public recipes: FirebaseListObservable<Recipe[]>;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    console.log('CookbookComponent - ngOnInit');
    this.activatedRoute.data.subscribe(data => {
      console.log('CookbookComponent - subscribe',data);
      this.recipes = data['cookbook'];
    });
  }

}
