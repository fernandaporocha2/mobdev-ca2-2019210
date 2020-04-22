import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allQuotes : Array<any>;

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes')
    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    }

    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters')
    }

    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
    }

    getQuotes() {
        console.log("getQuotes");
        /*this.http.get(('https://breakingbadapi.com/api/quotes')).pipe(map(res => JSON.parse(res.toString()))).subscribe(data => {
			this.quotes = data;
        });
*/
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            this.allQuotes = data as Array<any>;
            console.log("data");
            console.log(data);
            console.log("this.myquotes");
            console.log(this.allQuotes);
            console.log("of this.quotes");
            console.log(JSON.stringify(of(this.allQuotes)));
            console.log("pela url");
            console.log(JSON.stringify(this.http.get('https://breakingbadapi.com/api/quotes')));
        });
       
        console.log("end getQuotes");
        return this.http.get(('https://breakingbadapi.com/api/quotes'));
        //return of(this.quotes);
       
    }

    getQuoteByAuthor(author: string) {
        let selectedQuotes;
        for (let quote of this.allQuotes){
            console.log("getQuoteByAuthor"+quote); 
            if(quote.author.toLowerCase().includes(author.toLowerCase())){
                console.log("achei"+quote.author); 
                selectedQuotes.push(quote);
            }
        }
        console.log("getQuoteByAuthor");
        console.log(JSON.stringify(selectedQuotes));
        return of(selectedQuotes);
        //return this.http.get(`https://breakingbadapi.com/api/quote?author=${author}`)
    }

    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    }

    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths')
    }
}