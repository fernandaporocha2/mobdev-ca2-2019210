import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LIKE_KEY = 'likedCharacters';
const DISLIKE_KEY = 'dislikedCharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterReactionService {

  constructor(private storage: Storage) { }

    getLikedCharacters() {
        console.log("getLikedCharacters");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }

    getDislikedCharacters() {
        console.log("getDislikedCharacters");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }


    isLiked(characterId) {
        return this.getLikedCharacters().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }

    isDisliked(characterId) {
        return this.getDislikedCharacters().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }

    likeCharacter(characterId) {
        this.removeFromDislikedCharacter(characterId);
        console.log("likeCharacter");
        return this.getLikedCharacters().then(result => {
            if (result) {
                result.push(characterId);
                this.storage.set(LIKE_KEY, result);
                console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            } else {
                this.storage.set(LIKE_KEY, [characterId]);
                console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            }
        });
    }

    dislikeCharacter(characterId) {
        this.removeFromLikedCharacter(characterId);
        return this.getDislikedCharacters().then(result => {
            if (result) {
                result.push(characterId);
                this.storage.set(DISLIKE_KEY, result);
                console.log(JSON.stringify("dislikeCharacter" + characterId));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            } else {
                this.storage.set(DISLIKE_KEY, [characterId]);
                console.log(JSON.stringify("dislikeCharacter" + characterId));
                console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
                return true;
            }
        });
    }

    neutreCharacter(characterId) {
        console.log("neutreCharacter"); 
        this.removeFromDislikedCharacter(characterId);
        this.removeFromLikedCharacter(characterId);
    }

    removeFromLikedCharacter(characterId) {
        return this.getLikedCharacters().then(result => {
            if (result &&  result.indexOf(characterId) !== -1) {   
                console.log("removeFromLikedCharacte"); 
                console.log(JSON.stringify(result.indexOf(characterId)));
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }

    removeFromDislikedCharacter(characterId) {
        console.log("removeFromDislikedCharacte");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.getDislikedCharacters().then(result => {
            console.log(JSON.stringify(result.indexOf(characterId)));
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
}

