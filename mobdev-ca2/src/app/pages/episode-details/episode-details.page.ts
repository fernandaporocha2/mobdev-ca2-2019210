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
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });
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

    likeEpisode() {
        this.reactionService.likeEpisode(this.episodeId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    dislikeEpisode(){
        this.reactionService.dislikeEpisode(this.episodeId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    neutreEpisode(){
        this.reactionService.neutreEpisode(this.episodeId);
        this.isLiked = false;
        this.isDisliked = false;
    }

}
