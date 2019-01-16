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

  constructor(private anagramService: AnagramService) {}

  ngOnInit(): void {
    this.isDesc = false;
    }

  getAnagrams(word): void {
    this.anagramService.getAnagram(word)
    .then(anagrams => this.anagrams = anagrams);
  }
}
