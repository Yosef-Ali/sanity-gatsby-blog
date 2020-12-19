export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fde438d2c063cc2c014dd59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jx2s2hvw',
                  apiId: 'c4f969e5-03e0-430e-8f7f-cff0f18ab7d9'
                },
                {
                  buildHookId: '5fde438d714daf98772c5afb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qzv2fwfy',
                  apiId: '11264ebd-c984-45e2-977f-9a7c3890a1f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yosef-Ali/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qzv2fwfy.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
