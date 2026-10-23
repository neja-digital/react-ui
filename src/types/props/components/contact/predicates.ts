import { isValidElement } from 'react'
import type { INJContactHours, INJContactInfo, TNJContactHours, TNJContactInfo } from './details'

const CONTACT_INFO_KEYS: (keyof INJContactInfo)[] = ['title', 'address', 'email', 'phone']
const CONTACT_HOURS_KEYS: (keyof INJContactHours)[] = [
  'title', 'weekdays', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
]

// A plain object that is not a React element or an array, and has at least one of the given keys
const hasAnyKey = (value: unknown, keys: string[]): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value === null || Array.isArray(value) || isValidElement(value)) return false

  return keys.some(key => key in value)
}

export const isContactInfo = (info: TNJContactInfo): info is Partial<INJContactInfo> => {
  return hasAnyKey(info, CONTACT_INFO_KEYS)
}

export const isContactHours = (hours: TNJContactHours): hours is Partial<INJContactHours> => {
  return hasAnyKey(hours, CONTACT_HOURS_KEYS)
}
