import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraSource, CameraResultType, Plugins } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: SafeResourceUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private sanitizer: DomSanitizer) {
  }

  takePicture(): void {
    take();
  }

  

}

async function take() {
  const { Camera } = Plugins;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
        source: CameraSource.Photos
    });

    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));

    console.log(this.image);
}