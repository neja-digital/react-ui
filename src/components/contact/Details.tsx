import type { INJContactInfo, TNJContactDetailsProps } from '@/types/props/components/contact/details'
import { isContactHours, isContactInfo } from '@/types/props/components/contact/predicates'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-contact-details'

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

  const mapContactInfo = (info: Partial<INJContactInfo>, k: keyof Partial<INJContactInfo>) => {
    if (k === 'title') return (
      <h3>{info.title}</h3>
    )
    else return (
      <p>
        <strong>{k.charAt(0).toUpperCase().concat(k.slice(1))}: </strong>
        <span>info[k]</span>
      </p>
    )
  }

  return (
    <section className={sectionClassname}>
      <div className="contact__address">
        {
          isContactInfo(njInfo) &&
          <>{ Object.keys(njInfo).map(k => mapContactInfo(njInfo, k as keyof Partial<INJContactInfo>)) }</>
        }
        {
          !isContactInfo(njInfo) && njInfo
        }
      </div>
      <div className="contact__hours">
        {
          !isContactHours(njOpeningHours) && njOpeningHours
        }
      </div>
    </section>
  )
}
