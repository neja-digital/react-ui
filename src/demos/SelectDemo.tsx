import type { TNJSizeProp, TNJTextSizeProp, TNJVariantProp, TNJRoundedProp, TNJBorderProp } from '../types/props'
import { mapStringListToOptions } from '../utils'
import { useState } from 'react'
import BasicProps from './BasicProps'
import NJSelect from '../components/Select'

export default function SelectDemo() {
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

	return (
		<section className="select-demo">
			<h2>Select Demo</h2>

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

			<NJSelect
				njSize={selectedSize}
				njTextSize={selectedTextSize}
				njVariant={selectedVariant}
				njRounded={selectedRounded}
				njBorder={selectedBorder}
				njColor={selectedColor}
			>
				<option disabled selected>please select</option>
				<option value="1">first option</option>
				<option value="2">second option</option>
				<option value="3">third option</option>
				<option value="4">fourth option</option>
			</NJSelect>
		</section>
	)
}