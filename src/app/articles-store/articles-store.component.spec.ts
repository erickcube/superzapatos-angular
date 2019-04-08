import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesStoreComponent } from './articles-store.component';

describe('ArticlesStoreComponent', () => {
  let component: ArticlesStoreComponent;
  let fixture: ComponentFixture<ArticlesStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
