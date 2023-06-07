import { PublicationServiceService } from 'src/app/services/publication-service.service';
import { CreatePublicationsComponent } from './create-publications.component';
import { TestBed } from '@angular/core/testing';

describe('CreatePublicationsComponent', () => {
  let component: CreatePublicationsComponent;
  let publicationService: PublicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicationServiceService],
    });
    component = new CreatePublicationsComponent(
      TestBed.inject(PublicationServiceService)
    );
    publicationService = TestBed.inject(PublicationServiceService);
  });

  it('should add a new publication and reset publicationText', () => {
    const publicationText = 'New publication';

    component.publicationText = publicationText;
    const currentDate = new Date;

    spyOn(publicationService, 'addPublication');

    component.addPublication();

    expect(publicationService.addPublication).toHaveBeenCalledWith(jasmine.objectContaining({
      text: 'New publication',
      date: currentDate
    }));
    
    

    expect(component.publicationText).toEqual('');
  });
});
