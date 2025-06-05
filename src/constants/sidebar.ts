
export const SIDEBAR_DIMENSIONS = {
  width: 320,
  height: 904,
  menuItemWidth: 256,
  menuItemHeight: 48,
  logoSize: 48,
  buttonSize: 40,
  iconSize: 18,
} as const;

export const SIDEBAR_COLORS = {
  light: {
    background: '#fcfcfc',
    containerBg: '#fcfcfc',
    text: '#1e1e1e',
    secondaryText: '#989898',
    border: '#eeeeee',
    divider: '#dddddd',
    hover: 'gray-50',
    activeBackground: '#f6f6f6',
    activeBorder: '#eeeeee',
    badgeBackground: '#edbfff',
    buttonBackground: '#fcfcfc',
  },
  dark: {
    background: '#202020',
    containerBg: '#202020',
    text: '#f1f1f1',
    secondaryText: '#a8a8a8',
    border: '#4c4c4c',
    divider: '#363636',
    hover: '#282828',
    activeBackground: '#363636',
    activeBorder: '#4c4c4c',
    badgeBackground: '#2d68ff',
    buttonBackground: '#282828',
  }
} as const;

export const DEFAULT_MENU_ITEMS = [
  { icon: 'Home', label: 'Home', active: true },
  { icon: 'Bookmark', label: 'Saved', badge: '8' },
  { icon: 'BarChart3', label: 'Metrics' },
  { icon: 'Users', label: 'Community' },
] as const;

export const RESOURCES_SUBMENU = [
  'Fonts',
  'Icons', 
  'Color',
  'Illustrations'
] as const;
