import { Component } from '@angular/core';
import { PublicationServiceService } from 'src/app/services/publication-service.service';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.scss'],
})
export class CreatePublicationsComponent {
  publicationText: string = '';

  constructor(private publicationService: PublicationServiceService) {}

  addPublication(): void {
    if (this.publicationText !== "") {
       const publication = {
      text: this.publicationText,
      date: new Date().toISOString(),
    };

    this.publicationService.addPublication(publication);

    this.publicationText = '';
    }
   
  }
}
