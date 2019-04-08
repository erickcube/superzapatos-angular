import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  add(name: string, address: string): void {
    name = name.trim();
    if (!name && !address) { return; }
    this.storeService.addStore({ 'name':name, 'address': address })
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
