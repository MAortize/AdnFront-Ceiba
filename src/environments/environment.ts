// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: '/cinemaa',
  endpointPeliculas: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a803e13429cd8df9ee4b1c157f87151',
  urlTrm: 'https://www.datos.gov.co/resource/ceyp-9c7c.json',
  tokenTrm: 'JjZ6JrMR9SKo5CApGp2PX9KzJ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.