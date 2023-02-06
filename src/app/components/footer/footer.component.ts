import {Component, ElementRef, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  scrollDataGotten: ElementRef | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  scrollToTop() {
    // @ts-ignore
    this.scrollDataGotten?.nativeElement.scrollTop=0;
    this.dataService.getElemHeightToSubject(this.scrollDataGotten);
    //this.dataService.getElemHeightToSubject(this.scrollDataGotten);
  }
}
