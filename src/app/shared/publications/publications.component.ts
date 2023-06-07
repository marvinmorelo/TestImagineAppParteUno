import { Component, Input } from '@angular/core';
import { PublicationServiceService } from 'src/app/services/publication-service.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent {
  @Input() publication: any;
  @Input() timePost: string;
  publications$: any[] = [];
  publicationId: number[];


  constructor(private publicationService: PublicationServiceService) {
    this.publication = 'Hola esto es un post';
    this.timePost = 'Hace 2 días'; 
    this.publicationId = this.getPublicationIds();
  }

  deletePublication(publicationId: number): void {
    this.publicationService.deletePublication(publicationId);
    this.publications$ = this.publicationService.getPublications();
  }

  getPublicationIds(): number[] {
    const savedPublications = localStorage.getItem('publications');
    if (savedPublications) {
      const publications = JSON.parse(savedPublications);
      return publications.map((pub: { id: any; }) => pub.id);
    }
    return [];
  }

}
