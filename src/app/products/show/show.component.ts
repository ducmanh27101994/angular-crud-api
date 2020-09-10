import {Component, OnInit} from '@angular/core';
import {ProductServicesService} from '../../product-services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../iproduct';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product: IProduct;

  constructor(private productService: ProductServicesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProductId(this.id).subscribe(data => {
      this.product = data;
    });
  }
  list(){
    this.router.navigate(['products']);
  }

}
