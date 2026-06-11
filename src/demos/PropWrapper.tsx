import type { SetStateAction } from 'react'

interface INJPropWrapperProps {
	children: React.ReactNode
	name: string
	value: any
	setValue: SetStateAction<any>
}

export default function PropWrapper({
	children, name, value, setValue,
}: INJPropWrapperProps) {
	return (
		<div className="prop-wrapper">
			<label htmlFor="size">{name}</label>
			<select id={name}
				name={name}
				value={value}
				onChange={(e) => setValue(e.target.value)}>
				{children}
			</select >
		</div>
	)
}
