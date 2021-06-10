import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import{Icountry} from '../shared/Icountry';
import{catchError} from 'rxjs/operators'
import{countryController} from'../APIs/countyController';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class countryService {
   url = countryController.GetAllCountries;  
  constructor(private http:HttpClient) { 
  
  }
  getAllCountries():Observable<Icountry[]>
  {
    return this.http.get<Icountry[]>(this.url).pipe(catchError(err=>{
      return throwError(err.message||"customError happened")
    }));
  }

  getCountryById(id:string):Observable<Icountry>
  {
    return this.http.get<Icountry>(this.url+"/"+id).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }

  getCountryByName(name:string):Observable<Icountry>
  {
    return this.http.get<Icountry>(this.url+"/withName/"+name).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  } 



}