import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('form') searchForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    const query = this.searchForm.value.query;
    this.searchForm.form.reset();
    this.router.navigate(['/movie/search'], { queryParams: { search: query } });
  }
}
