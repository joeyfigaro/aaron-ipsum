import { seeds } from './seeds';
import os from 'os';

export class generator {
	constructor() {
		this.options = arguments.length ? arguments[0] : {};
		this.sentenceLowerBound = this.options.sentenceLowerBound || 5;
		this.sentenceUpperBound = this.options.sentenceUpperBound || 15;
		this.paragraphLowerBound = this.options.paragraphLowerBound || 3;
		this.paragraphUpperBound = this.options.paragraphUpperBound || 7;
		this.seeds = seeds;
		this.random = Math.random;
		this.suffix = os.EOL;

		this.randomInteger = ::this.randomInteger;
		this.randomWord = ::this.randomWord;
	}

	randomInteger(min, max) {
		return Math.floor(this.random() * (max - min + 1) + min);
	}

	randomWord(words) {
		return words[this.randomInteger(0, words.length - 1)];
	}

	randomSentence(words, lowerBound, upperBound) {
		let sentence = '';
		let bounds = { min: 0, max: this.randomInteger(lowerBound, upperBound) };

		while(bounds.min < bounds.max) {
			sentence = `${sentence} ${randomWord(words)}`;
			bounds.min = bounds.min + 1;
		}

		if (sentence.length) {
			sentence = sentence.slice(1);
			sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
		}

		return sentence;
	}

	randomParagraph(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
		let paragraph = '';
		let bounds = { min: 0, max: randomInteger(sentenceLowerBound, sentenceUpperBound) };
		bounds.min = bounds.min + 1;

		if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph = paragraph + '.';
    }

    return paragraph;
	}
}
