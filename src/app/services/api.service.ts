import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allQuotes: Array<any>;

    constructor(private http: HttpClient) { }

    //It returns all the episodes
    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes')
    }

    //It returns episode by its id
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    }

    //It returns character by its id
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
    }

    //It returns characters using a limit and offset
    getCharactersWithPagination(offset) {
        return this.http.get(`https://breakingbadapi.com/api/characters?limit=${10}&offset=${offset}`)
    }

    //It returns all the quotes
    getQuotes() {
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            //Convert the returned data to Array of any and stores it in allQuotes variable
            this.allQuotes = data as Array<any>;
            console.log("quotes" + this.allQuotes);
        });
        return this.http.get('https://breakingbadapi.com/api/quotes');;
    }

    //These function will filter the quotes and returns the ones 
    //where the author's name contains the author search paramenter 
    getQuoteByAuthor(author: string) {
        //https://www.typescriptlang.org/docs/handbook/basic-types.html#array
        //Creation and initialization of the selectedquotes variable
        //that will store all the quotes belonging to authors which the name
        //contains the author search parameter 
        let selectedQuotes: any[] = [];
        for (let quote of this.allQuotes) {
            console.log("getQuoteByAuthor " + quote);
            //transform the compared texts in lower case and verify if the author of the current quote
            //contains the inputed author string
            if (quote.author.toLowerCase().includes(author.toLowerCase())) {
                console.log("found " + quote.author);
                //If it contains, the current quote will be added to the selectedQuotes
                selectedQuotes.push(quote);
            }
        }
        console.log(JSON.stringify(selectedQuotes));
        //https://stackoverflow.com/questions/35527500/angular2-convert-array-to-observable
        //Returning the selectedQuotes after converting it to an Observable
        return of(selectedQuotes);
    }

    //It returns quote by its id
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    }

    //It returns the death count by responsible name
    getDeathCount(responsible) {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=${responsible}`)
    }
}
