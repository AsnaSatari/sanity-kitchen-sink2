export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630f76bebf2db3239e144b4a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-iaut4jib',
                  apiId: '28d1e32d-42a5-4698-8471-6402a4e1b507'
                },
                {
                  buildHookId: '630f76be8de1a91e77a8061e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-qbbau6jy',
                  apiId: 'f509496d-1070-468b-b0d4-4cfa4df9bd4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AsnaSatari/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-qbbau6jy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
