import classnames from 'classnames'
import type { TNJNavbarLinksProps } from '@/types/props/components/navbar'

const DEFAULT_CLASS_NAME = 'nj-navbar__links'

// List that holds the <NJNavbarLink>s
export default function NJNavbarLinks(props: TNJNavbarLinksProps) {
  const { className, children, ...rest } = props

  return (
    <ul className={classnames(DEFAULT_CLASS_NAME, className)} {...rest}>
      {children}
    </ul>
  )
}
