import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalNotifications } from '@capacitor/local-notifications';

import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem,
  IonLabel, IonInput, IonButton, IonList
} from '@ionic/angular/standalone';

type Task = {
  title: string;
  date: string;
  time: string;
  done: boolean;
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonItem,
    IonLabel, IonInput, IonButton, IonList
  ]
})
export class Tab1Page implements OnInit {

  tasks: Task[] = [];

  newTask = '';
  newDate = '';
  newTime = '';

  ngOnInit() {
    this.loadTasks();
    this.pedirPermiso();
  }

  // 🔐 pedir permiso notificaciones
  async pedirPermiso() {
    await LocalNotifications.requestPermissions();
  }

  // ⏰ programar alarma real
  async programarAlarma(task: Task) {

    const fecha = new Date(`${task.date}T${task.time}`);

    await LocalNotifications.schedule({
      notifications: [
        {
          id: Date.now(),
          title: '⏰ Tarea pendiente',
          body: `📅 ${task.title}. Vence ahora, recuerda completarla.`,
          schedule: { at: fecha },
          sound: 'default'
        }
      ]
    });

  }

  // ➕ agregar tarea
  addTask() {
    if (!this.newTask || !this.newDate || !this.newTime) return;

    const nuevaTarea: Task = {
      title: this.newTask,
      date: this.newDate,
      time: this.newTime,
      done: false
    };

    this.tasks.push(nuevaTarea);
    this.saveTasks();

    // 🔔 programar notificación
    this.programarAlarma(nuevaTarea);

    this.newTask = '';
    this.newDate = '';
    this.newTime = '';
  }

  // ✔ marcar como hecha
  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.saveTasks();
  }

  // 🗑 borrar
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  // 💾 guardar
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // 📥 cargar
  loadTasks() {
    const data = localStorage.getItem('tasks');
    this.tasks = data ? JSON.parse(data) : [];
  }
}