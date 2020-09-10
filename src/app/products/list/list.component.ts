import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../iproduct';
import {ProductServicesService} from '../../product-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listProduct: IProduct[] = [];

  constructor(private productServices: ProductServicesService) {
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    this.productServices.getAllProduct().subscribe(data => {
      this.listProduct = data;
    });
  }
  deleteProduct(index){
    const product = this.listProduct[index];
    if (confirm('Are you sure')){
      this.productServices.deleteProduct(product.id).subscribe(() => {
        this.getListProduct();
      });
    }
  }

}
