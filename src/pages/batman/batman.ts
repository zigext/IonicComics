import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the BatmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batman',
  templateUrl: 'batman.html',
})
export class BatmanPage {
  countPage = 1
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatmanPage');
  }

  backToast(text) {
    var mess = ["หน้าแรก", "จบแล้วว ไปหาอ่าต่อเอาเอง"]
    let toast = this.toastCtrl.create({
      message: mess[text],
      duration: 1000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present()
  }

  Next() {
    if (this.countPage < 3) {
      this.countPage++
      document.getElementById("imageBatman").innerHTML = "<img height='100%' src='../../assets/imgs/batman/" + this.countPage + ".jpg'/></div>";
    }
    else {
      this.backToast(1)
    }
  }
  Back() {
    if (this.countPage > 1) {
      this.countPage--
      document.getElementById("imageBatman").innerHTML = "<img height='100%' src='../../assets/imgs/batman/" + this.countPage + ".jpg'/></div>";
    }
    else {
      this.backToast(0) 
    }
  }

}
