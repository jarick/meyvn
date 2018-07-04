// @flow
import React, {Fragment} from 'react';
import { uniqueId, last, range } from 'lodash'
import { Slider, Container, Title, Donut, Line, Space } from './styles'


type Props = {
  leftBoarderWidth?: number,
  rightBoarderWidth?: number,
  titles: string[],
  spaceWidth?: number,
  letterWidth?: number,
  step: number,
  onChangeStep?: (step: number, oldStep: number) => void
}

export default ({
  leftBoarderWidth,
  rightBoarderWidth,
  titles,
  spaceWidth = 200,
  letterWidth = 15,
  step,
  onChangeStep = () => {}
}: Props) => {
  const calcLeftBoarderWidth = leftBoarderWidth || Math.floor(titles[0].length / 2) * letterWidth;
  const calcRightBoarderWidth = rightBoarderWidth || Math.floor(last(titles).length / 2) * letterWidth;
  const calcWidth = calcLeftBoarderWidth + calcRightBoarderWidth + titles.length * spaceWidth

  return (
    <Slider
      style={{width: calcWidth}}
    >
      <Container titles>
        {titles.map((title, index) => (
          <Title
            key={uniqueId(`slider-title-${index}`)}
            disable={step <= index}
            onClick={() => onChangeStep(index + 1, step)}
          >
            {title}
          </Title>
        ))}
      </Container>
      <Container>
        <Space width={calcLeftBoarderWidth} />
        <Donut
          key={uniqueId(`slider-donut-0`)}
          disable={step === 0}
          onClick={() => onChangeStep(1, step)}
        />
        {range(1, titles.length).map((index) => ( 
          <Fragment key={uniqueId(`slider-fragmet-${index}`)}>
            <Line
              key={uniqueId(`slider-line-${index}`)}
              disable={step <= index}
              animate={step - 1 === index}
            />
            <Donut
              key={uniqueId(`slider-donut-${index}`)}
              disable={step <= index}
              onClick={() => onChangeStep(index + 1, step)}
            />
          </Fragment>
        ))}
        <Space width={calcRightBoarderWidth} />
      </Container>
    </Slider>
  )
}