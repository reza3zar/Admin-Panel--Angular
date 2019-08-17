/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: `
 
  <router-outlet></router-outlet>` ,
})
export class AppComponent implements OnInit  {
 
  isloadedPage=false;
  constructor(private analytics: AnalyticsService,private directionService: NbLayoutDirectionService) {
    this.directionService.setDirection(NbLayoutDirection.RTL);
    
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
 
}
