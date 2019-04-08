import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { Furniture } from './../models/furniture';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  furniture: Furniture;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getFurniture();
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      make: [this.furniture.make, [Validators.required, Validators.minLength(4)]],
      model: [this.furniture.model, [Validators.required, Validators.minLength(4)]],
      year: [this.furniture.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: [this.furniture.description, [Validators.required, Validators.minLength(10)]],
      price: [this.furniture.price, [Validators.required, Validators.min(0.1)]],
      image: [this.furniture.image, Validators.required],
      material: [this.furniture.material, Validators.nullValidator]
    });
  }

  getFurniture() {
    this.furniture = this.route.snapshot.data.editFurniture;
  }

  get f() {
    return this.form.controls;
  }

  submitEdit() {
    if (this.form.valid) {
      this.furnitureService.editFurniture(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe();
      this.router.navigate(['/furniture/all']);
    }
  }

}
