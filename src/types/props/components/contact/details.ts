import type { INJComponentSlot } from '../../shared'

export interface INJContactInfo {
  title: string
  address: string
  email: string
  phone: string
}

export type TNJContactInfo = React.ReactNode | Partial<INJContactInfo>

export interface INJWorkHours {
  start: string
  end: string
}

export interface INJContactHours {
  title: string
  weekdays: INJWorkHours
  monday: INJWorkHours
  tuesday: INJWorkHours
  wednesday: INJWorkHours
  thursday: INJWorkHours
  friday: INJWorkHours
  saturday: INJWorkHours
  sunday: INJWorkHours
}

export type TNJContactHours = React.ReactNode | Partial<INJContactHours>

export interface INJContactDetailsProps {
  className?: string
  njInfo: TNJContactInfo
  njOpeningHours: TNJContactHours
}

export type TNJContactDetailsProps = INJComponentSlot | INJContactDetailsProps
