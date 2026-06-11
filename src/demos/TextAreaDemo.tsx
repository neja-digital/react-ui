import NJTextArea from '../components/TextArea'
import type {
	TNJSizeProp,
	TNJTextSizeProp,
	TNJVariantProp,
	TNJRoundedProp,
	TNJBorderProp,
	TNJResizeProp,
} from '../types/props'
import { mapStringListToOptions } from '../utils'
import { useState } from 'react'
import BasicProps from './BasicProps'

export default function TextAreaDemo() {
	const [selectedSize, setSelectedSize] = useState<TNJSizeProp>('regular')
	const [selectedTextSize, setSelectedTextSize] = useState<TNJTextSizeProp>('regular')
	const [selectedVariant, setSelectedVariant] = useState<TNJVariantProp>('light')
	const [selectedRounded, setSelectedRounded] = useState<TNJRoundedProp>('none')
	const [selectedBorder, setSelectedBorder] = useState<TNJBorderProp>('thin')
	const [selectedColor, setSelectedColor] = useState<string>('primary')
	const colors = mapStringListToOptions(['primary', 'secondary', 'success', 'danger'])
	const [selectedResize, setSelectedResize] = useState<TNJResizeProp>('both')
	const resizeValues = mapStringListToOptions(['none', 'horizontal', 'vertical', 'both'])

	const props = {
		size: {
			value: selectedSize,
			setValue: setSelectedSize,
		},
		textSize: {
			value: selectedTextSize,
			setValue: setSelectedTextSize,
		},
		variant: {
			value: selectedVariant,
			setValue: setSelectedVariant,
		},
		rounded: {
			value: selectedRounded,
			setValue: setSelectedRounded,
		},
		border: {
			value: selectedBorder,
			setValue: setSelectedBorder,
		},
	}

	const [value, setValue] = useState('')

	return (
		<section className="textarea-demo">
			<h2>TextArea Demo</h2>

			<BasicProps {...props} />

			<div className="prop-wrapper">
				<label htmlFor="resize">njResize</label>
				<select id="resize"
					name="resize"
					value={selectedResize}
					onChange={(e) => setSelectedResize(e.target.value as TNJResizeProp)}>
					{resizeValues}
				</select>
			</div>

			<div className="prop-wrapper">
				<label htmlFor="color">njColor</label>
				<select id="color"
					name="color"
					value={selectedColor}
					onChange={(e) => setSelectedColor(e.target.value)}>
					{colors}
				</select>
			</div>

			<NJTextArea
				njSize={selectedSize}
				njTextSize={selectedTextSize}
				njVariant={selectedVariant}
				njRounded={selectedRounded}
				njBorder={selectedBorder}
				njColor={selectedColor}
				njResize={selectedResize}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</section>
	)
}