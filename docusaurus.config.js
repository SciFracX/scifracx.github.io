// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const video = require('mdx-embed');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SciFracX',
  tagline: 'Fractional Computing and Modeling with SciFracX',
  url: 'https://scifracx.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SciFracX', // Usually your GitHub org/user name.
  projectName: 'SciFracX', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SciFracX/scifracx.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SciFracX/scifracx.github.io/blob/master/',

            rehypePlugins: [video]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SciFracX',
        logo: {
          alt: 'SciFracX Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SciFracX',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Community',
            to: 'community'
          },
          {
            label: 'Resources',
            to: 'resources',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documents',
                to: 'docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/scifracx',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SciFracX',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SciFracX. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
