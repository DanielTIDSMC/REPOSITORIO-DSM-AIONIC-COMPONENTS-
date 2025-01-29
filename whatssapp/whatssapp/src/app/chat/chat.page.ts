import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false
})
export class ChatPage implements OnInit {

  chats:any[] = [
    {
      username:'Mi Diosa Espectacular ♥️⭐',
      message: 'Sticker',
      data:'13:44',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username:'Tareas de dos Pulguitas ♥️',
      message: 'Sticker',
      data:'13:44',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
{
  username:'AG EMPRESARIAL',
  message: 'Foto',
  data:'13:44',
  avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg',
},
{
  username:'PANAS TIDSM',
  message: 'Cristian es....',
  data:'13:44',
  avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg',
},
{
  username:'Aldahir UT',
  message: '🍑🐷',
  data:'13:44',
  avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg',
},
  ];

  constructor() { }

  ngOnInit() {
  }

}
