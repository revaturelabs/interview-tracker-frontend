import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { LoginComponent } from './login.component';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, MaterialModule ],
      providers: [ LoginService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
