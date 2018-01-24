import { Quote } from "../data/quotes.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    console.log('service add to favorites', quote);
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    console.log('service remove from favorites', quote);
    // get quote id
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id; // if true
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    // array copy
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
