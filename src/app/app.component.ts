import { Component,OnInit } from '@angular/core';
import { AnagramService } from './anagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnagramService]
})
export class AppComponent implements OnInit {

  title = 'Anagram App for Fractal Industries';
  anagrams = [];
  isDesc: boolean;
  word: String;

  constructor(private anagramService: AnagramService) {}

  ngOnInit(): void {
    this.isDesc = false;
    }

    sort(){

    }

    getWord(event: Event){
      this.word = (<HTMLInputElement>event.target).value;
      console.log(this.word)
    }

  getAnagrams(word, n, anagram = '',anagrams): any {
    console.log("this works")
    console.log(word);
    // this.anagramService.getAnagrams(word)
    // .then(anagrams => this.anagrams = anagrams);

    word = word.toUpperCase();

    //this will push all the substreams to the array as well.
    if(anagram){
      this.anagrams.push(anagram);
    }

    if(!word){
      return;
    }

    for(let i = 0; i < word.length; i++){
      anagram = anagram + word[i];
      this.getAnagrams(word.slice(0,i) + word.slice(i+1),
       word.length, anagram, anagrams);
      //anagram = anagram.slice(0, anagram.length - 1);
    }
    let result = [...Array.from(new Set(this.anagrams))];
    //return result;

    // the following code will give out anagrams of specified length "n"
    let hash = {};
    for ( let i = 0; i < result.length; i++){
      anagram = result[i];
      let len = anagram.length;
      if (!(len in hash)){
        hash[len] = [anagram];
      } else {
        hash[len].push(anagram);
      }
    }

    // return word.length == null ? result : hash[n];

  }
}
