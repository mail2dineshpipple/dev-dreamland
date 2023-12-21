import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  loader:boolean = true;

  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.loaderStatus.subscribe({
      next:(res:boolean) => {
        this.loader = res;
      }
    })
  }


}
