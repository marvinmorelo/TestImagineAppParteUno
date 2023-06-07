import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-view-courses',
  templateUrl: './more-view-courses.component.html',
  styleUrls: ['./more-view-courses.component.scss']
})
export class MoreViewCoursesComponent {
  @Input() items: any[] = [];
}
