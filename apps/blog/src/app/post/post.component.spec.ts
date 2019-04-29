import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule, RouterTestingModule],
      declarations: [PostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.get(ApolloTestingController);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
