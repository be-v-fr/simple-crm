import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAyqIeyImGWj1sNjApHUM9IitUtvleTQyQ",
      authDomain: "simple-crm-a87da.firebaseapp.com",
      projectId: "simple-crm-a87da",
      storageBucket: "simple-crm-a87da.appspot.com",
      messagingSenderId: "759418979192",
      appId: "1:759418979192:web:77cbcf9b551b60a3c8fe8d"
    })),
    provideFirestore(() => getFirestore())
  ]
};