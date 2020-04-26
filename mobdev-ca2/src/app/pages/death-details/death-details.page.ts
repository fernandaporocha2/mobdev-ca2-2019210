import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
    selector: 'app-death-details',
    templateUrl: './death-details.page.html',
    styleUrls: ['./death-details.page.scss'],
})
export class DeathDetailsPage implements OnInit {
    death: any;
    responsible = null;
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        console.log("init death-details")
        //getting the responsible name
        this.responsible = this.activatedRoute.snapshot.paramMap.get('responsible');
        //getting death information by responsible name
        this.api.getDeath(this.responsible).subscribe(res => {
            this.death = res[0];
            console.log(this.death);
        });
    }

}
