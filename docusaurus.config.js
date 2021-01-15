const path = require("path");

module.exports = {
  title: "Dr. George",
  tagline: "Full Stack Data Scientist",
  titleDelimiter: "-",
  url: "xxx",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "georgezhao1", // Usually your GitHub org/user name.
  projectName: "my-blog-docusaurus", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "Dr. George",
      logo: {
        alt: "",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "docs/about-me/about-me",
          label: "About Me",
          position: "right",
        },
        {
          to: "/",
          label: "Blog",
          position: "right",
          items: [
            {
              label: "Career",
              to: "tags/career",
            },
            {
              label: "Hobby",
              to: "tags/hobby",
            },
          ],
        },
        {
          label: "Data Science",
          position: "right",
          items: [
            {
              label: "Data Scraping",
              to: "docs/data-science/data-scraping",
            },
            {
              label: "Machine Learning",
              to: "docs/data-science/machine-learning",
            },
            {
              label: "Visualization",
              to: "docs/data-science/visualization",
            },
            {
              label: "AI",
              to: "docs/data-science/ai",
            },
          ],
        },
        {
          label: "Web App",
          position: "right",
          items: [
            {
              label: "Frontend",
              to: "docs/web-app/front-end",
            },
            {
              label: "Backend",
              to: "docs/web-app/back-end",
            },
            {
              label: "Deployment",
              to: "docs/web-app/deployment",
            },
          ],
        },
        {
          label: "Engineering",
          position: "right",
          items: [
            {
              label: "Chemical Engineering",
              to: "docs/engineering/chemical-engineering",
            },
          ],
        },
        {
          label: "Learning Resources",
          position: "right",
          to: "docs/resources",
        },

        {
          href: "https://github.com/georgezhao1",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/zxuqian/zxuqian.cn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} George Zhao Built with Docusaurus.`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
    googleAnalytics: {
      trackingID: "UA-118572241-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "Recent Articles",
          feedOptions: {
            type: "all",
            title: "Full Stack Data Scientist",
            copyright: `Copyright © ${new Date().getFullYear()} George Zhao Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
