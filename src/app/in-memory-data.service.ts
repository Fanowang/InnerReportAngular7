import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Report} from './report';

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const reports = [
      { id: 11, name: 'Test 1' },
      { id: 12, name: 'Facility A' },
      { id: 13, name: 'Calgary Downtown' },
      { id: 14, name: 'Vancouver Section2' },
      { id: 15, name: 'Calgary Aireport' },
      { id: 16, name: 'Fort Station' },
      { id: 17, name: 'Moon Base' },
      { id: 18, name: 'Mars Base' },
      { id: 19, name: 'Sagittarius Station' },
      { id: 20, name: 'Andromeda Station' }
    ];
    return {reports};
  }

  // Overrides the genId method to ensure that a report always has an id.
  // If the reports array is empty,
  // the method below returns the initial number (11).
  // if the reports array is not empty, the method below returns the highest
  // report id + 1.
  genId(reports: Report[]): number {
    return reports.length > 0 ? Math.max(...reports.map(report => report.id)) + 1 : 11;
  }
  
}
