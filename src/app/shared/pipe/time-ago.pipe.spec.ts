import { TimeAgoPipe } from './time-ago.pipe';
import { TestBed } from '@angular/core/testing';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeAgoPipe]
    });
    pipe = TestBed.inject(TimeAgoPipe);
  });

  it('should transform seconds correctly', () => {
    const inputDate = new Date();
    inputDate.setSeconds(inputDate.getSeconds() - 30); // 30 seconds ago
    const transformedValue = pipe.transform(inputDate.toISOString());
    expect(transformedValue).toBe('Hace 30 segundos');
  });

  it('should transform minutes correctly', () => {
    const inputDate = new Date();
    inputDate.setMinutes(inputDate.getMinutes() - 10); // 10 minutes ago
    const transformedValue = pipe.transform(inputDate.toISOString());
    expect(transformedValue).toBe('Hace 10 minutos');
  });

  it('should transform hours correctly', () => {
    const inputDate = new Date();
    inputDate.setHours(inputDate.getHours() - 5); // 5 hours ago
    const transformedValue = pipe.transform(inputDate.toISOString());
    expect(transformedValue).toBe('Hace 5 horas');
  });

  it('should transform days correctly', () => {
    const inputDate = new Date();
    inputDate.setDate(inputDate.getDate() - 3); // 3 days ago
    const transformedValue = pipe.transform(inputDate.toISOString());
    expect(transformedValue).toBe('Hace 3 días');
  });

  it('should return "Hace mucho tiempo" for old dates', () => {
    const inputDate = new Date(2000, 0, 1); // Very old date
    const transformedValue = pipe.transform(inputDate.toISOString());
    expect(transformedValue).toBe('Hace mucho tiempo');
  });
});
