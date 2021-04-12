import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import localeAr from '@angular/common/locales/ar';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
registerLocaleData(localeAr, 'ar');
@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
