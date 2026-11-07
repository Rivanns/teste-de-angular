import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItsAliveAndIt } from './its-alive-and-it';

describe('ItsAliveAndIt', () => {
  let component: ItsAliveAndIt;
  let fixture: ComponentFixture<ItsAliveAndIt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItsAliveAndIt],
    }).compileComponents();

    fixture = TestBed.createComponent(ItsAliveAndIt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
