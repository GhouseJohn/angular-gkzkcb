import { Component ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import{FoodClass} from './FoodClass';
import{MyServices} from './MyService';
import{Employee} from './EmployeeData';


 export interface PeriodicElement {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   name = 'Angular';
   private HideShow : boolean = false;
   private ThisIsEmployee:boolean=false;
   private MyData=[];
   private _Datetime=null;
   _JsonEmployee:Employee[];
   private errormsg:string;
 displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  //  dataSource: MatTableDataSource<displayedColumns>;
 testData:PeriodicElement[]=[{
     userId:1,
     id:2,
     title:"test",
     completed:false

   }]
    dataSource = new MatTableDataSource<PeriodicElement>(this.testData);
     @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  



  constructor(private _Myservice:MyServices){   
    FoodClass:FoodClass;
    this._Myservice.getJsonData().subscribe(data=>{this._JsonEmployee=data, console.log("This is->", this._JsonEmployee)},error=>this.errormsg=error);
    console.log("Hello")
    console.log(this.dataSource);

  }
ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  foods: FoodClass[] = [
      {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
      {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
      {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
      {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
   ];
  





  GetDataFRomComponet():void{
     this.MyData=this.foods;
     this.ThisIsEmployee=!this.ThisIsEmployee;
   }
   HideAndShowevent(){
     this.HideShow=!this.HideShow;
     this._Datetime= this._Myservice.TestService();
   }
}
