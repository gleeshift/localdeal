module.exports = {
  title: 'Online and in-store deal aggregation',
  tagline: 'We aggregate data from walmart, bestbuy, stapes, home depot, amazon etc and inform you when price drops',
  url: 'https://www.localdeal247.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'localdeal247', // Usually your GitHub org/user name.
  projectName: 'localdeal247', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'localdeal247',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [


  {
    label: 'Category',
    position: 'left',
    items: [
      {
        to: 'cat/cat-1234/',
        activeBasePath: 'cat/cat-1234',
        label: 'Toys',
      },
      {
        to: 'cat/cat-1234/',
        activeBasePath: 'cat/cat-1234',
        label: 'Seasonal',
      },
      {
        to: 'cat/cat-1234/',
        activeBasePath: 'cat/cat-1234',
        label: 'Home',
      },
      {
        to: 'cat/cat-1234/',
        activeBasePath: 'cat/cat-1234',
        label: 'All Category',
      },
    ],
  },

        {
          label: 'Store',
          position: 'left',
          items: [
            {
              to: 'store/store-1234/',
              activeBasePath: 'store/store-1234',
              label: 'Wal-mart',
            },
            {
              to: 'store/store-1234/',
              activeBasePath: 'store/store-1234',
              label: 'Best buy',
            },
            {
              to: 'store/store-1234/',
              activeBasePath: 'store/store-1234',
              label: 'Staples',
            },
            {
              to: 'store/store-1234/',
              activeBasePath: 'store/store-1234',
              label: 'Nike',
            },
            {
              to: 'store/store-1234/',
              activeBasePath: 'store/store-1234',
              label: 'All stores',
            },
          ],
        },

  {
    to: 'bestseller/',
    activeBasePath: 'bestseller',
    label: 'Best seller',
    position: 'left',
  },
        {
          to: 'pricedrop/',
          activeBasePath: 'pricedrop',
          label: 'Price Most drops',
          position: 'left',
        },


        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Help',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Company',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Privacy & Legal',
              to: 'privacy',
            },

          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Help',
              to: 'docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} localdeal247.com.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
