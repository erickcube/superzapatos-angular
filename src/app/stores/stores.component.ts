import { Component, OnInit, Input  } from '@angular/core';
import { StoreService} from '../store.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  result = <any>{};

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.storeService.getStores().subscribe((data: {}) => {
      console.log(data);
      this.result = data;
    });
  }

  delete(store): void {
    this.result.stores = this.result.stores.filter(h => h !== store);
    this.storeService.deleteStore(store.id).subscribe();
  }
}
