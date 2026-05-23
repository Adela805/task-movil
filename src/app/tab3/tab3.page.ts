import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonToggle, IonButton, IonCard, IonCardContent
} from '@ionic/angular/standalone';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonToggle,
    IonButton, IonCard, IonCardContent
  ]
})
export class Tab3Page {

  isDark = false;

  constructor(private toastController: ToastController) {}

  toggleDarkMode(event: any) {
    this.isDark = event.detail.checked;
    document.body.classList.toggle('dark', this.isDark);
  }

  async mostrarNotificacion() {
    const toast = await this.toastController.create({
      message: '🔔 Notificación activada',
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();
  }
}