import React from 'react';
import {observer} from 'mobx-react-lite';
import styled from '@emotion/styled'

/* components */
import Chart from './chart'

/* hooks */
import {useStore} from '../../hooks';

const Statistics = observer(() => {
    const textStore = useStore('textStore');

    if (!textStore.letter) {
        return null
    }

    const config = [
        {
            title: 'Words starts with',
            statistics: textStore.textQueryingResult.startsWith,
        },
        {
            title: 'Words ends with',
            statistics: textStore.textQueryingResult.endsWith,
        },
        {
            title: 'Letter appears',
            statistics: textStore.textQueryingResult.contains,
        },
        {
            title: 'Repeated in conjunction',
            statistics: textStore.textQueryingResult.conjunction,
        },
    ]

    const renderWords = (words: string[]) => {
        return words.map((word, index) => {
            return (
                <span key={index}>{word} </span>
            )
        })
    }

    const renderStatisticsItems = () => {
        return config.map((item, index) => {
            return (
                <StyledStatisticsItem key={index}>
                    <StyledStatisticsItemTitle>
                        {item.title}
                    </StyledStatisticsItemTitle>

                    {item.statistics.wordsCount ? (
                        <div>
                            <StyledStatisticsItemPiecesItem>
                                Words Count: <span>{item.statistics.wordsCount}</span>
                            </StyledStatisticsItemPiecesItem>

                            <StyledStatisticsItemPiecesItem>
                                Unic Words Count: <span>{item.statistics.unicWordsCount}</span>
                            </StyledStatisticsItemPiecesItem>

                            <StyledStatisticsItemPiecesItem>
                                Letter Appears Count: <span>{item.statistics.lettersCount}</span>
                            </StyledStatisticsItemPiecesItem>

                            <StyledStatisticsItemPiecesItem>Words:</StyledStatisticsItemPiecesItem>
                            <StyledStatisticsItemPiecesItemWords>
                                {renderWords(item.statistics.unicWords)}
                            </StyledStatisticsItemPiecesItemWords>

                            <Chart data={item.statistics.chartData} />
                        </div>
                    ) : (
                        <div>
                            No matches found
                        </div>
                    )}
                </StyledStatisticsItem>
            )
        })
    }

    return (
        <StyledStatistics>
            {renderStatisticsItems()}
        </StyledStatistics>
    )
})

export default Statistics

const StyledStatistics = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`

const StyledStatisticsItem = styled.div`
  width: calc(50% - 20px);
  padding: 0 10px;
  text-align: center;
`

const StyledStatisticsItemTitle = styled.div`
  font-weight: bold;
  margin-block: 10px;
  font-size: 20px;
  text-align: center;
`

const StyledStatisticsItemPiecesItem = styled.div`
  margin-bottom: 5px;

  span {
    font-weight: bold;
  }
`

const StyledStatisticsItemPiecesItemWords = styled.div`
  height: 70px;
  overflow: auto;
  text-align: justify;
  margin: 0 auto;
  border: 1px solid;
  padding: 6px 12px;
`
