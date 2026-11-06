import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import classnames from 'classnames';
import type { TNJNavbarProps } from '@/types/props/components/navbar';
import { getModifierClasses } from '../../utils';
import { NavbarContext } from './context';

const DEFAULT_CLASS_NAME = 'nj-navbar';

export default function NJNavbar(props: TNJNavbarProps) {
  const {
    children, className, style, ref, onKeyDown,
    njSize, njTextSize, njVariant, njRounded, njBorder, njColor, njRaised, njSticky,
    njOpen, njDefaultOpen = false, njOnOpenChange,
    ...rest
  } = props;

  const [innerOpen, setInnerOpen] = useState<boolean>(njDefaultOpen);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Controlled when `njOpen` is passed, otherwise the navbar keeps the state itself
  const isControlled = njOpen !== undefined;
  const open = isControlled ? njOpen : innerOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setInnerOpen(next);
    njOnOpenChange?.(next);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(e);

    if (e.key === 'Escape' && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  const classList = classnames(
    DEFAULT_CLASS_NAME,
    { 'nj-navbar--sticky': njSticky },
    className,
    getModifierClasses({ njSize, njTextSize, njVariant, njRaised, njRounded, njBorder }),
  );

  // Only set the color variable when a color is given, so the CSS default stays in charge otherwise
  const colorStyle = njColor ?
    { '--navbar-color': `var(--${njColor})`, '--navbar-on-color': `var(--on-${njColor})` } as React.CSSProperties :
    undefined;

  return (
    <NavbarContext value={{ open, setOpen, menuId, toggleRef }}>
      <nav
        ref={ref}
        className={classList}
        style={{ ...colorStyle, ...style }}
        data-open={open}
        onKeyDown={handleKeyDown}
        {...rest}>
        {children}
      </nav>
    </NavbarContext>
  );
}
