import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.sass']
})
export class CourseModalComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() save = new EventEmitter<object>();
  @Input() course = {
    title: '',
    img: '',
    teacher: '',
    price: '',
    id: 0
  };
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    teacher: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    id: new FormControl('')
  })
  @Input() edit = false
  constructor() { }

  initializeForm() {
    if (this.edit) {
      this.form.setValue(this.course)
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  emitClose(){
    this.close.emit();
  }
  emitSave(){
    if (this.form.status !== 'VALID'){
      window.alert('please fill in all required fields!')
    }
    this.save.emit(this.form);
    this.emitClose()
  }
  

}
