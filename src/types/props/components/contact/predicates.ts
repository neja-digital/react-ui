import type { INJContactHours, INJContactInfo, TNJContactHours, TNJContactInfo } from './details'

export const isContactInfo = (info: TNJContactInfo): info is Partial<INJContactInfo> => {
  return (info as INJContactInfo).address !== undefined
}

export const isContactHours = (hours: TNJContactHours): hours is Partial<INJContactHours> => {
  return (hours as INJContactHours).weekdays !== undefined || (hours as INJContactHours).monday !== undefined
}
