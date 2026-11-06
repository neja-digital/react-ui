import classnames from 'classnames';
import type { TNJNavbarMenuProps } from '@/types/props/components/navbar';
import { useNavbarContext } from './context';

const DEFAULT_CLASS_NAME = 'nj-navbar__menu';

// The part of the navbar that collapses on small screens (opened with <NJNavbarToggle>)
export default function NJNavbarMenu(props: TNJNavbarMenuProps) {
  const { className, children, njAlign = 'end', ...rest } = props;
  const { open, menuId } = useNavbarContext('NJNavbarMenu');

  return (
    <div
      id={menuId}
      className={classnames(DEFAULT_CLASS_NAME, `nj-navbar__menu--${njAlign}`, className)}
      data-open={open}
      {...rest}>
      {children}
    </div>
  );
}
