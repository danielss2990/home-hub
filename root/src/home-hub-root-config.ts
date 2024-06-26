import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: '@home-hub/hello-world',
//   app: () => System.import<LifeCycles>('@home-hub/hello-world'),
//   activeWhen: (location) => location.pathname === '/hello-world',
// });

registerApplication({
  name: '@home-hub/react-navbar',
  app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
  activeWhen: (location) => location.pathname === '/',
});

// registerApplication({
//   name: "@home-hub/navbar",
//   app: () => System.import("@home-hub/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
