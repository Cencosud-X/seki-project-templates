const discordHelpLink = 'https://discord.com/channels/872122460185690174/882654760027689011';
const productName = '{{data.name}}';
const repositoryName = '{{data.product.name}}'
const repositoryURL = `https://github.com/Cencosud-xlabs/${repositoryName}`;

module.exports = {
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/sidebars.js'),
          path: './src/docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${repositoryURL}/tree/main/{{data.group_folder}}/{{data.path}}/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/css/custom.css')
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    prism:{
      additionalLanguages: ["uri","java","git"]
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: productName,
      logo: {
        alt: productName,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          href: repositoryURL,
          position: 'right',
          className: 'header-github-link'
        }
      ],

    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Canal de Ayuda',
          items: [
            {
              label: 'Discord',
              href: discordHelpLink,
            },
          ],
        }
      ],
      copyright: `Hecho con ❤ por el team <b>Seki</b>`,
    },
  },
  baseUrl: '/',
  title: productName, // Website Title
  url: `https://${repositoryName}-{{data.path}}.cencox.xyz`,
  organizationName: "Cencosud X", // Usually your GitHub org/user name.
  projectName: repositoryName, // Usually your repo name.
  onBrokenLinks: 'warn'
};