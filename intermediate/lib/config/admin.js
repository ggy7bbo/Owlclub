AdminConfig = {
  name: 'The DjSocialClub',
  adminEmails: ['ggybbo@naver.com','bkhscwe@gmail.com'],
  collections: {
    Classroom: {
      tableColumns: [
       { label: '_id', name: '_id'},
       { label: 'title', name: 'title' },
       { label: 'desc', name: 'desc' },
       { label: 'leader', name: 'leader'}
      ]
    },
    Materials: {
      tableColumns: [
       { label: 'title', name: 'title' },
       { label: '_id', name: '_id' },
       { label: 'order', name: 'order'}
      ]
    },
    Question:{
      tableColumns: [
       { label: 'title', name: 'title' },
       { label: '_id', name: '_id' },
       { label: 'patron_id', name: 'patron_id'}
      ]
    },
    Round:{
      tableColumns: [
       { label: 'title', name: 'title' },
       { label: '_id', name: '_id' },
       { label: 'patron_id', name: 'patron_id'}
      ]
    },
    Word:{},
    Cron:{}
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
      },
      {
        template: 'adminCollectionWidget',
        data: {
          collection: 'Word',
          class: 'col-lg-3 col-xs-6'
        }
      }
    ]
  }
};
