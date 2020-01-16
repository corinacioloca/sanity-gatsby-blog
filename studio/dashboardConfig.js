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
                  buildHookId: '5e203f286a8652f1b2fed180',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kc93p53j',
                  apiId: '008ef0c0-86f3-4881-be0b-fa2ea86e6518'
                },
                {
                  buildHookId: '5e203f288d7a81689d993752',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sx59z3hf',
                  apiId: 'f47ac8f0-8f02-4080-84aa-c126cd096d77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/corinacioloca/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sx59z3hf.netlify.com', category: 'apps' }
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
