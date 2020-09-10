import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleUploaderComponent } from './components/single-uploader/single-uploader.component';
import { MultiUploaderComponent } from './components/multi-uploader/multi-uploader.component';
import { DropzoneUploaderComponent } from './components/dropzone-uploader/dropzone-uploader.component';

import { FileUploaderService } from './services/file-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    SingleUploaderComponent,
    MultiUploaderComponent,
    DropzoneUploaderComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    FileUploaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
