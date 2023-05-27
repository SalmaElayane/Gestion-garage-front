import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HandlePhotoService {
  photoCollabBinary: any;

  constructor() {}

  /**
   *
   * @param event
   * @param field
   */
  picked(event: any, field: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file);
    } else {
      alert('No file selected');
    }
  }

  /**
   *
   * @param files
   * @returns
   */
  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  /**
   *
   * @param e
   */
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.photoCollabBinary = base64result;
  }
}
