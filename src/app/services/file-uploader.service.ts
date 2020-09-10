import _ from 'lodash';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface API_Response {
  imagePath: String
}

@Injectable({
  providedIn: 'root'
})

export class FileUploaderService {

  baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);
    return this.http
      .post(
        this.baseURL + 'images/single-upload',
        formData,
        {
          reportProgress: true,
          observe: 'events'
        }
      ).pipe(
        catchError(this.errorMgmt)
      );
  }

  uploadFiles(files: File[]): Observable<any> {
    let formData = new FormData();
    _.forEach(files, (file: File) => {
      formData.append('files', file);
    });

    return this.http
      .post(
        this.baseURL + 'images/multi-upload',
        formData,
        {
          reportProgress: true,
          observe: 'events'
        }
      ).pipe(
        catchError(this.errorMgmt)
      );
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
