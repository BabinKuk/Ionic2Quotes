import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private settingsService: SettingsService) {
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  } */

  onToggle(toggle: Toggle) {
    console.log('onToggle', toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
