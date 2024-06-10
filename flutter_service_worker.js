'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "debe715ecd30d18349567d0556851688",
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
".git/index": "2c6dfd5c13414ef48a975948d4d720e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20366445b9b3f99b4238cf106428c364",
".git/logs/refs/heads/main": "156d4198aefe21a8c6e7db794de645d3",
".git/logs/refs/remotes/origin/main": "fbbbbc8dc56a007610d72a2ed5ed753a",
".git/objects/00/e58bfca110e771082178696d2de2e11c3afe67": "b68f30eb5cd9db110e7efd6b2c9143ef",
".git/objects/04/e87e75ee6ac5e2140a48a8c1401e1c507b575c": "7d52c72df090e90674b9ad1768608ed5",
".git/objects/07/05f9da3f30c0d6ac9cb006c8377b5d11bcaddd": "b57b5cd7b95dee8ed20435702ae7f712",
".git/objects/08/aa3a47c0c2bb72c8daa9d43f2606946e30d340": "0d29757b851d014e4a93e638d49f3430",
".git/objects/0a/e30c8a75df7294d2f267b99aafa1d0bddfe9b4": "e519aa17cc16ccd009093f092d89448c",
".git/objects/0c/03910eb62dae3f0755a307f503fec624c2ae3d": "2163ccbd9938b7833bd3d2a00a6454c0",
".git/objects/0d/28c6a5bf67991365c5534f27e07863dcceb5f5": "e2866ec5943fb1c1a8375cfc33e925ac",
".git/objects/0e/b6c2b92acffb0b0066c25a0d15e9f9f802dc42": "1b6a12911c43b41126a996dc5272ac3f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/e23fe09091a09059359d1f97b8d08e4a1bbe44": "fed24b14483998021c65dc88bffe71ed",
".git/objects/13/754257bdea028dee78e710c1645f99a3041e89": "4d2540d0a37e6e3123a9abf73670dab4",
".git/objects/13/a13b1b8021a051d9a8339d5a1cbdb2872f15a2": "1c77ebb61c94040f34c4c422f43ce0e8",
".git/objects/13/e5589d82ad2813341c296b556e61330429475f": "c8fa9c4b8e4a26284faaf4494549c460",
".git/objects/14/03052e06f88173dd3b165e7365e9ff0ab01cd5": "fee3be99f61cebc6174ebc05a1aebb58",
".git/objects/16/153ae9cd6a991cfee47ed69d0e978a98ff2129": "5bd1105a2c63d0f4a7d73ac4848cad58",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/a7917502ff9fb05da12c4ab3948715dafe9b02": "bf9e04cc2e8d77745446ef158af29886",
".git/objects/1b/1f22a2f17f15d71bee220b496805122bb75eb0": "cf92fb8d9503c7a0047e1c310c478a2d",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/1c5fb4713619bbe5c78b0449cbd6b306b08f51": "bc17fce360b145f8f5f6137a903a3820",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8fd10187dff64e914c7dd3b1fbd4445033bafd": "53ee704a7f98752b340cbfcdf6204794",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6d44031579590e2e7713a52c84b96d6c578147": "5b8fcf2db0ff68bc45e46fb83b54a518",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/ff153fc3c21ed5f3cf95691a60416942addffd": "53f4299790bdef27c9fe37c3878a6fb0",
".git/objects/22/89c46129c0570d42835ac1b31bf6cef1647bf6": "433b7282d164f7aa8ff4f38ade86730c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/df83ac5822a496505c1ace0b00002118cb0ce9": "fb45f6f3171d0e0b29ffe9d72484119d",
".git/objects/28/d78f2a01027b08d813ca9d82145df487407bf2": "6ae6616304c0a69f7aecf070981dd8b8",
".git/objects/28/e8fbe15a964207de76b56f0437edeb91aeca8a": "a8c73a2c593e4cc2feb988019311cdb0",
".git/objects/2c/f841b24228bd50cb8c530bb10c0740985d0809": "5da83885bf42051c657f14ae362736df",
".git/objects/2d/4dc2afcf46c7a35d673ced44b9e999bab8bf56": "62db8a5c872f2f61813e84b8321a0529",
".git/objects/2f/427e91c893dcc8acd9c9c83197238dbfee6e58": "c2f5c82f0f0f16244d0a652930ca2e27",
".git/objects/2f/7edccdc15fa0d0132bd7e4dc22a5a54f6d49ef": "a9740f822820b5d5135b258a3b8eedfe",
".git/objects/31/29d5fce039b60b2b2e9ed0254c6fe4bb717efb": "5ffb8cb30abb85f194271eaf403fb5f8",
".git/objects/31/9c42ae8f44c7d78b25b9e48077380ff6b3f454": "292253843bf098f2ba870a0a42392454",
".git/objects/32/6bff1ed2f5f25ea918ff37dec20b36b98f2541": "9cc7840ee501fc576ce81bd9eae1fd09",
".git/objects/33/1d72e9054f2a53db9ded7d5f27a186e108a51d": "824e1008930b6d32684c5c0812309460",
".git/objects/34/0aaa2734650228d97ee402cb93f89d3e2a0ee5": "1bcf2a0a8007d590d49c95ba527de0f6",
".git/objects/36/9320d3dfd66d08b454833c4a1025ca96baca0c": "a9b443465b759c3bdbbc75090e88b300",
".git/objects/39/b78cc992bd7231a675dff7b988945fded55749": "7fb241eb08c257fe4d5cd86076793356",
".git/objects/3c/afd27c1609fbf408c39d6d8cdebca70cc44dd1": "051f5adb9f875907062253436412f181",
".git/objects/3d/90b95cd07aa09a9933655223306133c099de8b": "cd76537a7f7c1572720fa1cdeb84facb",
".git/objects/3e/6d9dd86e7a37c1ca04736d45e785c11f8c213c": "fa5ef6a17981484d90d70080f6c245cb",
".git/objects/41/5816faff2ef4799ed39d444fff32ccb0144a4f": "ac6e1c3db1b80f0906170d687c89ca79",
".git/objects/44/4b1aa817391c518e747034f6575581c3b655d0": "cab088be4944d7b3389450de1a01f6c5",
".git/objects/44/c7e2b4a529bda9226e06e58bde4803dbfc206f": "1d786ced00f3b26fac005a9b3726464b",
".git/objects/45/4ba926f460151c2d544aeff8ce70e83df4d0ba": "05ac897ea7c99a399908781d53aeebb0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/71c65eb187236932acc7b4b8b8b803692d890c": "d43bf7daafb2ed5fe58771883194175e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/603a760f9db2ef25f594f1756dcbeb74b6fa98": "e83b996d535c58174b0dbcd551f0d088",
".git/objects/4f/eef958639afbf6245f0957d7aa286e65444417": "ed746be9c308815966c44ad15d5a13f7",
".git/objects/50/8f1eed2fbb7fc8ede042d1677ed6f043b2efd6": "bc83ea0687e4c993760bfd25fe7aacab",
".git/objects/53/23d10d4a9f21c57c090ab9d2a04e8d28087a2c": "78f7e1537c1636ab1ca80bd13e4ca204",
".git/objects/53/d76ae488ee516baae629c86e8e61295a5a2c08": "4e6892fea2339030202216fdd50f4bb6",
".git/objects/54/21e11c76769f09910833f23054a038ed08a395": "97d4b8015a82d7e143a33657c3d247ab",
".git/objects/55/e217040a3b2eb9431e6a7b633f44e87b2ec30b": "ea35dad200cfaed366e2664ed8ea9bb1",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/0109b9e0bc6fe050732f82f6f042f9e0c64566": "64d82e2504e962eb533c10ce30d7708b",
".git/objects/57/92429c80314e5df14b6e6518abf214cfd4bcf9": "a9ed2750547630d196a10e0bc142f140",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/60c58e77bd20036a345d0befd31fc5741317e4": "30ed25496815d9785b6b0b85b5ab8e2a",
".git/objects/62/38ea4759432ea3574046bd6d3f6bacaca36a54": "58ce615d70a7f33ea7458996446ba762",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/dbc29b57b829425a063ba2290ef807d88e110c": "23614b2c60bbdb6ca5858630e3b6f0b5",
".git/objects/63/92ddae2e13df9028ebeba056b98dcfcfe74327": "38c1e267d59be53897c7618d33c8b30f",
".git/objects/64/0719dbb1d8c2d995ebf135cf82b1322895d4b8": "0d885cd6a7a6783ff62f1ad6f98bd7c0",
".git/objects/64/8f7692139329111dd509e6751928bb7e1e9a4c": "1367a1336e6a539e749c38a8508e612c",
".git/objects/64/b4c1e947fa068349599c3a73bcb8ac7bb0075e": "0b4ee9132f660a2f90de24a8d1602882",
".git/objects/6f/b775619c3b689629272c66dcca92203cf6e3dd": "be3919191ef75295eb7a475bbc0d9895",
".git/objects/70/cecded8230bdba5f5a73a9fb60b4f9be9b00aa": "e574c4c8ebe3213dcc1670889e80c251",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/4166857fb714560ffaa74549d41945a750d521": "dae8197d41b37a10e8d8ee8201a36eaa",
".git/objects/74/1de953b89b58465b48a2412339a7cd424090f2": "9c20391a5046000f8de14a5fb98f95a3",
".git/objects/77/e3a0b76ce55b6bcb335f1edbb147084f8ea845": "6d0f18a61df0d63fdce179bb7888cf95",
".git/objects/79/45ddae497d82e40157ec4d41f47e1545db627c": "8dca4558b9fd77ca67366dadaf5e978b",
".git/objects/79/b8cdd465f90712179c9c53ef55c1e6eaab6e9a": "ceac02fba9a8290734d20739d725b705",
".git/objects/84/957e47543c631c3e832975ba4007169d270a8c": "cdd1796bdeb13b6b1ab5d72a524cb79f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/66b3a5eacb51f283400f1c80a973719c520ac8": "0ac02dd63586eb362343dd55a9c6be19",
".git/objects/88/7ec029bd302042d63fec0e3b930c22baeabbfd": "3126bf8c856130bfada350dfc8ae2c28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d5fe6ebfee40b92901425064c5cbc45a2a8e0a": "586b9afdc72f58af78d61a421cd27b69",
".git/objects/8c/dca223354f499b451ff47c59660ac7275b6640": "faac1c060e8d9e4d07fa4a056f8b1c27",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/4b2b7ecc528c71f7172ca39d1bac65ef553d27": "ceb5467107164fa0241c70777b43eb45",
".git/objects/98/d216324a685430666c855ff258ec95641a3ca3": "564455ba526d9b961fbb86bf878eba84",
".git/objects/9b/c839b1af396d33d2a5e5bedd90b3c992801700": "f80bd521239abb0dbce6cbaa055b219b",
".git/objects/9d/9966888fb0d64facbf22bca06c60a16aa85b0e": "d11cd383ffff1b8188907be4eb8fb7fa",
".git/objects/a2/bcb9d7d9e92cbdb39ce19c44042b48d3672c4f": "4aef2bfe1f2f136e2b5c9f206f76821c",
".git/objects/a9/ccd2330c1e0cd70f4bbb3cd83e50c4f21c12ee": "692c34a19de162c6e82bb9b77a863e21",
".git/objects/aa/b028b9958fbb0f15f1cb70ef699824788d7feb": "8d8a4914a027f0ffa2cc4ca8924a4a2f",
".git/objects/ab/53acb4d2ec27b21be171bfbeadee91d0ea1496": "8460ccb54a2ac4374d04a860dc598714",
".git/objects/ad/02094c8982068b078058a36c6978747f65770e": "699db625ceda794f103bb401ea39ca66",
".git/objects/ae/bb505f435ea7c0c434e624d5d1fec4f306fd8d": "7ab2c05d83fd1f9fd1bf9bdab1381b82",
".git/objects/b1/74b2b78c9233dd2e3905cc7439bbc0bbc10e2c": "478659ed8cde7aae3e52c1359fef81a1",
".git/objects/b2/521d50a64262ea19bcc3ff6c0bc70d8ed05ec9": "b9aff207bb4c0ae5f6397ebe6b17f15e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/882e87235c343153e2cb872ea8559f658d83b3": "7f86d8d79a706c04d56236a6629af4d8",
".git/objects/b6/1c519fb98f4a2b70f04c85ee1dc22fc8f1e965": "1a5707b1bebbd2bbeb0c904b6eff75c6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9ead76d06ddb23537f06a78d2b089a904a15e": "d80168b38c942d571efce71806d5a328",
".git/objects/b8/cea8218ba6d6ec559a3ff281aa713da892e365": "9a256d3475658b6d817ebc7f08637517",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/09160e8932fb0511495ed8602357c694ad7bf1": "d7b986e55b6b78f856c95f08ea2775d5",
".git/objects/bb/e4f9b5fc8f882aa0ba053f055f23e98930ec3d": "29cbfa7601e451aa1e2650b973120081",
".git/objects/be/aa669d1001fa33a0ceb6836a044e72ebe69f74": "9cd2a06c2039a788970de93140d253c9",
".git/objects/be/ef988db22a3eea7ed82a8d3021b76bdb6bf04a": "dddba0658b86aec6d6109c32581031c0",
".git/objects/be/fb3c86fd30ec89ddc2b9a15342eab80546a8a7": "1779d866f4a08658ba78f0fc6d055d6b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/f25adf5916910b498dc9f28963043f5015428a": "ca566873f5c8ef418c7f2c863a67956b",
".git/objects/ca/42f2bd0f280c58d4cc75793c82b9b46c7bcdfe": "d561a46b61b01dca0cd203c2905b8bd8",
".git/objects/ca/87a7d698013b2bbbaac3dbd58d234da51eee73": "6d657230ce14fd5381a1eebc2eccc4a2",
".git/objects/ca/a60f002016c817b2006cc3d48aa2d3d5dcc603": "ec5b5dfc159af3b2862ba441b058e5b3",
".git/objects/cb/eaa1e79518583e0329efedf8f70ca675214143": "07974737933db11f24b830a0dbce5b89",
".git/objects/cc/b5518d47529bc8ff245404dff4caba824c4e39": "09342d9e1e7e832b1805a4a1d66d579b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/e2e6b49e314147bdf837b2dccf079646fdfdce": "134dd4c9a8c1f3f4e80b062a5b4d2cbe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3a013d76a55bba5d4bba81fd10a4aae1244323": "63e471ca4111afe2b135b3a11cbaa141",
".git/objects/d6/2ea77dead935fe1d517d2f74e3e83201c8ac4d": "86fd7f1d293cb459f30578b4761427c8",
".git/objects/d6/7179a453b0013c4162a9d6dd12ab45019c4367": "6268d07a99c6864dc1643edf73e57c2b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/12829b7ef11f5169ac65c32dfe1fb803cf8978": "3555537ad4065cfaf705a2ca6ca96c9d",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/dc/fb865ecab2021f77cdb0b3e652f4ee667fbd35": "61df7179bc866188d7d8e926a1be810d",
".git/objects/e0/adc9ba5e931c32d03af0f5bcfe73e7be090ae1": "c0326c7a30b00831d6aeb9ce38204789",
".git/objects/e1/72f878a6cd80533d919ad992e4ee40bbfc9ecc": "ee95870fe1a839b70efaadebb6a6dfe8",
".git/objects/e1/b8413bdf699f6970e3919acdcdaa433fe31003": "74e48ce17308c0098717ade303de4301",
".git/objects/e2/fb5f1652a4f79244be5c89fe767a44883a517c": "73878d5f928c508c63d20bcc6019d65f",
".git/objects/e9/1831cdad80411854da32e4a924c6cdc8e79c27": "97933e86617cc7fe9e6213aca393b0c6",
".git/objects/ea/3be35586fcc5c685c2c4f5122f95d17bc9d517": "501e50cb5a087e32a9b164a36a5e9e2b",
".git/objects/ea/8679f93696ee73a7d0111e48c5444a50bd5eb9": "6d0e45508407bfcc022013f930c8ad16",
".git/objects/eb/7f93070ff78ea145674338a9385d8c5293c601": "13495f49d5c5daa838fc09131ebce0c7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5ae64475d34e9a88161185bcd9554f8ceaac01": "56a3e95106b752f6ba56d680430427e9",
".git/objects/ed/c30f1c27ee917c550c3bbc10f01f91b1f7cf38": "8d0ab142ef52174979b7f2aadcfc8f80",
".git/objects/ee/bf32c8ca1609c7e2622b4b8789ebf51654a093": "8073551517126901c46b15cc92406190",
".git/objects/f0/130f28a4f5e32c41fabff874ee24711defa59a": "66684eabdfa6b71e145b6dd92590a700",
".git/objects/f0/45a71bb778d44c5ee55e30f00297f66dc37915": "c86e601dd4c2ac8c7d3f40dece584cf7",
".git/objects/f0/5f0ca421a4efd014428438737ef6acf4399ecf": "3ad1f922e38bad8628779b70d04f9be1",
".git/objects/f1/2784f706283940dcba1aca7c918e776c27b9c1": "b45900ec415c64db37523126252fe67d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/431d71af88c79e04e8752007205d3fde3e4bbc": "352ce952a34bad1b13abdd2e33b22895",
".git/objects/f4/9bf7ec174617394220df1d9d020a5bfd336c3f": "36971ea7db6e6c9b94938acd2ab9262a",
".git/objects/f5/7b8ceefa4192aad5c1fac8821133c5f5271c59": "0839a3aacfc96d16302620a81a32ddb3",
".git/objects/f6/740b3e23da4273e2d351c5cb42f041e90aa5d1": "9353c9e45fd0c801fec72e34f003b8a7",
".git/objects/f9/19562883e686792e35c0ecf855fae5bea05e1d": "ab9497b21d323163bb7bb4c6c4408876",
".git/objects/f9/ad4d5feadfb44e66ccd517d2ab60bd37520721": "beff7b0fdc90f0c7b0b8af8d92df8adc",
".git/objects/fd/9e8802bbbee15944851716263a409da4567708": "bb024697d586052184a2065c48287b8e",
".git/objects/fe/00dc96aa610fe4790998df494beb4d6abb019f": "6f323cf284ea7a64f0bec1d8f2935962",
".git/refs/heads/main": "01f121d9883932c1fb72b09277194578",
".git/refs/remotes/origin/main": "01f121d9883932c1fb72b09277194578",
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
"flutter_bootstrap.js": "721c81a2a89ccd397bb857cac2f247b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon.png": "902d114eacea12ba84897013fb861d24",
"index.html": "02fbf0e05a6c83ae718b25fba774f03d",
"/": "02fbf0e05a6c83ae718b25fba774f03d",
"install-icons/add-to-dock.svg": "efee8a33a30b07c6fb243d585da0ef05",
"install-icons/add-to-home-screen.svg": "e7e3f7585dbdbdc9c6be65416846f566",
"install-icons/add-to-phone.svg": "5ec4c0eb875941cda2b1e44186382f21",
"install-icons/arrow-forward.svg": "ecf0b6ba2b312568877f8d6a5d641eb5",
"install-icons/close.svg": "bd8d31d8feb2a162a184229db533a93b",
"install-icons/install-phone.svg": "9dcc81f5637b30fc4463df01f1daf128",
"install-icons/ios-share.svg": "9555399268c9119141c458f3536315d2",
"install-icons/menu-vert.svg": "23da267b3e4a3f7341f45b93ece349ab",
"install-icons/menu.svg": "b236d8984b7c6957b278353b5621bb95",
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
