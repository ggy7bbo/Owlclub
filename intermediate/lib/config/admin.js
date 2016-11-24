AdminConfig = {
  name: 'The OwlClub',
  adminEmails: ['ggybbo@naver.com'],
  collections: {
    Classroom: {},
    Materials: {},
    Question:{},
    Round:{}
  },
  dashboard: {
    homeUrl: '/dashboard',
    skin: 'green-light',
    widgets: [
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Classroom',
          class: 'col-lg-3 col-xs-6'
        },
      },
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Materials',
          class: 'col-lg-3 col-xs-6'
        }
      },
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Question',
          class: 'col-lg-3 col-xs-6'
        }
      },
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Round',
          class: 'col-lg-3 col-xs-6'
        }
      }
    ]
  }
};
