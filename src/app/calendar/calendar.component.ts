import { EventCalendar } from "@dhx/trial-eventcalendar";
import { getData } from "./data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "calendar",
  styleUrls: ["./calendar.component.css"],
  template: `<div #here class="widget"></div>`,
})
export class CalendarComponent implements OnInit, OnDestroy {
  @ViewChild("here", { static: true }) calendarContainer!: ElementRef;

  private _calendar: any;

  ngOnInit() {
    const events = getData();
    let calendar = new EventCalendar(this.calendarContainer.nativeElement, {
      events,
      date: new Date(2021, 5, 10),
    });

    this._calendar = calendar;
  }

  ngOnDestroy(): void {
    this._calendar.destructor();
  }
}
