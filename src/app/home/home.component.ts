import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  courses = [
    {
      title: 'Web Development Diploma',
      img: 'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      teacher: 'Mohamed Mostafa',
      price: '100',
      id: 1
    },
    {
      title: 'Graphic Design',
      img: 'https://images.pexels.com/photos/5905457/pexels-photo-5905457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      teacher: 'Mohamed Mostafa',
      price: '50',
      id: 2
    },
    {
      title: 'Web Development Diploma',
      img: 'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      teacher: 'Mohamed Mostafa',
      price: '300',
      id: 3
    },
  ]

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content);
  }
  createCourse(course:any){
    console.log('course', course);
    
    const courseObj = course.value;
    courseObj.id = this.courses.length + 1
    this.courses.push(courseObj)
  }
  editCourse(course:any){
    const courseIndex = this.courses.findIndex(x => x.id === course.value.id)
    this.courses[courseIndex] = course.value
  }
  deleteCourse(course:any){
    const courseIndex = this.courses.findIndex(x => x.id === course.id)
    delete this.courses[courseIndex]
    this.courses.splice(courseIndex, 1);
  }


}
