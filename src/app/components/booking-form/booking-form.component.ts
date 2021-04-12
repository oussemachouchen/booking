import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { arLocale } from "ngx-bootstrap/locale";
defineLocale("ar", arLocale);
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {


  public showDatepicker=false;
  locale = 'ar';

  
  constructor(private localeService: BsLocaleService) {
    this.bsRangeValue = [this.startDate, this.endDate];
  }
   ngOnInit(): void {
    this.localeService.use(this.locale);
    this.endDate.setDate( this.endDate.getDate() + 10 );
  }
 
  setDate($event){
    console.log('jjj');
    this.startDate=$event[0];
    this.endDate=$event[1];
  }
  onValueChange(event : any){
console.log("samsung ",event);
  }
  bsRangeValue: Date[];
   startDate:Date=new Date();
   endDate:Date=new Date();
   selectedLocation:string='مكة المكرمة';
   findHotel(){
     console.log('execute service to fetch hotels');
   }

}
