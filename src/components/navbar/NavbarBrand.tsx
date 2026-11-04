import type { ElementType } from 'react'
import classnames from 'classnames'
import type { TNJNavbarBrandProps } from '@/types/props/components/navbar'

const DEFAULT_CLASS_NAME = 'nj-navbar__brand'

// Logo/site name. Renders an <a> by default; pass `as` to use a router link, e.g. <NJNavbarBrand as={Link} to="/">
export default function NJNavbarBrand<T extends ElementType = 'a'>(props: TNJNavbarBrandProps<T>) {
  const { as, className, children, ...rest } = props as TNJNavbarBrandProps<'a'> & { as?: ElementType }
  const Component: ElementType = as ?? 'a'

  return (
    <Component className={classnames(DEFAULT_CLASS_NAME, className)} {...rest}>
      {children}
    </Component>
  )
}
