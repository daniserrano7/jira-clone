/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_normalizeFormMethod: true,
    v2_meta: true,
  },
  ignoredRouteFiles: ["**/.*", "**/*.spec.ts"],
  appDirectory: "./src/app",
  serverDependenciesToBundle: [
    "react-dnd",
    "react-dnd-html5-backend",
    "react-dnd-touch-backend",
    "@react-dnd/invariant",
    "dnd-core",
    "@react-dnd/shallowequal",
    "@react-dnd/asap",
  ],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};
