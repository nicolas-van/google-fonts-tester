/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "google-fonts-tester.1ea0f749.js",
    "revision": "052a78b613d15f9b9364fa1d38ec5646"
  },
  {
    "url": "index.html",
    "revision": "cd80ee889acb7d402fcc93756316d0f4"
  },
  {
    "url": "logo192.eae72d5d.png",
    "revision": "581fa1d82b7152e685510b51d48edd3e"
  },
  {
    "url": "logo512.53123a4f.png",
    "revision": "260d57586012b0ed1ae78accc0bf7083"
  },
  {
    "url": "/",
    "revision": "767c5171f6ca090939fc6c97bf50a65d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
