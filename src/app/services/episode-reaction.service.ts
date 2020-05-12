import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//Constants that will store the liked and disliked episodes keys
const LIKE_KEY = 'likedEpisodes';
const DISLIKE_KEY = 'dislikedEpisodes';

@Injectable({
    providedIn: 'root'
})
export class EpisodeReactionService {

    constructor(private storage: Storage) { }

    //It return all the liked episodes
    getLikedEpisodes() {
        console.log("getLikedEpisodes");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }

    //It return all the disliked episodes
    getDislikedEpisodes() {
        console.log("getDislikedEpisodes");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }

    //It verifies if an episodeId is the liked list
    isLiked(episodeId) {
        return this.getLikedEpisodes().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    //It verifies if an episodeId is the disliked list
    isDisliked(episodeId) {
        return this.getDislikedEpisodes().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }

      //It likes an episode - adds it to the liked list 
    likeEpisode(episodeId) {
         //For making sure it is not going to be in both list at the same time,
        //the function removeFromDislikedEpisode is used
        this.removeFromDislikedEpisode(episodeId);
        console.log("likeEpisode");
        //It gets all the liked episodes
        return this.getLikedEpisodes().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent liked list already
                //The episodeId is add to result
                result.push(episodeId);
                //It is saved
                this.storage.set(LIKE_KEY, result);
                return true;
            } else {
                //If the result is false, it means that there is no liked list yet
                //The episodeId is saved in the liked list
                this.storage.set(LIKE_KEY, [episodeId]);
                return true;
            }
        });
    }

    //It dilikes an episode - adds it to the disliked list 
    dislikeEpisode(episodeId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromLikedEpisode is used
        this.removeFromLikedEpisode(episodeId);
        //It gets all the disliked episodes
        return this.getDislikedEpisodes().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent disliked list already
                //The episodeId is add to result
                result.push(episodeId);
                //It is saved
                this.storage.set(DISLIKE_KEY, result);
                return true;
            } else {
                //If the result is false, it means that there is no dislike list yet
                //The episodeId is saved in disliked the list
                this.storage.set(DISLIKE_KEY, [episodeId]);
                return true;
            }
        });
    }

    //When an episode is liked or disliked it will be removed from both lists
    neutreEpisode(episodeId) {
        this.removeFromDislikedEpisode(episodeId);
        this.removeFromLikedEpisode(episodeId);
    }

    //It removes an episodeId from the liked list
    removeFromLikedEpisode(episodeId) {
        return this.getLikedEpisodes().then(result => {
            //It verifies if the given characterId is in the liked list and removes it
            if (result &&  result.indexOf(episodeId) !== -1) {   
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }

    //It removes an episodeId from the disliked list
    removeFromDislikedEpisode(episodeId) {
        return this.getDislikedEpisodes().then(result => {
            console.log(JSON.stringify(result.indexOf(episodeId)));
            //It verifies if the given characterId is in the disliked list and removes it
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
}
