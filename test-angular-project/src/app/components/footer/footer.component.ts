import { Component, OnInit } from '@angular/core';
import { routes } from 'src/environments/apiRoutes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  swaggerRoute:any

  constructor() {
    this.swaggerRoute = routes.swaggerRoute
   }

  ngOnInit(): void {
  }

}
