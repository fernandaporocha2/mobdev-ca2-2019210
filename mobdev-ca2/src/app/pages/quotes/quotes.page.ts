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

  quotes : Observable<any>;
  author: string = '';

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      console.log("init");
      this.quotes = this.api.getQuotes();
      console.log(this.quotes);
  }

  searchChanged() {
    // Call our service function which returns an Observable
    console.log("searchChanged");
    console.log(JSON.stringify(this.author));
    this.quotes = this.api.getQuoteByAuthor(this.author);
    console.log(this.quotes);
     
  }

}
