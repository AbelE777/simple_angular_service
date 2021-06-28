import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    template: `<h2>{{title}}</h2>
        <ul>
            <li *ngFor='let a of courses'>{{a}}</li>
        </ul>
    `,
    selector:'courses'

})
export class CoursesComponent {
    title="list of courses";
    courses;

    constructor(service: CoursesService){
        
        this.courses = service.getCourses();
    }
}