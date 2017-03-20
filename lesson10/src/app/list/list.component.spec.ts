/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListComponent } from './list.component';
import {ListService} from "../list.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listServiceSpy = jasmine.createSpyObj('ListService', ['getItems', 'postItems']);
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ListComponent ],
      providers: [
        {provide: ListService, useValue: listServiceSpy},
        { provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the ListService.getItems method', () => {
    listServiceSpy.getItems.and.returnValue(Observable.of([]));


    fixture.detectChanges();

    // component.ngOnInit();
    expect(listServiceSpy.getItems).toHaveBeenCalled();
  });

  it('should render a list of items',  () => {

    listServiceSpy.getItems.and.returnValue(Observable.of([{name : 'Test 1'}, {name : 'Test 2'}]));


    fixture.detectChanges();

    let element = fixture.debugElement.nativeElement;

    let listItems = element.querySelectorAll('li');
    expect(listItems.length).toBe(2);

    expect(listItems[0].innerText).toBe('Test 1');
    expect(listItems[1].innerText).toBe('Test 2');
  });

  it('should call the ListService.postItems method', () => {
    listServiceSpy.postItems.and.returnValue(Observable.of({}));

    component.postItems();
    expect(listServiceSpy.postItems).toHaveBeenCalled();
  });

  it('should call the ListService.postItems method and call navigate to /error', async(() => {
    listServiceSpy.postItems.and.returnValue(Observable.throw(new Error('404 Not Found')));
    component.postItems();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(routerSpy.navigate).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
    });

    expect(listServiceSpy.postItems).toHaveBeenCalled();
  }));

});
