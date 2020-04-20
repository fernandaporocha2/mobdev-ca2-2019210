import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const LIKE_KEY = 'likedEpisodes';
const DISLIKE_KEY = 'dislikedEpisodes';

@Injectable({
    providedIn: 'root'
})
export class EpisodeReactionService {

    constructor(private storage: Storage) { }

    getLikedEpisodes() {
        console.log("getLikedEpisodes");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }

    getDislikedEpisodes() {
        console.log("getDislikedEpisodes");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }


    isLiked(episodeId) {
        return this.getLikedEpisodes().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    isDisliked(episodeId) {
        return this.getDislikedEpisodes().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    likeEpisode(episodeId) {
        this.removeFromDislikedEpisode(episodeId);
        console.log("likeEpisode");
        return this.getLikedEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                this.storage.set(LIKE_KEY, result);
                console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            } else {
                this.storage.set(LIKE_KEY, [episodeId]);
                console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            }
        });
    }

    dislikeEpisode(episodeId) {
        this.removeFromLikedEpisode(episodeId);
        return this.getDislikedEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                this.storage.set(DISLIKE_KEY, result);
                console.log(JSON.stringify("dislikeEpisode" + episodeId));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            } else {
                this.storage.set(DISLIKE_KEY, [episodeId]);
                console.log(JSON.stringify("dislikeEpisode" + episodeId));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            }
        });
    }

    neutreEpisode(episodeId) {
        console.log("neutreEpisode"); 
        this.removeFromDislikedEpisode(episodeId);
        this.removeFromLikedEpisode(episodeId);
    }

    removeFromLikedEpisode(episodeId) {
        return this.getLikedEpisodes().then(result => {
            if (result &&  result.indexOf(episodeId) !== -1) {   
                console.log("removeFromLikedEpisode"); 
                console.log(JSON.stringify(result.indexOf(episodeId)));
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }

    removeFromDislikedEpisode(episodeId) {
        console.log("removeFromDislikedEpisode");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.getDislikedEpisodes().then(result => {
            console.log(JSON.stringify(result.indexOf(episodeId)));
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
}
