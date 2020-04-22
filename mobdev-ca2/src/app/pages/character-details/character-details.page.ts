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
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
        });
        this.reactionService.isLiked(this.characterId).then(liked => {
            this.isLiked = liked;
            console.log("liked");
            console.log(JSON.stringify(liked));
        });
        this.reactionService.isDisliked(this.characterId).then(disliked => {
            this.isDisliked = disliked;
            console.log("disliked");
            console.log(JSON.stringify(disliked));
        });
    }

    likeCharacter() {
        this.reactionService.likeCharacter(this.characterId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    dislikeCharacter(){
        this.reactionService.dislikeCharacter(this.characterId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    neutreCharacter(){
        this.reactionService.neutreCharacter(this.characterId);
        this.isLiked = false;
        this.isDisliked = false;
    }

}