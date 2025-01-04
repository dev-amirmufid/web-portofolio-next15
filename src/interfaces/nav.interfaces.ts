export interface Menu {
  name: string;
  href: string;
}

export interface NavbarProps {
  menu: Menu[];
  isShow?: boolean;
}
