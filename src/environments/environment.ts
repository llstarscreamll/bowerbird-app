// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { APP_VERSION } from 'src/app/app.version';

export const environment = {
  production: false,
  appVersion: APP_VERSION,
  appName: 'BowerbirdWebDev',
  useEmulators: true,
  firebase: {
    apiKey: 'AIzaSyA0VW0-csU55Kjc8OIILgOlFFCnj4pgdGA',
    authDomain: 'satin-bowerbird.firebaseapp.com',
    projectId: 'satin-bowerbird',
    storageBucket: 'satin-bowerbird.appspot.com',
    messagingSenderId: '712490501845',
    appId: '1:712490501845:web:3a302beb48c779f3f5c45c',
    measurementId: 'G-CSQK4ZZVKT',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
