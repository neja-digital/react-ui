import { createRoot } from 'react-dom/client'
import './app.css'
import '@neja-digital/css/index.css'
import { NJButton, NJCard, NJContactDetails, NJInput, NJSelect, NJTestimonial, NJTextArea } from './components'
import NJSystem from './system/NJSystem'
import type { TNJTheme } from './types/theme'
import { mapStringListToOptions } from './utils'

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
      <div>
        <NJButton njVariant="solid" njColor="primary" njRounded="tight">Solid</NJButton>
        <NJButton njVariant="light" njColor="secondary" njBorder="thin">Light</NJButton>
      </div>

      <NJCard njTitle="Card title"
        njText="Card text"
        njColor="primary"
        njVariant="light"
        njRaised="lightly" />

      <NJTestimonial njAuthor="Jane Doe" njReview="Great coffee!" njRating={4} />

      <NJContactDetails
        njInfo={{ title: 'Find us', address: 'Main street 1', email: 'info@example.com', phone: '000 000 000' }}
        njOpeningHours={{
          title: 'Opening hours',
          weekdays: { start: '08:00', end: '17:00' },
          saturday: { start: '10:00', end: '14:00' },
        }}
      />

      <form>
        <NJInput njLabel="Name" njColor="primary" njVariant="light" />
        <NJSelect njColor="primary" njVariant="light">
          {mapStringListToOptions(['One', 'Two', 'Three'])}
        </NJSelect>
        <NJTextArea njLabel="Message" njColor="primary" njVariant="light" />
      </form>
    </div>
  </NJSystem>,
)
