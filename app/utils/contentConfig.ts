type ContentSectionConfig = {
  active: boolean;
  color: string;
  path: string;
};

type ContentConfig = {
  [key: string]: ContentSectionConfig;
};

const contentConfig: ContentConfig = {
  home: {
    active: true,
    color: 'sky',
    path: '/',
  },
  developer: {
    active: true,
    color: 'green',
    path: '/developer',
  },
  teacher: {
    active: true,
    color: 'orange',
    path: '/teacher',
  },
  contact: {
    active: true,
    color: 'violet',
    path: '/contact',
  },
  blog: {
    active: true,
    color: 'slate',
    path: '/blog',
  },
  essentials: {
    active: true,
    color: 'teal',
    path: '/essentials',
  },
};

export const getContentSectionConfig = (
  section: keyof ContentConfig
): ContentSectionConfig => {
  return contentConfig[section];
};

export const getAllContentConfig = (): ContentConfig => {
  return contentConfig;
};
