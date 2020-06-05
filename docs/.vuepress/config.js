// .vuepress/config.js
module.exports = {
  title: "🚦vue-concurrency (alpha)",
  description:
    "A library for encapsulating asynchronous operations and managing concurrency",
  themeConfig: {
    repo: "martinmalinda/vue-concurrency",
    theme: "@vuepress/vue",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/introduction/" },
    ],
    sidebar: [
      {
        title: "",
        collapsable: false,
        children: ["/introduction/", "/tasks-instances/", "/installation/"],
      },
      {
        title: "Practice",
        collapsable: false,
        children: [
          "/performing-tasks/",
          "/task-state/",
          "/composing-tasks/",
          "/cancellation/",
          "/managing-concurrency/",
          "/handling-errors/",
          "/testing/",
          "/typescript-support/",
          "/ssr-support/",
        ],
      },
      {
        title: "Examples",
        collapsable: false,
        children: [
          "/examples/autocomplete/",
          "/examples/store/",
          // Nuxt
          // AsyncContent
          // Metabolism game
        ],
      },
      {
        title: "API overview",
        collapsable: false,
        children: [
          "/api-overview/use-task/",
          "api-overview/task-instance/",
          "/api-overview/other/",
        ],
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      },
    ],
  ],
};
