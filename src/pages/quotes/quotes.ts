import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes.service';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.quoteGroup = this.navParams.data;
  //   //Add elvis (?) operator in template to use this approach
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
    //console.log(this.quoteGroup);
  }

  onAddToFavorites(selectedQuote: Quote) {
    console.log('add to fav ' + selectedQuote.text);
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote to favorites?',
      buttons: [
        {
          text: 'OK, go ahead!',
          handler: () => {
            console.log('adding to favorites');
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'Cancel, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('canceling...');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    console.log('remove from favorites');
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
