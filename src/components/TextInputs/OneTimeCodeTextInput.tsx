import React, { Component } from 'react'
import { Platform, TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import Fonts from '../../res/fonts'

const Container = styled.View`
  flex-direction: column;
  width: 280px;
`

const StyledTextInput = styled.TextInput<any>`
  font-family: '${Fonts.PTMonoRegular}';
  font-size: 64;
  color: #333;
  letter-spacing: 10;
  width: 300px;
  ${Platform.select({
    android: 'height: 85px; alignSelf: center;',
  })};
`

const UnderlinesContainer = styled.View`
  flex-direction: row;
  height: 4px;
  margin: 0 -10px 0 0;
`

const UnderlineView = styled.View`
  flex: 1;
  background-color: #333;
  margin-right: 10px;
`

const MAX_LENGTH = 6

export default class OneTimeCodeTextInput extends Component<TextInputProps> {
  public render() {
    return (
      <Container>
        <StyledTextInput
          maxLength={MAX_LENGTH}
          textContentType={'oneTimeCode'}
          keyboardType={'number-pad'}
          {...this.props}
        />
        <UnderlinesContainer>
          {[...Array(MAX_LENGTH).keys()].map(i => (
            <UnderlineView key={`UnderlineView${i}`} />
          ))}
        </UnderlinesContainer>
      </Container>
    )
  }
}
