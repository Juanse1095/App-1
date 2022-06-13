import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) IonInfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData ( event ) {
    // console.log(event);

    if ( this.data.length > 50){
         this.IonInfiniteScroll.complete();
         this.IonInfiniteScroll.disabled = true;
         return;
    }

    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr );
      // event.target.complete();
      this.IonInfiniteScroll.complete();
    }, 1000);
  }

}
