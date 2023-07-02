import { atom, action } from 'nanostores';

export const $mobileOpen = atom(false);

export const mobileOpenToggle = action($mobileOpen, 'mobileOpenToggle', store => {
  store.set(!store.get());
  return store.get();
});