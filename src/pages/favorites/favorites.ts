import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes.service';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings.service';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  } */

  // mogli smo i na ngoninit
  ionViewWillEnter() {
    console.log('ionViewWillEnter FavoritesPage');
    // get favorite quotes
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    // create and display modal and pass quote to modal
    let modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    // after modal is dismissed, execute function
    // to remove from favorites if remove=true
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if (remove == true) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    // re-render favorites page
    // display quotes without removed quote (2 methods):
    // 1. reload quotes using service
    // this.quotes = this.quotesService.getFavoriteQuotes();
    // 2. remove quote from favorites on the page
    let position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackgroundColor() {
    return this.settingsService.isAltBackground() ? 'altQuoteBkgnd' : 'quoteBkgnd';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
