import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

     quotes : Observable<any>;

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
        let quotes = this.http.get('[{"quote_id":1,"quote":"I am not in danger, Skyler. I am the danger!","author":"Walter White","series":"Breaking Bad"},{"quote_id":2,"quote":"Stay out of my territory.","author":"Walter White","series":"Breaking Bad"},{"quote_id":3,"quote":"IFT","author":"Skyler White","series":"Breaking Bad"}]');
        this.http.get('[{"quote_id":1,"quote":"I am not in danger, Skyler. I am the danger!","author":"Walter White","series":"Breaking Bad"},{"quote_id":2,"quote":"Stay out of my territory.","author":"Walter White","series":"Breaking Bad"},{"quote_id":3,"quote":"IFT","author":"Skyler White","series":"Breaking Bad"}]').pipe(map(res => JSON.parse(res.toString()))).subscribe(data => {
            console.log(data);
        });
        console.log(quotes);
        this.http.get('assests/data/redditData.json')
        this.quotes = quotes; 
       
       /* for (let quote of data) {
            console.log(quote); // 1, "string", false
            console.log(quote.author);
            console.log(quote.quote);
        }*/
        return quotes;
        //return this.http.get('https://breakingbadapi.com/api/quotes')
    }

    getQuoteByAuthor(author: string) {
        let selectedQuotes;
       /* for (let quote of this.quotes){
            console.log("getQuoteByAuthor"+quote); 
            if(quote.author.toLowerCase().includes(author.toLowerCase())){
                console.log("achei"+quote.author); 
                selectedQuotes.push(quote);
            }
        }*/
        console.log("getQuoteByAuthor");
        console.log(JSON.stringify(selectedQuotes));
        return selectedQuotes;
        //return this.http.get(`https://breakingbadapi.com/api/quote?author=${author}`)
    }

    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    }

    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths')
    }
}
