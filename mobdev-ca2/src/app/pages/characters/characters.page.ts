import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular'

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    //array of characters used to load the data in the html 
    characters = [];
    //offset value is increased in the load data function and starts with 0
    offset = 0;
    //the Breaking bad api has 63 characters, so it is the maximum size of the offset
    max = 63;


    @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

    constructor(private router: Router, private api: ApiService) { }

    //When the page is loaded for the first time, it will load the firsts characters, with offset 0
    ngOnInit() {
        //It converts the res in an any Array and insert this value in the characters array 
        this.api.getCharactersWithPagination(this.offset)
            .subscribe(res => {
                this.characters = res as Array<any>;
            })
    }

    //This function is called when the user clicks on a character of the list
    //It will get the id of the selected character and redirect it for loading the character details
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

    //https://www.youtube.com/watch?v=NBeExE9dvR0 - the code was based on this solution
	//https://ionicframework.com/docs/api/infinite-scroll
    //This function is used by the Infinite Scroll
    //The offset will be increased by 10 everytime this function is called. 
    //Until it reaches the maximum value
    //The new characters will be added to the previous one by using the concat function
    loadData(event) {  
        this.offset += 10;
        this.api.getCharactersWithPagination(this.offset)
            .subscribe(res => {
                this.characters = this.characters.concat(res);
                if (event) {
                    event.target.complete();
                }
            });
        
        //Disable the Infinite scroll the offset reaches the max value
        if (this.offset >= this.max) {
            event.target.disable = true;
        }
    }
}
