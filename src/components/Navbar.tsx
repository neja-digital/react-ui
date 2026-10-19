import type { TNJNavbarProps } from '@/types/props/components/navbar'
import classnames from 'classnames'

const DEFAULT_CLASS_NAME = 'nj-navbar'

export default function Navbar(props: TNJNavbarProps) {
  const { children, className, njBorder, njRounded, njSize, njTextSize, ...rest } = props

  const sizeClass: string = njSize ? `size-${njSize}` : ''
  const textSizeClass: string = njTextSize ? `text-${njTextSize}` : ''
  const roundedClass: string = njRounded && njRounded !== 'none' ? `rounded-${njRounded}` : ''
  const borderClass: string = njBorder && njBorder !== 'none' ? `border-${njBorder}` : ''

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    className,
    sizeClass,
    textSizeClass,
    roundedClass,
    borderClass,
  )

  return (
    <nav className={classList} {...rest}>
      {children}
    </nav>
  )
}
