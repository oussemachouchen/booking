import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Testimonial } from '../data/testimonial';
import { Testimonials } from '../data/testimonials';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor() { }
  getTestimonials(): Observable<Testimonial[]>{
    const testimonials = of(Testimonials);
    return testimonials;
  }
}
