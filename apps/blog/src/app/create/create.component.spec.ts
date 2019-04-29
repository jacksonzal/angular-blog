import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';

import { CreateComponent } from './create.component';
import { LoadingComponent } from '../loading/loading.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        CKEditorModule
      ],
      declarations: [CreateComponent, LoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.get(ApolloTestingController);
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
