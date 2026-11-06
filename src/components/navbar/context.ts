import { createContext, useContext } from 'react';
import type { RefObject } from 'react';

export interface INJNavbarContext {
  open: boolean
  setOpen: (open: boolean) => void
  menuId: string
  toggleRef: RefObject<HTMLButtonElement | null>
}

export const NavbarContext = createContext<INJNavbarContext | null>(null);

// Gives the navbar parts access to the state owned by <NJNavbar>
export const useNavbarContext = (partName: string): INJNavbarContext => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(`<${partName}> must be rendered inside <NJNavbar>`);
  }

  return context;
};
