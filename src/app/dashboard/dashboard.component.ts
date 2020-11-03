import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
todos=[];
displayedColumns: string[] = ['name','description','edit'];
  constructor(private dataService:DataService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.dataService.getTodos()
    .subscribe((data:any)=>{
      this.todos=data;
    })
  }
  onEditClick(element){
    this.router.navigate(["edit",element._id]);
    
  }

}
