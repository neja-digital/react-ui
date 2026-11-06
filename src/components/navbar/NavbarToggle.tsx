import { useMergeRefs } from './useMergeRefs';
import classnames from 'classnames';
import type { TNJNavbarToggleProps } from '@/types/props/components/navbar';
import { useNavbarContext } from './context';

const DEFAULT_CLASS_NAME = 'nj-navbar__toggle';

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="1.5em"
    height="1.5em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false">
    {open
      ? <path d="M6 6l12 12M18 6L6 18" />
      : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

// Button that opens/closes the <NJNavbarMenu> on small screens. It is hidden on desktop
export default function NJNavbarToggle(props: TNJNavbarToggleProps) {
  const { className, children, ref, onClick, ...rest } = props;
  const { open, setOpen, menuId, toggleRef } = useNavbarContext('NJNavbarToggle');
  const mergedRef = useMergeRefs(toggleRef, ref);

  return (
    <button
      ref={mergedRef}
      type="button"
      className={classnames(DEFAULT_CLASS_NAME, className)}
      aria-label="Toggle navigation"
      aria-expanded={open}
      aria-controls={menuId}
      onClick={(e) => {
        onClick?.(e);
        setOpen(!open);
      }}
      {...rest}>
      {children ?? <MenuIcon open={open} />}
    </button>
  );
}
