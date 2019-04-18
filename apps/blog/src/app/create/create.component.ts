import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorData = '<p>Hello, world!</p>';
  constructor() {}

  ngOnInit() {}

  submit() {
    console.log(this.editorData);
  }
}
