/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  
  ignoredRouteFiles: ["**/.*"],
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
  // serverBuildPath: ".netlify/functions-internal/server.js",
  publicPath: "/build/",
};
