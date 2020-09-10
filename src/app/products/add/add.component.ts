import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServicesService} from '../../product-services.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder,
              private productSerVice: ProductServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }
  addSubmit(){
    const product = this.addForm.value;
    this.productSerVice.addProduct(product).subscribe(data => {
      this.router.navigate(['products']);
    });
  }
  list(){
    this.router.navigate(['products']);
  }



}
