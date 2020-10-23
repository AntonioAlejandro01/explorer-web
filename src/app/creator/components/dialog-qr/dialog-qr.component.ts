import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { DialogData } from '../../../model/dialogData.model';
@Component({
  selector: 'app-dialog-qr',
  templateUrl: './dialog-qr.component.html',
  styleUrls: ['./dialog-qr.component.sass'],
})
export class DialogQrComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value: string;
  constructor(
    public dialogRef: MatDialogRef<DialogQrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.value = JSON.stringify(data.ruta);
  }

  ngOnInit(): void {}

  download(): void {
    const image: HTMLImageElement = document.querySelector('ngx-qrcode img');
    if (window.navigator.msSaveOrOpenBlob) {
      // IE specific download.
      navigator.msSaveBlob(
        window.URL.createObjectURL(image.src),
        `${this.data.ruta.title}.png`
      );
    } else {
      const downloadLink = document.createElement('a');
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.setAttribute('href', image.src);
      downloadLink.setAttribute('download', `${this.data.ruta.title}.png`);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
}
