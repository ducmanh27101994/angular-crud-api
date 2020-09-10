import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServicesService} from '../../product-services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../iproduct';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  product: IProduct;
  constructor(private fb: FormBuilder,
              private productService: ProductServicesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      desc: ['', Validators.required]
    });
    this.productService.getProductId(this.id).subscribe(data => {
      this.product = data;
      this.editForm.patchValue(this.product);
    });
  }

  editSubmit() {
    const product = this.editForm.value;
    this.productService.updateProduct(product, this.id).subscribe(res => {
      this.router.navigate(['products']);
    });
  }
  list(){
    this.router.navigate(['products']);
  }

  get name(){
    return this.editForm.get('name');
  }
  get price(){
    return this.editForm.get('price');
  }
  get color(){
    return this.editForm.get('color');
  }
  get desc(){
    return this.editForm.get('desc');
  }


}
