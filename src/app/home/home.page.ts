import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}
  login() {
    //this.navCtrl.navigateRoot('/contatos');
    this.navCtrl.navigateForward(['/contatos']);
    console.log("ionViewEnter");
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeGesture(true);
  }
}
