import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDetailComponent } from './veiculo-detail.component';

describe('VeiculoDetailComponent', () => {
  let component: VeiculoDetailComponent;
  let fixture: ComponentFixture<VeiculoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
