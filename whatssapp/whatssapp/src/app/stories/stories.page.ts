import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: 'stories.page.html',
  styleUrls: ['stories.page.scss'],
  standalone: false
})
export class StoriesPage {
  estados = [
    {
      username: "María López",
      time: "Hace 5 minutos",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
    },
    {
      username: "Carlos Pérez",
      time: "Hace 20 minutos",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
    },
    {
      username: "Ana Ramírez",
      time: "Hace 1 hora",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
    }
  ];

  constructor() {}
}
