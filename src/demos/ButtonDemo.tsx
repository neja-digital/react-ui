import NJButton from '../components/Button'
import type { TNJBorderProp, TNJRoundedProp, TNJSizeProp, TNJTextSizeProp, TNJVariantProp } from '../types/props'
import { mapStringListToOptions } from '../utils'
import { useState } from 'react'
import BasicProps from './BasicProps'

export default function ButtonDemo() {
	const [buttonText, setButtonText] = useState('Button Text')

	const [selectedSize, setSelectedSize] = useState<TNJSizeProp>('regular')
	const [selectedTextSize, setSelectedTextSize] = useState<TNJTextSizeProp>('regular')
	const [selectedVariant, setSelectedVariant] = useState<TNJVariantProp>('light')
	const [selectedRounded, setSelectedRounded] = useState<TNJRoundedProp>('none')
	const [selectedBorder, setSelectedBorder] = useState<TNJBorderProp>('none')
	const [selectedColor, setSelectedColor] = useState<string>('primary')
	const colors = mapStringListToOptions(['primary', 'secondary', 'success', 'danger'])

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

	return (
		<section className="button-demo">
			<h2>Button Demo</h2>

			<div className="prop-wrapper">
				<label htmlFor="text">Button content</label>
				<input id="text"
					type="text"
					value={buttonText}
					placeholder="Button text..."
					onChange={(e) => setButtonText(e.target.value)}></input>
			</div>

			<BasicProps {...props} />

			<div className="prop-wrapper">
				<label htmlFor="color">njColor</label>
				<select id="color"
					name="color"
					value={selectedColor}
					onChange={(e) => setSelectedColor(e.target.value)}>
					{colors}
				</select>
			</div>

			<NJButton
				njSize={selectedSize}
				njTextSize={selectedTextSize}
				njVariant={selectedVariant}
				njRounded={selectedRounded}
				njBorder={selectedBorder}
				njColor={selectedColor}
			>
				{buttonText}
			</NJButton>
		</section>
	)
}