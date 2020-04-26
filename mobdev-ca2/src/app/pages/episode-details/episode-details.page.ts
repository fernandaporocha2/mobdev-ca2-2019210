import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import {EpisodeReactionService } from './../../services/episode-reaction.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;
    episodeId = null;
    isLiked = false;
    isDisliked = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private reactionService: EpisodeReactionService) { }

    ngOnInit() {
        //get te id of the episode
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        
        //get and set up the information of the character
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });
        
        //initialize variables used to store the like/dislike/neutral state
        this.reactionService.isLiked(this.episodeId).then(liked => {
            this.isLiked = liked;
            console.log("liked");
            console.log(JSON.stringify(liked));
        });
        this.reactionService.isDisliked(this.episodeId).then(disliked => {
            this.isDisliked = disliked;
            console.log("disliked");
            console.log(JSON.stringify(disliked));
        });
    }

    //Function used for like a episode
    likeEpisode() {
        // After calling the funcion likeEpisode from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.likeEpisode(this.episodeId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    //Function used for dislike a episode
    dislikeEpisode(){
        // After calling the funcion dislikeEpisode from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.dislikeEpisode(this.episodeId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    //This function is called when a Episode is unlike or undisliked
    neutreEpisode(){
        // After calling the funcion neutreEpisode from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.neutreEpisode(this.episodeId);
        this.isLiked = false;
        this.isDisliked = false;
    }
}
