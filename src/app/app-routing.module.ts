import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{NotFoundComponent} from './not-found/not-found.component';
import{HomeComponent} from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { AddComponent } from './Course/add/add.component';
import {AddCateogryComponent} from './Category/add-cateogry/add-cateogry.component';
import { GetAllCateogriesComponent } from './Category/get-all-cateogries/get-all-cateogries.component';
import { GetCateogryByIDComponent } from './Category/get-cateogry-by-id/get-cateogry-by-id.component';
import{UpdateCategoryComponent}from './Category/update-category/update-category.component';
import {AddClassComponent} from './Class/add-class/add-class.component';
import { GetAllClassesComponent } from './Class/get-all-classes/get-all-classes.component';
import { GetClassByIDComponent } from './Class/get-class-by-id/get-class-by-id.component';
import{UpdateClassComponent}from './Class/update-class/update-class.component'
import { LoginComponent } from './users/login/login.component';
import{GetAllComponent} from './users/get-all/get-all.component';
import{ProfileComponent} from './users/profile/profile.component'
import { EdituserComponent } from './users/edituser/edituser.component';
import { EditCourseComponent } from './Course/edit-course/edit-course/edit-course.component';
import { GetAllCoursesComponent } from './Course/get-all-courses/get-all-courses/get-all-courses.component';
import { CourseDetailsComponent } from './Course/course-details/course-details/course-details.component';
import { GetSessionByIdComponent } from './Session/get-session-by-id/get-session-by-id.component';
import { GetAllSessionsComponent } from './Session/get-all-sessions/get-all-sessions.component';
import { AddSessionComponent } from './Session/add-session/add-session.component';
import { UpdateSessionComponent } from './Session/update-session/update-session.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'updateUser/:id',component:EdituserComponent},
  {path:'getAllUsers',component:GetAllComponent},
  {path:'home',component:HomeComponent},  
  {path:'addCourse',component:AddComponent},
  {path:'addCategory',component:AddCateogryComponent},
  {path:'getAllCategories',component:GetAllCateogriesComponent},
  {path:'getCateogryById/:id',component:GetCateogryByIDComponent},
  {path:'updateCategory/:id',component:UpdateCategoryComponent},
  {path:'AddClass',component:AddClassComponent},
  {path:'getAllClasses',component:GetAllClassesComponent},
  {path:'getClassById/:id',component:GetClassByIDComponent},
  {path:'updateClass/:id',component:UpdateClassComponent},
  {path:'updateCourse/:id',component:EditCourseComponent},
  {path:'updateSession/:id',component:UpdateSessionComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'getAllCourses',component:GetAllCoursesComponent},
  {path:'getCourseById/:id',component:CourseDetailsComponent},
  {path:'getSessionById/:id',component:GetSessionByIdComponent},
  {path:'getAllSessions',component:GetAllSessionsComponent},
  {path:'addSession',component:AddSessionComponent},
  {path:'upload',component:UploadComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
