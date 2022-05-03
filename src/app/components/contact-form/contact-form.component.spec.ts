import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ,NavbarComponent],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have text as Contact us', () => {
    const fixture = TestBed.createComponent(ContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.contact')?.textContent).toContain('Contact us');
  });
});
