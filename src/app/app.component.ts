import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LayoutComponent]
})
export class AppComponent implements OnInit {
  message: any = '99999999';

  constructor(private layoutComponent: LayoutComponent) {}

  ngOnInit(): void {
    this.layoutComponent.test.bind(this,'BEST')()

    const arr1 = [1,2,3,4,5,6,7,8,9,  [1,2,3,4,5,6,7,8,9, [1,2,3,4, [1,2,3,4]]]];

    console.log('2222222',arr1.flat(3))


  }

   test(data: any) {
    console.log('BEST_CAR'+ data);
  }
}
