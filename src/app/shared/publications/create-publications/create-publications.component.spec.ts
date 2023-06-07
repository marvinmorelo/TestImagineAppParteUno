import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CreatePublicationsComponent } from './create-publications.component';
import { PublicationServiceService } from 'src/app/services/publication-service.service';

describe('CreatePublicationsComponent', () => {
  let component: CreatePublicationsComponent;
  let fixture: ComponentFixture<CreatePublicationsComponent>;
  let publicationService: PublicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePublicationsComponent],
      providers: [PublicationServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePublicationsComponent);
    component = fixture.componentInstance;
    publicationService = TestBed.inject(PublicationServiceService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add publication if publicationText is not empty', () => {
    spyOn(publicationService, 'addPublication');
    component.publicationText = 'Sample publication';
    component.addPublication();
    expect(publicationService.addPublication).toHaveBeenCalled();
    expect(component.publicationText).toBe('');
  });

  it('should not add publication if publicationText is empty', () => {
    spyOn(publicationService, 'addPublication');
    component.publicationText = '';
    component.addPublication();
    expect(publicationService.addPublication).not.toHaveBeenCalled();
    expect(component.publicationText).toBe('');
  });
});
