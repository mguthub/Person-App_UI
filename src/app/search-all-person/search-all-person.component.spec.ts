import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllPersonComponent } from './search-all-person.component';
import { HttpClientModule } from '@angular/common/http';

describe('SearchAllPersonComponent', () => {
  let component: SearchAllPersonComponent;
  let fixture: ComponentFixture<SearchAllPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [  HttpClientModule ],
      declarations: [ SearchAllPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAllPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
