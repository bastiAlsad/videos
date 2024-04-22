'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "6bee05d4cd04390ab617715a4c4cedcb",
"assets/AssetManifest.smcbin": "b20d2c63a04a8e48e96697adbf48869a",
"assets/assets/videos/AbgewandterLiegestuetz.mp4": "f46a27b1560730a6e18a2386b011b18d",
"assets/assets/videos/AbgewandterLiegestuetz2.mp4": "357f23e716bf57c798a0000abdbbe1e3",
"assets/assets/videos/Armkraeftigung.mp4": "23166cead5cb6be01f8fa1d51a54df21",
"assets/assets/videos/ArmmobilisationTennisarmLinks.mp4": "0eddb0a76a00b700902cf3fe395ea5b5",
"assets/assets/videos/ArmmobilisationTennisarmRechts.mp4": "9f05d99e9ab9a05d8709763da9e0a7c8",
"assets/assets/videos/ArmnervenmobilisationL.mp4": "bc14f8755b463880af37ff1efba175c2",
"assets/assets/videos/ArmnervenmobilisationR.mp4": "9baa1f7452161c987370dc54d8e4ce1b",
"assets/assets/videos/Armpendeln.mp4": "3e0752aecf9d9c98a0e90fd9a587e2cc",
"assets/assets/videos/Atemuebung.mp4": "bc86a8298248082de68efbc339907e2d",
"assets/assets/videos/AufdehnenHandtuch.mp4": "e7e12a5a02ea4a2b17648e83333437c5",
"assets/assets/videos/AufdrehenImStehen2.mp4": "04c6b01005eadb294699cde34f38990c",
"assets/assets/videos/AufdrehenVLinks.mp4": "491fb79516f238edba37816df4fdcdec",
"assets/assets/videos/AufdrehenVRechts.mp4": "5480b98de95628ddaeb8498bc2a06051",
"assets/assets/videos/AufrichtenOberk.mp4": "562ae2d8ea9399369d51fa30d391b5aa",
"assets/assets/videos/AusenrotSchultern.mp4": "0fae9cc10555288b6cfde806bc319b7c",
"assets/assets/videos/Ausfallschritte.mp4": "ebba2dee6876d16ec71128b6a556e573",
"assets/assets/videos/Ausfallschritte1.mp4": "b66b99793dbb815d1e776841ca4276b7",
"assets/assets/videos/bagger.mp4": "803c048bd21140aa79139017a39a5e6b",
"assets/assets/videos/Bauchpresse.mp4": "81a1aa3524145d3a299dbeae2c391e8d",
"assets/assets/videos/Bauchpresse3.mp4": "e5fec27335e9ddc88aa0eb8283bb0f27",
"assets/assets/videos/BeckenKippen.mp4": "e743862f3639193d4e0c24d3ef81dee1",
"assets/assets/videos/BeinhebenBauch.mp4": "a03db311a0bd834857ebcd548d3d7765",
"assets/assets/videos/Beinhebung.mp4": "735b13796254789bc5e0c56fd66811ea",
"assets/assets/videos/BeinpendelnL.mp4": "a3e21fed2f95731f32d17f8def84f12f",
"assets/assets/videos/BeinpendelnR.mp4": "7b67be33332d5f1d59a58ba64b295648",
"assets/assets/videos/Bergsteiger.mp4": "f8ce155d82736510532e1bc17a5ff3e6",
"assets/assets/videos/BewegungURueken.mp4": "3b58e977600eed97b62d063bf1142e79",
"assets/assets/videos/BizepsBeidseitig.mp4": "886a6fba45197993f7ebdcb1abc90f11",
"assets/assets/videos/BizepsLinks.mp4": "c7ba2f40dd68ca61ab39581c20349dbc",
"assets/assets/videos/BizepsRechts.mp4": "1932b9a98e6e330066c6b4698ff0158a",
"assets/assets/videos/BizepsTrizepsLinks.mp4": "41665ad02732f9d87f5bc330e8301679",
"assets/assets/videos/BizepsTrizepsRechts.mp4": "961236432c36bba33598efbfd918520d",
"assets/assets/videos/BrustwirbelsauleL.mp4": "f7c08026a98d3a0f791754e3dcb2862b",
"assets/assets/videos/BrustwirbelsauleR.mp4": "9aac55e714abee35d75a3aef00275c33",
"assets/assets/videos/Butterfly.mp4": "03a87303074cbd10edde7612cdc1ccb8",
"assets/assets/videos/bwsEinbeinL.mp4": "3f1d571e93ddd07b822fe9ba1e76068e",
"assets/assets/videos/bwsEinbeinR.mp4": "bab1d9deb9d48a7b8f950727ff0ccca5",
"assets/assets/videos/BWSKraeftigung.mp4": "321c1c89294a2093163e6d843d926cf4",
"assets/assets/videos/DaumenDehnungLinks.mp4": "10998d879a127f27eb4bb57dd3c1134d",
"assets/assets/videos/DaumenDehnungR.mp4": "948b12e35ff6c261e73f6b7671f6c293",
"assets/assets/videos/DehnungHandgelenkLinks.mp4": "fa14e023c48ecd63b083f4a06c814963",
"assets/assets/videos/DehnungHandgelenkRechts.mp4": "9f776221ad82ee7f78e0438fda4e8fe9",
"assets/assets/videos/DehnungHandrueckenLinks.mp4": "933fb16641db9cd2be6f4d4c1fd975e3",
"assets/assets/videos/DehnungHandrueckenRechts.mp4": "59c903cef3686fa7022dc66ec405ef86",
"assets/assets/videos/DehnungHwsHinten.mp4": "d2887e62fa51dacd2406a64fdbbf2e59",
"assets/assets/videos/DehnungHwsLinksVorne.mp4": "c7f23dcf88166df37f577aadfa81e130",
"assets/assets/videos/DehnungHwsRechtVorne.mp4": "b6548c5d6f63294bb3156bb79bfc10c4",
"assets/assets/videos/DehnungHwsVorne.mp4": "3bfa68597aff45b5f17e26cfbbfe8349",
"assets/assets/videos/DehnungImHalbliegen.mp4": "c2f3c524e06a07b02f4c76614d942cae",
"assets/assets/videos/DehnungInBauchlage.mp4": "834969ed5e43b28b98f41c2dea800073",
"assets/assets/videos/DehnungLinkeSchulter.mp4": "631616f02565ff0da1668e10d04e404b",
"assets/assets/videos/DehnungRechteSchulter.mp4": "de441acc9628dc6a2e352c435b282981",
"assets/assets/videos/DehnungRumpfUntererRL.mp4": "9238d1788edd3263b6181e1673dd47b4",
"assets/assets/videos/DehnungRumpfUntererRR.mp4": "2e2b5ccdec1387418ab08337a65d2b75",
"assets/assets/videos/DehnungTennisarmRechts.mp4": "b7c6e5acf4aa52c12c3365a8feb6b31a",
"assets/assets/videos/DehnungUnterarme.mp4": "f771d063f2519bf1562eb6e6cf6ef705",
"assets/assets/videos/DehungRueckenfastzien.mp4": "b5fcae875d9c8cbbe8aa8cf6a36075cf",
"assets/assets/videos/DehungTennisarmLinks.mp4": "e916b79fc7c26b1030ea25a9add654a7",
"assets/assets/videos/DrehungImStehen.mp4": "700f89fd460b0b20a3e82e4bb0b98805",
"assets/assets/videos/einbeinkniebeugeL.mp4": "2d3273d262df7b89a9585bd4270e0c08",
"assets/assets/videos/einbeinkniebeugeR.mp4": "0358c9a5ed54ee0513c8e90913a0de5a",
"assets/assets/videos/EinbeinstandL.mp4": "a0231826b28696f33888b3df532562a7",
"assets/assets/videos/EinbeinstandR.mp4": "d3929513126efec7be1701fd39164836",
"assets/assets/videos/EinbeinstandRechts.mp4": "037f9a87b550bc1bf4cbb00d7433c8c1",
"assets/assets/videos/EllenbogenBeugenStrecken.mp4": "f8c6d423ea37464a9b6e0ab9e00ed115",
"assets/assets/videos/Ellenbogenhochziehen.mp4": "e63e62488ac7d8da832481780eaa8abf",
"assets/assets/videos/EntlastungLWS.mp4": "76d9b5120943eb187baa47adbb35710b",
"assets/assets/videos/entlastunglws2.mp4": "315567e534e8439b91d4f99867ae85ce",
"assets/assets/videos/ErleichtertePlank.mp4": "2bea7ec942849015821e4ddcb8cf57c7",
"assets/assets/videos/Fersenanschlag.mp4": "9ea7ee9934dbc2d5ee91452052fa0e70",
"assets/assets/videos/fiktiveKlimzuege.mp4": "859aa7b19339985d89513167e101d562",
"assets/assets/videos/Fliegen.mp4": "cf878720b82e54c342abe9c147a8e503",
"assets/assets/videos/funktarmkraeftigung.mp4": "392ad69ca19a2f02e84e35f6445a70e2",
"assets/assets/videos/Golfschwung.mp4": "23962c6930f3872992e288ba109ef778",
"assets/assets/videos/HalbkreiseNackenLinks.mp4": "a378658ce9e637d0cdd0d86e1bffbfa5",
"assets/assets/videos/HalbkreiseRechts.mp4": "3b1e27405b367a454494ba11135bfe94",
"assets/assets/videos/Halbkreisnackenlinks.mp4": "1c82026d6fe0117e788f74197a43f4e6",
"assets/assets/videos/HalbkreisNackenrechts.mp4": "cc855535523e75aa49c6515542828d4b",
"assets/assets/videos/Hampelmann.mp4": "3449412d3255de514ad5de75062f6911",
"assets/assets/videos/HandgelenkDehnungObenLinks.mp4": "cc21ab3cb892218b311bc06bfabc6ea1",
"assets/assets/videos/HandgelenkDehnungObenRechts.mp4": "26ecea240cb450bfe830dd2019d28b55",
"assets/assets/videos/HandgelenkDehnungUntenLinks.mp4": "802948dcb15480c0e30ebeec18d49b6f",
"assets/assets/videos/HandgelenkDehnungUntenRechts.mp4": "127441c4a4a4c0da0f044c40ed82f16d",
"assets/assets/videos/HandgelenkeMobilisieren.mp4": "48c15acb45f06aa04dcffcda8b98d7b5",
"assets/assets/videos/HandgelenkFlexionLinks.mp4": "6ae54b210e0e65c6f9e783a212297880",
"assets/assets/videos/HandgelenkFlexionRechts.mp4": "e7ef87fc9b74830bd9c5ba3fae1d8eaa",
"assets/assets/videos/HebenSenken.mp4": "836852bb703761e18bc45e9cd09e812c",
"assets/assets/videos/Holzhacker.mp4": "5952f6524e8cb56649b26533f5a9d570",
"assets/assets/videos/HolzhackerDiago.mp4": "392bfc713c2fb3f268c8d40b926b475f",
"assets/assets/videos/HueftbeugerLinks.mp4": "0bf32799b592750790eaa01933788227",
"assets/assets/videos/HueftbeugerRechts.mp4": "89da0cc1131fc50b1ebd9061900fc2d3",
"assets/assets/videos/HueftkreisenLinks.mp4": "7d562da1c602dc831a1ca4c9380b6fe6",
"assets/assets/videos/HueftkreisenRechts.mp4": "3ac8e801258ecf23ebe7b7a1b1f1d69c",
"assets/assets/videos/ISG-Mobilisieren.mp4": "bfd697e6c504612ab83ce4357fe731af",
"assets/assets/videos/ISGLinks.mp4": "805ebb9b0b6cfb84caf4b18a11cabeb2",
"assets/assets/videos/ISGOeffnen.mp4": "b9baf4d3431abdbc3d23561702330fdc",
"assets/assets/videos/ISGRechts.mp4": "54eee337a08ec9f4b653766f2f51d91a",
"assets/assets/videos/Kaktus.mp4": "a05cdc4eb4c352ef6f8d56039b2609df",
"assets/assets/videos/KatzenKuhDehnung.mp4": "b7c3892b4940d8d3c96336ae8863131c",
"assets/assets/videos/Kinderstellung.mp4": "3408971f21df69de6dcee7917a5b349e",
"assets/assets/videos/Kniebeugen.mp4": "75cafc9ff145639dc710ecb8a859235b",
"assets/assets/videos/KniebeugungStuhl.mp4": "21d3e215529519475e3021f00f42b499",
"assets/assets/videos/KnieeVorneHoch.mp4": "ba16008801c7d640d8e4609fec4c3ef0",
"assets/assets/videos/Kobradehnung.mp4": "24f0b70dbb68b8b29b1742d42e01f4aa",
"assets/assets/videos/kraeftigungHuefteEinbeinL.mp4": "3c658bca512388fb856fcb34d2dcf092",
"assets/assets/videos/kraeftigungHuefteEinbeinR.mp4": "8472bdf3563ab611119b218940917cea",
"assets/assets/videos/KraeftigungRotatoren.mp4": "15624052f1166c8372797ecc064f90cf",
"assets/assets/videos/KraeftigungRueckenUndBauch.mp4": "9bd4c445ad280db71c1afd1e95e69536",
"assets/assets/videos/KraeftigungUntererRuecken.mp4": "3e8db565720dd231b3b1e2cf45412719",
"assets/assets/videos/kraeftigungVierfue%25C3%259FlerstandS.mp4": "26d23bd57afed1c87cf47c30fac783ba",
"assets/assets/videos/KraeftigungWaden.mp4": "a2137094a54cbe0789d1ba6a31812c81",
"assets/assets/videos/KraeRueckenlage.mp4": "07ae815cb754d538e54a05f6755f6015",
"assets/assets/videos/KreissaegeMitHaenden.mp4": "92661d5534232519847528b3ded57bd1",
"assets/assets/videos/KrSprunggelenkL.mp4": "b2c5519e85cd4c5ba51b9e508712b7e9",
"assets/assets/videos/KrSprunggelenkR.mp4": "ff2db5f1b0107c7402f199a39baa904e",
"assets/assets/videos/LeistendehnungL.mp4": "d3cb856536d3e93340b1cc50f1a95d50",
"assets/assets/videos/LeistendehnungR.mp4": "d18f62360b90b8240d40f56450266f8b",
"assets/assets/videos/LendenwirbeldehnungR.mp4": "489def039d21074ebccf8e54265d97df",
"assets/assets/videos/LendernwirbeldehnungL.mp4": "64c9779800bbf744fae5edd0272ce714",
"assets/assets/videos/MobilisationBurstLWSL.mp4": "9f3f03433de990f825d587e3d876f41c",
"assets/assets/videos/MobilisationBurstLWSR.mp4": "4fde1c4874eab312c9c1a96161a96869",
"assets/assets/videos/MobilisationElleLinks.mp4": "548aed9050cff90412c7a46d3ddc1908",
"assets/assets/videos/MobilisationElleRechts.mp4": "f15663f61fea77f75f5b43d27af79a5e",
"assets/assets/videos/MobilisationHuefteL.mp4": "b81f008d10e065e666b694faf3b61dbf",
"assets/assets/videos/MobilisationSchulterguertel.mp4": "1d86d835fa901017a1ae2d1ee56ab64f",
"assets/assets/videos/MobilisationSpeicheLinks.mp4": "b4a2854972f066660ff02add1713e16b",
"assets/assets/videos/MobilisationSpeicheRechts.mp4": "a85ec7ae76b8d69f3f50c7e516e52055",
"assets/assets/videos/MORuecken.mp4": "78d722fc459664e7bb20c2b926ecf570",
"assets/assets/videos/MSprunglelenkLinks.mp4": "91bb6294adc78690d0927da27fdf3bbf",
"assets/assets/videos/MSprunglelenkRechts.mp4": "11a2eb7f9e9a6da239b816fd8cd0aeab",
"assets/assets/videos/NackenDruecken.mp4": "e9709823a73a464bbc1e5b8113d5ed16",
"assets/assets/videos/NackenLinksHinten.mp4": "55a42f23417a583670467cb326f886be",
"assets/assets/videos/NackenRechtsHinten.mp4": "ad61416442d72e66e9be148b7d74c10c",
"assets/assets/videos/NackenSeitlNeig.mp4": "23e8f587cec54949eb172c551f7a126c",
"assets/assets/videos/OberschenkeldehnungL.mp4": "5e74732328e789c18d8ac5f54f9b9d78",
"assets/assets/videos/OberschenkeldehnungR.mp4": "8bbd4dd6e1ccbca09bedee61182feeee",
"assets/assets/videos/OeffnenBWS.mp4": "2ae6af88eb6185e5c459036d1519f0d2",
"assets/assets/videos/Paddeln.mp4": "590b207b7cc97db58ea01d0c62ae5d2a",
"assets/assets/videos/piriformisDehnungR.mp4": "e0f7f438aba10274ee8c08028290bbe7",
"assets/assets/videos/piriformisDehungL.mp4": "378a3d27b1551d7b710f3443f3b6f52d",
"assets/assets/videos/Plumpsen.mp4": "bbcd84797ae9c29b24ff0cf6788672ac",
"assets/assets/videos/Plumpsenrechtslinks.mp4": "5add7e205e39104b7c33381ed7e6b727",
"assets/assets/videos/PoBruecke.mp4": "3308d089fb2216afde425d625a8b48e2",
"assets/assets/videos/priformisR.mp4": "85324269e4ae02d54f6b76e6ac9fd0e2",
"assets/assets/videos/pririformisL.mp4": "5d0a857a04cb6b9351cd84e10a7cd1b8",
"assets/assets/videos/QuadrizepsLinks.mp4": "29f0d967fc3bb0610ede8a931d0ff5ea",
"assets/assets/videos/QuadrizepsRechts.mp4": "4f2dd42d936befbab309bca08c74bb91",
"assets/assets/videos/RotationLinksRechts.mp4": "af261e033ab81788d26701d726285f56",
"assets/assets/videos/RotationMitte.mp4": "3965d68afbdecb246cd651356afcfc0d",
"assets/assets/videos/RotationOben.mp4": "5a13c62b6cfc045c576f1b2d81a20b04",
"assets/assets/videos/RotationOberkoerper.mp4": "8226bec740d886a6ad2755f6746421e8",
"assets/assets/videos/RotationUnten.mp4": "5042142ead513f4c0beae495404e642a",
"assets/assets/videos/RuderuebungMitTheraband.mp4": "836634f4ecdcb40b492d957332c5754c",
"assets/assets/videos/Rueckenstrecker.mp4": "e9187ae10ff03861c892b4fad5250ab2",
"assets/assets/videos/RueckenstreckerBoden.mp4": "7be25265c3c88be742ae2d40cd0bb2fc",
"assets/assets/videos/rueckenstreckerEinbeinL.mp4": "134c3ec99b1e81a9442c9bf81d7c08da",
"assets/assets/videos/rueckenstreckerEinbeinR.mp4": "46364044ff38c57f8674bb803fa8e7c2",
"assets/assets/videos/RumpfkraeftigungL.mp4": "3d8086ec1fea2a5b1f92724cfbfd9632",
"assets/assets/videos/RumpfkraeftigungR.mp4": "a880d306a68cca9ffb36e0dc4c4f4440",
"assets/assets/videos/RussischeDrehung.mp4": "e19e5e7059d407c5e7364e16cfc969fd",
"assets/assets/videos/SBauchmuskeln.mp4": "3063845860e16966b7feba30c3664aa7",
"assets/assets/videos/Schere.mp4": "bec50096a2160d0b67c1f920054057a1",
"assets/assets/videos/SchGroesser.mp4": "18056326d2762123a1d08b0b46e46e6a",
"assets/assets/videos/Schulterblattkreisen.mp4": "58fad61bec1a23547b171d0ae86b887d",
"assets/assets/videos/Schulterdehnung45.mp4": "c76e83bad768ef7cfa71a5f433a77eb5",
"assets/assets/videos/Schulterdehnung90.mp4": "2f376cc9d861b1ffaa5d779e141b0864",
"assets/assets/videos/SchulterguertelLockern.mp4": "bae7b1a2be4a22ada10dd9cb85ec3c4a",
"assets/assets/videos/SchulterkraeftigungStehen.mp4": "393b99516713a556608d23f054f9e2c1",
"assets/assets/videos/Schulterkreiseln.mp4": "c718e43f6d35d93cc751801ad65e7707",
"assets/assets/videos/SchulterkreisenHinten.mp4": "918ae957d720de3f36150fda79a433e6",
"assets/assets/videos/SchulterkreisenVorne.mp4": "5baceecd99cc98849760e2bd2a094c6b",
"assets/assets/videos/Schulterlockerung.mp4": "de6fa8aca1f4743faf2de57e495e7a25",
"assets/assets/videos/SchulternHochziehen.mp4": "65df9c62618bcb25627bf7c84d2ccea6",
"assets/assets/videos/SchulterpendelnLinks.mp4": "26953345062efa05cd2c644658bc479a",
"assets/assets/videos/SchulterpendelnRechts.mp4": "c7c7a371cdb366cfdbaefa91dec1f9e8",
"assets/assets/videos/schuterblattkreisen.mp4": "ef67954fd5e39b501220779269afa62a",
"assets/assets/videos/seitlicheDehnungmRechts.mp4": "f22b1f9dbea26d699c78b6b819ba94c9",
"assets/assets/videos/SeitlicheRDehnungL.mp4": "37338245c342f37c1239bdc20f01311a",
"assets/assets/videos/SeitlicheRDehnungR.mp4": "205a05e6a86badeb141465cbdaab1f2c",
"assets/assets/videos/SeitlicherLiegestuetzL.mp4": "46486760625a422145a37fcf6af74896",
"assets/assets/videos/SeitlicherLiegestuetzR.mp4": "22dff9bc9e55dde278d6bcfc910e85a4",
"assets/assets/videos/SeitlicheRumpfDehnugL.mp4": "25b5377a5720d51b5b56b2e1ab662465",
"assets/assets/videos/SeitlicheRumpfDehnugLinks.mp4": "59f28a25c2e6983f1cfb2757846d89fc",
"assets/assets/videos/SeitlicheRumpfDehnugR.mp4": "8a0844a4f417c6d4157c3650e6fb4ce6",
"assets/assets/videos/SeitlicheRumpfDehnugRechts.mp4": "a8e80b48387e8dea7cbb0b7e66b9980f",
"assets/assets/videos/SitUps.mp4": "b94bb564262fb0940989784f5973dfc2",
"assets/assets/videos/SPlankLinks.mp4": "984ef2f03369c25a79b5fcc685c94027",
"assets/assets/videos/SPlankRechts.mp4": "8b2becc7a81564343867d2b91fded965",
"assets/assets/videos/SprunggelenkLinks.mp4": "12f1f2a8fa1f07d4c58eb5870979ec34",
"assets/assets/videos/SprunggelenkRechts.mp4": "f662ca62cde52913a68fdd8a3e60fd51",
"assets/assets/videos/StaerkungUNRuecken.mp4": "6b3ebd709c8b59f0afe4c25e76cbdffa",
"assets/assets/videos/StaerkungURuecke.mp4": "37881c190cfd331b3e39b592c3a4a15c",
"assets/assets/videos/ThorakaleDenungLinks.mp4": "c89664cf775309f9615fdbb78705ccbc",
"assets/assets/videos/ThorakaleDenungRechts.mp4": "abf13a5ffab79a3152f0270c13dfb57b",
"assets/assets/videos/TorisionsbewegungL.mp4": "446096345074cb3ee7df3dbeaad8af7e",
"assets/assets/videos/TorisionsbewegungR.mp4": "732101f45a11093e250256b513a9e886",
"assets/assets/videos/TrapezMuskulaturL.mp4": "9a563aa1c6d0eb8326e3d9788b89e0aa",
"assets/assets/videos/TrapezMuskulaturR.mp4": "775c98689f02304211d9cf9c7dc34478",
"assets/assets/videos/TrizepsDehnungLinks%2520.mp4": "eddf52e997bdf17cf59b689acad5f8ee",
"assets/assets/videos/TrizepsDehnungRechts.mp4": "a46bc523509e57d1367e356bca51fa97",
"assets/assets/videos/TrizepsDipsImLiegen.mp4": "077572ffb962d8df1973d96f76f0543c",
"assets/assets/videos/Unteramstuetz.mp4": "65fa98a635c0d1db5b4bf063a9f00d5b",
"assets/assets/videos/UnterarmLinks.mp4": "6201dfdcb5e8689d35c71adfefb24e0f",
"assets/assets/videos/UnterarmLinksWand.mp4": "f9a5761f140ee62898033168c35e3b1b",
"assets/assets/videos/UnterarmRechts.mp4": "0e9c34193dcbcf48dd34442c40eb3de6",
"assets/assets/videos/UnterarmRechtsWand.mp4": "e9fd542fd2a37c0f932037a5a601967f",
"assets/assets/videos/untererRueckenL.mp4": "7bebf16edb00d752760b530b01b79d40",
"assets/assets/videos/untererRueckenR.mp4": "76e1decb61ab344ed10a0f6a24266947",
"assets/assets/videos/UnterschenkelLinks.mp4": "97e9e2421a01434c23d7de01bdb232f0",
"assets/assets/videos/UnterschenkelRechts.mp4": "863b954f377af6d39acd2cd0ae1c2dd9",
"assets/assets/videos/verLiegestuetzRueckwaerts.mp4": "7995b9d137e1fae299f4b8d803192c3a",
"assets/assets/videos/verLiegestuetzVorwaerts.mp4": "26eccf9f8304c55fc91e94141a72b01f",
"assets/assets/videos/VerschrMobilisation.mp4": "b16a0e40c702dcf09b8869044454c37c",
"assets/assets/videos/Vierfuesslerstand.mp4": "fb16d8453576cb9391aa893d5fa26dba",
"assets/assets/videos/VorderesSchulterheben.mp4": "5918e48233bfaef1dcb7469e0824e771",
"assets/assets/videos/WadenmuskulaturLinks.mp4": "2f79eb30134ca218f8e35e7043877f43",
"assets/assets/videos/WadenmuskulaturRechts.mp4": "5a2eeed8abe2ff359ac18cd1b25a44b1",
"assets/assets/videos/WindmuehleHinten.mp4": "951976d502fae3bbb992673012fc52fe",
"assets/assets/videos/WindmuehleVorne.mp4": "b50c85631ffec455a7b0b926db445503",
"assets/assets/videos/Zusammenrollen.mp4": "a96aaca37cf7349302ca0dea4a209264",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "7618f95fd7fff566f1c6dcb00dffa178",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "f29ce259449210c0021d70650097873a",
"canvaskit/canvaskit.wasm": "b821477188b1836443bcc911e4ab6e63",
"canvaskit/chromium/canvaskit.js": "a4552398e7eb819f30a495bad7fef865",
"canvaskit/chromium/canvaskit.wasm": "2adf05d96ca1f771bb50754f60216d18",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "8b6d925f0d0b8d0e2fe245f3c65b17cf",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4da4a860a0d6b2edbef6cb995adca5a",
"/": "b4da4a860a0d6b2edbef6cb995adca5a",
"main.dart.js": "0c9bf463e59459f81a62354c26c0fd05",
"manifest.json": "557ca78607ddb0a2beca3890c699252c",
"version.json": "f429bd03bdfabebaf7e5586a4fc9c578"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
