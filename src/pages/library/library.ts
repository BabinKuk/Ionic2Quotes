import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage: any;
  params: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quotesPage = QuotesPage;
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  } */

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
