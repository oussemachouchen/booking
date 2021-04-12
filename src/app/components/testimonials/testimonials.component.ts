import { Component, OnInit } from '@angular/core';
import { FakeDataService } from 'src/app/services/fake-data.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  p: number = 1;
  
  collection = [];
  constructor(private testimonialService: FakeDataService) {

  }
  

  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe(heroes => this.collection = heroes);;
  }

}
