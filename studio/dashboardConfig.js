export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ce3c916a85dbc0f69f5ac0b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xoexcfyz',
                  apiId: 'acd34ea8-00fd-49ef-aeb9-7e35d83fb1b2'
                },
                {
                  buildHookId: '5ce3c916cb7eab1020fab0d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ds6172rt',
                  apiId: 'b932abf7-0991-4979-b95a-19db37ce6d26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MariRolf/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ds6172rt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
