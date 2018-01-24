export class SettingsService {

  private altBackground: boolean = false;

  setBackground(isAlt: boolean) {
    console.log('set: ' + isAlt);
    this.altBackground = isAlt;
  }

  isAltBackground() {
    console.log('isalt: ' + this.altBackground);
    return this.altBackground;
  }
}
