import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonText
  ]
})
export class Tab1Page {

  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask || !this.newTask.trim()) return;

    this.tasks.push(this.newTask);
    this.newTask = '';
  }
}