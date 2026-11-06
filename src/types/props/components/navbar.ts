import type { TNJColor } from '../../theme';
import type { ComponentPropsWithRef, ElementType } from 'react';
import type { INJProps, TNJPolymorphicProps, TNJRaisedProp } from '../shared';

export type TNJNavbarAlignProp = 'start' | 'center' | 'end';

export interface INJNavbarProps extends Omit<ComponentPropsWithRef<'nav'>, 'color'>, INJProps {
  njColor?: TNJColor
  njRaised?: TNJRaisedProp
  // Keeps the navbar at the top of the viewport while scrolling
  njSticky?: boolean
  // Controlled state of the mobile menu. Leave it out to let the navbar manage the state itself
  njOpen?: boolean
  njDefaultOpen?: boolean
  njOnOpenChange?: (open: boolean) => void
}

export type TNJNavbarProps = INJNavbarProps;

export interface INJNavbarBrandOwnProps {
  className?: string
}

// `as` lets the brand render any element/component, e.g. a router link: <NJNavbarBrand as={Link} to="/" />
export type TNJNavbarBrandProps<T extends ElementType = 'a'> = TNJPolymorphicProps<T, INJNavbarBrandOwnProps>;

export interface INJNavbarToggleProps extends ComponentPropsWithRef<'button'> {
  // Custom icon. A default hamburger/close icon is rendered when omitted
  children?: React.ReactNode
}

export type TNJNavbarToggleProps = INJNavbarToggleProps;

export interface INJNavbarMenuProps extends ComponentPropsWithRef<'div'> {
  // Where the content of the menu sits on desktop
  njAlign?: TNJNavbarAlignProp
}

export type TNJNavbarMenuProps = INJNavbarMenuProps;

export type TNJNavbarLinksProps = ComponentPropsWithRef<'ul'>;

export interface INJNavbarLinkOwnProps {
  className?: string
  // Marks the link as the current page (sets aria-current="page"). Router links such as NavLink do it by themselves
  njActive?: boolean
  // Close the mobile menu when the link is clicked. Defaults to true
  njCloseOnClick?: boolean
}

export type TNJNavbarLinkProps<T extends ElementType = 'a'> = TNJPolymorphicProps<T, INJNavbarLinkOwnProps>;
