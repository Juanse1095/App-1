import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/meka1.png',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/meka2.png',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/meka3.png',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/meka4.png',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];

  constructor( private navCtrl: NavController ) { }

  

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/');
  }

}
