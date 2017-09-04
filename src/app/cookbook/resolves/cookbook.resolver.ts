import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Recipe } from '../interfaces/';

@Injectable()
export class CookbookResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AngularFire} angularFire
   */
  constructor(private angularFire: AngularFire) { }

  /**
   * Resolve method to get current user to-do items from Firebase.
   *
   * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Promise<FirebaseListObservable<Recipe[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<FirebaseListObservable<Recipe[]>> {
    console.log('CookbookResolver', localStorage.getItem('uid'))
    const list = this.angularFire.database.list('/cookbook/' + localStorage.getItem('uid'));

    return new Promise((resolve, reject) => {
      list.first().subscribe(() => resolve(list), reject);
    });
  }
}
