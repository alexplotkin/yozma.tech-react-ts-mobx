import {makeAutoObservable} from 'mobx';

/* helpers */
import countLetters from '../../helpers/count-letters'
import countDuplicates from '../../helpers/count-duplicates'
import removeDuplicates from '../../helpers/remove-duplicates'

/* mocks */
import longText from '../../mocks/long-text'

export class TextStore {
    text: string = longText;
    letter: string = '';

    constructor() {
        makeAutoObservable(this)
    }

    handleTextChange(value: string): void {
        this.text = value;
    }

    handleLetterChange(value: string): void {
        this.letter = value
    }

    get processedText(): string {
        return this.text.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[^a-zA-Z ]/g, '')
    }

    get textQueryingResult() {
        const startsWithWords: string[] = []
        const endsWithWords: string[] = []
        const containsWords: string[] = []
        const conjunctionWords: string[] = []

        this.processedText.split(' ').forEach((word) => {
            switch (true) {
                case word.startsWith(this.letter):
                    startsWithWords.push(word)
                    break
                case word.endsWith(this.letter):
                    endsWithWords.push(word)
                    break
                case word.includes(this.letter):
                    containsWords.push(word)
                    if (word.includes(this.letter + this.letter)) {
                        conjunctionWords.push(word)
                    }
                    break
            }
        })

        const makeStatistics = (wordsGroup: string[]) => {
            const unic = removeDuplicates(wordsGroup)

            return {
                words: wordsGroup,
                unicWords: unic,
                wordsCount: wordsGroup.length,
                unicWordsCount: unic.length,
                lettersCount: countLetters(wordsGroup.join(''), this.letter),
                chartData: countDuplicates(wordsGroup)
            }
        }

        return {
            startsWith: makeStatistics(startsWithWords),
            endsWith: makeStatistics(endsWithWords),
            contains: makeStatistics(containsWords),
            conjunction: makeStatistics(conjunctionWords),
        }
    }
}
