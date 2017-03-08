// // /* tslint:disable:no-unused-variable */
// //
// // import { TestBed, async } from '@angular/core/testing';
// // import { AppComponent } from './app.component';
// //
// // describe('AppComponent', () => {
// //   beforeEach(() => {
// //     TestBed.configureTestingModule({
// //       declarations: [
// //         AppComponent
// //       ],
// //     });
// //     TestBed.compileComponents();
// //   });
// //
// //   it('should create the app', async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.debugElement.componentInstance;
// //     expect(app).toBeTruthy();
// //   }));
// //
// //   it(`should have as title 'app works!'`, async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.debugElement.componentInstance;
// //     expect(app.title).toEqual('app works!');
// //   }));
// //
// //   it('should render title in a h1 tag', async(() => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     fixture.detectChanges();
// //     const compiled = fixture.debugElement.nativeElement;
// //     expect(compiled.querySelector('h1').textContent).toContain('app works!');
// //   }));
// // });
//
// function fizzbuzz(num : number) {
//   let message = '';
//
//   if (num % 3 === 0) {
//     message = 'fizz';
//   }
//
//   if (num % 5 === 0) {
//     message += 'buzz';
//   }
//
//   return message;
// }
//
// describe('fizzbuzz', function () {
//   it('should return Fizz when number is divisible by three', function() {
//     expect(fizzbuzz(3)).toBe('fizz');
//   });
//   it('should return Buzz when number is divisible by five', function() {
//     expect(fizzbuzz(5)).toBe('buzz');
//   });
//   it('should return FizzBuzz when number is divisible by both three and five', function() {
//     expect(fizzbuzz(15)).toBe('fizzbuzz');
//   });
// });
//
// class Dog {
//   bark() {
//     console.log('woof');
//   }
// }
//
// class DogMock {
//   public barkWasCalled: boolean = false;
//
//   bark() {
//     this.barkWasCalled = true;
//   }
// }
//
// class DogWalkerService {
//   constructor(private dog : any) {
//
//   }
//
//   walkDog() {
//     this.dog.bark();
//     this.dog.bark();
//   }
// }
//
// describe('DogWalkerService', function() {
//   it('should call bark on the dog object', function() {
//     let dm = new DogMock();
//     spyOn(dm, 'bark');
//     let dws = new DogWalkerService(dm);
//     dws.walkDog();
//     expect(dm.bark).toHaveBeenCalledTimes(2);
//   });
// });
