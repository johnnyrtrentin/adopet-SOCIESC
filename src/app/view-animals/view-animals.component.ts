import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from '../services/create-animal.service';

export interface modalData {
  animalName: string;
  animalType: string;
  animalColor: string;
}

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.scss']
})

export class ViewAnimalsComponent implements OnInit {

  animalType: string;
  animalName: string;
  animalColor: string;
  animals: Array<object> = [];

  constructor(private modal: MatDialog,  private teste: AnimalService) { }

  OpenModal(): void {
    const modalData = this.modal.open(animalModal, {
      width: '240px',
      data: [{
        animalName: this.animalName,
        animalType: this.animalType,
        animalColor: this.animalColor
      }]
    });

    modalData.afterClosed().subscribe(result => {
      result ? this.animals.push(result) : '';
      this.teste.saveAnimal(result).subscribe(data => {
        console.log(data)
      });
      this.teste.getAnimal().subscribe(data => {
        console.log(data)
      });
    });
  }

  ngOnInit() { }
}

@Component({
  selector: 'modal-animal',
  templateUrl: 'modal-animal.html'
})

export class animalModal {
  constructor(public dialogRef: MatDialogRef<animalModal>, @Inject(MAT_DIALOG_DATA) public data: modalData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}