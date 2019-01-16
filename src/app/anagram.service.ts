import { Injectable } from '@angular/core';

@Injectable()
export class AnagramService {

  getAnagrams(word): Promise<any> {
    return Promise.resolve();
  }
  //function genAnagram() takes in word typed in by the user.
  //initializes a var anagram to keep track of the words spliced off in the for loop.
  //initializes n to keep a track is user wants to display anagrams of length n.
  //anagrams array where all the spliced words are pushed in.
  //Returns: a set of anagram[] such that dups are avoided.
  genAnagram(word, n = null, anagram ='', anagrams = []): any {

    //to get rid of duplicates and lowercase and uppercase letters are treated
    //as same
    word = word.toUpperCase();

    //this will push all the substreams to the array as well.
    if(anagram){
      anagrams.push(anagram);
    }

    if(!word){
      return;
    }

    for(let i = 0; i < word.length; i++){
      anagram = anagram + word[i];
      this.genAnagram(word.slice(0,i) + word.slice(i+1), n, anagram, anagrams);
      anagram = anagram.slice(0, anagram.length - 1);
    }
    let result = [...Array.from(new Set(anagrams))];
    return result;
    // the following code will give out anagrams of specified length "n"
    // let hash = {};
    // for ( let i = 0; i < result.length; i++){
    //   anagram = result[i];
    //   let len = anagram.length;
    //   if (!(len in hash)){
    //     hash[len] = [anagram];
    //   } else {
    //     hash[len].push(anagram);
    //   }
    // }
    //
    // return n == null ? result : hash[n];
  };
}
