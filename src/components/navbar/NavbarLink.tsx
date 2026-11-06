import type { ElementType, MouseEvent } from 'react';
import classnames from 'classnames';
import type { TNJNavbarLinkProps } from '@/types/props/components/navbar';
import { useNavbarContext } from './context';

const DEFAULT_CLASS_NAME = 'nj-navbar__link';

// A link inside <NJNavbarLinks>. Renders an <a> by default; pass `as` to use a router link, e.g. `as={NavLink}`.
// Router links like NavLink set aria-current="page" on the active link by themselves
export default function NJNavbarLink<T extends ElementType = 'a'>(props: TNJNavbarLinkProps<T>) {
  const { as, className, children, njActive, njCloseOnClick = true, onClick, ...rest } =
    props as TNJNavbarLinkProps<'a'> & { as?: ElementType };
  const { setOpen } = useNavbarContext('NJNavbarLink');
  const Component: ElementType = as ?? 'a';

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (njCloseOnClick) setOpen(false);
  };

  return (
    <li className="nj-navbar__item">
      <Component
        className={classnames(DEFAULT_CLASS_NAME, className)}
        aria-current={njActive ? 'page' : undefined}
        onClick={handleClick}
        {...rest}>
        {children}
      </Component>
    </li>
  );
}
