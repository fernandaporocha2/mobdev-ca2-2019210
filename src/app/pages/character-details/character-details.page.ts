import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { CharacterReactionService } from './../../services/character-reaction.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {
   
    character: any;
    characterId = null;
    isLiked = false;
    isDisliked = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private reactionService: CharacterReactionService) { }
    
    ngOnInit() {
        //get te id of the character
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        //get and set up the information of the character
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
        //initialize variables used to store the like/dislike/neutral state
        this.reactionService.isLiked(this.characterId).then(liked => {
            this.isLiked = liked;
        });
        this.reactionService.isDisliked(this.characterId).then(disliked => {
            this.isDisliked = disliked;
        });
    }

    //Function used for like a character
    likeCharacter() {
        // After calling the funcion likeCharacter from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.likeCharacter(this.characterId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    //Function used for dislike a character
    dislikeCharacter() {
        // After calling the funcion dislikeCharacter from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.dislikeCharacter(this.characterId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    //This function is called when a characted is unlike or undisliked
    neutreCharacter() {
        // After calling the funcion neutreCharacter from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.neutreCharacter(this.characterId);
        this.isLiked = false;
        this.isDisliked = false;
    }

}