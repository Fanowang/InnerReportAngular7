import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Report } from './report';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const reports = [
      { id: 11, name: 'Test 1', from: new Date('Wed Aug 29 2018 00:00:00 GMT-0600'), to: new Date('2018-10-01') },
      { id: 12, name: 'Facility A', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 13, name: 'Calgary Downtown', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 14, name: 'Vancouver Section2', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 15, name: 'Calgary Aireport', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 16, name: 'Fort Station', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 17, name: 'Moon Base', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 18, name: 'Mars Base', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 19, name: 'Sagittarius Station', from: new Date('2018-08-29'), to: new Date('2018-10-01') },
      { id: 20, name: 'Andromeda Station', from: new Date('2018-08-29'), to: new Date('2018-10-01') }
    ];
    return { reports };
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
