import { Group } from './../student';
import { Component, OnInit, Input  } from '@angular/core';


@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit {


  @Input() selectedGroup?: Group;
  
  constructor() { }

  ngOnInit(): void {
  }

}
