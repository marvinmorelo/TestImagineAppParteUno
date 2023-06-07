import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.scss']
})
export class AddFeedComponent {

  @Input() feeds: any[] = [];

}
