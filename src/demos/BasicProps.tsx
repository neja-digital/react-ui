import { mapStringListToOptions } from '../utils'
import PropWrapper from './PropWrapper'
import type { SetStateAction } from 'react'

interface INJBasicPropsProps {
  size: {
    value: any,
    setValue: SetStateAction<any>
  },
  textSize: {
    value: any,
    setValue: SetStateAction<any>
  },
  variant: {
    value: any,
    setValue: SetStateAction<any>
  },
  rounded: {
    value: any,
    setValue: SetStateAction<any>
  },
  border: {
    value: any,
    setValue: SetStateAction<any>
  }
}

export default function BasicProps({ size, textSize, variant, rounded, border }: INJBasicPropsProps) {
  const propList = [
    {
      name: 'njSize',
      elements: mapStringListToOptions(['tight', 'compact', 'regular', 'large', 'xlarge']),
      value: size.value,
      setValue: size.setValue,
    },
    {
      name: 'njTextSize',
      elements: mapStringListToOptions(['tiny', 'small', 'regular', 'large', 'xlarge']),
      value: textSize.value,
      setValue: textSize.setValue,
    },
    {
      name: 'njVariant',
      elements: mapStringListToOptions(['light', 'solid']),
      value: variant.value,
      setValue: variant.setValue,
    },
    {
      name: 'njRounded',
      elements: mapStringListToOptions(['none', 'tight', 'medium', 'large', 'pill', 'circle']),
      value: rounded.value,
      setValue: rounded.setValue,
    },
    {
      name: 'njBorder',
      elements: mapStringListToOptions(['none', 'thin', 'medium', 'thick']),
      value: border.value,
      setValue: border.setValue,
    },
  ]

  const propWrappers = propList.map(prop => {
    return (
      <PropWrapper
        key={prop.name}
        name={prop.name}
        value={prop.value}
        setValue={prop.setValue}
      >
        {prop.elements}
      </PropWrapper>
    )
  })

  return (
    <>
      {propWrappers}
    </>
  )
}