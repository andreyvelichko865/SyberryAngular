import { GroupsService } from './../groups.service';
import { Group } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  selectedGroup?: Group;
  onSelect(Group: Group): void {
    this.selectedGroup = Group;
  }

  groups: Group[] = [];

  delete(Group_ID): void {
    this.GroupsService.deleteGroup(Group_ID).subscribe();
    this.getHeroes();
  }

  getHeroes(): void {
    this.GroupsService.getGroups()
      .subscribe(groups => this.groups = groups);;
  }

  save(): void {
    this.GroupsService.updateGroup(this.selectedGroup)
      .subscribe(() => this.getHeroes());
  }

  add(GroupNumber: string, DepartmentNumber: string, GroupYear: string ): void {
    GroupNumber = GroupNumber.trim();
    DepartmentNumber = DepartmentNumber.trim();
    GroupYear = GroupYear.trim();
    if (!GroupNumber) { return; }
    this.GroupsService.addGroup(GroupNumber,DepartmentNumber,GroupYear,)
      .subscribe(group => {
        this.groups.push(group);
      });
      this.getHeroes()  
  }

  constructor(private GroupsService: GroupsService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
