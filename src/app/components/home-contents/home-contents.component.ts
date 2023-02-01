import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home-contents',
  templateUrl: './home-contents.component.html',
  styleUrls: ['./home-contents.component.css']
})
export class HomeContentsComponent implements OnInit {
  // @ViewChild('scroll') scrollElem: ElementRef | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.sendScrollElemHeightToService();
  }
  // sendScrollElemHeightToService(){
  //   this.dataService.getElemHeightToSubject(this.scrollElem);
  // }

}
