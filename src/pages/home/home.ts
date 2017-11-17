import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kopai
  countPage=1
  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {
    this.kopai="kopai";
  
  }
  backToast(text) {
    var mess=["นี่คือหน้าแรก","หน้าสุดท้ายแล้ว"]
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



  Next(){
    if(this.countPage<3){
      this.countPage++
    document.getElementById("demo").innerHTML = "<img hight='100%' src='../assets/imgs/"+this.countPage+".png'/></div>";}
    else{
      this.backToast(1)}
  }
  Back(){
    if(this.countPage>1){
      this.countPage--
    document.getElementById("demo").innerHTML = "<img hight='100%' src='../assets/imgs/"+this.countPage+".png'/></div>";}
    else{
      this.backToast(0)
    }
  }
}
