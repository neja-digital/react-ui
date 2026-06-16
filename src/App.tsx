import { createRoot } from 'react-dom/client'
import './app.css'
import '@neja-digital/css/index.css'
import ButtonDemo from './demos/ButtonDemo'
import NJSystem from './system/NJSystem'
import type { TNJTheme } from './types/theme'
import InputDemo from './demos/InputDemo'
import TextAreaDemo from './demos/TextAreaDemo'
import SelectDemo from './demos/SelectDemo'

const theme: TNJTheme = {
	colors: {
		primary: '#d74',
		secondary: '#56f',
		success: '#3a3',
		danger: '#f33',
	},
}

createRoot(document.getElementById('root')!).render(
	<NJSystem theme={theme}>
		<div className="demo-title">
			<h1>Components Demo</h1>
			<p>Feel free to edit the props' values and see how it affects the elements</p>
		</div>

		<div className="demo">
			<ButtonDemo />
			<InputDemo />
			<TextAreaDemo />
			<SelectDemo />
		</div>
	</NJSystem>,
)
