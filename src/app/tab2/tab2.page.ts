import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonProgressBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonProgressBar
  ]
})
export class Tab2Page {

  get tasks(): any[] {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }

  get doneCount() {
    return this.tasks.filter(t => t.done).length;
  }

  get pendingCount() {
    return this.tasks.filter(t => !t.done).length;
  }

  get progress() {
    if (!this.tasks.length) return 0;
    return this.doneCount / this.tasks.length;
  }
}