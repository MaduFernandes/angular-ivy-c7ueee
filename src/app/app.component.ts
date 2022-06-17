import { Component, OnInit, VERSION } from '@angular/core';
import { IInstitutions } from './interface/institutions';
import { InstitutionsService } from './services/institutions.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  institutions: IInstitutions[];
  isChecked: boolean = false;

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
    console.log('entrei');
    // for (var index = 0; index < this.institutions.length; index++) {
    //   console.log(this.institutions[index].checked);
    // }
  }
}
