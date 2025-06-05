
export interface MenuItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

export interface SubMenuItemProps {
  label: string;
  onClick?: () => void;
}

export interface ProfileData {
  name: string;
  email: string;
  initials: string;
}

export interface EarningsData {
  amount: string;
  period: string;
}

export type Theme = 'light' | 'dark';

export interface SidebarProps {
  theme: Theme;
  profileData: ProfileData;
  earningsData: EarningsData;
}
