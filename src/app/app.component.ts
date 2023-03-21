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
  allChecked: boolean;
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
    this.institutions.forEach((institution) => {
      if (this.allChecked === true) {
        institution.checked = false;
      }

      institution.checked = true;
      this.allChecked = true;
    });
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
    this.institutions.map((institution) => {
      if (institution.checked) {
        this.checkedInstitutions.push(institution);
      }
    });
  }
}
