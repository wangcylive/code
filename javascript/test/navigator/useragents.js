var UserAgents = (function () {
    var p = "Samsung", i = "Sharp", c = "Sony Ericsson", m = "Motorola", b = "LG", d = "Lenovo", h = "Huawei", q = "HTC";
    var s = {SAMSUNG: {"GT-S3650": [p, "Corby"], "GT-S3850": [p, "Corby II"], "GT-S5230": [p, "Star"], "GT-S5260": [p, "Star II"], "GT-S5560": [p, "Marvel"], "GT-S5620": [p, "Monte"], "GT-S7550": [p, "Blue Earth"], "GT-S8000": [p, "Jet"], "SGH-F480": [p, "Tocco"], "SGH-T528g": [p, "Straight Talk"], "GT-B3410": [p, "Star Qwerty"], "GT-B5310": [p, "Corby Pro"], "GT-B7722": [p, "Star Duos"]}};
    var e = {SAMSUNG: {"GT- S5250": [p, "Wave 525"], "GT-S5250": [p, "Wave 525"], "GT-S5253": [p, "Wave 525"], "GT-S5330": [p, "Wave 533"], "GT-S5380": [p, "Wave Y"], "GT-S5380D": [p, "Wave Y"], "GT-S5750E": [p, "Wave 575"], "GT-S7230B": [p, "Wave 723"], "GT-S7230E": [p, "Wave 723"], "GT-S7233E": [p, "Wave 723"], "GT-S7250": [p, "Wave M"], "GT-S8500": [p, "Wave"], "GT-S8500C": [p, "Wave"], "GT-S8500R": [p, "Wave"], "GT-S8500T": [p, "Wave"], "GT-S8530": [p, "Wave II"], "GT-S8600": [p, "Wave 3"]}};
    var l = {SAMSUNG: {"GT-I9500": [p, "Galaxy S III"]}};
    var r = {CoolPadF800: ["Coolpad", "F800"], "HD mini T5555": [q, "HD mini"], "HTC HD2 T8585": [q, "HD2"], "HTC Touch2 T3335": [q, "Touch 2"], "HTC TyTN II": [q, "TyTN II"], "GT-B7300": [p, "Omnia Lite"], "GT-B7610": [p, "Omnia Pro"], "GT-i8000": [p, "Omnia 2"], "GT-I8000": [p, "Omnia 2"], "GT-I8000U": [p, "Omnia 2"], M1i: [c, "M1i Aspen"]};
    var o = {Microsoft: {XDeviceEmulator: ["", "Emulator"]}, Acer: {Allegro: ["Acer", "Allegro"]}, Asus: {Galaxy6: ["Asus", "Galaxy 6"]}, DELL: {"Venue Pro": ["Dell", "Venue Pro"]}, FujitsuToshibaMobileCommun: {IS12T: ["Fujitsu Toshiba", "IS12T"]}, HTC: {"7 Mozart": [q, "7 Mozart"], "7 Mozart T8698": [q, "7 Mozart"], T8697: [q, "7 Mozart"], HD2: [q, "HD2"], "HD7 T9292": [q, "HD7"], T9295: [q, "HD7"], "7 Pro T7576": [q, "7 Pro"], mwp6985: [q, "Trophy"], "7 Trophy T8686": [q, "Trophy"], "7 Trophy": [q, "Trophy"], Radar: [q, "Radar"], "Radar 4G": [q, "Radar"], "Radar C110e": [q, "Radar"], Mazaa: [q, "Mazaa"], Mondrian: [q, "Mondrian"], Schubert: [q, "Schubert"], Spark: [q, "Spark"], T8788: [q, "Surround"], "TITAN X310e": [q, "Titan"], PI39100: [q, "Titan"], Ultimate: [q, "Ultimate"]}, LG: {GW910: [b, "Optimus 7"], "LG-E900": [b, "Optimus 7 E900"], "LG-E900h": [b, "Optimus 7 E900"], GW910: [b, "GW910"], "LG-C900": [b, "Optimus 7Q"], "LG-C900k": [b, "Quantum"]}, NOKIA: {"Lumia 710": ["Nokia", "Lumia 710"], "Lumia 719": ["Nokia", "Lumia 719"], "Lumia 800": ["Nokia", "Lumia 800"], SeaRay: ["Nokia", "Lumia 800"], "800": ["Nokia", "Lumia 800"], "Lumia 900": ["Nokia", "Lumia 900"]}, SAMSUNG: {"GT-I8350": [p, "Omnia W"], "SGH-i677": [p, "Focus Flash"], "SGH-i707": [p, "Taylor"], "SGH-i917": [p, "Omnia 7"], "SGH-I917": [p, "Omnia 7"], "SGH-i917.": [p, "Focus"], "SGH-i917R": [p, "Focus"], "SGH-i937": [p, "Focus S"], OMNIA7: [p, "Omnia 7"], Taylor: [p, "Taylor"]}, TOSHIBA: {TSUNAGI: ["Toshiba", "Tsunagi"]}};
    var j = {A100: ["Acer", "Iconia Tab A100", "tablet"], A200: ["Acer", "Iconia Tab A200", "tablet"], A500: ["Acer", "Iconia Tab A500", "tablet"], "Acer Iconia A500": ["Acer", "Iconia Tab A500", "tablet"], A501: ["Acer", "Iconia Tab A501", "tablet"], E120: ["Acer", "E120"], E310: ["Acer", "Liquid Mini"], "Liquid MT": ["Acer", "Liquid MT"], Liquid: ["Acer", "Liquid"], Stream: ["Acer", "Stream"], N700: ["aigo", "N700", "tablet"], M801: ["aigo", "M801", "tablet"], Novo7Basic: ["Ainol", "Novo7 Basic", "tablet"], Novo7Advanced: ["Ainol", "Novo7 Advanced", "tablet"], NOVO7PALADIN: ["Ainol", "Novo7 Paladin", "tablet"], "Ainol Novo8 Advanced": ["Ainol", "Novo8 Advanced", "tablet"], "one touch 906": ["Alcatel", "One Touch 906"], "Alcatel OT-980": ["Alcatel", "One Touch 980"], "Telenor OneTouch": ["Alcatel", "One Touch 990"], "ALCATEL one touch 990A": ["Alcatel", "One Touch 990"], "Kindle Fire": ["Amazon", "Kindle Fire", "tablet"], A80KSC: ["Archos", "Arnova 8", "tablet"], AN7CG2: ["Archos", "Arnova 7", "tablet"], A101B: ["Archos", "Arnova 10", "tablet"], Archos5: ["Archos", "5", "tablet"], A70HB: ["Archos", "7", "tablet"], A70BHT: ["Archos", "7", "tablet"], A70CHT: ["Archos", "7C", "tablet"], A70S: ["Archos", "70", "tablet"], "ARCHOS 80G9": ["Archos", "80 G9", "tablet"], "ARCHOS 101G9": ["Archos", "101 G9", "tablet"], A101IT: ["Archos", "101 IT", "tablet"], eeepc: ["Asus", "Eee Pc"], "asus laptop": ["Asus", "Eee Pc"], "Transformer TF101": ["Asus", "Eee Pad Transformer", "tablet"], "Transformer TF101G": ["Asus", "Eee Pad Transformer", "tablet"], TF201: ["Asus", "Eee Pad Transformer Prime", "tablet"], "Transformer Prime TF201": ["Asus", "Eee Pad Transformer Prime", "tablet"], NookColor: ["Barnes & Noble", "NOOK Color", "tablet"], "NOOK BNRV200": ["Barnes & Noble", "NOOK Color", "tablet"], "NOOK BNTV250": ["Barnes & Noble", "NOOK Tablet", "tablet"], BNTV250: ["Barnes & Noble", "NOOK Tablet", "tablet"], BM999: ["Bmorn", "BM999", "tablet"], bcm7425: ["Broadcom", "BCM7425 mediaplayer"], CT1002: ["Carrefour", "CT1002", "tablet"], IS11CA: ["Casio", "GzOne IS11CA"], "CSL-MI410": ["CSL", "Spice MI410"], MID7012: ["Coby", "Kyros MID7012", "tablet"], MID7024: ["Coby", "Kyros MID7024", "tablet"], MID7025: ["Coby", "Kyros MID7025", "tablet"], MID7127: ["Coby", "Kyros MID7127", "tablet"], MID8024: ["Coby", "Kyros MID8024", "tablet"], MID8125: ["Coby", "Kyros MID8125", "tablet"], Z71: ["Commtiva", "Z71", "tablet"], D530: ["Coolpad", "D530", "tablet"], "Coolpad W706": ["Coolpad", "W706", "tablet"], W711: ["Coolpad", "W711", "tablet"], "5860": ["Coolpad", "5860", "tablet"], CoolPad8810: ["Coolpad", "8810", "tablet"], CoolPad8811: ["Coolpad", "8811", "tablet"], "ZiiLABS ZiiO10 ": ["Creative", "ZiiO 10", "tablet"], "CUBE K8GT_A": ["Cube", "K8GT A"], "CUBE K8GT H": ["Cube", "K8GT H"], "CUBE U8GT": ["Cube", "U8GT"], "CUBE U9GT 2": ["Cube", "U9GT 2"], "U9GT S": ["Cube", "U9GT S"], "Dell Streak": ["Dell", "Streak"], "001DL": ["Dell", "Streak"], "Dell Streak Pro": ["Dell", "Streak Pro"], "Dell Streak 7": ["Dell", "Streak 7"], "Dell Streak 10 Pro": ["Dell", "Streak 10 Pro"], "Dell V04B": ["Dell", "Streak V04B"], XCD35: ["Dell", "XCD35"], iDx7: ["Digma", "iDx7", "tablet"], iDx10: ["Digma", "iDx10", "tablet"], DM009SH: ["Disney Mobile", "DM009SH"], "Tablet-P27": ["DracoTek", "P27 Tablet", "tablet"], ISW11F: ["Fujitsu", "Arrows Z"], "F-01D": ["Fujitsu", "Arrows Tab"], "F-03D": ["Fujitsu", "Arrows Kiss"], "F-05D": ["Fujitsu", "Arrows Z LTE"], "F-07D": ["Fujitsu", "Arrows μ"], "F-12C": ["Fujitsu", "Globetrotter"], Garminfone: ["Garmin-Asus", "Garminfone"], "Garmin-Asus A10": ["Garmin-Asus", "Nuvifone A10"], "Geeksphone ZERO": ["Geeksphone", "ZERO"], "Nexus One": ["Google", "Nexus One"], "HTC Nexus One": ["Google", "Nexus One"], "Nexus S": ["Google", "Nexus S"], "Google Nexus S": ["Google", "Nexus S"], "Nexus S 4G": ["Google", "Nexus S 4G"], "Dooderbutt-4.0.3-v1": ["Google", "Nexus S 4G"], SN10T2: ["HANNspree", "HANNSpad SN10T2", "tablet"], "HS-U8": ["Hisense", "U8"], Touchpad: ["HP", "TouchPad", "tablet"], "HP Touchpad": ["HP", "TouchPad", "tablet"], "cm tenderloin": ["HP", "TouchPad", "tablet"], "HTC Amaze 4G": [q, "Amaze 4G"], "HTC Aria A6380": [q, "Aria"], "HTC ChaCha A810e": [q, "ChaCha"], "HTC click": [q, "Click"], "HTC Desire": [q, "Desire"], "HTC Desire A8181": [q, "Desire"], "HTC Desire A8183": [q, "Desire"], "HTC Desire Beats A8181": [q, "Desire"], "HTC DesireHD": [q, "Desire HD"], "HTC DesireHD A9191": [q, "Desire HD"], "HTC Desire HD A9191": [q, "Desire HD"], "HTC A9191": [q, "Desire HD"], "HTC A9192": [q, "Desire HD"], "HTC Desire HD": [q, "Desire HD"], "HTC Desire HD with Beats Audio": [q, "Desire HD"], "HTC Desire S": [q, "Desire S"], "HTC DesireS": [q, "Desire S"], "HTC DesireS S510e": [q, "Desire S"], "HTC DesireS S510b": [q, "Desire S"], "HTC Desire Z": [q, "Desire Z"], "HTC DesireZ A7272": [q, "Desire Z"], "HTC Dream": [q, "Dream"], "HTC S710d": [q, "Droid Incredible 2"], "HTC EVA UL": [q, "Eva"], "HTC X515m": [q, "EVO 3D"], "HTC Evo 3D": [q, "EVO 3D"], "HTC EVO 3D GSM": [q, "EVO 3D"], "HTC EVO 3D X515m": [q, "EVO 3D"], "HTC EVO3D X515a": [q, "EVO 3D"], "HTC EVO3D X515m": [q, "EVO 3D"], "HTC X515E": [q, "EVO 4G+"], "HTC Explorer": [q, "Explorer"], "HTC Explorer A310e": [q, "Explorer"], "HTC Flyer P510e": [q, "Flyer"], "HTC Flyer P512": [q, "Flyer"], "HTC Glacier": [q, "Glacier"], "HTC Gratia A6380": [q, "Gratia"], "HTC HD": [q, "HD"], "HTC HD2": [q, "HD2"], "HTC HD2 T8585": [q, "HD2"], "HTC Hero": [q, "Hero"], "HTC HERO200": [q, "Hero 200"], "HTC PH39100": [q, "Holiday"], "HTC Holiday": [q, "Holiday"], "HTC Incredible S": [q, "Incredible S"], "HTC IncredibleS S710e": [q, "Incredible S"], "HTC Legend": [q, "Legend"], "HTC Liberty A6380": [q, "Liberty"], "HTC Magic": [q, "Magic"], "HTC Panache": [q, "Panache"], "HTC Pyramid": [q, "Pyramid"], "HTC X710a": [q, "Raider 4G"], "HTC Raider X710e": [q, "Raider 4G"], "HTC Raider 4G X710e": [q, "Raider 4G"], "HTC Rhyme S510b": [q, "Rhyme"], "HTC Runnymede": [q, "Runnymede"], "HTC Salsa C510e": [q, "Salsa"], "HTC C510e": [q, "Salsa"], "HTC Sapphire": [q, "Sapphire"], "HTC Z710e": [q, "Sensation"], "HTC Z710t": [q, "Sensation"], "HTC Sensation": [q, "Sensation"], "HTC Sensation Z710a": [q, "Sensation"], "HTC Sensation Z710e": [q, "Sensation"], "HTC Sensation Z710E": [q, "Sensation"], "HTC Sensation Z715e": [q, "Sensation XE"], "HTC Sensation 4G": [q, "Sensation 4G"], "HTC Z715e": [q, "Sensation XE"], "HTC Sensation Z710e with Beats Audio": [q, "Sensation"], "HTC SensationXE Beats Z715e": [q, "Sensation XE"], "HTC Sensation XE with Beats Audio": [q, "Sensation XE"], "HTC Sensation XE with Beats Audio Z715e": [q, "Sensation XE"], "HTC SensationXL Beats X315e": [q, "Sensation XL"], "HTC Sensation XL with Beats Audio X315e": [q, "Sensation XL"], "HTC Tattoo": [q, "Tattoo"], "HTC T7373": [q, "Touch Pro II"], "HTC ThunderBolt": [q, "ThunderBolt"], "HTC Vision": [q, "Vision"], "HTC Vivo": [q, "Vivo"], "HTC Wildfire": [q, "Wildfire"], "HTC Wildfire A3333": [q, "Wildfire"], "HTC WildfireS": [q, "Wildfire S"], "HTC Wildfire S": [q, "Wildfire S"], "HTC Wildfire S A510e": [q, "Wildfire S"], "HTC WildfireS A510e": [q, "Wildfire S"], "HTC A510e": [q, "Wildfire S"], "HTC A510a": [q, "Wildfire S"], HTCX06HT: [q, "Desire"], Click: [q, "Click"], "Desire A8181": [q, "Desire"], "Desire HD": [q, "Desire HD"], "Desire S": [q, "Desire S"], Dream: [q, "Dream"], "EVO 4G": [q, "EVO 4G"], Hero: [q, "Hero"], HERO200: [q, "Hero 200"], "Incredible S": [q, "Incredible S"], "Inspire 4G": [q, "Inspire 4G"], Legend: [q, "Legend"], Liberty: [q, "Liberty"], NexusHD2: [q, "HD2"], "Docomo HT-03A": [q, "Magic"], "MIUI.us Sensation 4G": [q, "Sensation 4G"], "SiRF Dream": [q, "Dream"], Sensation: [q, "Sensation"], "Sensation Z710e": [q, "Sensation"], "Sensation 4G": [q, "Sensation 4G"], "SensationXE Beats Z715e": [q, "Sensation XE"], "SensationXL Beats X315e": [q, "Sensation XL"], "Sprint APX515CKT": [q, "EVO 3D"], "Sprint APA9292KT": [q, "EVO 4G"], "Sprint APA7373KT": [q, "EVO Shift 4G"], "Sprint APC715CKT": [q, "EVO Design 4G"], A6277: [q, "Hero"], X06HT: [q, "Desire"], "001HT": [q, "Desire HD"], ADR6300: [q, "Droid Incredible"], ADR6350: [q, "Droid Incredible 2"], ADR6400L: [q, "Thunderbolt 4G"], "ADR6400L 4G": [q, "Thunderbolt 4G"], ADR6425LVW: [q, "Vigor"], "ADR6425LVW 4G": [q, "Rezound 4G"], PG06100: [q, "EVO Shift 4G"], PG41200: [q, "EVO View 4G"], PG86100: [q, "EVO 3D"], PG8610000: [q, "EVO 3D"], PC36100: [q, "EVO 4G"], ISW11HT: [q, "EVO WiMax"], ISW12HT: [q, "EVO 3D"], M860: [h, "M860"], "HUAWEI-M860": [h, "M860"], M865: [h, "M865"], C8150: [h, "IDEOS"], Ideos: [h, "IDEOS"], C8500: [h, "C8500"], C8500S: [h, "C8500S"], C8600: [h, "C8600"], c8650: [h, "C8650"], C8650: [h, "C8650"], U8100: [h, "U8100"], "Huawei 8100-9": [h, "U8100"], U8110: [h, "U8110"], U8120: [h, "U8120"], U8220: [h, "U8220"], U8300: [h, "U8300"], U8350: [h, "Boulder"], U8150: [h, "IDEOS"], U8180: [h, "IDEOS X1"], U8500: [h, "IDEOS X2"], U8510: [h, "IDEOS X3"], "Huawei Ideos X5 1.12.9(ret4rt)": [h, "IDEOS X5"], "IDEOS X5": [h, "IDEOS X5"], "IDEOS S7": [h, "IDEOS S7"], "IDEOS S7 Slim": [h, "IDEOS S7 Slim"], U8650: [h, "Sonic"], "Kyivstar Aqua": [h, "Sonic"], "Lucky Ultra Sonic U8650": [h, "Sonic"], U8660: [h, "U8660"], u8800: [h, "IDEOS X5"], U8800: [h, "IDEOS X5"], U8800Pro: [h, "U8800 Pro"], u8800pro: [h, "U8800 Pro"], "U8800 Pro": [h, "U8800 Pro"], U8850: [h, "Vision"], u8860: [h, "Honor"], U8860: [h, "Honor"], U9000: [h, "Ascend X"], "HUAWEI-U9000": [h, "Ascend X"], "HUAWEI MediaPad": [h, "MediaPad", "tablet"], "HUAWEI SONIC": [h, "Sonic"], "HUAWEI T8300": [h, "T8300"], "Huawei C8500": [h, "C8500"], "INFOBAR A01": ["iida", "INFOBAR A01"], AZ510: ["Intel", "AZ510"], "ILT-MX100": ["iRiver", "Tab", "tablet"], "i-mobile 3G 8500": ["i-Mobile", "3G 8500"], ISW11K: ["Kyocera", "Digno"], A2: ["KakaTech", "A2"], W606: ["K-Touch", "W606"], W700: ["K-Touch", "W700"], "ThinkPad Tablet": [d, "ThinkPad Tablet", "tablet"], K1: [d, "IdeaPad K1", "tablet"], "A1 07": [d, "LePad", "tablet"], "lepad 001n": [d, "LePad", "tablet"], "3GC101": [d, "LePhone 3GC101"], "3GW100": [d, "LePhone 3GW100"], "Lenovo 3GW100": [d, "LePhone 3GW100"], "3GW101": [d, "LePhone 3GW101"], "Lenovo 3GW101": [d, "LePhone 3GW101"], "Lenovo S1-37AH0": [d, "LePhone S1-37AH0"], "Lenovo Lenovo S1-37AH0": [d, "LePhone S1-37AH0"], "Lenovo A500": [d, "LePhone A500"], "Lenovo P70": [d, "LePhone P70"], A30t: [d, "A30t"], "Lenovo-A60": [d, "A60"], "Lenovo A60": [d, "A60"], "Lenovo A68e": [d, "A68e"], "S2005A-H": [d, "S2005A-H"], "LG-C800G": [b, "Eclypse"], "LG-E510": [b, "Optimus Hub"], "LG-E720": [b, "Optimus Chic"], "LG-E730": [b, "Optimus Sol"], "LG-F120L": [b, "LG-F120L"], "LG-GT540": [b, "Optimus"], "LG GT540 Swift": [b, "Optimus"], "LG-GW620": [b, "GW620"], "LG-LS855": [b, "Marquee"], "LG-LU3000": [b, "Optimus Mach"], "LG-LU5400": [b, "LU5400"], "LG-LU6200": [b, "Optimus Q2"], "LG-LU6500": [b, "Optimus Note"], "LG-MS910": [b, "Esteem"], "LG-MS690": [b, "Optimus M"], "LG P350": [b, "Optimus Me"], "LG-P350": [b, "Optimus Me"], "LG-P350f": [b, "Optimus Me"], "LG-P350g": [b, "Optimus Me"], "LG-P500": [b, "Optimus One"], "LG-P500h": [b, "Optimus One"], "LG-P500h-parrot": [b, "Optimus One"], "LG-P503": [b, "Optimus One"], "LG-P505R": [b, "Phoenix"], "LG-P509": [b, "Optimus T"], "LG-P698f": [b, "Optimus Net"], "LG-P700": [b, "Optimus P700"], "LG-P720": [b, "Optimus Chic"], "LG-P860": [b, "P860"], "LG-P880": [b, "X3"], "LG-P920": [b, "Optimus 3D"], "LG-P925": [b, "Thrill"], "LG-P930": [b, "Nitro HD"], "LG-P940": [b, "PRADA 3.0"], "LG-P970": [b, "Optimus Black"], "LG-P970h": [b, "Optimus Black"], "LG-P990": [b, "Optimus 2X Speed"], "LG-P993": [b, "Optimus 2X"], "LG-SU640": [b, "Optimus LTE"], "LG-SU660": [b, "Optimus 2X"], "LG-SU760": [b, "Optimus 3D"], "LG-V900": [b, "Optimus Pad", "tablet"], "LG-V905R": [b, "Optimus G-Slate", "tablet"], "LG-V909": [b, "Optimus G-Slate", "tablet"], "LG-VM670": [b, "Optimus V"], "LG-VM701": [b, "Optimus Slider"], "LG-VS700": [b, "Enlighten"], GT540: [b, "Optimus GT540"], LS670: [b, "Optimus S"], P940: [b, "PRADA 3.0"], VM670: [b, "Optimus V"], "VS910 4G": [b, "Revolution 4G"], "L-01D": [b, "Optimus LTE"], "L-02D": [b, "PRADA phone"], "L-06C": [b, "Optimus Pad", "tablet"], "L-07C": [b, "Optimus Bright"], "LG Optimus One P500": [b, "Optimus One"], "LG Optimus 2X": [b, "Optimus 2X"], Optimus: [b, "Optimus"], "Optimus Me": [b, "Optimus Me"], "Optimus 2X": [b, "Optimus 2X"], IS11LG: [b, "Optimus X"], T6: ["Malata", "Zpad T6", "tablet"], MTK6516: ["Mediatek", "MTK6516"], "LIFETAB P9514": ["Medion", "Lifetab", "tablet"], M8: ["Meizu", "M8"], M9: ["Meizu", "M9"], "meizu m9": ["Meizu", "M9"], "MEIZU MX": ["Meizu", "MX"], A853: [m, "Milestone"], A953: [m, "Milestone 2"], ET1: [m, "ET1 Enterprise Tablet", "tablet"], MB200: [m, "CLIQ"], MB300: [m, "BACKFLIP"], MB511: [m, "FLIPOUT"], MB525: [m, "DEFY"], MB526: [m, "DEFY+"], MB611: [m, "CLIQ 2"], MB855: [m, "PHOTON 4G"], MB860: [m, "ATRIX"], MB861: [m, "ATRIX MB861"], MB865: [m, "ATRIX 2"], MB886: [m, "DINARA"], ME501: [m, "CLIQ XT"], ME511: [m, "FLIPOUT"], Me525: [m, "MOTO ME525"], ME525: [m, "MOTO ME525"], ME600: [m, "BACKFLIP"], ME722: [m, "Milestone 2"], ME811: [m, "Droid X"], ME860: [m, "ATRIX"], ME865: [m, "ATRIX 2"], MT620: [m, "MOTO MT620"], MT810: [m, "MOTO MT810"], MT870: [m, "MOTO MT870"], MZ505: [m, "XOOM Family Edition", "tablet"], MZ600: [m, "XOOM 4G LTE", "tablet"], MZ601: [m, "XOOM 3G", "tablet"], MZ602: [m, "XOOM 4G LTE", "tablet"], MZ603: [m, "XOOM 3G", "tablet"], MZ604: [m, "XOOM WiFi", "tablet"], MZ605: [m, "XOOM 3G", "tablet"], MZ606: [m, "XOOM WiFi", "tablet"], MZ607: [m, "XOOM 2 WiFi Media Edition", "tablet"], MZ609: [m, "Droid XYBOARD 8.2", "tablet"], MZ615: [m, "XOOM 2 WiFi", "tablet"], MZ617: [m, "Droid XYBOARD 10.1", "tablet"], "MZ617 4G": [m, "Droid XYBOARD 10.1", "tablet"], XT300: [m, "SPICE"], XT311: [m, "FIRE"], XT316: [m, "MOTO XT316"], XT502: [m, "QUENCH XT5"], XT603: [m, "ADMIRAL"], XT701: [m, "XT701"], XT702: [m, "MOTO XT702"], XT720: [m, "Milestone"], XT800: [m, "MOTO XT800"], XT800W: [m, "MOTO Glam"], XT806: [m, "MOTO XT806"], XT860: [m, "Milestone 3"], XT862: [m, "Droid 3"], XT882: [m, "MOTO XT882"], XT910: [m, "RAZR"], XT928: [m, "XT928"], CLIQ: [m, "CLIQ"], DEFY: [m, "DEFY"], Droid: [m, "Droid"], DROID2: [m, "Droid 2"], "DROID2 GLOBAL": [m, "Droid 2"], DROID3: [m, "Droid 3"], "DROID BIONIC": [m, "Droid Bionic"], "DROID BIONIC 4G": [m, "Droid Bionic"], "DROID RAZR": [m, "Droid RAZR"], "DROID RAZR 4G": [m, "Droid RAZR"], DROIDX: [m, "Droid X"], "Droid X": [m, "Droid X"], "DROID X2": [m, "Droid X2"], "Milestone XT720": [m, "Milestone"], Milestone: [m, "Milestone"], "Milestone X": [m, "Milestone X"], Triumph: [m, "TRIUMPH"], XOOM: [m, "XOOM", "tablet"], Xoom: [m, "XOOM", "tablet"], ISW11M: [m, "PHOTON"], MOTWX435KT: [m, "TRIUMPH"], "MTC 955": ["MTC", "955"], Newpad: ["Newsmy", "Newpad", "tablet"], "M-PAD N8": ["Newsmy", "M-pad N8", "tablet"], "N-04C": ["NEC", "MEDIAS N-04C"], "N-06C": ["NEC", "MEDIAS N-06C"], "101N": ["NEC", "MEDIAS CH Softbank 101N"], "Nokia N900": ["Nokia", "N900"], Lumia800: ["Nokia", "Lumia 800"], "ONDA MID": ["Onda", "MID", "tablet"], X903: ["Oppo", "X903"], "IM-A690S": ["Pantech", "SKY"], "IM-A710K": ["Pantech", "SKY Vega Xpress"], "IM-A730s": ["Pantech", "SKY Vega S"], "IM-A760S": ["Pantech", "SKY Vega Racer"], "IM-A770K": ["Pantech", "SKY Vega Racer"], "IM-A780L": ["Pantech", "SKY Vega Racer"], "IM-A800S": ["Pantech", "SKY Vega LTE"], "IM-A810S": ["Pantech", "SKY Vega LTE M"], "IM-A820L": ["Pantech", "SKY Vega LTE EX"], "IM-T100K": ["Pantech", "SKY Vega No. 5", "tablet"], IS06: ["Pantech", "SIRIUS α"], PAT712W: ["Perfeo", "PAT712W", "tablet"], "PocketBook A10": ["PocketBook", "A10", "tablet"], "Mobii 7": ["Point Of View", "Mobii 7", "tablet"], PMP3384BRU: ["Prestigio", "Multipad 3384", "tablet"], TB07FTA: ["Positivo", "TB07FTA", "tablet"], w10: ["Ramos", "W10", "tablet"], W10: ["Ramos", "W10", "tablet"], "w10 v2.0": ["Ramos", "W10 v2.0", "tablet"], T11AD: ["Ramos", "T11AD", "tablet"], PlayBook: ["RIM", "BlackBerry PlayBook", "tablet"], "Galaxy Nexus": [p, "Galaxy Nexus"], "GT-B5510": [p, "Galaxy Y Pro"], "GT-B7510": [p, "Galaxy Pro"], "GT-I5500": [p, "Galaxy 5"], "GT-I5500L": [p, "Galaxy 5"], "GT-I5503": [p, "Galaxy 5"], "GT-I5508": [p, "Galaxy 5"], "GT-I5510": [p, "Galaxy 551"], "GT-I5510L": [p, "Galaxy 551"], "GT-I5510T": [p, "Galaxy 551"], "GT-I5700": [p, "Galaxy Spica"], "GT-I5800": [p, "Galaxy Apollo"], "GT-I5801": [p, "Galaxy Apollo"], "GT-I8000": [p, "Omnia 2"], "GT-I8150": [p, "Galaxy W"], "GT-I8320": [p, "H1"], "GT-I9000": [p, "Galaxy S"], "GT-I9000B": [p, "Galaxy S"], "GT-I9000M": [p, "Galaxy S Vibrant"], "GT-I9000T": [p, "Galaxy S"], "GT-I9001": [p, "Galaxy S Plus"], "GT-I9003": [p, "Galaxy SL"], "GT-I9008": [p, "Galaxy S"], "GT-I9008L": [p, "Galaxy S"], "GT-I9018": [p, "Galaxy GT-I9018"], "GT-I9070": [p, "Galaxy S Advance"], "GT-I9100": [p, "Galaxy S II"], "GT-I9100G": [p, "Galaxy S II"], "GT-I9100M": [p, "Galaxy S II"], "GT-I9100T": [p, "Galaxy S II"], "GT-I9100P": [p, "Galaxy S II"], "GT-I9103": [p, "Galaxy R"], "GT-I9108": [p, "Galaxy S II"], "GT-I9210": [p, "Galaxy S II LTE"], "GT-I9220": [p, "Galaxy Note"], "GT-I9300": [p, "Galaxy S III"], "GT-I9500": [p, "Galaxy S III"], "GT-N7000": [p, "Galaxy Note"], "GT-P1000": [p, "Galaxy Tab", "tablet"], "GT-P1000L": [p, "Galaxy Tab", "tablet"], "GT-P1000M": [p, "Galaxy Tab", "tablet"], "GT-P1000N": [p, "Galaxy Tab", "tablet"], "GT-P1000T": [p, "Galaxy Tab", "tablet"], "GT-P1010": [p, "Galaxy Tab", "tablet"], "GT-P6200": [p, "Galaxy Tab 7.0 Plus", "tablet"], "GT-P6200L": [p, "Galaxy Tab 7.0 Plus", "tablet"], "GT-P6210": [p, "Galaxy Tab 7.0 Plus", "tablet"], "GT-P6800": [p, "Galaxy Tab 7.7", "tablet"], "GT-P7100": [p, "Galaxy Tab 10.1V", "tablet"], "GT-P7300": [p, "Galaxy Tab 8.9", "tablet"], "GT-P7300B": [p, "Galaxy Tab 8.9", "tablet"], "GT-P7310": [p, "Galaxy Tab 8.9", "tablet"], "GT-P7500": [p, "Galaxy Tab 10.1", "tablet"], "GT-P7500R": [p, "Galaxy Tab 10.1", "tablet"], "GT-P7500V": [p, "Galaxy Tab 10.1", "tablet"], "GT-P7501": [p, "Galaxy Tab 10.1N", "tablet"], "GT-P7510": [p, "Galaxy Tab 10.1", "tablet"], "GT-P7511": [p, "Galaxy Tab 10.1N", "tablet"], "GT-S5360": [p, "Galaxy Y"], "GT-S5360B": [p, "Galaxy Y"], "GT-S5570": [p, "Galaxy Mini"], "GT-S5570B": [p, "Galaxy Mini"], "GT-S5570L": [p, "Galaxy Mini"], "GT-S5578": [p, "Galaxy Mini"], "GT-S5660": [p, "Galaxy Gio"], "GT-S5660M": [p, "Galaxy Gio"], "GT-S5670": [p, "Galaxy Fit"], "GT-S5820": [p, "Galaxy Ace"], "GT-S5830": [p, "Galaxy Ace"], "GT-S5830L": [p, "Galaxy Ace"], "SCH-i559": [p, "Galaxy Pop"], "SCH-i569": [p, "Galaxy Gio"], "SCH-I400": [p, "Continuum"], "SCH-I500": [p, "Fascinate"], "SCH-i509": [p, "Galaxy Y"], "SCH-I510": [p, "Stealth V"], "SCH-I510 4G": [p, "Droid Charge"], "SCH-i579": [p, "Galaxy Ace"], "SCH-i809": [p, "SCH-I809"], "SCH-I905": [p, "Galaxy Tab 10.1", "tablet"], "SCH-i909": [p, "Galaxy S"], "SCH-I909": [p, "Galaxy S"], "SCH-M828C[9096483449]": [p, "Galaxy Precedent"], "SCH-R720": [p, "Admire"], "SCH-R910": [p, "Galaxy Indulge 4G"], "SCH-R915": [p, "Galaxy Indulge"], "SCH-W899": [p, "SCH-W899"], "SGH-I727": [p, "Galaxy S II Skyrocket"], "SGH-i727R": [p, "Galaxy S II"], "SGH-I727R": [p, "Galaxy S II"], "SGH-I777": [p, "Galaxy S II"], "SGH-I896": [p, "Galaxy S Captivate"], "SGH-I897": [p, "Captivate"], "SGH-I927": [p, "Captivate Glide"], "SGH-I957": [p, "Galaxy Tab 8.9", "tablet"], "SGH-I957M": [p, "Galaxy Tab 8.9", "tablet"], "SGH-I957R": [p, "Galaxy Tab 8.9", "tablet"], "SGH-I987": [p, "Galaxy Tab 7.0", "tablet"], "SGH-I997": [p, "Galaxy S Infuse 4G"], "SGH-T499": [p, "Dart"], "SGH-T499V": [p, "Galaxy Mini"], "SGH-T499Y": [p, "Galaxy Mini"], "SGH-T589R": [p, "Galaxy Q"], "SGH-T839": [p, "T-Mobile Sidekick"], "SGH-T959": [p, "Galaxy S Vibrant"], "SGH-T959D": [p, "Galaxy S Fascinate 3G+"], "SGH-T959P": [p, "Galaxy S Fascinate 4G"], "SGH-T959V": [p, "Galaxy S 4G"], "SGH-T989": [p, "Galaxy S II"], "SGH-T989D": [p, "Galaxy S II X"], "SHV-E120L": [p, "Galaxy S II HD LTE"], "SHV-E120S": [p, "Galaxy S II HD LTE"], "SHV-E110S": [p, "Galaxy S II LTE"], "SHV-E160K": [p, "Galaxy Note"], "SHV-E160S": [p, "Galaxy Note LTE"], "SHW-M110S": [p, "Galaxy S"], "SHW-M130L": [p, "Galaxy U"], "SHW-M130K": [p, "Galaxy K"], "SHW-M180K": [p, "Galaxy Tab", "tablet"], "SHW-M180L": [p, "Galaxy Tab", "tablet"], "SHW-M180S": [p, "Galaxy Tab", "tablet"], "SHW-M190S": [p, "Galaxy S Hoppin"], "SHW-M250K": [p, "Galaxy S II"], "SHW-M250L": [p, "Galaxy S II"], "SHW-M250S": [p, "Galaxy S II"], "SHW-M380S": [p, "Galaxy Tab 10.1", "tablet"], "SMT-i9100": [p, "SMT-I9100", "tablet"], "SPH-D700": [p, "Epic 4G"], "SPH-D705": [p, "Epic 4G 2"], "SPH-D710": [p, "Epic 4G Touch"], "SPH-M580": [p, "Replenish"], "SPH-M910": [p, "Intercept"], "SPH-P100": [p, "Galaxy Tab", "tablet"], "YP-GB70": [p, "Galaxy Player"], "YP-GS1": [p, "Galaxy S WiFi 3.6"], "YP-G1": [p, "Galaxy S WiFi 4.0"], "YP-G70": [p, "Galaxy S WiFi 5.0"], I897: [p, "Captivate"], I7500: [p, "Galaxy"], I9000: [p, "Galaxy S"], T959: [p, "Galaxy S Vibrant"], "Galaxy Note": [p, "Galaxy Note"], "Galaxy S II": [p, "Galaxy S II"], "GALAXY Tab": [p, "Galaxy Tab", "tablet"], "SC-01C": [p, "Galaxy Tab", "tablet"], "SC-01D": [p, "Galaxy Tab 10.1 LTE", "tablet"], "SC-02B": [p, "Galaxy S"], "SC-02C": [p, "Galaxy S II"], "SC-03D": [p, "Galaxy S II LTE"], ISW11SC: [p, "Galaxy S II WiMAX"], "SH-03C": [i, "Lynx 3D"], "SH-12C": [i, "Aquos"], SBM006SH: [i, "Aquos"], SBM102SH: [i, "Aquos 102SH"], IS12SH: [i, "Aquos IS12SH"], IS01: [i, "IS01"], IS03: [i, "IS03"], "SH-01D": [i, "Aquos SH-01D"], "SH-13C": [i, "Aquos SH-13C"], SBM003SH: [i, "Galapagos"], SBM005SH: [i, "Galapagos"], SH8118U: [i, "SH8118U"], SH8128U: [i, "SH8128U"], SH8188U: [i, "SH8188U"], SH8268U: [i, "SH8268U"], "INFOBAR C01": [i, "INFOBAR C01"], "SPX-5": ["Simvalley", "SPX-5"], E10a: [c, "Xperia X10 Mini"], E10i: [c, "Xperia X10 Mini"], E10iv: [c, "Xperia X10 Mini"], E15a: [c, "Xperia X8"], E15i: [c, "Xperia X8"], E16i: [c, "W8 Walkman"], LT15a: [c, "Xperia Arc"], LT15i: [c, "Xperia Arc"], "LT15i-o": [c, "Xperia Arc"], LT18a: [c, "Xperia Arc S"], LT18i: [c, "Xperia Arc S"], LT18iv: [c, "Xperia Arc S"], "LT18i-o": [c, "Xperia Arc S"], LT26i: ["Sony", "Xperia S"], LT28i: ["Sony", "Xperia Ion"], MK16a: [c, "Xperia Pro"], MK16i: [c, "Xperia Pro"], MT11a: [c, "Xperia Neo V"], MT11i: [c, "Xperia Neo V"], MT11iv: [c, "Xperia Neo V"], "MT11i-o": [c, "Xperia Neo V"], MT15a: [c, "Xperia Neo"], MT15i: [c, "Xperia Neo"], MT15iv: [c, "Xperia Neo"], "MT15i-o": [c, "Xperia Neo"], R800a: [c, "Xperia Play"], R800i: [c, "Xperia Play"], R800at: [c, "Xperia Play"], R800x: [c, "Xperia Play"], SK17a: [c, "Xperia Mini Pro"], SK17i: [c, "Xperia Mini Pro"], SK17iv: [c, "Xperia Mini Pro"], "SK17i-o": [c, "Xperia Mini Pro"], ST15a: [c, "Xperia Mini"], ST15i: [c, "Xperia Mini"], ST17i: [c, "Xperia Active"], ST18a: [c, "Xperia Ray"], ST18i: [c, "Xperia Ray"], WT13i: [c, "Mix Walkman"], WT18i: [c, "Walkman"], WT19a: [c, "Live with Walkman"], WT19i: [c, "Live with Walkman"], U20a: [c, "Xperia X10 Mini Pro"], U20i: [c, "Xperia X10 Mini Pro"], U20iv: [c, "Xperia X10 Mini Pro"], X8: [c, "Xperia X8"], X10a: [c, "Xperia X10"], X10i: [c, "Xperia X10"], X10iv: [c, "Xperia X10"], Z1i: [c, "Xperia Play"], IS11S: [c, "Xperia Acro"], "SO-01B": [c, "Xperia X10"], "SO-01C": [c, "Xperia Arc"], "SO-01D": [c, "Xperia Play"], "SO-02C": [c, "Xperia Acro"], "SO-02D": [c, "Xperia NX"], "SO-03C": [c, "Xperia Ray"], "SO-03D": [c, "Xperia Acro HD"], "XPERIA X8": [c, "Xperia X8"], "Sony Tablet P": ["Sony", "Tablet P", "tablet"], "Sony Tablet S": ["Sony", "Tablet S", "tablet"], "NW-Z1000Series": ["Sony", "Walkman"], "TCL A990": ["TCL", "A990", "tablet"], P72: ["Teclast", "P72", "tablet"], P76TI: ["Teclast", "P76Ti", "tablet"], "Blaze Tablet": ["Texas Instruments", "Blaze Tablet", "tablet"], Ultimate10: ["Tomtec", "Ultimate10", "tablet"], "Thl V7": ["THL", "V7"], "T-01C": ["Toshiba", "Regza T-01C"], "T-01D": ["Toshiba", "Regza T-01D"], IS04: ["Toshiba", "Regza IS04"], AT1S0: ["Toshiba", "Regza AT1S0"], AT100: ["Toshiba", "AT100", "tablet"], AT200: ["Toshiba", "AT200", "tablet"], MOVE: ["T-Mobile", "MOVE"], "T-Mobile G2": ["T-Mobile", "G2"], "LG-P999": ["T-Mobile", "G2x"], "T-Mobile myTouch 3G": ["T-Mobile", "myTouch 3G"], "T-Mobile myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"], "LG-E739": ["T-Mobile", "myTouch 4G"], myTouch4G: ["T-Mobile", "myTouch 4G"], "myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"], T301: ["Velocity Micro", "Cruz T301", "tablet"], ViewPad7: ["ViewSonic", "ViewPad 7", "tablet"], "ViewPad 10e": ["ViewSonic", "ViewPad 10e", "tablet"], VTAB1008: ["Vizio", "VTAB1008", "tablet"], "Vodafone 845": ["Vodafone", "845 Nova"], "Vodafone 858": ["Vodafone", "858 Smart"], "xPAD-70": ["WayteQ", "xPAD-70", "tablet"], "WellcoM-A99": ["WellcoM", "A99"], N50DT: ["Window", "N50DT", "tablet"], N50GT: ["Window", "N50GT", "tablet"], WM8650: ["WonderMedia", "WM8650", "tablet"], "MI-ONE": ["Xiaomi", "MI-ONE"], "MI-ONE Plus": ["Xiaomi", "MI-ONE Plus"], "mione plus": ["Xiaomi", "MI-ONE Plus"], N6: ["Yarvik", "210 Tablet", "tablet"], Jaguar7: ["ZiiLabs", "Jaguar 7", "tablet"], "Ziss Ranger HD": ["Ziss", "Ranger HD"], "ZTE-T U880": ["ZTE", "Blade"], "Blade-opda": ["ZTE", "Blade"], Blade: ["ZTE", "Blade"], "ZTE-BLADE": ["ZTE", "Blade"], "ZTE Blade": ["ZTE", "Blade"], "San Francisco": ["ZTE", "Blade"], "ZTE-SKATE": ["ZTE", "Skate"], "ZTE Racer": ["ZTE", "Racer"], "MTC 916": ["ZTE", "Racer"], "ZTE-T U830": ["ZTE", "T-U830"], "ZTE-T U880": ["ZTE", "T-U880"], "ZTE-TU880": ["ZTE", "T-U880"], "ZTE-U V880": ["ZTE", "U-V880"], "ZTE-C R750": ["ZTE", "C-R750"], "ZTE-C N600": ["ZTE", "C-N600"], "ZTE-C N760": ["ZTE", "C-N760"], "ZTE-C N880": ["ZTE", "C-N880"], "ZTE-C N880S": ["ZTE", "C-N880"], "ZTE GV821": ["ZTE", "G-V821"]};
    var k = {"9600": "Bold", "9650": "Bold", "9700": "Bold", "9780": "Bold", "9790": "Bold", "9900": "Bold", "9930": "Bold", "8300": "Curve", "8310": "Curve", "8320": "Curve", "8330": "Curve", "8350i": "Curve", "8520": "Curve", "8530": "Curve", "8900": "Curve", "9300": "Curve", "9330": "Curve", "9350": "Curve", "9360": "Curve", "9370": "Curve", "8100": "Pearl", "8110": "Pearl", "8120": "Pearl", "8130": "Pearl", "8220": "Pearl", "8230": "Pearl", "9100": "Pearl", "9105": "Pearl", "9530": "Storm", "9550": "Storm", "9800": "Torch", "9810": "Torch", "9850": "Torch", "9860": "Torch", "9630": "Tour", "9981": "Porsche P"};
    var f = function () {
        this.initialize.apply(this, Array.prototype.slice.call(arguments))
    };
    f.prototype = {initialize: function (t) {
        this.original = t.value || null;
        this.alias = t.alias || null;
        this.major = 0;
        this.minor = 0;
        this.revision = "";
        this.build = "";
        this.type = "";
        var u;
        if (u = /([0-9]+)(?:\.([0-9]+))?(?:\.([0-9]+))?(?:\.([0-9]+))?(?:([ab])([0-9]+))?/.exec(this.original)) {
            if (typeof u[1] != "undefined") {
                this.major = u[1]
            }
            if (typeof u[2] != "undefined") {
                this.minor = u[2]
            }
            if (typeof u[3] != "undefined") {
                this.revision = u[3]
            }
            if (typeof u[4] != "undefined") {
                this.build = u[4]
            }
            if (typeof u[5] != "undefined") {
                switch (u[5]) {
                    case"a":
                        this.type = "alpha";
                        break;
                    case"b":
                        this.type = "beta";
                        break
                }
                if (typeof u[6] != "undefined") {
                    this.build = u[6]
                }
            }
        }
    }, valueOf: function () {
        return parseFloat("" + this.major + "." + this.minor)
    }, toString: function () {
        if (this.alias) {
            return this.alias
        }
        var t = "";
        if (this.major || this.minor) {
            t += this.major;
            if (this.minor != "" && this.minor != null) {
                t += "." + this.minor
            }
            if (this.revision != "" && this.revision != null) {
                t += "." + this.revision
            }
            if (this.type == "") {
                t += this.build ? "." + this.build : ""
            }
            if (this.type != "") {
                t += this.type[0] + (this.build ? this.build : "")
            }
        }
        return t
    }};
    var n = function (t) {
        this.initialize(t)
    };
    n.prototype = {initialize: function (t) {
        this.browser = {stock: true, hidden: false, channel: ""};
        this.engine = {};
        this.os = {};
        this.device = {type: "desktop"};
        this.detect(t);
        this.Android = this.engine.name != "Presto" && this.engine.name != "Gecko" && this.os.name == "Android" ? (typeof this.os.version != "undefined" ? 0 + this.os.version : true) : false;
        this.iOS = this.engine.name != "Presto" && this.os.name == "iOS" ? (typeof this.os.version != "undefined" ? 0 + this.os.version : true) : false;
        this.WindowsPhone = this.os.name == "Windows Phone" ? (typeof this.os.version != "undefined" ? 0 + this.os.version : true) : false;
        this.BlackBerry = this.os.name == "BlackBerry OS" || this.os.name == "BlackBerry Tablet OS" ? (typeof this.os.version != "undefined" ? 0 + this.os.version : true) : false;
        this.Meego = this.os.name == "Meego" ? (typeof this.os.version != "undefined" ? 0 + this.os.version : true) : false;
        this.Opera = this.engine.name == "Presto" ? (typeof this.browser.version != "undefined" ? 0 + this.browser.version : true) : false;
        this.Firefox = this.engine.name == "Gecko" ? (typeof this.browser.version != "undefined" ? 0 + this.browser.version : true) : false;
        this.Chrome = this.browser.name == "Chrome" || this.browser.name == "Chrome Frame" || this.browser.name == "Chromium" ? (typeof this.browser.version != "undefined" ? 0 + this.browser.version : true) : false;
        this.desktop = this.device.type == "desktop";
        this.tablet = this.device.type == "tablet";
        this.mobile = this.device.type == "mobile";
        this.proxy = this.device.type == "proxy"
    }, detect: function (y) {
        if (y.match("Unix")) {
            this.os.name = "Unix"
        }
        if (y.match("FreeBSD")) {
            this.os.name = "FreeBSD"
        }
        if (y.match("OpenBSD")) {
            this.os.name = "OpenBSD"
        }
        if (y.match("Linux")) {
            this.os.name = "Linux"
        }
        if (y.match("iPhone;") || y.match("iPad;") || y.match("iPod;")) {
            this.os.name = "iOS";
            this.os.version = new f({value: "1.0"});
            if (match = /OS (.*) like Mac OS X/.exec(y)) {
                this.os.version = new f({value: match[1].replace(/_/g, ".")})
            }
            this.device.manufacturer = "Apple";
            if (y.match("iPhone;") || y.match("iPod;")) {
                this.device.type = "mobile";
                if (y.match("iPhone;")) {
                    this.device.model = "iPhone"
                } else {
                    this.device.model = "iPod Touch"
                }
            } else {
                this.device.type = "tablet";
                this.device.model = "iPad"
            }
        } else {
            if (y.match("Mac OS X")) {
                this.os.name = "Mac OS X";
                if (match = /Mac OS X (10[0-9\._]*)/.exec(y)) {
                    this.os.version = new f({value: match[1].replace(/_/g, ".")})
                }
            }
        }
        if (y.match("Windows")) {
            this.os.name = "Windows";
            if (match = /Windows NT ([0-9]\.[0-9])/.exec(y)) {
                this.os.version = a(match[1]);
                switch (match[1]) {
                    case"6.2":
                        this.os.version = new f({value: match[1], alias: "8"});
                        break;
                    case"6.1":
                        this.os.version = new f({value: match[1], alias: "7"});
                        break;
                    case"6.0":
                        this.os.version = new f({value: match[1], alias: "Vista"});
                        break;
                    case"5.2":
                        this.os.version = new f({value: match[1], alias: "Server 2003"});
                        break;
                    case"5.1":
                        this.os.version = new f({value: match[1], alias: "XP"});
                        break;
                    case"5.0":
                        this.os.version = new f({value: match[1], alias: "2000"});
                        break;
                    default:
                        this.os.version = new f({value: match[1], alias: "NT " + this.os.version})
                }
            }
            if (y.match("Windows 95") || y.match("Win95")) {
                this.os.version = new f({value: "4.0", alias: "95"})
            }
            if (y.match("Windows 98") || y.match("Win98")) {
                this.os.version = new f({value: "4.1", alias: "98"})
            }
            if (y.match("Windows ME") || y.match("WinME")) {
                this.os.version = new f({value: "4.9", alias: "ME"})
            }
            if (y.match("Windows XP") || y.match("WinXP")) {
                this.os.name = new f({value: "5.1", alias: "XP"})
            }
            if (y.match("WP7")) {
                this.os.name = "Windows Phone";
                this.os.version = new f({value: "7.0"});
                this.device.type = "mobile";
                this.browser.mode = "desktop"
            }
            if (y.match("Windows CE") || y.match("WinCE") || y.match("WindowsCE")) {
                if (y.match(" IEMobile")) {
                    this.os.name = "Windows Mobile";
                    if (y.match(" IEMobile 8")) {
                        this.os.version = new f({value: "6.5"})
                    }
                    if (y.match(" IEMobile 7")) {
                        this.os.version = new f({value: "6.1"})
                    }
                    if (y.match(" IEMobile 6")) {
                        this.os.version = new f({value: "6.0"})
                    }
                } else {
                    this.os.name = "Windows CE";
                    if (match = /WindowsCEOS\/([0-9.]*)/.exec(y)) {
                        this.os.version = new f({value: match[1]})
                    }
                    if (match = /Windows CE ([0-9.]*)/.exec(y)) {
                        this.os.version = new f({value: match[1]})
                    }
                }
                this.device.type = "mobile"
            }
            if (y.match("Windows Mobile")) {
                this.os.name = "Windows Mobile"
            }
            if (y.match("Windows Phone OS")) {
                this.os.name = "Windows Phone";
                this.os.version = new f({value: y.match(/Windows Phone OS ([0-9.]*)/)[1]});
                if (this.os.version < 7) {
                    this.os.name = "Windows Mobile"
                }
                if (match = /IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(y)) {
                    this.device.manufacturer = match[1];
                    this.device.model = match[2]
                }
                this.device.type = "mobile";
                if (typeof o[this.device.manufacturer] != "undefined" && typeof o[this.device.manufacturer][this.device.model] != "undefined") {
                    var z = this.device.manufacturer;
                    var x = g(this.device.model);
                    this.device.manufacturer = o[z][x][0];
                    this.device.model = o[z][x][1]
                }
            }
        }
        if (y.match("Android")) {
            this.os.name = "Android";
            if (match = /Android(?: )?(?:AllPhone_)?(?:\/)?([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            if (y.match("Android Eclair")) {
                this.os.version = new f({value: "2.0"})
            }
            this.device.type = "mobile";
            if (this.os.version >= 3) {
                if (y.match("Mobile")) {
                    this.device.type = "mobile"
                } else {
                    this.device.type = "tablet"
                }
            }
            if (match = /; ([^;]*[^\s])\s+Build/.exec(y)) {
                this.device.model = match[1];
                var x = g(this.device.model);
                if (typeof j[x] != "undefined") {
                    this.device.manufacturer = j[x][0];
                    this.device.model = j[x][1];
                    if (typeof j[x][2] != "undefined") {
                        this.device.type = j[x][2]
                    }
                }
            }
        }
        if (y.match("GoogleTV")) {
            this.os.name = "Google TV";
            if (y.match("Chrome/5.")) {
                this.os.version = new f({value: "1"})
            }
            if (y.match("Chrome/11.")) {
                this.os.version = new f({value: "2"})
            }
            this.device.type = "television"
        }
        if (y.match("BlackBerry")) {
            this.os.name = "BlackBerry OS";
            if (!y.match("Opera")) {
                if (match = /BlackBerry([0-9]*)\/([0-9.]*)/.exec(y)) {
                    this.device.model = match[1];
                    this.os.version = new f({value: match[2]})
                }
                if (match = /; BlackBerry ([0-9]*);/.exec(y)) {
                    this.device.model = match[1]
                }
                if (match = /Version\/([0-9.]*)/.exec(y)) {
                    this.os.version = new f({value: match[1]})
                }
                if (typeof this.device.model != "undefined") {
                    if (typeof k[this.device.model] != "undefined") {
                        this.device.model = "BlackBerry " + k[this.device.model] + " " + this.device.model
                    } else {
                        this.device.model = "BlackBerry " + this.device.model
                    }
                } else {
                    this.device.model = "BlackBerry"
                }
            } else {
                this.device.model = "BlackBerry"
            }
            this.device.manufacturer = "RIM";
            this.device.type = "mobile"
        }
        if (y.match("RIM Tablet OS")) {
            this.os.name = "BlackBerry Tablet OS";
            this.os.version = new f({value: y.match(/RIM Tablet OS ([0-9.]*)/)[1]});
            this.device.manufacturer = "RIM";
            this.device.model = "BlackBerry PlayBook";
            this.device.type = "tablet"
        }
        if (y.match("(?:web|hpw)OS")) {
            this.os.name = "webOS";
            this.os.version = new f({value: y.match(/(?:web|hpw)OS\/([0-9.]*)/)[1]});
            if (y.match("tablet")) {
                this.device.type = "tablet"
            } else {
                this.device.type = "mobile"
            }
            this.device.manufacturer = y.match("hpwOS") ? "HP" : "Palm";
            if (y.match("Pre/1.0")) {
                this.device.model = "Pre"
            }
            if (y.match("Pre/1.1")) {
                this.device.model = "Pre Plus"
            }
            if (y.match("Pre/1.2")) {
                this.device.model = "Pre2"
            }
            if (y.match("Pre/3.0")) {
                this.device.model = "Pre2"
            }
            if (y.match("Pixi/1.0")) {
                this.device.model = "Pixi"
            }
            if (y.match("Pixi/1.1")) {
                this.device.model = "Pixi Plus"
            }
            if (y.match("P160UNA/1.0")) {
                this.device.model = "Veer"
            }
            if (y.match("TouchPad/1.0")) {
                this.device.model = "TouchPad"
            }
        }
        if (y.match("SymbianOS/9.1") || y.match("Series[ ]?60") || y.match("S60")) {
            this.os.name = "Series60";
            if (y.match("SymbianOS/9.1") && !y.match("Series60")) {
                this.os.version = new f({value: "3.0"})
            }
            if (match = /Series60\/([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            if (match = /Nokia([^\/;]+)[\/|;]/.exec(y)) {
                this.device.manufacturer = "Nokia";
                this.device.model = match[1]
            }
            if (match = /Samsung\/([^;]*);/.exec(y)) {
                this.device.manufacturer = p;
                this.device.model = match[1]
            }
            this.device.type = "mobile"
        }
        if (y.match("Series40")) {
            this.os.name = "Series40";
            if (match = /Nokia([^\/]+)\//.exec(y)) {
                this.device.manufacturer = "Nokia";
                this.device.model = match[1]
            }
            this.device.type = "mobile"
        }
        if (y.match("MeeGo")) {
            this.os.name = "MeeGo";
            this.device.type = "mobile";
            if (match = /Nokia([^\)]+)\)/.exec(y)) {
                this.device.manufacturer = "Nokia";
                this.device.model = match[1]
            }
        }
        if (y.match("Maemo")) {
            this.os.name = "Maemo";
            this.device.type = "mobile";
            if (match = /(N[0-9]+)/.exec(y)) {
                this.device.manufacturer = "Nokia";
                this.device.model = match[1]
            }
        }
        if (y.match("Tizen")) {
            this.os.name = "Tizen";
            if (match = /Tizen\/([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            this.device.type = "mobile";
            if (match = /\(([^;]+); ([^\/]+)\//.exec(y)) {
                this.device.manufacturer = match[1];
                this.device.model = match[2]
            }
            if (typeof l[this.device.manufacturer] != "undefined" && typeof l[this.device.manufacturer][this.device.model] != "undefined") {
                var z = this.device.manufacturer;
                var x = g(this.device.model);
                this.device.manufacturer = l[z][x][0];
                this.device.model = l[z][x][1]
            }
        }
        if (y.match("[b|B]ada")) {
            this.os.name = "Bada";
            if (match = /[b|B]ada\/([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            this.device.type = "mobile";
            if (match = /\(([^;]+); ([^\/]+)\//.exec(y)) {
                this.device.manufacturer = match[1];
                this.device.model = g(match[2])
            }
            if (typeof e[this.device.manufacturer] != "undefined" && typeof e[this.device.manufacturer][this.device.model] != "undefined") {
                var z = this.device.manufacturer;
                var x = g(this.device.model);
                this.device.manufacturer = e[z][x][0];
                this.device.model = e[z][x][1]
            }
        }
        if (y.match(/BREW/i)) {
            this.os.name = "Brew";
            this.device.type = "mobile";
            if (match = /BREW; U; ([0-9.]*)/i.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
        }
        if (y.match("CrOS")) {
            this.os.name = "Chrome OS";
            this.device.type = "desktop"
        }
        if (y.match("Haiku")) {
            this.os.name = "Haiku";
            this.device.type = "desktop"
        }
        if (y.match(/AmigaOS/i)) {
            this.os.name = "AmigaOS";
            this.device.type = "desktop";
            if (match = /AmigaOS ([0-9.]*)/i.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
        }
        if (y.match("Kindle")) {
            this.os.name = "";
            this.device.manufacturer = "Amazon";
            this.device.model = "Kindle";
            this.device.type = "tablet";
            if (y.match("Kindle/2.0")) {
                this.device.model = "Kindle 2"
            }
            if (y.match("Kindle/3.0")) {
                this.device.model = "Kindle 3 or later"
            }
        }
        if (y.match("Nintendo Wii")) {
            this.os.name = "";
            this.device.manufacturer = "Nintendo";
            this.device.model = "Wii";
            this.device.type = "television"
        }
        if (y.match("Nintendo DSi")) {
            this.os.name = "";
            this.device.manufacturer = "Nintendo";
            this.device.model = "DSi"
        }
        if (y.match("Nintendo 3DS")) {
            this.os.name = "";
            this.device.manufacturer = "Nintendo";
            this.device.model = "3DS"
        }
        if (y.match("PlayStation Portable")) {
            this.os.name = "";
            this.device.manufacturer = "Sony";
            this.device.model = "Playstation Portable";
            this.device.type = "mobile"
        }
        if (y.match("PlayStation Vita")) {
            this.os.name = "";
            if (match = /PlayStation Vita ([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            this.device.manufacturer = "Sony";
            this.device.model = "PlayStation Vita";
            this.device.type = "mobile"
        }
        if (y.match(/PlayStation 3/i)) {
            this.os.name = "";
            if (match = /PLAYSTATION 3; ([0-9.]*)/.exec(y)) {
                this.os.version = new f({value: match[1]})
            }
            this.device.manufacturer = "Sony";
            this.device.model = "Playstation 3";
            this.device.type = "television"
        }
        if (y.match("AQUOSBrowser")) {
            this.device.manufacturer = i;
            this.device.model = "Aquos TV";
            this.device.type = "television"
        }
        if (y.match("SmartTV")) {
            this.os.name = "";
            this.device.manufacturer = p;
            this.device.model = "Smart TV";
            this.device.type = "television"
        }
        if (y.match("SonyDTV|SonyBDP|SonyCEBrowser")) {
            this.os.name = "";
            this.device.manufacturer = "Sony";
            this.device.model = "Internet TV";
            this.device.type = "television"
        }
        if (y.match("NETTV/")) {
            this.os.name = "";
            this.device.manufacturer = "Philips";
            this.device.model = "Net TV";
            this.device.type = "television"
        }
        if (match = /LG NetCast\.TV-([0-9]*)/.exec(y)) {
            this.os.name = "";
            this.device.manufacturer = b;
            this.device.model = "NetCast TV " + match[1];
            this.device.type = "television"
        }
        if (y.match("HbbTV")) {
            this.device.type = "television"
        }
        if (y.match("MIDP")) {
            this.device.type = "mobile"
        }
        if (!/^(Mozilla|Opera)/.exec(y)) {
            if (!this.device.model && !this.device.manufacturer) {
                var u = false;
                if (match = /^([^\/]+)/.exec(y)) {
                    match[1] = match[1].replace(/_TD$/, "");
                    match[1] = match[1].replace(/_CMCC$/, "");
                    match[1] = match[1].replace(/ Mozilla$/, "");
                    if (this.os.name == "Android") {
                        var x = g(match[1]);
                        if (typeof j[x] != "undefined") {
                            this.device.manufacturer = j[x][0];
                            this.device.model = j[x][1];
                            if (typeof j[x][2] != "undefined") {
                                this.device.type = j[x][2]
                            }
                            u = true
                        }
                    }
                    if (this.os.name == "Windows Mobile") {
                        var x = g(match[1]);
                        if (typeof r[x] != "undefined") {
                            this.device.manufacturer = r[x][0];
                            this.device.model = r[x][1];
                            u = true
                        }
                    }
                }
                if (!u) {
                    if (match = /^HTC([^\/_]+)(?:\/|_)/.exec(y)) {
                        this.device.manufacturer = q;
                        this.device.model = match[1]
                    }
                    if (match = /^HUAWEI-([^\/]*)/.exec(y)) {
                        this.device.manufacturer = h;
                        this.device.model = match[1]
                    }
                    if (match = /\(LG\/(.*) Browser/.exec(y)) {
                        this.device.manufacturer = b;
                        this.device.model = match[1]
                    }
                    if (match = /^MOT-([^\/_]+)(?:\/|_)/.exec(y)) {
                        this.device.manufacturer = m;
                        this.device.model = match[1]
                    }
                    if (match = /^Nokia([^\/]+)\//.exec(y)) {
                        this.device.manufacturer = "Nokia";
                        this.device.model = match[1];
                        if (!this.os.name) {
                            this.os.name = "Series 40"
                        }
                    }
                    if (match = /^SonyEricsson([^\/_]+)(?:\/|_)/.exec(y)) {
                        this.device.manufacturer = c;
                        this.device.model = match[1]
                    }
                    if (match = /^SAMSUNG-([^\/_]+)(?:\/|_)/.exec(y)) {
                        this.device.manufacturer = p;
                        this.device.model = match[1];
                        if (this.os.name == "Bada") {
                            var z = "SAMSUNG";
                            var x = g(this.device.model);
                            if (typeof e[z] != "undefined" && typeof e[z][x] != "undefined") {
                                this.device.manufacturer = e[z][x][0];
                                this.device.model = e[z][x][1]
                            }
                        } else {
                            if (match = /Dolfin\/([0-9.]*)/.exec(y)) {
                                var w = match[1];
                                var z = "SAMSUNG";
                                var x = g(this.device.model);
                                if (typeof e[z] != "undefined" && typeof e[z][x] != "undefined") {
                                    this.device.manufacturer = e[z][x][0];
                                    this.device.model = e[z][x][1];
                                    this.os.name = "Bada";
                                    switch (w) {
                                        case"2.0":
                                            this.os.version = new f({value: "1.0"});
                                            break;
                                        case"2.2":
                                            this.os.version = new f({value: "1.2"});
                                            break;
                                        case"3.0":
                                            this.os.version = new f({value: "2.0"});
                                            break
                                    }
                                }
                                if (typeof s[z] != "undefined" && typeof s[z][x] != "undefined") {
                                    this.device.manufacturer = s[z][x][0];
                                    this.device.model = s[z][x][1];
                                    this.os.name = "Touchwiz";
                                    switch (w) {
                                        case"1.0":
                                            this.os.version = new f({value: "1.0"});
                                            break;
                                        case"1.5":
                                            this.os.version = new f({value: "2.0"});
                                            break;
                                        case"2.0":
                                            this.os.version = new f({value: "3.0"});
                                            break
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (y.match("Safari") && (this.os.name == "Mac OS X" || this.os.name == "iOS" || this.os.name == "Windows")) {
            this.browser.stock = this.os.name == "iOS" || this.os.name == "Mac OS X";
            this.browser.hidden = this.os.name == "iOS";
            this.browser.name = "Safari";
            if (match = /Version\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("MSIE")) {
            this.browser.name = "Internet Explorer";
            if (y.match("IEMobile") || y.match("WP7")) {
                this.browser.name = "Mobile Internet Explorer"
            }
            if (match = /MSIE ([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Opera")) {
            this.browser.stock = false;
            this.browser.name = "Opera";
            if (match = /Opera[\/| ]([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (match = /Version\/([0-9.]*)/.exec(y)) {
                if (parseFloat(match[1]) >= 10) {
                    this.browser.version = new f({value: match[1]})
                } else {
                    this.browser.version = null
                }
            }
            if (this.browser.version && y.match("Edition Labs")) {
                this.browser.version.type = "alpha";
                this.browser.channel = "Labs"
            }
            if (this.browser.version && y.match("Edition Next")) {
                this.browser.version.type = "alpha";
                this.browser.channel = "Next"
            }
            if (y.match("Opera Tablet")) {
                this.browser.name = "Opera Mobile";
                this.device.type = "tablet"
            }
            if (y.match("Opera Mobi")) {
                this.browser.name = "Opera Mobile";
                this.device.type = "mobile"
            }
            if (y.match("InettvBrowser") || y.match("Opera-Tv")) {
                this.device.type = "television"
            }
            if (match = /Opera Mini\/([0-9.]*)/.exec(y)) {
                this.browser.name = "Opera Mini";
                this.browser.version = new f({value: match[1]});
                this.browser.mode = "proxy";
                this.device.type = "mobile"
            }
        }
        if (y.match("Firefox")) {
            this.browser.stock = false;
            this.browser.name = "Firefox";
            if (match = /Firefox\/([0-9ab.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (this.browser.version.type == "alpha") {
                this.browser.channel = "Aurora"
            }
            if (this.browser.version.type == "beta") {
                this.browser.channel = "Beta"
            }
            if (y.match("Fennec")) {
                this.browser.name = "Firefox Mobile";
                this.device.type = "mobile"
            }
        }
        if (y.match("SeaMonkey")) {
            this.browser.stock = false;
            this.browser.name = "SeaMonkey";
            if (match = /SeaMonkey\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("[k|K]onqueror/")) {
            this.browser.name = "Konqueror";
            if (match = /[k|K]onqueror\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Chrome")) {
            this.browser.stock = false;
            this.browser.name = "Chrome";
            if (match = /Chrome\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]});
                switch (match[1].split(".", 3).join(".")) {
                    case"0.2.149":
                    case"0.3.154":
                    case"0.4.154":
                    case"1.0.154":
                    case"2.0.172":
                    case"3.0.195":
                    case"4.0.249":
                    case"4.1.249":
                    case"5.0.375":
                    case"6.0.472":
                    case"7.0.517":
                    case"8.0.552":
                    case"9.0.597":
                    case"10.0.648":
                    case"11.0.696":
                    case"12.0.742":
                    case"13.0.782":
                    case"14.0.835":
                    case"15.0.874":
                    case"16.0.912":
                        this.browser.version.revision = null;
                        this.browser.version.build = null;
                        if (this.browser.version.minor == 0) {
                            this.browser.version.minor = null
                        }
                        break;
                    default:
                        this.browser.channel = "Nightly";
                        break
                }
            }
        }
        if (y.match("CrMo")) {
            this.browser.stock = false;
            this.browser.name = "Chrome";
            if (match = /CrMo\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]});
                switch (match[1].split(".", 3).join(".")) {
                    case"16.0.912":
                        this.browser.channel = "Beta";
                        break;
                    default:
                        this.browser.channel = "Nightly";
                        break
                }
            }
        }
        if (y.match("chromeframe")) {
            this.browser.stock = false;
            this.browser.name = "Chrome Frame";
            if (match = /chromeframe\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Chromium")) {
            this.browser.stock = false;
            this.browser.channel = "";
            this.browser.name = "Chromium";
            if (match = /Chromium\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("BrowserNG")) {
            this.browser.name = "Nokia Browser";
            if (match = /BrowserNG\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("NokiaBrowser")) {
            this.browser.name = "Nokia Browser";
            if (match = /NokiaBrowser\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Maemo[ |_]Browser")) {
            this.browser.name = "MicroB";
            if (match = /Maemo[ |_]Browser[ |_]([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("NetFront")) {
            this.browser.name = "NetFront";
            this.device.type = "mobile";
            if (match = /NetFront\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (y.match("InettvBrowser")) {
                this.device.type = "television"
            }
        }
        if (y.match("Silk")) {
            if (!y.match("PlayStation")) {
                this.browser.name = "Silk";
                if (match = /Silk\/([0-9.]*)/.exec(y)) {
                    this.browser.version = new f({value: match[1]})
                }
                this.device.manufacturer = "Amazon";
                this.device.model = "Kindle Fire";
                this.device.type = "tablet";
                if (this.os.name != "Android") {
                    this.os.name = "Android";
                    this.os.version = null
                }
            }
        }
        if (y.match("Qt")) {
            this.browser.stock = false;
            this.browser.name = "Qt Browser";
            if (match = /Qt\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Dolfin")) {
            this.browser.name = "Dolfin";
            if (match = /Dolfin\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Iris")) {
            this.browser.name = "Iris";
            this.device.model = null;
            this.device.manufacturer = null;
            if (match = /Iris\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (match = / WM([0-9]) /.exec(y)) {
                this.os.name = "Windows Mobile";
                this.os.version = new f({value: match[1] + ".0"});
                this.device.type = "mobile"
            }
        }
        if (y.match("Jasmine")) {
            this.browser.name = "Jasmine";
            if (match = /Jasmine\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Boxee")) {
            this.browser.name = "Boxee";
            this.device.type = "television";
            if (match = /Boxee\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match("Espial")) {
            this.browser.name = "Espial";
            this.device.type = "television";
            this.device.model = null;
            this.device.manufacturer = null;
            this.os.name = "";
            this.os.version = null;
            if (match = /Espial\/([0-9.]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
        }
        if (y.match(/Obigo/i)) {
            this.browser.name = "Obigo";
            if (match = /Obigo\/([0-9.]*)/i.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (match = /Obigo\/([A-Z])([0-9.]*)/i.exec(y)) {
                this.browser.name = "Obigo " + match[1];
                this.browser.version = new f({value: match[2]})
            }
        }
        if (y.match("UCWEB")) {
            this.browser.stock = false;
            this.browser.name = "UC Web";
            if (match = /UCWEB([0-9]*[.][0-9]*)/.exec(y)) {
                this.browser.version = new f({value: match[1]})
            }
            if (this.os.name == "Linux") {
                this.os.name = ""
            }
            if (match = /; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(y)) {
                var x = g(match[1]);
                if (typeof j[x] != "undefined") {
                    this.device.manufacturer = j[x][0];
                    this.device.model = j[x][1];
                    if (typeof j[x][2] != "undefined") {
                        this.device.type = j[x][2]
                    }
                    this.os.name = "Android"
                }
            }
        }
        if (match = /Ninesky-android-mobile(?:-cn)?\/([0-9.]*)/.exec(y)) {
            this.browser.name = "NineSky";
            this.browser.version = new f({value: match[1]});
            this.os.name = "Android";
            this.os.version = null
        }
        var v = [
            {name: "AdobeAIR", regexp: /AdobeAIR\/([0-9.]*)/},
            {name: "Awesomium", regexp: /Awesomium\/([0-9.]*)/},
            {name: "LuaKit", regexp: /luakit\/([0-9.]*)/},
            {name: "Titanium", regexp: /Titanium\/([0-9.]*)/},
            {name: "Abrowser", regexp: /Abrowser\/([0-9.]*)/},
            {name: "arora", regexp: /arora\/([0-9.]*)/},
            {name: "Camino", regexp: /Camino\/([0-9.]*)/},
            {name: "CometBird", regexp: /CometBird\/([0-9.]*)/},
            {name: "Comodo Dragon", regexp: /Comodo_Dragon\/([0-9.]*)/},
            {name: "CoolNovo", regexp: /(?:CoolNovo|CoolNovoChromePlus)\/([0-9.]*)/},
            {name: "Epiphany", regexp: /Epiphany\/([0-9.]*)/},
            {name: "FireWeb", regexp: /FireWeb\/([0-9.]*)/},
            {name: "Flock", regexp: /Flock\/([0-9.]*)/},
            {name: "Helium", regexp: /HeliumMobileBrowser\/([0-9.]*)/},
            {name: "iCab", regexp: /iCab\/([0-9.]*)/},
            {name: "IceCat", regexp: /IceCat ([0-9.]*)/},
            {name: "Iceweasel", regexp: /Iceweasel\/([0-9.]*)/},
            {name: "Iron", regexp: /Iron\/([0-9.]*)/},
            {name: "K-Meleon", regexp: /K-Meleon\/([0-9.]*)/},
            {name: "Lunascape", regexp: /Lunascape\/([0-9.]*)/},
            {name: "Maxthon", regexp: /Maxthon\/([0-9.]*)/},
            {name: "Midori", regexp: /Midori\/([0-9.]*)/},
            {name: "MQQBrowser", regexp: /MQQBrowser\/([0-9.]*)/},
            {name: "PaleMoon", regexp: /PaleMoon\/([0-9.]*)/},
            {name: "QupZilla", regexp: /QupZilla\/([0-9.]*)/},
            {name: "Raven for Mac", regexp: /Raven for Mac\/([0-9.]*)/},
            {name: "rekonq", regexp: /rekonq/},
            {name: "RockMelt", regexp: /RockMelt\/([0-9.]*)/},
            {name: "SecondLife", regexp: /SecondLife\/([0-9.]*)/},
            {name: "Skyfire", regexp: /Skyfire\/([0-9.]*)/},
            {name: "Sleipnir", regexp: /Sleipnir\/([0-9.]*)/},
            {name: "Surf", regexp: /Surf\/([0-9.]*)/},
            {name: "Valve Steam", regexp: /Valve Steam/},
            {name: "Villanova", regexp: /Villanova\/([0-9.]*)/},
            {name: "WebPositive", regexp: /WebPositive\/([0-9.]*)/}
        ];
        for (var t = 0; t < v.length; t++) {
            if (match = v[t].regexp.exec(y)) {
                this.browser.name = v[t].name;
                this.browser.channel = "";
                this.browser.stock = false;
                if (match[1]) {
                    this.browser.version = new f({value: match[1]})
                }
            }
        }
        if (match = /AppleWebKit\/([0-9.]*)/.exec(y)) {
            this.engine.name = "Webkit";
            this.engine.version = new f({value: match[1]})
        }
        if (match = /KHTML\/([0-9.]*)/.exec(y)) {
            this.engine.name = "KHTML";
            this.engine.version = new f({value: match[1]})
        }
        if (match = /Gecko\//.exec(y)) {
            this.engine.name = "Gecko";
            if (match = /; rv:([^\)]+)\)/.exec(y)) {
                this.engine.version = new f({value: match[1]})
            }
        }
        if (match = /Presto\/([0-9.]*)/.exec(y)) {
            this.engine.name = "Presto";
            this.engine.version = new f({value: match[1]})
        }
        if (match = /Trident\/([0-9.]*)/.exec(y)) {
            this.engine.name = "Trident";
            this.engine.version = new f({value: match[1]});
            if (this.browser.name == "Internet Explorer") {
                if (a(this.engine.version) == 6 && parseFloat(this.browser.version) < 10) {
                    this.browser.version = new f({value: "10.0"});
                    this.browser.mode = "compat"
                }
                if (a(this.engine.version) == 5 && parseFloat(this.browser.version) < 9) {
                    this.browser.version = new f({value: "9.0"});
                    this.browser.mode = "compat"
                }
                if (a(this.engine.version) == 4 && parseFloat(this.browser.version) < 8) {
                    this.browser.version = new f({value: "8.0"});
                    this.browser.mode = "compat"
                }
            }
            if (this.os.name == "Windows Phone") {
                if (a(this.engine.version) == 5 && parseFloat(this.os.version) < 7.5) {
                    this.os.version = new f({value: "7.5"})
                }
            }
        }
        if (match = /Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(y)) {
            this.browser.name = "";
            this.browser.version = null;
            this.browser.mode = "desktop";
            this.os.name = "Android";
            this.os.version = null;
            this.engine.name = "WebKit";
            this.engine.version = null;
            this.device.model = match[1];
            this.device.type = "mobile";
            var x = g(this.device.model);
            if (typeof j[x] != "undefined") {
                this.device.manufacturer = j[x][0];
                this.device.model = j[x][1];
                if (typeof j[x][2] != "undefined") {
                    this.device.type = j[x][2]
                }
            }
        }
        if (match = /Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(y)) {
            this.browser.name = "";
            this.browser.version = null;
            this.browser.mode = "desktop";
            this.os.name = "Android";
            this.os.version = null;
            this.engine.name = "WebKit";
            this.engine.version = null;
            this.device.model = match[1];
            this.device.type = "mobile";
            var x = g(this.device.model);
            if (typeof j[x] != "undefined") {
                this.device.manufacturer = j[x][0];
                this.device.model = j[x][1];
                if (typeof j[x][2] != "undefined") {
                    this.device.type = j[x][2]
                }
            }
        }
        if (this.os.name == "Android" && this.browser.stock) {
            this.browser.hidden = true
        }
        if (this.os.name == "iOS" && this.browser.name == "Opera Mini") {
            this.os.version = null
        }
        if (this.os.name == "iOS" && this.browser.name == "Safari") {
            this.browser.version = null
        }
    }, toString: function () {
        var t = "" + (this.browser.name ? this.browser.name + (this.browser.channel ? " " + this.browser.channel : "") + (this.browser.version ? " " + this.browser.version.toString() : "") : "");
        var v = "" + (this.os.name ? this.os.name + (this.os.version ? " " + this.os.version.toString() : "") : "");
        var u = "" + (typeof this.device.manufacturer != "undefined" && this.device.manufacturer ? this.device.manufacturer + " " : "") + (typeof this.device.model != "undefined" && this.device.model ? this.device.model : "");
        if (!u && !v && this.device.type == "television") {
            u = "television"
        }
        if (t && v && u) {
            return t + " on a " + u + " running " + v
        } else {
            if (t && !v && u) {
                return t + " on a " + u
            } else {
                if (t && v && !u) {
                    return t + " on " + v
                } else {
                    if (!t && v && u) {
                        return"a " + u + " running " + v
                    } else {
                        if (t && !v && !u) {
                            return t
                        } else {
                            if (!t && !v && u) {
                                return"a " + u
                            } else {
                                return"an unknown browser"
                            }
                        }
                    }
                }
            }
        }
    }};
    function g(t) {
        t = t.replace(/_/g, " ");
        t = t.replace(/^\s+|\s+$/g, "");
        t = t.replace(/\/[^/]+$/, "");
        t = t.replace(/^SAMSUNG[ -]/, "");
        t = t.replace(/^SonyEricsson/, "");
        t = t.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/, "$1");
        t = t.replace(/^(HTC)[-\/]/, "$1 ");
        t = t.replace(/^(Motorola[\s|-]|Moto|MOT-)/, "");
        t = t.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i, "");
        return t
    }

    function a(t) {
        t = t.toString();
        var v = t.split(".");
        var u = v.shift();
        return parseFloat(u + "." + v.join(""))
    }

    return n
})();