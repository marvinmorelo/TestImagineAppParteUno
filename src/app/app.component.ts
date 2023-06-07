import { Component, OnInit } from '@angular/core';
import { PublicationServiceService } from './services/publication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ParteUno';
  publications$: any[] = [];

  feeds = [
    {
      picture: 'assets/avatars/pexels-photo-415829.webp',
      name: 'Edna Odette González Vázques',
      profesion: 'Directyora editorial en EnergíaHoy',
    },
    {
      picture: 'assets/avatars/espectador.png',
      name: 'El Espectador',
      profesion: 'Empresa - Servicio de Información',
    },
    {
      picture: 'assets/avatars/pexels-pixabay-220453.jpeg',
      name: 'Andres Conesa',
      profesion: 'Chief Executive Officer at Aeromexico',
    },
  ];

  items = [
    {
      title: 'Cómo aumentar la resiliencia',
      author: 'Tatiana Kolovou',
    },
    {
      title: 'Navegar el cambio en tiempo dificiles',
      author: 'Izanami Martinéz',
    },
    {
      title: 'Aprende a usar LinkedIn Learning',
      author: 'Sara Ramadoro',
    },
  ];

  constructor(private publicationService: PublicationServiceService) {}

  ngOnInit(): void {
    this.publications$ = this.publicationService.getPublications();
  }

  sortPublications(event: Event): void {
    const sortOrder = (event.target as HTMLSelectElement).value;
    switch (sortOrder) {
      case 'asc':
        this.publicationService.sortPublicationsByDateAsc();
        break;
      case 'desc':
        this.publicationService.sortPublicationsByDateDesc();
        break;
      default:
        break;
    }
    this.publications$ = this.publicationService.getPublications() || [];
  }
}
