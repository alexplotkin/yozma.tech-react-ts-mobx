import React from 'react';
import {observer} from 'mobx-react-lite';
import styled from '@emotion/styled'

/* hooks */
import {useStore} from '../../hooks';

/* constants */
import {ALPHABET} from '../../constants/alphabet';

const Search = observer(() => {
    const textStore = useStore('textStore');

    return (
        <StyledLetters>
            {ALPHABET.split('').map((letter, index) => {
                return (
                    <StyledLetter
                        key={index}
                        className={textStore.letter === letter ? 'active' : ''}
                        onClick={() => textStore.handleLetterChange(letter)}>
                        {letter}
                    </StyledLetter>
                )
            })}
        </StyledLetters>
    )
})

export default Search;

const StyledLetters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`

const StyledLetter = styled.div`
  padding: 5px 10px;
  border: 1px solid;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &.active {
    background: green;
    color: white;
  }
`
