import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from './core/services/common.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CommonService]
})
export class AppComponent implements OnInit {
  title = 'DreamLand';

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    let url = location.href;
    const body = document.body;
    let whatsApp: any = document.getElementsByClassName('whatsappChat');

    if (url.includes('flights') || url.includes('hotel') || url.includes('holidays')) {
      body.classList.add("bgImage");
    } else {
      body.classList.remove("bgImage");
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: any) => {
      if (event.url.includes('flights') || event.url.includes('hotel') || event.url.includes('holidays') || event.url === '/') {
        body.classList.add("bgImage");
        if (whatsApp?.length) whatsApp[0].style.display = "block";
      } else {
        body.classList.remove("bgImage");
        if (whatsApp?.length) whatsApp[0].style.display = "none";
      }
    });
    
    this.handleRouteEvents();
  }

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const title = this.titleService.getTitle();
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    })
  }
  
  openWhatsapp() {
    let url = "https://wa.me/918285624833";
    window.open(url, "_blank");
  }
}
