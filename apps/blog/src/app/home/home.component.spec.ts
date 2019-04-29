import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { HomeComponent } from './home.component';
import { PreviewComponent } from '../preview/preview.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule, RouterTestingModule],
      declarations: [HomeComponent, PreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.get(ApolloTestingController);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
