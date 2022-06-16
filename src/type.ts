export interface ContactCardInterface {
    icon: JSX.Element;
    contact: string;
    number: string;
    button: string;
  }
  export type ContactCards = Array<ContactCardInterface>;

  export interface LogoInterface {
    image: string;
  }
  export type Logos = Array<LogoInterface>;

  export interface FooterInfoInterface {
    title: string;
    info1: string;
    info2: string;
    info3: string;
  }
  export type FooterInfos = Array<FooterInfoInterface>;

  export interface HeaderListInterface {
    name: string;
    path: string;
  }
  export type HeaderLists = Array<HeaderListInterface>;

  export interface SubscriptionInterface {
    total: string;
    text: string;
  }
  export type Subscriptions = Array<SubscriptionInterface>;

  export interface ResidenceInterface {
    image: string;
    price: string;
    name: string;
    description: string;
  }
  export type ResidenceHouse = Array<ResidenceInterface>;

  export interface MarketInterface {
    text: string;
    icon: JSX.Element;
    description: string;
  }
  export type Market = Array<MarketInterface>;

  export interface MarketPropsInterface {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface ButtonPropsInterface {
    name: string;
  }

  export interface TitlePropsInterface {
    title: string;
    subtitle: string;
    detail?: string;
  }
  
  export interface MenuListPropsInterface {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scroll: number;
  }