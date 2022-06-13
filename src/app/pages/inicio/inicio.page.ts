import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/components/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  darkMode: boolean = true;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService ) { }

  cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  } 

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}
