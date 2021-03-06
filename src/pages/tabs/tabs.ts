import { Component } from '@angular/core';
import { IonicApp } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  favoritesPage: any;
  libraryPage: any;

  constructor() {
    this.favoritesPage = FavoritesPage;
    this.libraryPage = LibraryPage;
  }

}
