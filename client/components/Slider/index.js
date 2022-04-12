import React, { useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import styled from 'styled-components'
import { Platform } from 'react-native'

const SliderWrapper = styled.View`
  margin: 0px;
  width: 280px;
  height: 150px;
  justify-content: center;
`

const ViewContainer = styled.View`
  align-self: center;
  justify-content: center;
`
const LabelWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`

const LabelText = styled.Text`
  font-size: 20px;
`

const Slider = () => {
  const [multiSliderValue, setMultiSliderValue] = useState([18, 100])

  const multiSliderValuesChange = (values) => setMultiSliderValue(values)

  return (
    <ViewContainer>
      <SliderWrapper>
        <LabelWrapper>
          <LabelText>{multiSliderValue[0]} </LabelText>
          <LabelText>{multiSliderValue[1]}</LabelText>
        </LabelWrapper>
        <MultiSlider
          markerStyle={{
            ...Platform.select({
              ios: {
                height: 30,
                width: 30,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 1,
                shadowOpacity: 0.1
              },
              android: {
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: '#1792E8'
              }
            })
          }}
          pressedMarkerStyle={{
            ...Platform.select({
              android: {
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#148ADC'
              }
            })
          }}
          selectedStyle={{
            backgroundColor: '#1792E8'
          }}
          trackStyle={{
            backgroundColor: '#CECECE'
          }}
          touchDimensions={{
            height: 40,
            width: 40,
            borderRadius: 20,
            slipDisplacement: 40
          }}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={280}
          onValuesChange={multiSliderValuesChange}
          min={18}
          max={100}
          allowOverlap={false}
          minMarkerOverlapDistance={10}
        />
      </SliderWrapper>
    </ViewContainer>
  )
}

export default Slider