import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    author: string = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        //get all the quotes
        this.quotes = this.api.getQuotes();
    }

    //This function searches all the quotes by authors name that contains the user input
    searchQuotes() {
        this.quotes = this.api.getQuoteByAuthor(this.author);
    }

    //This function gets the quoteId and opens the details page of the selected quote
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

}
