'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assets/config/config_life.json": "eef3384c335f197723df548ca119cff2",
"/assets/assets/config/config_archive.json": "0375a7651b2f7ed739d985a660b4189f",
"/assets/assets/config/config_topic.json": "9fa335ca62a52a7808d29a83539144fe",
"/assets/assets/config/config_tag.json": "80374c51e76e38c9764dcf12391bb653",
"/assets/assets/config/config_study.json": "2597f7ce312755667250210b0d0985a3",
"/assets/assets/img/about.png": "75bb821827a9cfc2b8eff971b5e00d31",
"/assets/assets/img/category.png": "36b5b3218fb639251d79f22cd79aeca8",
"/assets/assets/img/post.png": "4f3148a24781ab0a538ed5f1477b79de",
"/assets/assets/img/room_database.png": "12f7230c70accfbdf91701f000f52758",
"/assets/assets/img/github.png": "8e19edd9c39ab207200c51a5f2a95441",
"/assets/assets/img/chat_something.png": "f0cb4fe76874e5a835ce8a27c676d95b",
"/assets/assets/img/sleep_early.png": "8bf9bc403d04984d83062fd17afc54ed",
"/assets/assets/img/kotlin_2.png": "06bc549c3551be9b1832315ae62fd4a0",
"/assets/assets/img/api_2.png": "1e29f9a37e5d4ee0ed703d777e9db36f",
"/assets/assets/img/kotlin_3.png": "8bce1b30e211e137b1f29e2c13afcfdf",
"/assets/assets/img/avatar0.png": "52f37696290e7b407d4b763b428a90b9",
"/assets/assets/img/pic_text.png": "0e25c49ff018216c4b2845514c427c7e",
"/assets/assets/img/post.jpg": "0b909c29dea11f1bcaceaceb305242c6",
"/assets/assets/img/archive_0.jpg": "c79bf5761beff811dd0a39eb7f5a9bc7",
"/assets/assets/img/archive.jpg": "c79bf5761beff811dd0a39eb7f5a9bc7",
"/assets/assets/img/create_mvp.png": "46d86678abc625a0f12621cd00264cf2",
"/assets/assets/img/avatar.jpg": "b44b9db6638311ebc1846cc87cd218b6",
"/assets/assets/img/index_0.jpg": "552e11bfae686858483a79587181c70c",
"/assets/assets/img/avatar.png": "75f537f8a7e801089038988eb08f332c",
"/assets/assets/img/bugly.png": "a69b853aa47cbbca2c3a945dfa1cccd2",
"/assets/assets/img/api_1.png": "acf11ff0bdcd9b78eaee9acf31dd01a8",
"/assets/assets/img/wechat_pay.png": "a2f2b42b37b353a720aa841bb1fd21c7",
"/assets/assets/img/index.jpg": "6aeed7de7d53995d7c271a5fbbce8cac",
"/assets/assets/img/my_idea.png": "67338b884252a1fc2be773c471a3d0fa",
"/assets/assets/img/tag.png": "99c58aae006c6c909cbb57ca336e12d4",
"/assets/assets/img/about.jpg": "0e51e4656c5ad3e797f154bd4028b95c",
"/assets/assets/img/wish_list.png": "2e5fcc14d0f0ce01d7c11729b5654bbd",
"/assets/assets/img/play_1.png": "ab7843982d217ab0ffa1ef29450eb505",
"/assets/assets/img/kotlin_5.png": "4b91717f23bbe0207c589df77e5969d2",
"/assets/assets/img/archive.png": "73742caa09424276e1f511f302fe07d5",
"/assets/assets/img/data_binding.png": "7a57e06fe3d1c5e4b561f40bd1077b64",
"/assets/assets/img/study_flutter.png": "3714e5aecf50aea98829c51ef365fca7",
"/assets/assets/img/new_day.png": "9a384a085357d08e1fb736c0fefa96b9",
"/assets/assets/img/favicon.png": "043b22894dee23c9b47b5d9e5a899e2c",
"/assets/assets/img/changlu.png": "db45516660102ce479929d3cf0e6f6e7",
"/assets/assets/img/kotlin_1.png": "79e75e57505c9d9f6bd27d7298594f53",
"/assets/assets/img/zongjie_2019.png": "9dc758759d0209893880d2fecd717c39",
"/assets/assets/img/kotlin_4.png": "08bee753c19dc3c38a5e4164c80a9701",
"/assets/assets/img/guoqing_2019.png": "684191c50b526645af8e39f29f0b3627",
"/assets/assets/img/steam.png": "4d601f62031ddc22684d3d2925005b47",
"/assets/assets/img/juejin.png": "e4f98e20c16cf47e62687e4d01afc8a0",
"/assets/assets/img/apple-touch-icon.png": "043b22894dee23c9b47b5d9e5a899e2c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"/assets/AssetManifest.json": "75d584de9517de3d93eea3b0ac14fec8",
"/assets/LICENSE": "6ce46a6782f0b27ba38f776ee81ddf1b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/index.html": "a2e9f0e410931d82a7a24986e4496800",
"/main.dart.js": "86fb7038c7150cf879477d4cb9b5d34b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
