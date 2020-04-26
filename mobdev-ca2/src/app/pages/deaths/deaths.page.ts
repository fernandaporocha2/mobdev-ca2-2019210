import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  deaths : Observable<any>;
  // this variable stores the text typed byt the user in the searchbar
  responsible: string = '';
  responsibles : String[];

  constructor(private router: Router, private api: ApiService) { }

  
  //This function loads all the responsibles when the page is loaded
  ngOnInit() {
    this.responsibles = this.api.getResponsibles();    
    console.log(this.responsibles);
  }

  //This function searches all the responsibles name by deaths that contains the typed text
  searchResponsible() {
    this.responsibles = this.api.filterResponsible(this.responsible);
    console.log("responsibles");
    console.log(this.responsibles);
     
  }

  //This function opens the Death Count page of the selected user
  openDetails(responsible){
      console.log(responsible);
      this.router.navigateByUrl(`/tabs/deaths/${responsible}`);
  }

}
