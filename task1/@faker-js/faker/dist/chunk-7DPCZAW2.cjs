"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunk55MSYLT2cjs = require('./chunk-55MSYLT2.cjs');var _chunkCU2NFM6Ucjs = require('./chunk-CU2NFM6U.cjs');var o=["beige","bl\xE5","gr\xE5","gr\xF8nn","gul","hvit","indigo","karmin","lilla","limegr\xF8nn","magenta","oransje","rosa","r\xF8d","smaragdgr\xF8nn","svart","turkis"];var U={human:o},r=U;var n=["Barn","B\xF8ker","Dagligvarer","Datamaskiner","Elektronikk","Filmer","Hage og utemilj\xF8","Helse","Hjem","Kl\xE6r","Leker","Musikk","Skj\xF8nnhet","Sko","Smykker","Spill","Sport","Verkt\xF8y"];var Z={department:n},i=Z;var t=["AS","ASA","BA","Gruppen","RFH","og S\xF8nner"];var l=["{{person.last_name.generic}} {{company.legal_entity_type}}","{{person.last_name.generic}}, {{person.last_name.generic}} og {{person.last_name.generic}}","{{person.last_name.generic}}-{{person.last_name.generic}}"];var q={legal_entity_type:t,name_pattern:l},s=q;var u=["no","com","net","org"];var z={domain_suffix:u},b=z;var c=["#","##"];var d=["Fet","Gjes","H\xF8y","Inn","Fager","Lille","Lo","Mal","Nord","N\xE6r","Sand","Sme","Stav","Stor","Tand","Ut","Vest"];var y=["{{location.city_name}}{{location.city_suffix}}"];var f=["berg","borg","by","b\xF8","dal","eid","fjell","fjord","foss","grunn","hamn","havn","helle","mark","nes","odden","sand","sj\xF8en","stad","strand","str\xF8m","sund","vik","v\xE6r","v\xE5g","\xF8","\xF8y","\xE5s"];var p=["sgate","svei","s Gate","s Vei","gata","veien"];var g=["####","0###"];var N=["Leil. ###","Oppgang A","Oppgang B"];var k=[""];var h={normal:"{{location.street}} {{location.buildingNumber}}",full:"{{location.street}} {{location.buildingNumber}} {{location.secondaryAddress}}"};var S=["Eike","Bj\xF8rke","Gran","Vass","Furu","Litj","Lille","H\xF8y","Fosse","Elve","Ku","Konvall","Soldugg","Hestemyr","Granitt","Hegge","Rogne","Fiol","Sol","Ting","Malm","Klokker","Preste","Dam","Geiterygg","Bekke","Berg","Kirke","Kors","Bru","Bl\xE5veis","Torg","Sj\xF8"];var v=["{{location.street_name}}{{location.street_suffix}}","{{location.street_prefix}} {{location.street_name}}{{location.street_suffix}}","{{person.first_name.generic}}{{location.common_street_suffix}}","{{person.last_name.generic}}{{location.common_street_suffix}}"];var x=["\xD8vre","Nedre","S\xF8ndre","Gamle","\xD8stre","Vestre"];var M=["all\xE9en","bakken","berget","br\xE5ten","eggen","engen","ekra","faret","flata","gata","gjerdet","grenda","gropa","hagen","haugen","havna","holtet","h\xF8gda","jordet","kollen","kroken","lia","lunden","lyngen","l\xF8kka","marka","moen","myra","plassen","ringen","roa","r\xF8a","skogen","skrenten","spranget","stien","stranda","stubben","stykket","svingen","tjernet","toppen","tunet","vollen","vika","\xE5sen"];var X={building_number:c,city_name:d,city_pattern:y,city_suffix:f,common_street_suffix:p,postcode:g,secondary_address:N,state:k,street_address:h,street_name:S,street_pattern:v,street_prefix:x,street_suffix:M},_=X;var Q={title:"Norwegian (Norway)",code:"nb_NO",country:"NO",language:"nb",endonym:"Norsk bokm\xE5l (Norge)",dir:"ltr",script:"Latn"},A=Q;var H={generic:["Adrian","Aksel","Alexander","Amalie","Anders","Andrea","Andreas","Anna","Aurora","Benjamin","Camilla","Celine","Daniel","Eirik","Elias","Eline","Elise","Emil","Emilie","Emma","Erik","Even","Filip","Fredrik","Frida","Hanna","Hedda","Helene","Henrik","Herman","H\xE5kon","Ida","Ingrid","Isak","Jakob","Jenny","Joakim","Johannes","Jonas","Jonathan","Julie","J\xF8rgen","Kaja","Karoline","Kasper","Kristian","Kristine","Kristoffer","Lars","Leah","Linnea","Lucas","Madeleine","Magnus","Maja","Malin","Maren","Mari","Maria","Marie","Marius","Markus","Marte","Martin","Martine","Mathias","Mathilde","Mats","Mia","Mikkel","Mina","Natalie","Nikolai","Noah","Nora","Oda","Ole","Oliver","Oskar","Sander","Sandra","Sara","Sebastian","Selma","Silje","Simen","Sindre","Sofie","Sondre","Sunniva","Synne","Thea","Theodor","Thomas","Tiril","Tobias","Tuva","Victoria","Vilde","William"],female:["Amalie","Andrea","Anna","Aurora","Camilla","Celine","Eline","Elise","Emilie","Emma","Frida","Hanna","Hedda","Helene","Ida","Ingrid","Jenny","Julie","Kaja","Karoline","Kristine","Leah","Linnea","Madeleine","Maja","Malin","Maren","Mari","Maria","Marie","Marte","Martine","Mathilde","Mia","Mina","Natalie","Nora","Oda","Sandra","Sara","Selma","Silje","Sofie","Sunniva","Synne","Thea","Tiril","Tuva","Victoria","Vilde"],male:["Adrian","Aksel","Alexander","Anders","Andreas","Benjamin","Daniel","Eirik","Elias","Emil","Erik","Even","Filip","Fredrik","Henrik","Herman","H\xE5kon","Isak","Jakob","Joakim","Johannes","Jonas","Jonathan","J\xF8rgen","Kasper","Kristian","Kristoffer","Lars","Lucas","Magnus","Marius","Markus","Martin","Mathias","Mats","Mikkel","Nikolai","Noah","Ole","Oliver","Oskar","Sander","Sebastian","Simen","Sindre","Sondre","Theodor","Thomas","Tobias","William"]};var D={generic:["Aalerud","Aas","Aasen","Amundsen","Andersen","Andreassen","Andresen","Arnesen","Bakke","Bakken","Berg","Berge","Berntsen","Bjerke","Bj\xF8rnstad","Borge","Carlsen","Christiansen","Dahl","Danielsen","Edvardsen","Eide","Eriksen","Evensen","Finstad","Fjeld","Fossum","Fredriksen","Glosli","Gran","Gundersen","Hagen","Halvorsen","Hansen","Haugen","Haukelids\xE6ter","Henriksen","Holm","Hopland","Huseby","Jacobsen","Jakobsen","Jensen","Johannessen","Johansen","Johnsen","J\xF8rgensen","Karlsen","Kleven","Kristensen","Kristiansen","Kristoffersen","Krogh","Kvarme","Larsen","Lie","Lunde","L\xF8ken","Martinsen","Mathisen","Moe","Moen","Myhrer","Nguyen","Nielsen","Nilsen","Nordby","Nordskaug","Nyg\xE5rd","Olsen","Olstad","Pedersen","Pettersen","Rasmussen","Ruud","Ryan","R\xF8ed","Skoglund","Skuterud","Smedsrud","Smogeli","Solberg","Solheim","Solli","Stensrud","Strand","Svendsen","S\xE6ther","S\xF8rensen","S\xF8rlie","Tangen","Thoresen","Torgersen","Torp","Vedvik","Vegge","Wold","\xD8deg\xE5rd","\xD8stby","\xD8stli"]};var T={generic:[{value:"{{person.last_name.generic}}",weight:8},{value:"{{person.last_name.generic}} {{person.last_name.generic}}",weight:2}]};var j=[{value:"{{person.prefix}} {{person.firstName}} {{person.lastName}}",weight:1},{value:"{{person.firstName}} {{person.lastName}} {{person.suffix}}",weight:1},{value:"{{person.firstName}} {{person.lastName}}",weight:9}];var K={generic:["Dr.","Prof."],female:["Dr.","Prof."],male:["Dr.","Prof."]};var B=["Jr.","Sr.","I","II","III","IV","V"];var $={first_name:H,last_name:D,last_name_pattern:T,name:j,prefix:K,suffix:B},C=$;var L=["########","## ## ## ##","### ## ###","+47 ## ## ## ##"];var E=["+47########"];var P=["## ## ## ##"];var ee={human:L,international:E,national:P},F=ee;var me={format:F},J=me;var O=[{symbol:"H",name:"Hydrogen",atomicNumber:1},{symbol:"He",name:"Helium",atomicNumber:2},{symbol:"Li",name:"Litium",atomicNumber:3},{symbol:"Be",name:"Beryllium",atomicNumber:4},{symbol:"B",name:"Bor",atomicNumber:5},{symbol:"C",name:"Karbon",atomicNumber:6},{symbol:"N",name:"Nitrogen",atomicNumber:7},{symbol:"O",name:"Oksygen",atomicNumber:8},{symbol:"F",name:"Fluor",atomicNumber:9},{symbol:"Ne",name:"Neon",atomicNumber:10},{symbol:"Na",name:"Natrium",atomicNumber:11},{symbol:"Mg",name:"Magnesium",atomicNumber:12},{symbol:"Al",name:"Aluminium",atomicNumber:13},{symbol:"Si",name:"Silisium",atomicNumber:14},{symbol:"P",name:"Fosfor",atomicNumber:15},{symbol:"S",name:"Svovel",atomicNumber:16},{symbol:"Cl",name:"Klor",atomicNumber:17},{symbol:"Ar",name:"Argon",atomicNumber:18},{symbol:"K",name:"Kalium",atomicNumber:19},{symbol:"Ca",name:"Kalsium",atomicNumber:20},{symbol:"Sc",name:"Scandium",atomicNumber:21},{symbol:"Ti",name:"Titan",atomicNumber:22},{symbol:"V",name:"Vanadium",atomicNumber:23},{symbol:"Cr",name:"Krom",atomicNumber:24},{symbol:"Mn",name:"Mangan",atomicNumber:25},{symbol:"Fe",name:"Jern",atomicNumber:26},{symbol:"Co",name:"Kobolt",atomicNumber:27},{symbol:"Ni",name:"Nikkel",atomicNumber:28},{symbol:"Cu",name:"Kobber",atomicNumber:29},{symbol:"Zn",name:"Sink",atomicNumber:30},{symbol:"Ga",name:"Gallium",atomicNumber:31},{symbol:"Ge",name:"Germanium",atomicNumber:32},{symbol:"As",name:"Arsen",atomicNumber:33},{symbol:"Se",name:"Selen",atomicNumber:34},{symbol:"Br",name:"Brom",atomicNumber:35},{symbol:"Kr",name:"Krypton",atomicNumber:36},{symbol:"Rb",name:"Rubidium",atomicNumber:37},{symbol:"Sr",name:"Strontium",atomicNumber:38},{symbol:"Y",name:"Yttrium",atomicNumber:39},{symbol:"Zr",name:"Zirkonium",atomicNumber:40},{symbol:"Nb",name:"Niob",atomicNumber:41},{symbol:"Mo",name:"Molybden",atomicNumber:42},{symbol:"Tc",name:"Technetium",atomicNumber:43},{symbol:"Ru",name:"Ruthenium",atomicNumber:44},{symbol:"Rh",name:"Rhodium",atomicNumber:45},{symbol:"Pd",name:"Palladium",atomicNumber:46},{symbol:"Ag",name:"S\xF8lv",atomicNumber:47},{symbol:"Cd",name:"Kadmium",atomicNumber:48},{symbol:"In",name:"Indium",atomicNumber:49},{symbol:"Sn",name:"Tinn",atomicNumber:50},{symbol:"Sb",name:"Antimon",atomicNumber:51},{symbol:"Te",name:"Tellur",atomicNumber:52},{symbol:"I",name:"Jod",atomicNumber:53},{symbol:"Xe",name:"Xenon",atomicNumber:54},{symbol:"Cs",name:"Cesium",atomicNumber:55},{symbol:"Ba",name:"Barium",atomicNumber:56},{symbol:"La",name:"Lantan",atomicNumber:57},{symbol:"Ce",name:"Cerium",atomicNumber:58},{symbol:"Pr",name:"Praseodym",atomicNumber:59},{symbol:"Nd",name:"Neodym",atomicNumber:60},{symbol:"Pm",name:"Promethium",atomicNumber:61},{symbol:"Sm",name:"Samarium",atomicNumber:62},{symbol:"Eu",name:"Europium",atomicNumber:63},{symbol:"Gd",name:"Gadolinium",atomicNumber:64},{symbol:"Tb",name:"Terbium",atomicNumber:65},{symbol:"Dy",name:"Dysprosium",atomicNumber:66},{symbol:"Ho",name:"Holmium",atomicNumber:67},{symbol:"Er",name:"Erbium",atomicNumber:68},{symbol:"Tm",name:"Thulium",atomicNumber:69},{symbol:"Yb",name:"Ytterbium",atomicNumber:70},{symbol:"Lu",name:"Lutetium",atomicNumber:71},{symbol:"Hf",name:"Hafnium",atomicNumber:72},{symbol:"Ta",name:"Tantal",atomicNumber:73},{symbol:"W",name:"Wolfram",atomicNumber:74},{symbol:"Re",name:"Rhenium",atomicNumber:75},{symbol:"Os",name:"Osmium",atomicNumber:76},{symbol:"Ir",name:"Iridium",atomicNumber:77},{symbol:"Pt",name:"Platina",atomicNumber:78},{symbol:"Au",name:"Gull",atomicNumber:79},{symbol:"Hg",name:"Kvikks\xF8lv",atomicNumber:80},{symbol:"Tl",name:"Thallium",atomicNumber:81},{symbol:"Pb",name:"Bly",atomicNumber:82},{symbol:"Bi",name:"Vismut",atomicNumber:83},{symbol:"Po",name:"Polonium",atomicNumber:84},{symbol:"At",name:"Astat",atomicNumber:85},{symbol:"Rn",name:"Radon",atomicNumber:86},{symbol:"Fr",name:"Francium",atomicNumber:87},{symbol:"Ra",name:"Radium",atomicNumber:88},{symbol:"Ac",name:"Actinium",atomicNumber:89},{symbol:"Th",name:"Thorium",atomicNumber:90},{symbol:"Pa",name:"Protactinium",atomicNumber:91},{symbol:"U",name:"Uran",atomicNumber:92},{symbol:"Np",name:"Neptunium",atomicNumber:93},{symbol:"Pu",name:"Plutonium",atomicNumber:94},{symbol:"Am",name:"Americium",atomicNumber:95},{symbol:"Cm",name:"Curium",atomicNumber:96},{symbol:"Bk",name:"Berkelium",atomicNumber:97},{symbol:"Cf",name:"Californium",atomicNumber:98},{symbol:"Es",name:"Einsteinium",atomicNumber:99},{symbol:"Fm",name:"Fermium",atomicNumber:100},{symbol:"Md",name:"Mendelevium",atomicNumber:101},{symbol:"No",name:"Nobelium",atomicNumber:102},{symbol:"Lr",name:"Lawrencium",atomicNumber:103},{symbol:"Rf",name:"Rutherfordium",atomicNumber:104},{symbol:"Db",name:"Dubnium",atomicNumber:105},{symbol:"Sg",name:"Seaborgium",atomicNumber:106},{symbol:"Bh",name:"Bohrium",atomicNumber:107},{symbol:"Hs",name:"Hassium",atomicNumber:108},{symbol:"Mt",name:"Meitnerium",atomicNumber:109},{symbol:"Ds",name:"Darmstadtium",atomicNumber:110},{symbol:"Rg",name:"R\xF8ntgenium",atomicNumber:111},{symbol:"Cn",name:"Copernicium",atomicNumber:112},{symbol:"Nh",name:"Nihonium",atomicNumber:113},{symbol:"Fl",name:"Flerovium",atomicNumber:114},{symbol:"Mc",name:"Moscovium",atomicNumber:115},{symbol:"Lv",name:"Livermorium",atomicNumber:116},{symbol:"Ts",name:"Tenness",atomicNumber:117},{symbol:"Og",name:"Oganesson",atomicNumber:118}];var R=[{name:"meter",symbol:"m"},{name:"sekund",symbol:"s"},{name:"mole",symbol:"mol"},{name:"ampere",symbol:"A"},{name:"kelvin",symbol:"K"},{name:"candela",symbol:"cd"},{name:"kilogram",symbol:"kg"},{name:"radian",symbol:"rad"},{name:"hertz",symbol:"Hz"},{name:"newton",symbol:"N"},{name:"pascal",symbol:"Pa"},{name:"joule",symbol:"J"},{name:"watt",symbol:"W"},{name:"coulomb",symbol:"C"},{name:"volt",symbol:"V"},{name:"ohm",symbol:"\u03A9"},{name:"tesla",symbol:"T"},{name:"grad celsius",symbol:"\xB0C"},{name:"lumen",symbol:"lm"},{name:"becquerel",symbol:"Bq"},{name:"gray",symbol:"Gy"},{name:"sievert",symbol:"Sv"}];var ae={chemical_element:O,unit:R},I=ae;var G=["aktuell","alvorlig","ansvarlig","ber\xF8mt","betydelig","bevisst","bred","dum","dyp","ekkel","eksisterende","ekte","enkel","ensom","falsk","fast","felles","fersk","fjern","flau","f\xF8lsom","forsiktig","fremmed","fryktelig","glatt","gravid","grunnleggende","heldig","hemmelig","hjelpsom","hyppig","imponerende","kjedelig","kul","langsom","lat","lav","lignende","l\xF8s","lovlig","lykkelig","lys","menneskelig","merkelig","midlertidig","mistenkelig","modig","m\xF8rk","morsom","motsatt","mulig","naturlig","n\xE5v\xE6rende","n\xF8dvendig","n\xF8yaktig","nysgjerrig","nyttig","offentlig","opprinnelig","ordentlig","plutselig","r\xE5","rask","regelmessig","ren","rettferdig","rimelig","rund","ryddig","sannsynlig","selvsikker","sint","skarp","skikkelig","skyldig","smal","s\xF8t","spennende","stille","stolt","stram","streng","stygg","sulten","sunn","synlig","tilgjengelig","tilstrekkelig","tung","tynn","uavhengig","ujevn","ulovlig","ulykkelig","umiddelbar","urettferdig","vellykket","vennlig","verdifull","vill","villig","voksen","\xE6rlig","\xE5pen","\xE5penbar"];var V=["eller","for","men","og","s\xE5"];var w=["aha","au","bravo","b\xF8","fy","fysj","huff","hurra","h\xE6","jippi","nam","oi","ops","pytt","p\xF8h","\xE5","\xE6sj"];var oe={adjective:G,conjunction:V,interjection:w},W=oe;var re={color:r,commerce:i,company:s,internet:b,location:_,metadata:A,person:C,phone_number:J,science:I,word:W},Y= exports.a =re;var Gm=new (0, _chunkCU2NFM6Ucjs.n)({locale:[Y,_chunk55MSYLT2cjs.a,_chunkCU2NFM6Ucjs.o]});exports.a = Y; exports.b = Gm;