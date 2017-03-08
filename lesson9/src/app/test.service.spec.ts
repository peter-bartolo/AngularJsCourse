/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should ...', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should add students', inject([TestService], (service: TestService) => {
    let student = {'name' : 'jordan'};
    service.addStudent(student);
    expect(service.getStudent(0)).toBe(student);
  }));
});
