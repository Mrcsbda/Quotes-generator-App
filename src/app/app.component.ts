import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  quotes: Quotes[] = [];
  currentQuote: string = '';
  currentAuthor: string = '';
  position: number = 0;
  colors: string[] = [
    '#460E30',
    '#188A90',
    '#a871be',
    '#2471b4',
    '#AC4818',
    '#0F471C',
    '#852D6D',
    '#30EA25',
    '#A2866C',
    '#38240A',
    '#EB5965',
    '#991B52',
    '#490ECE',
    '#2A98D3',
    '#23BA5C',
    '#21230D',
    '#AB7A7C',
    '#003a34',
    '#007459',
    '#40A69A',
    '#5a5a57',
  ];
  currentColor: string = '';
  positionColor: number = 0;

  constructor(private HTTP: HttpClient) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.HTTP.get<any>(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    ).subscribe((quotes) => {
      this.quotes = quotes.quotes;
      this.generateNewQuote()
    });
  }

  generateNewQuote() {
    this.position = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[this.position].quote;
    this.currentAuthor = this.quotes[this.position].author;
    this.positionColor = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[this.positionColor];
  }

}

interface Quotes {
  quote: string;
  author: string;
}
