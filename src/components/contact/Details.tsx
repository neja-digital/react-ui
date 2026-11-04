import type {
  INJContactHours,
  INJContactInfo,
  INJWorkHours,
  TNJContactDetailsProps,
} from '@/types/props/components/contact/details'
import { isContactHours, isContactInfo } from '@/types/props/components/contact/predicates'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-contact-details'

const capitalize = (str: string) => str.charAt(0).toUpperCase().concat(str.slice(1))

export default function NJContactDetails(props: TNJContactDetailsProps) {
  if ('children' in props) {
    const className = classnames(DEFAULT_CLASS_NAME, props.className)

    return (
      <section className={className}>
        {props.children}
      </section>
    )
  }

  const { className, njInfo, njOpeningHours } = props
  const sectionClassname = classnames(DEFAULT_CLASS_NAME, className)

  const mapContactInfo = (info: Partial<INJContactInfo>, k: keyof INJContactInfo) => {
    if (!info[k]) return null

    if (k === 'title') return (
      <h3 key={k}>{info.title}</h3>
    )
    else return (
      <p key={k}>
        <strong>{capitalize(k)}: </strong>
        <span>{info[k]}</span>
      </p>
    )
  }

  const mapContactHours = (hours: Partial<INJContactHours>, k: keyof INJContactHours) => {
    const value = hours[k]

    if (!value) return null

    if (k === 'title') return (
      <h3 key={k}>{hours.title}</h3>
    )
    else return (
      <p key={k}>
        <strong>{capitalize(k)}: </strong>
        <span>{(value as INJWorkHours).start} - {(value as INJWorkHours).end}</span>
      </p>
    )
  }

  return (
    <section className={sectionClassname}>
      <div className="contact__address">
        {
          isContactInfo(njInfo) ?
            Object.keys(njInfo).map(k => mapContactInfo(njInfo, k as keyof INJContactInfo)) :
            njInfo
        }
      </div>
      <div className="contact__hours">
        {
          isContactHours(njOpeningHours) ?
            Object.keys(njOpeningHours).map(k => mapContactHours(njOpeningHours, k as keyof INJContactHours)) :
            njOpeningHours
        }
      </div>
    </section>
  )
}
