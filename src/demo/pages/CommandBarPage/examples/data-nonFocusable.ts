export const itemsNonFocusable = [
  {
    key: 'newItem',
    name: 'New',
    icon: 'CirclePlus',
    onClick: () => { return; },
    items: [
      {
        key: 'emailMessage',
        name: 'Email message',
        icon: 'Mail'
      },
      {
        key: 'calendarEvent',
        name: 'Calendar event',
        icon: 'Calendar'
      }
    ]
  },
  {
    key: 'upload',
    name: 'Upload',
    icon: 'Upload',
    onClick: () => { return; }
  }
];

export const farItemsNonFocusable = [
  {
    key: 'saveStatus',
    name: 'Your page has been saved',
    icon: 'CheckMark'
  },
  {
    key: 'publish',
    name: 'Publish',
    icon: 'ReadingMode',
    onClick: () => { return; }
  }
];