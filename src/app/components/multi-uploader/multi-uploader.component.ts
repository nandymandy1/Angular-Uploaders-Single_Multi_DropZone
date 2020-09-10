import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FileUploaderService } from '../../services/file-uploader.service';

@Component({
  selector: 'multi-uploader',
  templateUrl: './multi-uploader.component.html',
  styleUrls: ['./multi-uploader.component.sass']
})
export class MultiUploaderComponent implements OnInit {

  progress: Number = 0;
  fileURLS: String[] = [];
  isUploading: Boolean = false;

  constructor(
    private fileUploader: FileUploaderService,
  ) { }

  ngOnInit(): void {
  }

  handleFile(e) {
    let { files } = e.target;
    this.fileUploader.uploadFiles(files).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.isUploading = true;
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          break;
        case HttpEventType.Response:
          this.fileURLS = event.body;
          this.isUploading = false;
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
      }
    });
    // let data: any = await this.fileUploader.uploadFile(files[0]);
    // console.log(data);
    // this.fileURL = data.imagePath;
    // this.isUploading = false;
  }

}
