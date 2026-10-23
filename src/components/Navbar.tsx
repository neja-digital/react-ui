import type { TNJNavbarProps } from '@/types/props/components/navbar'
import classnames from 'classnames'
import { getModifierClasses } from '../utils'

const DEFAULT_CLASS_NAME = 'nj-navbar'

export default function Navbar(props: TNJNavbarProps) {
  const { children, className, njBorder, njRounded, njSize, njTextSize, ...rest } = props

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    getModifierClasses({ njSize, njTextSize, njRounded, njBorder }),
  )

  return (
    <nav className={classList} {...rest}>
      {children}
    </nav>
  )
}
