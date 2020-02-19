import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MasterDataService {
  constructor() {}
  data: any = {
    Employees: [
      {
        id: 1,
        firstName: '',
        lastName: '',
        hobbies: [],
        careerInterests: [],
        skills: [],
        talents: [],
        EmployementHistory: [],
        DOB: '',
        CurrentEmployer: 1
      },
      {
        id: 1,
        firstName: '',
        lastName: '',
        hobbies: [],
        careerInterests: [],
        skills: [],
        talents: [],
        EmployementHistory: [],
        DOB: '',
        CurrentEmployer: 1
      }
    ],
    Companies: [
      {
        id: 1,
        companyName: 'Amazon',
        companyTagline: '',
        comanyDescription: '',
        benefits: [],
        trainingsOffered: [
          {
            name: '',
            files: [],
            timeToComplete: 23
          }
        ],
        averageYearlyRaise: 1000,
        markets: [],
        employees: [
          {
            id: 1,
            salary: 2000,
            position: '',
            manager: 3
          }
        ],
        vendors: [],
        customers: []
      },
      {
        id: 1,
        companyName: 'Amazon',
        companyTagline: '',
        comanyDescription: '',
        benefits: [],
        trainingsOffered: [
          {
            name: '',
            files: [],
            timeToComplete: 23
          }
        ],
        averageYearlyRaise: 1000,
        markets: [],
        employees: [
          {
            id: 1,
            salary: 2000,
            position: '',
            manager: 3
          }
        ],
        vendors: [],
        customers: []
      }
    ]
  };
  getAllData() {
    console.log(this.data);
    return this.data;
  }
}