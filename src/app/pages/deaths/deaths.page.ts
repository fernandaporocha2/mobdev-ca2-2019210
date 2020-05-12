import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    death: any;
    // this variable stores the text typed byt the user in the searchbar
    responsible: string = '';

    constructor(private api: ApiService) { }

    ngOnInit() {

    }

    //This function searches all the responsibles name by deaths that contains the typed text
    searchDeathCount() {
        this.api.getDeathCount(this.responsible).subscribe(res => {
            this.death = res[0];
            console.log(this.death);
        });

    }
}