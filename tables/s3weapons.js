var bingoList = [];

const weaponMap = new Map();

var frontLineShooterList = [
    {image: "./weapons/001.png", ver: 1, types: "Frontline",       name: ".52 Gal"},
    {image: "./weapons/003.png", ver: 1, types: "Frontline",       name: "Aerospray MG"},
    {image: "./weapons/030.png", ver: 1, types: "Frontline",       name: "N-ZAP '85"},
    {image: "./weapons/039.png", ver: 1, types: "Frontline",       name: "Splash-o-matic"},
    {image: "./weapons/050.png", ver: 1, types: "Frontline",       name: "Sploosh-o-matic"},
    {image: "./weapons/057.png", ver: 2, types: "Frontline",       name: "Aerospray RG"},
    {image: "./weapons/071.png", ver: 3, types: "Frontline",       name: "Neo Sploosh-o-matic"},
    {image: "./weapons/078.png", ver: 3, types: "Frontline",       name: "Neo Splash-o-matic"},
    {image: "./weapons/079.png", ver: 3, types: "Frontline",       name: "N-ZAP '89"},
    {image: "./weapons/117.png", ver: 7, types: "Frontline",       name: ".52 Gal Deco"},
];

var backLineShooterList = [
    {image: "./weapons/002.png", ver: 1, types: "Backline",        name: ".96 Gal"},
    {image: "./weapons/021.png", ver: 1, types: "Backline",        name: "H-3 Nozzlenose"},
    {image: "./weapons/026.png", ver: 1, types: "Backline",        name: "Jet Squelcher"},
    {image: "./weapons/027.png", ver: 1, types: "Backline",        name: "L-3 Nozzlenose"},
    {image: "./weapons/051.png", ver: 1, types: "Backline",        name: "Squeezer"},
    {image: "./weapons/069.png", ver: 3, types: "Backline",        name: "Custom Jet Squelcher"},
    {image: "./weapons/070.png", ver: 3, types: "Backline",        name: "L-3 Nozzlenose D"},
    {image: "./weapons/075.png", ver: 3, types: "Backline",        name: ".96 Gal Deco"},
    {image: "./weapons/081.png", ver: 4, types: "Backline",        name: "H-3 Nozzlenose D"},
    {image: "./weapons/108.png", ver: 6, types: "Backline",        name: "Foil Squeezer"},
];

var splattershotList = [
    {image: "./weapons/047.png", ver: 1, types: "Splattershot",    name: "Splattershot"},
    {image: "./weapons/048.png", ver: 1, types: "Splattershot",    name: "Splattershot Jr."},
    {image: "./weapons/049.png", ver: 1, types: "Splattershot",    name: "Splattershot Pro"},
    {image: "./weapons/060.png", ver: 2, types: "Splattershot",    name: "Custom Splattershot Jr."},
    {image: "./weapons/062.png", ver: 2, types: "Splattershot",    name: "Forge Splattershot Pro"},
    {image: "./weapons/066.png", ver: 2, types: "Splattershot",    name: "Splattershot Nova"},
    {image: "./weapons/067.png", ver: 2, types: "Splattershot",    name: "Tentatek Splattershot"},
    {image: "./weapons/087.png", ver: 4, types: "Splattershot",    name: "Annaki Splattershot Nova"},
];

var splatlingList = [
    {image: "./weapons/004.png", ver: 1, types: "Splatling",       name: "Ballpoint Splatling"},
    {image: "./weapons/022.png", ver: 1, types: "Splatling",       name: "Heavy Splatling"},
    {image: "./weapons/024.png", ver: 1, types: "Splatling",       name: "Hydra Splatling"},
    {image: "./weapons/029.png", ver: 1, types: "Splatling",       name: "Mini Splatling"},
    {image: "./weapons/031.png", ver: 1, types: "Splatling",       name: "Nautilus 47"},
    {image: "./weapons/068.png", ver: 2, types: "Splatling",       name: "Zink Mini Splatling"},
    {image: "./weapons/090.png", ver: 4, types: "Splatling",       name: "Heavy Splatling Deco"},
    {image: "./weapons/098.png", ver: 5, types: "Splatling",       name: "Ballpoint Splatling Nouveau"},
    {image: "./weapons/099.png", ver: 5, types: "Splatling",       name: "Heavy Edit Splatling"},
    {image: "./weapons/120.png", ver: 7, types: "Splatling",       name: "Nautilus 79"},
];

var chargerList = [
    {image: "./weapons/005.png", ver: 1, types: "Charger",         name: "Bamboozler 14 Mk I"},
    {image: "./weapons/010.png", ver: 1, types: "Charger",         name: "Classic Squiffer"},
    {image: "./weapons/015.png", ver: 1, types: "Charger",         name: "E-liter 4K"},
    {image: "./weapons/016.png", ver: 1, types: "Charger",         name: "E-liter 4K Scope"},
    {image: "./weapons/020.png", ver: 1, types: "Charger",         name: "Goo Tuber"},
    {image: "./weapons/041.png", ver: 1, types: "Charger",         name: "Splat Charger"},
    {image: "./weapons/046.png", ver: 1, types: "Charger",         name: "Splatterscope"},
    {image: "./weapons/056.png", ver: 2, types: "Charger",         name: "Snipewriter 5H"},
    {image: "./weapons/073.png", ver: 3, types: "Charger",         name: "Z+F Splat Charger"},
    {image: "./weapons/074.png", ver: 3, types: "Charger",         name: "Z+F Splatterscope"},
    {image: "./weapons/093.png", ver: 5, types: "Charger",         name: "Custom Goo Tuber"},
    {image: "./weapons/104.png", ver: 6, types: "Charger",         name: "Snipewriter 5B"},
    {image: "./weapons/110.png", ver: 7, types: "Charger",         name: "Custom E-liter 4K"},
    {image: "./weapons/111.png", ver: 7, types: "Charger",         name: "Custom E-liter 4K Scope"},
    {image: "./weapons/112.png", ver: 7, types: "Charger",         name: "New Squiffer"},
];

var blasterList = [
    {image: "./weapons/006.png", ver: 1, types: "Blaster",         name: "Blaster"},
    {image: "./weapons/009.png", ver: 1, types: "Blaster",         name: "Clash Blaster"},
    {image: "./weapons/028.png", ver: 1, types: "Blaster",         name: "Luna Blaster"},
    {image: "./weapons/033.png", ver: 1, types: "Blaster",         name: "Range Blaster"},
    {image: "./weapons/034.png", ver: 1, types: "Blaster",         name: "Rapid Blaster"},
    {image: "./weapons/035.png", ver: 1, types: "Blaster",         name: "Rapid Blaster Pro"},
    {image: "./weapons/064.png", ver: 2, types: "Blaster",         name: "Luna Blaster Neo"},
    {image: "./weapons/072.png", ver: 3, types: "Blaster",         name: "Rapid Blaster Deco"},
    {image: "./weapons/076.png", ver: 3, types: "Blaster",         name: "Clash Blaster Neo"},
    {image: "./weapons/082.png", ver: 4, types: "Blaster",         name: "S-BLAST '92"},
    {image: "./weapons/084.png", ver: 4, types: "Blaster",         name: "Rapid Blaster Pro Deco"},
    {image: "./weapons/101.png", ver: 6, types: "Blaster",         name: "Custom Blaster"},
    {image: "./weapons/102.png", ver: 6, types: "Blaster",         name: "S-BLAST '91"},
];

var slosherList = [
    {image: "./weapons/007.png", ver: 1, types: "Slosher",         name: "Bloblobber"},
    {image: "./weapons/017.png", ver: 1, types: "Slosher",         name: "Explosher"},
    {image: "./weapons/037.png", ver: 1, types: "Slosher",         name: "Slosher"},
    {image: "./weapons/038.png", ver: 1, types: "Slosher",         name: "Sloshing Machine"},
    {image: "./weapons/053.png", ver: 1, types: "Slosher",         name: "Tri-Slosher"},
    {image: "./weapons/065.png", ver: 2, types: "Slosher",         name: "Slosher Deco"},
    {image: "./weapons/080.png", ver: 3, types: "Slosher",         name: "Tri-Slosher Nouveau"},
    {image: "./weapons/096.png", ver: 5, types: "Slosher",         name: "Bloblobber Deco"},
    {image: "./weapons/097.png", ver: 5, types: "Slosher",         name: "Dread Wringer"},
    {image: "./weapons/119.png", ver: 7, types: "Slosher",         name: "Custom Explosher"},
    {image: "./weapons/118.png", ver: 7, types: "Slosher",         name: "Dread Wringer D"},
];

var dualiesList = [
    {image: "./weapons/011.png", ver: 1, types: "Dualies",         name: "Dapple Dualies"},
    {image: "./weapons/012.png", ver: 1, types: "Dualies",         name: "Dark Tetra Dualies"},
    {image: "./weapons/013.png", ver: 1, types: "Dualies",         name: "Dualie Squelchers"},
    {image: "./weapons/019.png", ver: 1, types: "Dualies",         name: "Glooga Dualies"},
    {image: "./weapons/042.png", ver: 1, types: "Dualies",         name: "Splat Dualies"},
    {image: "./weapons/061.png", ver: 2, types: "Dualies",         name: "Dapple Dualies Nouveau"},
    {image: "./weapons/085.png", ver: 4, types: "Dualies",         name: "Light Tetra Dualies"},
    {image: "./weapons/089.png", ver: 4, types: "Dualies",         name: "Custom Dualie Squelchers"},
    {image: "./weapons/105.png", ver: 6, types: "Dualies",         name: "Enperry Splat Dualies"},
    {image: "./weapons/113.png", ver: 7, types: "Dualies",         name: "Glooga Dualies Deco"},
    {image: "./weapons/114.png", ver: 7, types: "Dualies",         name: "Douser Dualies FF"},
];

var brushRollerList = [
    {image: "./weapons/025.png", ver: 1, types: "Brush",           name: "Inkbrush"},
    {image: "./weapons/032.png", ver: 1, types: "Brush",           name: "Octobrush"},
    {image: "./weapons/008.png", ver: 1, types: "Roller",          name: "Carbon Roller"},
    {image: "./weapons/014.png", ver: 1, types: "Roller",          name: "Dynamo Roller"},
    {image: "./weapons/018.png", ver: 1, types: "Roller",          name: "Flingza Roller"},
    {image: "./weapons/043.png", ver: 1, types: "Roller",          name: "Splat Roller"},
    {image: "./weapons/058.png", ver: 2, types: "Roller",          name: "Big Swig Roller"},
    {image: "./weapons/059.png", ver: 2, types: "Roller",          name: "Carbon Roller Deco"},
    {image: "./weapons/063.png", ver: 2, types: "Brush",           name: "Inkbrush Nouveau"},
    {image: "./weapons/077.png", ver: 3, types: "Roller",          name: "Krak-On Splat Roller"},
    {image: "./weapons/083.png", ver: 4, types: "Brush",           name: "Painbrush"},
    {image: "./weapons/091.png", ver: 4, types: "Roller",          name: "Big Swig Roller Express"},
    {image: "./weapons/092.png", ver: 5, types: "Brush",           name: "Octobrush Nouveau"},
    {image: "./weapons/094.png", ver: 5, types: "Roller",          name: "Gold Dynamo Roller"},
    {image: "./weapons/103.png", ver: 6, types: "Brush",           name: "Painbrush Nouveau"},
    {image: "./weapons/115.png", ver: 7, types: "Roller",          name: "Foil Flingza Roller"},
];

var miscList = [
    {image: "./weapons/044.png", ver: 1, types: "Splatana",        name: "Splatana Stamper"},
    {image: "./weapons/045.png", ver: 1, types: "Splatana",        name: "Splatana Wiper"},
    {image: "./weapons/036.png", ver: 1, types: "Stringer",        name: "REEF-LUX 450"},
    {image: "./weapons/054.png", ver: 1, types: "Stringer",        name: "Tri-Stringer"},
    {image: "./weapons/040.png", ver: 1, types: "Brella",          name: "Splat Brella"},
    {image: "./weapons/052.png", ver: 1, types: "Brella",          name: "Tenta Brella"},
    {image: "./weapons/055.png", ver: 1, types: "Brella",          name: "Undercover Brella"},
    {image: "./weapons/086.png", ver: 4, types: "Brella",          name: "Tenta Sorella Brella"},
    {image: "./weapons/088.png", ver: 4, types: "Splatana",        name: "Splatana Wiper Deco"},
    {image: "./weapons/095.png", ver: 5, types: "Brella",          name: "Sorella Splat Brella"},
    {image: "./weapons/100.png", ver: 5, types: "Stringer",        name: "Inkline Tri-Stringer"},
    {image: "./weapons/109.png", ver: 6, types: "Stringer",        name: "REEF-LUX 450 Deco"},
    {image: "./weapons/107.png", ver: 6, types: "Brella",          name: "Sorella Undercover Brella"},
    {image: "./weapons/106.png", ver: 6, types: "Splatana",        name: "Neo Splatana Stamper"},
    {image: "./weapons/116.png", ver: 7, types: "Brella",          name: "Recycled Brella 23 Mk I"},
]

weaponMap.set('Frontline', frontLineShooterList);
weaponMap.set('Backline', backLineShooterList);
weaponMap.set('Splattershot', splattershotList);
weaponMap.set('Splatling', splatlingList);
weaponMap.set('Charger', chargerList);
weaponMap.set('Blaster', blasterList);
weaponMap.set('Slosher', slosherList);
weaponMap.set('Dualies', dualiesList);
weaponMap.set('BrushRoller', brushRollerList);
weaponMap.set('Misc', miscList);

$(function() { srl.bingo(weaponMap); });