// INTERFACES
import { Menu } from '@shared/interfaces/sidebar.interfaces';

const generateDescription = (label: string): string => {
  return `Go to ${label} documentation section.`;
};

export const WelcomeCards: Array<Menu> = [
  {
    label: 'Apps & Repos',
    description: generateDescription('Apps & Repos'),
    path: ['/apps-repos'],
    sections: [
      {
        label: 'Angular',
        path: ['/apps-repos/angular']
      },
      {
        label: 'React',
        path: ['/apps-repos/react']
      },
      {
        label: 'Node',
        path: ['/apps-repos/node']
      }
    ]
  },
  // {
  //   label: 'Project',
  //   description: generateDescription('Project'),
  //   path: ['/project']
  // },
  {
    label: 'Technical',
    description: generateDescription('Technical'),
    path: ['/technical'],
    sections: [
      {
        label: 'Error handling',
        path: ['/technical/error-handling']
      }
    ]
  }
];

export const SidebarLinks = WelcomeCards.map(card => {
  delete card.description;

  if (card.sections) {
    card.sections = card.sections.map(section => {
      return {
        ...section,
        classes: 'item'
      };
    });
  }

  return card;
});

export const HomeRoute: Menu = {
  label: 'My Budget | Documentation',
  icon: 'file alternate outline icon',
  path: ['/']
};
