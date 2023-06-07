import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})
export class UserStatisticsComponent {
  @Input() statisticItem : string
  @Input() statisticValue : number


  constructor(){
    this.statisticItem = "Vistas"
    this.statisticValue = 1325
  }
}
