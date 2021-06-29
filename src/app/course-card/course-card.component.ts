import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass']
})
export class CourseCardComponent implements OnInit {
  @Input() course = {
    title: '',
    img: '',
    teacher: '',
    price: '',
    id: 0
  };
  @Output() edit = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  closeResult = '';
  

  constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content);
  }

  emitEdit(course:any){
    this.edit.emit(course);
  }
  emmitDelete(){
    this.delete.emit(this.course)
  }
  ngOnInit(): void {
  }
}
