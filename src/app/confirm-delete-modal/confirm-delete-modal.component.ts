import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.sass']
})
export class ConfirmDeleteModalComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  emitClose(){
    this.close.emit();
  }
  emitDelete(){
    this.delete.emit();
    this.emitClose()
  }
  
}
