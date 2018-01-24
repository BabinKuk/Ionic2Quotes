import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  // remove argument (with default value false if not specified)
  onClose(remove = false) {
    // dismiss modal and pass data to the next view (previous page in this case)
    this.viewCtrl.dismiss(remove);
  }

}
