import React from 'react';
import {observer} from 'mobx-react-lite';
import styled from '@emotion/styled';

/* hooks */
import {useStore} from '../../hooks';

const Textarea = observer(() => {
    const textStore = useStore('textStore');

    return (
        <StyledTextarea
            placeholder="Enter text to querying"
            onChange={(e) => textStore.handleTextChange(e.target.value)}
            value={textStore.text}
        />
    )
})

export default Textarea

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 6px 12px;
  font-size: 16px;
  resize: vertical;
`
