import { Component, OnInit } from '@angular/core';
import { Company } from './interfaces/company.interface';
import { CompanyService } from './services/company.service';
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  vacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  selectCompany(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.vacancyService
      .getVacanciesByCompanyId(companyId)
      .subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
  }
}
