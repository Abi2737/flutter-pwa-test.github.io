'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fdf0cb657bccedd657f4e35639e7bcf9",
".git/config": "480ef4ffe35a2850d48472b8112e4473",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30b013ac2818fa39af454d2e2b8790e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4aa72cec7fb2c895cc137aed3e366659",
".git/logs/refs/heads/main": "71ed6dd622e3fb9bb3a39bd0662f02c4",
".git/logs/refs/remotes/origin/main": "6a21301d122611e7653e61f74f0292bc",
".git/objects/00/e58bfca110e771082178696d2de2e11c3afe67": "b68f30eb5cd9db110e7efd6b2c9143ef",
".git/objects/08/aa3a47c0c2bb72c8daa9d43f2606946e30d340": "0d29757b851d014e4a93e638d49f3430",
".git/objects/0a/e30c8a75df7294d2f267b99aafa1d0bddfe9b4": "e519aa17cc16ccd009093f092d89448c",
".git/objects/0c/03910eb62dae3f0755a307f503fec624c2ae3d": "2163ccbd9938b7833bd3d2a00a6454c0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/03052e06f88173dd3b165e7365e9ff0ab01cd5": "fee3be99f61cebc6174ebc05a1aebb58",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/1f22a2f17f15d71bee220b496805122bb75eb0": "cf92fb8d9503c7a0047e1c310c478a2d",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8fd10187dff64e914c7dd3b1fbd4445033bafd": "53ee704a7f98752b340cbfcdf6204794",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/df83ac5822a496505c1ace0b00002118cb0ce9": "fb45f6f3171d0e0b29ffe9d72484119d",
".git/objects/2d/4dc2afcf46c7a35d673ced44b9e999bab8bf56": "62db8a5c872f2f61813e84b8321a0529",
".git/objects/2f/7edccdc15fa0d0132bd7e4dc22a5a54f6d49ef": "a9740f822820b5d5135b258a3b8eedfe",
".git/objects/31/9c42ae8f44c7d78b25b9e48077380ff6b3f454": "292253843bf098f2ba870a0a42392454",
".git/objects/32/6bff1ed2f5f25ea918ff37dec20b36b98f2541": "9cc7840ee501fc576ce81bd9eae1fd09",
".git/objects/44/c7e2b4a529bda9226e06e58bde4803dbfc206f": "1d786ced00f3b26fac005a9b3726464b",
".git/objects/45/4ba926f460151c2d544aeff8ce70e83df4d0ba": "05ac897ea7c99a399908781d53aeebb0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/71c65eb187236932acc7b4b8b8b803692d890c": "d43bf7daafb2ed5fe58771883194175e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/603a760f9db2ef25f594f1756dcbeb74b6fa98": "e83b996d535c58174b0dbcd551f0d088",
".git/objects/55/e217040a3b2eb9431e6a7b633f44e87b2ec30b": "ea35dad200cfaed366e2664ed8ea9bb1",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/0109b9e0bc6fe050732f82f6f042f9e0c64566": "64d82e2504e962eb533c10ce30d7708b",
".git/objects/57/92429c80314e5df14b6e6518abf214cfd4bcf9": "a9ed2750547630d196a10e0bc142f140",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/60c58e77bd20036a345d0befd31fc5741317e4": "30ed25496815d9785b6b0b85b5ab8e2a",
".git/objects/62/38ea4759432ea3574046bd6d3f6bacaca36a54": "58ce615d70a7f33ea7458996446ba762",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/4166857fb714560ffaa74549d41945a750d521": "dae8197d41b37a10e8d8ee8201a36eaa",
".git/objects/84/957e47543c631c3e832975ba4007169d270a8c": "cdd1796bdeb13b6b1ab5d72a524cb79f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/7ec029bd302042d63fec0e3b930c22baeabbfd": "3126bf8c856130bfada350dfc8ae2c28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dca223354f499b451ff47c59660ac7275b6640": "faac1c060e8d9e4d07fa4a056f8b1c27",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/4b2b7ecc528c71f7172ca39d1bac65ef553d27": "ceb5467107164fa0241c70777b43eb45",
".git/objects/9b/c839b1af396d33d2a5e5bedd90b3c992801700": "f80bd521239abb0dbce6cbaa055b219b",
".git/objects/9d/9966888fb0d64facbf22bca06c60a16aa85b0e": "d11cd383ffff1b8188907be4eb8fb7fa",
".git/objects/a2/bcb9d7d9e92cbdb39ce19c44042b48d3672c4f": "4aef2bfe1f2f136e2b5c9f206f76821c",
".git/objects/ab/53acb4d2ec27b21be171bfbeadee91d0ea1496": "8460ccb54a2ac4374d04a860dc598714",
".git/objects/b1/74b2b78c9233dd2e3905cc7439bbc0bbc10e2c": "478659ed8cde7aae3e52c1359fef81a1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/882e87235c343153e2cb872ea8559f658d83b3": "7f86d8d79a706c04d56236a6629af4d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/09160e8932fb0511495ed8602357c694ad7bf1": "d7b986e55b6b78f856c95f08ea2775d5",
".git/objects/be/ef988db22a3eea7ed82a8d3021b76bdb6bf04a": "dddba0658b86aec6d6109c32581031c0",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/eaa1e79518583e0329efedf8f70ca675214143": "07974737933db11f24b830a0dbce5b89",
".git/objects/cc/b5518d47529bc8ff245404dff4caba824c4e39": "09342d9e1e7e832b1805a4a1d66d579b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3a013d76a55bba5d4bba81fd10a4aae1244323": "63e471ca4111afe2b135b3a11cbaa141",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/e0/adc9ba5e931c32d03af0f5bcfe73e7be090ae1": "c0326c7a30b00831d6aeb9ce38204789",
".git/objects/e1/b8413bdf699f6970e3919acdcdaa433fe31003": "74e48ce17308c0098717ade303de4301",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5ae64475d34e9a88161185bcd9554f8ceaac01": "56a3e95106b752f6ba56d680430427e9",
".git/objects/ee/bf32c8ca1609c7e2622b4b8789ebf51654a093": "8073551517126901c46b15cc92406190",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/431d71af88c79e04e8752007205d3fde3e4bbc": "352ce952a34bad1b13abdd2e33b22895",
".git/objects/f6/740b3e23da4273e2d351c5cb42f041e90aa5d1": "9353c9e45fd0c801fec72e34f003b8a7",
".git/objects/f9/ad4d5feadfb44e66ccd517d2ab60bd37520721": "beff7b0fdc90f0c7b0b8af8d92df8adc",
".git/refs/heads/main": "df3da2b1796cbf98d3df4579609b8847",
".git/refs/remotes/origin/main": "df3da2b1796cbf98d3df4579609b8847",
"assets/AssetManifest.bin": "4d331f86a6421c4d34c3bac3396bbe5c",
"assets/AssetManifest.bin.json": "d9816c98ac22fddf75d4fc1542224d69",
"assets/AssetManifest.json": "829dc31ec9f65ae79d5de1cdce6cda9d",
"assets/assets/icon/icon.png": "902d114eacea12ba84897013fb861d24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "6b071d19fc5447127ffb69900ae800bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c40c28c05d6ec5dd7a829a61ae1ec006",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon.png": "902d114eacea12ba84897013fb861d24",
"index.html": "f99be42f1bdd9d432f8bb9b54fb851b0",
"/": "f99be42f1bdd9d432f8bb9b54fb851b0",
"install-icons/arrow-forward.svg": "ecf0b6ba2b312568877f8d6a5d641eb5",
"install-icons/close.svg": "bd8d31d8feb2a162a184229db533a93b",
"main.dart.js": "80490c3976e706a725f17c60f980c356",
"manifest.json": "7a10d7de3847ceccee6095f3a9c86229",
"screenshots/image1.jpg": "72e327acd1de04fccb692c225d0fc39b",
"screenshots/image2.jpg": "7660256663e5cced1b561a01edbf0a9c",
"screenshots/image3.jpg": "22a788dcff6c782b32db57920fa878f8",
"screenshots/image4.jpg": "2922f4628267b015bf4e29c025505544",
"version.json": "ce10ff8c28c8f9e8a950cabf377a5578"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
