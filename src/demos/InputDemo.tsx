import type { TNJSizeProp, TNJTextSizeProp, TNJVariantProp, TNJRoundedProp, TNJBorderProp } from '../types/props'
import { mapStringListToOptions } from '../utils'
import { useState } from 'react'
import BasicProps from './BasicProps'
import NJInput from '../components/Input'

export default function InputDemo() {
	const [selectedSize, setSelectedSize] = useState<TNJSizeProp>('regular')
	const [selectedTextSize, setSelectedTextSize] = useState<TNJTextSizeProp>('regular')
	const [selectedVariant, setSelectedVariant] = useState<TNJVariantProp>('light')
	const [selectedRounded, setSelectedRounded] = useState<TNJRoundedProp>('none')
	const [selectedBorder, setSelectedBorder] = useState<TNJBorderProp>('thin')
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

	const [value, setValue] = useState('')

	return (
		<section className="input-demo">
			<h2>Input Demo</h2>

			<div className="prop-wrapper">
				<label htmlFor="text">Input value</label>
				<input id="text"
					type="text"
					value={value}
					placeholder="Input value..."
					onChange={(e) => setValue(e.target.value)}></input>
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

			<NJInput
				njSize={selectedSize}
				njTextSize={selectedTextSize}
				njVariant={selectedVariant}
				njRounded={selectedRounded}
				njBorder={selectedBorder}
				njColor={selectedColor}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</section>
	)
}