import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//Constants that will store the liked and disliked characters keys
const LIKE_KEY = 'likedCharacters';
const DISLIKE_KEY = 'dislikedCharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterReactionService {

  constructor(private storage: Storage) { }

    //It return all the liked characters
    getLikedCharacters() {
        console.log("getLikedCharacters");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }

    //It return all the disliked characters
    getDislikedCharacters() {
        console.log("getDislikedCharacters");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }


    //It verifies if a characterId is the liked list
    isLiked(characterId) {
        return this.getLikedCharacters().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }

    //It verifies if a characterId is the disliked list
    isDisliked(characterId) {
        return this.getDislikedCharacters().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }

    //It likes a character - adds it to the liked list 
    likeCharacter(characterId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromDislikedCharacter is used
        this.removeFromDislikedCharacter(characterId);
        console.log("likeCharacter");
        //It gets all the liked characters
        return this.getLikedCharacters().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent liked list already
                //The characterId is add to result
                result.push(characterId);
                //It is saved
                this.storage.set(LIKE_KEY, result);
                return true;
            } else {
                //If the result is false, it means that there is no liked list yet
                //The characterId is saved in the liked list
                this.storage.set(LIKE_KEY, [characterId]);
                return true;
            }
        });
    }

    //It dilikes a character - adds it to the disliked list 
    dislikeCharacter(characterId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromLikedCharacter is used
        this.removeFromLikedCharacter(characterId);
        //It gets all the disliked characters
        return this.getDislikedCharacters().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent disliked list already
                //The characterId is add to result
                result.push(characterId);
                //It is saved
                this.storage.set(DISLIKE_KEY, result);
            } else {
                //If the result is false, it means that there is no dislike list yet
                //The characterId is saved in disliked the list
                this.storage.set(DISLIKE_KEY, [characterId]);
                return true;
            }
        });
    }

    //When a character is liked or disliked it will be removed from both lists
    neutreCharacter(characterId) {
        this.removeFromDislikedCharacter(characterId);
        this.removeFromLikedCharacter(characterId);
    }

    //It removes a characterId from the liked list
    removeFromLikedCharacter(characterId) {
        return this.getLikedCharacters().then(result => {
            //It verifies if the given characterId is in the liked list and removes it
            if (result &&  result.indexOf(characterId) !== -1) {   
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }

    //It removes a characterId from the disliked list
    removeFromDislikedCharacter(characterId) {
        return this.getDislikedCharacters().then(result => {
            console.log(JSON.stringify(result.indexOf(characterId)));
            //It verifies if the given characterId is in the disliked list and removes it
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
}

