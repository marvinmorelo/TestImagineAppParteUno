import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicationServiceService {
  private publications: any[] = [];

  constructor() {
    const savedPublications = localStorage.getItem('publications');
    if (savedPublications) {
      this.publications = JSON.parse(savedPublications);
    }
  }

  addPublication(publication: any): void {
    this.publications.unshift(publication);
    localStorage.setItem('publications', JSON.stringify(this.publications));
  }

  getPublications(): any[] {
    return this.publications;
  }

  getPublicationById(publicationId: number): any {
    return this.publications.find((pub) => pub.id === publicationId);
  }

  deletePublication(publicationId: number): void {
    // Find the publication based on the provided identifier
    const index = this.publications.findIndex(
      (pub) => pub.id === publicationId
    );

    if (index !== -1) {
      this.publications.splice(index, 1);

      this.savePublicationsToLocalStorage();
    }
  }
  sortPublicationsByDateAsc(): void {
    this.publications.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  sortPublicationsByDateDesc(): void {
    this.publications.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  savePublicationsToLocalStorage(): void {
    localStorage.setItem('publications', JSON.stringify(this.publications));
  }
}
