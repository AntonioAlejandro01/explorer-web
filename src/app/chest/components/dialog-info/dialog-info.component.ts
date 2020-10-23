import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/model/dialogData.model';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.sass'],
})
export class DialogInfoComponent implements OnInit, AfterViewInit {
  imgSrc: string;
  blobImg: Blob;
  creationDate: string;
  starts: string;
  title: string;
  constructor(
    public dialogRef: MatDialogRef<DialogInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private routeService: RoutesService,
    private snackbar: MatSnackBar
  ) {
    this.title = data.rutaResponse.title;
    console.log(data.rutaResponse.qrKey);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.data.rutaResponse.qrKey);

    this.routeService
      .getQRImage(this.data.rutaResponse.qrKey)
      .subscribe((response) => {
        if (response.status === 200) {
          this.addImg(response.body);
        } else {
          this.snackbar.open('Error');
          this.dialogRef.close();
        }
      });
    this.routeService
      .getData(this.data.rutaResponse.qrKey)
      .subscribe((response: any) => {
        if (response.status === 200) {
          this.creationDate = response.body.creationDate;
          this.starts = response.body.stars;
        }
      });
  }

  addImg(blob: Blob): void {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64String = reader.result.toString();
      this.imgSrc = base64String;
    };
  }

  download(): void {
    if (window.navigator.msSaveOrOpenBlob) {
      // IE specific download.
      navigator.msSaveBlob(
        window.URL.createObjectURL(this.imgSrc),
        `${this.data.rutaResponse.title}.png`
      );
    } else {
      const downloadLink = document.createElement('a');
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.setAttribute('href', this.imgSrc);
      downloadLink.setAttribute(
        'download',
        `${this.data.rutaResponse.title}.png`
      );
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
}
