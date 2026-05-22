import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonList, IonItem,
  IonLabel, IonToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonList, IonItem,
    IonLabel, IonToggle
  ]
})
export class Tab3Page {

  isDark = false;

  toggleDarkMode(event: any) {
    this.isDark = event.detail.checked;

    document.body.classList.toggle('dark', this.isDark);
  }
}