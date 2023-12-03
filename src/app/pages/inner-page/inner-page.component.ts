import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { pageContent } from './list';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss']
})
export class InnerPageComponent implements OnInit {
  page: any;
  activePage: any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { 
 
  }

  ngOnInit(): void {
    this.activePage = this.route.snapshot.params["id"];
    if (this.activePage) {
      this.page = pageContent[this.activePage];
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: any) => {
      this.activePage = this.handleParam(event?.url);
      if (this.activePage) {
        this.page = pageContent[this.activePage];
      }
    });
  }

  handleParam(url) {
    let parts = url.split('/');

    if (parts.length === 2) {
      return parts[1];
    }
  }

}
