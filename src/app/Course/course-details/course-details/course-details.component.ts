import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courseService } from 'src/app/services/course.service';
import { commentService } from 'src/app/services/comment.service';
import { categoryService } from 'src/app/services/category.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Icourse } from 'src/app/shared/Icourse';
import { Icomment } from 'src/app/shared/Icomment';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private cs:courseService,
    private route:ActivatedRoute,
    private router:Router,private fb:FormBuilder,
    private commentService:commentService,
    private categoryService: categoryService) 
  { 
    this.route.params.subscribe(params => {
      console.log(params) 
      this.id=params['id'] 
      console.log('id : '+(this.id));
     });
     
     this.cs.getCourseById(this.id).subscribe(
      data => {
        this.course = data[0];
        this.categoryService.getCategoryById(data[0].categoryID).subscribe(
          data2 => {
            this.courseCategoryTitle = data2[0].Title;});
      },
      error => console.log(error)
    );

   this.GetCourseComments();
  
  }

  comments:Icomment[]=[];

  ngOnInit(): void {}
  addCommentForm=this.fb.group(
    {
    content:[''],
    courseID:[''],
    userID:[''],
   });  
  id:String;
  courseCategoryTitle:String;
    course:Icourse={
    tittle:'',
    description:'',
    image:'',
    categoryID:'',
    teachers:[]
  }
  
  delete(){
    this.cs.DeleteCourse(this.id)
    .subscribe(
      data => {
        this.router.navigateByUrl("course")
      },
      error => {
        console.log("errooorrrrr-_-"+ error)
      }
    );  
  }
  get content()
  {
    return this.addCommentForm.get('content');
  }
  AddComment(){
    var comment:Icomment={ 
      content:this.content?.value,
      userID:'user#',
      courseID:this.id,
    }
   this.commentService.AddComment(comment).subscribe(
     data => {
       this.router.navigateByUrl("/course")
     },
     error => {
       console.log(error)
     }
   );
  }

  GetCourseComments(){
    this.commentService.GetAllComments().subscribe( 
    data => {
     this.comments=data;
     console.log(data);
    },
   error => {
    console.log(error)
     }
   );
   console.log(this.comments);
  }
fun(c:Icomment){
  return c.courseID==this.id;
}
}
