import { Component, OnInit } from '@angular/core';
import { IInstitutions } from './interface/institutions';
import { InstitutionsService } from './services/institutions.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  institutions: IInstitutions[];
  isChecked: boolean;
  checkedInstitutions;

  constructor(private institutionService: InstitutionsService) {}

  ngOnInit(): void {
    this.getAllInstitutions();
  }

  getAllInstitutions() {
    return this.institutionService
      .getAllInstitutions()
      .subscribe((institution) => {
        this.institutions = institution;
      });
  }

  checkUncheckedAll() {
    for (var index = 0; index < this.institutions.length; index++) {
      if (this.institutions[index].checked === true) {
        this.institutions[index].checked = false;
      } else {
        this.institutions[index].checked = true;
      }
    }

    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isChecked = this.institutions.every(function (item: any) {
      return item.isSelected == true;
    });

    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedInstitutions = [];
    for (var i = 0; i < this.institutions.length; i++) {
      if (this.institutions[i].checked)
        this.checkedInstitutions.push(this.institutions[i]);
    }
    this.checkedInstitutions = JSON.stringify(this.checkedInstitutions);
  }
}
