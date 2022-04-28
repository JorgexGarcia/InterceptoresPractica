import { Component } from '@angular/core';
import {ServiceService} from "./services/service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor(private service: ServiceService) {

    this.service.obtenerUsuarios().subscribe({
      next: (resp => {
        console.log(resp)
      }),
      error: (_ => {
        console.warn('error')
      })
    });
  }



}
