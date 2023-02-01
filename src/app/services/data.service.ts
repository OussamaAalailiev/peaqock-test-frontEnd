import {ElementRef, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public SubjOfElemHeight = new Subject<ElementRef<any> | undefined>();

  constructor() { }

  //pass whatever data we get from the component to the Subject(Consumer role):
  getElemHeightToSubject(data: ElementRef<any> | undefined){
    this.SubjOfElemHeight.next(data);
  }

}
