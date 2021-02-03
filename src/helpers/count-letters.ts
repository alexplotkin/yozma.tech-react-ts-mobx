export default (text: string, letter: string): number => {
    return text.split(letter).length - 1
}
