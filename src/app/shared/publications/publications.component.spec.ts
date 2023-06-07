import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsComponent } from './publications.component';
import { PublicationServiceService } from 'src/app/services/publication-service.service';

describe('PublicationsComponent', () => {
  let component: PublicationsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationsComponent]
    });
    component = TestBed.createComponent(PublicationsComponent).componentInstance;
  });

  describe('deletePublication', () => {
    it('should call deletePublication method of publicationService', () => {
      const publicationService = TestBed.inject(PublicationServiceService);
      const deleteSpy = spyOn(publicationService, 'deletePublication');

      const publicationId = 123;
      component.deletePublication(publicationId);

      expect(deleteSpy).toHaveBeenCalledWith(publicationId);
    });

    it('should update publications$ with the updated list', () => {
      const publicationService = TestBed.inject(PublicationServiceService);
      const getPublicationsSpy = spyOn(publicationService, 'getPublications').and.returnValue([ /* updated list */ ]);

      const publicationId = 123;
      component.deletePublication(publicationId);

      expect(getPublicationsSpy).toHaveBeenCalled();
      expect(component.publications$).toEqual([ /* updated list */ ]);
    });
  });

  describe('getPublicationIds', () => {
    it('should return an empty array when no publications are saved', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      
      const result = component.getPublicationIds();

      expect(result).toEqual([]);
    });

    it('should return an array of publication IDs when publications are saved', () => {
      const savedPublications = [{ id: 1 }, { id: 2 }, { id: 3 }];
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(savedPublications));

      const result = component.getPublicationIds();

      expect(result).toEqual([1, 2, 3]);
    });
  });
});
