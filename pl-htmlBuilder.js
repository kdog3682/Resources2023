const HTML_CLOSING_TAGS = [
    "code",
    "html",
    "pattern",
    "path",
    "foreignObject",
    "table",
    "th",
    "td",
    "tr",
    "thead",
    "tbody",
    "defs",
    "li",
    "ol",
    "ul",
    "slot",
    "path",
    "svg",
    "g",
    "style",
    "meta",
    "ol",
    "footer",
    "header",
    "p",
    "pre",
    "script",
    "body",
    "ul",
    "li",
    "p",
    "textarea",
    "button",
    "section",
    "fieldset",
    "legend",
    "text",
    "div",
    "circle",
    "rect",
    "h1",
    "h2",
    "h3",
    "main",
    "blockquote",
    "span",
    "article",
    "body",
    "html",
    "head",
    "template",
    "h4",
    "h5",
    "h6"
];

const vmap = {
    if: "v-if",
    ref: "ref",
    click: "@click",
    mouseover: "@mouseover",
    mouseleave: "@mouseleave",
    mouseout: "@mouseout",
    input: "@input",
    change: "@change",
    enter: "@keydown.enter",
    keydown: "@keydown",
    bind: "v-bind",
    show: "v-show",
    if: "v-if",
    elif: "v-else-if",
    "v-if": "v-if",
    "v-else-if": "v-else-if",
    "v-else": "v-else",
    else: "v-else",
    class: "class",
    key: ":key",
    for: "v-for",
    html: "v-html",
    model: "v-model",
    slot: "v-slot"
};
const HTML_NO_CLOSERS = [

"i",
    "input",
    //"line",
    //"hr",
    "br",
    "stop",
    "link",
    "img",
    "meta"
    //"circle",
    //"rect",
];
const roygbiv = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];
const materialColors = {
    red: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        a100: "#ff8a80",
        a200: "#ff5252",
        a400: "#ff1744",
        a700: "#d50000"
    },
    pink: {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        a100: "#ff80ab",
        a200: "#ff4081",
        a400: "#f50057",
        a700: "#c51162"
    },
    purple: {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        a100: "#ea80fc",
        a200: "#e040fb",
        a400: "#d500f9",
        a700: "#aa00ff"
    },
    deepPurple: {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
        a100: "#b388ff",
        a200: "#7c4dff",
        a400: "#651fff",
        a700: "#6200ea"
    },
    indigo: {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        a100: "#8c9eff",
        a200: "#536dfe",
        a400: "#3d5afe",
        a700: "#304ffe"
    },
    blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        a100: "#82b1ff",
        a200: "#448aff",
        a400: "#2979ff",
        a700: "#2962ff"
    },
    lightBlue: {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        a100: "#80d8ff",
        a200: "#40c4ff",
        a400: "#00b0ff",
        a700: "#0091ea"
    },
    cyan: {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        a100: "#84ffff",
        a200: "#18ffff",
        a400: "#00e5ff",
        a700: "#00b8d4"
    },
    teal: {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        a100: "#a7ffeb",
        a200: "#64ffda",
        a400: "#1de9b6",
        a700: "#00bfa5"
    },
    green: {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        a100: "#b9f6ca",
        a200: "#69f0ae",
        a400: "#00e676",
        a700: "#00c853"
    },
    lightGreen: {
        50: "#f1f8e9",
        100: "#dcedc8",
        200: "#c5e1a5",
        300: "#aed581",
        400: "#9ccc65",
        500: "#8bc34a",
        600: "#7cb342",
        700: "#689f38",
        800: "#558b2f",
        900: "#33691e",
        a100: "#ccff90",
        a200: "#b2ff59",
        a400: "#76ff03",
        a700: "#64dd17"
    },
    lime: {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
        a100: "#f4ff81",
        a200: "#eeff41",
        a400: "#c6ff00",
        a700: "#aeea00"
    },
    yellow: {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
        a100: "#ffff8d",
        a200: "#ffff00",
        a400: "#ffea00",
        a700: "#ffd600"
    },
    amber: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
        a100: "#ffe57f",
        a200: "#ffd740",
        a400: "#ffc400",
        a700: "#ffab00"
    },
    orange: {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        a100: "#ffd180",
        a200: "#ffab40",
        a400: "#ff9100",
        a700: "#ff6d00"
    },
    deepOrange: {
        50: "#fbe9e7",
        100: "#ffccbc",
        200: "#ffab91",
        300: "#ff8a65",
        400: "#ff7043",
        500: "#ff5722",
        600: "#f4511e",
        700: "#e64a19",
        800: "#d84315",
        900: "#bf360c",
        a100: "#ff9e80",
        a200: "#ff6e40",
        a400: "#ff3d00",
        a700: "#dd2c00"
    },
    brown: {
        50: "#efebe9",
        100: "#d7ccc8",
        200: "#bcaaa4",
        300: "#a1887f",
        400: "#8d6e63",
        500: "#795548",
        600: "#6d4c41",
        700: "#5d4037",
        800: "#4e342e",
        900: "#3e2723"
    },
    grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121"
    },
    blueGrey: {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238"
    }
};

const GoogleFontAliases = {
    code: "source-code-pro",
    "noto-chinese": "Noto Serif SC",
    crimson: "Crimson Text",
    poppins: "Poppins",
    montserrat: "Montserrat",
    alegreya: "Alegreya",
    playfair: "Playfair Display",
    bubbly: "Playfair Display",
    open: "Open Sans",
    os: "Open Sans",
    lato: "Lato",
    montserrat: "Montserrat",
    raleway: "Raleway",
    source: "Source Sans Pro",
    noto: "Noto Sans",
    chinese: "Noto Serif SC",
    chiserif: "Noto Serif SC",
    chisans: "Noto Sans SC",
    noji: "Noto Emoji",
    crimson: "Crimson Text",
    ubuntu: "Ubuntu",
    poppins: "Poppins",
    oswald: "Oswald",
    slab: "Roboto Slab",
    roboto: "Roboto",
    merriweather: "Merriweather",
    merry: "Merriweather",
    playfair: "Playfair Display",
    pt: "PT Serif",
    lora: "Lora",
    inter: "Inter",
    georgia: "Georgia",
    times: "Times New Roman",
    abril: "Abril Fatface",
    pacifico: "Pacifico",
    inconsolata: "Inconsolata",
    "source-code": "Source Code Pro",
    fira: "Fira Code",
    comic: "Comic Sans MS",
    nans: "Noto Sans",
    OT: "Old Standard TT",
    playfair: "Playfair Display",
    raleway: "Raleway",
    sourcepro: "Source Sans Pro",
    ubuntu: "Ubuntu",
    wsans: "Work Sans",
    algereya: "Alegreya",
    cabin: "Cabin",
    droid: "Droid Serif",
    exo: "Exo 2",
    garamond: "Garamond",
    josefin: "Josefin Sans",
    mw: "Merriweather",
    nunsans: "Nunito Sans",
    ptsans: "PT Sans",
    amatic: "Amatic SC",
    archivo: "Archivo Narrow",
    BK: "Baskerville",
    CR: "Cormorant",
    didot: "Didot",
    garamond: "EB Garamond",
    FT: "Futura",
    GH: "Gochi Hand",
    IM: "Impact",
    LB: "Lobster",
    lobster: "Lobster",
    MS: "Monospace",
    PC: "Pacifico",
    PL: "Palatino Linotype",
    PLY: "Play",
    QK: "Quicksand",
    SF: "Satisfy",
    SU: "Segoe UI",
    TR: "Trebuchet MS",
    VK: "Vollkorn"
};

// Define a dictionary object
const nojiAliases = {
    grinning: "😀",
    smiling: "😀",
    grin: "😁",
    beaming: "😁",
    joy: "😂",
    "tears of joy": "😂",
    laughing: "😂",
    rofl: "🤣",
    "rolling on the floor laughing": "🤣",
    smile: "😃",
    happy: "😃",
    "heart eyes": "🥰",
    skull: "💀",
    "victory hand": "✌️",
    "palm tree": "🌴",
    turtle: "🐢",
    goat: "🐐",
    mushroom: "🍄",
    "soccer ball": "⚽",
    beer: "🍻",
    crown: "👑",
    camera: "📸",
    "grimacing face": "😬",
    eyes: "👀",
    "police car light": "🚨",
    house: "🏡",
    dove: "🕊️",
    trophy: "🏆",
    "smiling cat with heart-eyes": "😻",
    "glowing star": "🌟",
    "nazar amulet": "🧿",
    "four leaf clover": "🍀",
    "artist palette": "🎨",
    "steaming bowl": "🍜"
    // Add more aliases and corresponding Noto Emoji characters here...
};

const htmlTags = [
    "thead",
    "tbody",
    "!DOCTYPE",
    "html",
    "template",
    "head",
    "title",
    "meta",
    "body",
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    //"footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "a",
    "img",
    "ul",
    "ol",
    "li",
    "table",
    "tr",
    "th",
    "td",
    "form",
    "input",
    "textarea",
    "button",
    "label",
    "select",
    "option",
    "audio",
    "video",
    "canvas",
    "svg",
    "iframe",
    "script",
    "style",
    "pre"
];

const javascriptNativeFunctions = [
    Number,
    String,
    Object,
    Array,
    Promise,
    Set,
    Function
];

var flatColorBrewer = {
    OrRd: [
        "#fff7ec",
        "#fee8c8",
        "#fdd49e",
        "#fdbb84",
        "#fc8d59",
        "#ef6548",
        "#d7301f",
        "#b30000",
        "#7f0000"
    ],
    PuBu: [
        "#fff7fb",
        "#ece7f2",
        "#d0d1e6",
        "#a6bddb",
        "#74a9cf",
        "#3690c0",
        "#0570b0",
        "#045a8d",
        "#023858"
    ],
    BuPu: [
        "#f7fcfd",
        "#e0ecf4",
        "#bfd3e6",
        "#9ebcda",
        "#8c96c6",
        "#8c6bb1",
        "#88419d",
        "#810f7c",
        "#4d004b"
    ],
    Oranges: [
        "#fff5eb",
        "#fee6ce",
        "#fdd0a2",
        "#fdae6b",
        "#fd8d3c",
        "#f16913",
        "#d94801",
        "#a63603",
        "#7f2704"
    ],
    BuGn: [
        "#f7fcfd",
        "#e5f5f9",
        "#ccece6",
        "#99d8c9",
        "#66c2a4",
        "#41ae76",
        "#238b45",
        "#006d2c",
        "#00441b"
    ],
    YlOrBr: [
        "#ffffe5",
        "#fff7bc",
        "#fee391",
        "#fec44f",
        "#fe9929",
        "#ec7014",
        "#cc4c02",
        "#993404",
        "#662506"
    ],
    YlGn: [
        "#ffffe5",
        "#f7fcb9",
        "#d9f0a3",
        "#addd8e",
        "#78c679",
        "#41ab5d",
        "#238443",
        "#006837",
        "#004529"
    ],
    Reds: [
        "#fff5f0",
        "#fee0d2",
        "#fcbba1",
        "#fc9272",
        "#fb6a4a",
        "#ef3b2c",
        "#cb181d",
        "#a50f15",
        "#67000d"
    ],
    RdPu: [
        "#fff7f3",
        "#fde0dd",
        "#fcc5c0",
        "#fa9fb5",
        "#f768a1",
        "#dd3497",
        "#ae017e",
        "#7a0177",
        "#49006a"
    ],
    Greens: [
        "#f7fcf5",
        "#e5f5e0",
        "#c7e9c0",
        "#a1d99b",
        "#74c476",
        "#41ab5d",
        "#238b45",
        "#006d2c",
        "#00441b"
    ],
    YlGnBu: [
        "#ffffd9",
        "#edf8b1",
        "#c7e9b4",
        "#7fcdbb",
        "#41b6c4",
        "#1d91c0",
        "#225ea8",
        "#253494",
        "#081d58"
    ],
    Purples: [
        "#fcfbfd",
        "#efedf5",
        "#dadaeb",
        "#bcbddc",
        "#9e9ac8",
        "#807dba",
        "#6a51a3",
        "#54278f",
        "#3f007d"
    ],
    GnBu: [
        "#f7fcf0",
        "#e0f3db",
        "#ccebc5",
        "#a8ddb5",
        "#7bccc4",
        "#4eb3d3",
        "#2b8cbe",
        "#0868ac",
        "#084081"
    ],
    Greys: [
        "#ffffff",
        "#f0f0f0",
        "#d9d9d9",
        "#bdbdbd",
        "#969696",
        "#737373",
        "#525252",
        "#252525",
        "#000000"
    ],
    YlOrRd: [
        "#ffffcc",
        "#ffeda0",
        "#fed976",
        "#feb24c",
        "#fd8d3c",
        "#fc4e2a",
        "#e31a1c",
        "#bd0026",
        "#800026"
    ],
    PuRd: [
        "#f7f4f9",
        "#e7e1ef",
        "#d4b9da",
        "#c994c7",
        "#df65b0",
        "#e7298a",
        "#ce1256",
        "#980043",
        "#67001f"
    ],
    Blues: [
        "#f7fbff",
        "#deebf7",
        "#c6dbef",
        "#9ecae1",
        "#6baed6",
        "#4292c6",
        "#2171b5",
        "#08519c",
        "#08306b"
    ],
    PuBuGn: [
        "#fff7fb",
        "#ece2f0",
        "#d0d1e6",
        "#a6bddb",
        "#67a9cf",
        "#3690c0",
        "#02818a",
        "#016c59",
        "#014636"
    ],
    Viridis: [
        "#440154",
        "#482777",
        "#3f4a8a",
        "#31678e",
        "#26838f",
        "#1f9d8a",
        "#6cce5a",
        "#b6de2b",
        "#fee825"
    ],
    Spectral: [
        "#9e0142",
        "#d53e4f",
        "#f46d43",
        "#fdae61",
        "#fee08b",
        "#ffffbf",
        "#e6f598",
        "#abdda4",
        "#66c2a5",
        "#3288bd",
        "#5e4fa2"
    ],
    RdYlGn: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee08b",
        "#ffffbf",
        "#d9ef8b",
        "#a6d96a",
        "#66bd63",
        "#1a9850",
        "#006837"
    ],
    RdBu: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#f7f7f7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac",
        "#053061"
    ],
    PiYG: [
        "#8e0152",
        "#c51b7d",
        "#de77ae",
        "#f1b6da",
        "#fde0ef",
        "#f7f7f7",
        "#e6f5d0",
        "#b8e186",
        "#7fbc41",
        "#4d9221",
        "#276419"
    ],
    PRGn: [
        "#40004b",
        "#762a83",
        "#9970ab",
        "#c2a5cf",
        "#e7d4e8",
        "#f7f7f7",
        "#d9f0d3",
        "#a6dba0",
        "#5aae61",
        "#1b7837",
        "#00441b"
    ],
    RdYlBu: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#ffffbf",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4",
        "#313695"
    ],
    BrBG: [
        "#543005",
        "#8c510a",
        "#bf812d",
        "#dfc27d",
        "#f6e8c3",
        "#f5f5f5",
        "#c7eae5",
        "#80cdc1",
        "#35978f",
        "#01665e",
        "#003c30"
    ],
    RdGy: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#ffffff",
        "#e0e0e0",
        "#bababa",
        "#878787",
        "#4d4d4d",
        "#1a1a1a"
    ],
    PuOr: [
        "#7f3b08",
        "#b35806",
        "#e08214",
        "#fdb863",
        "#fee0b6",
        "#f7f7f7",
        "#d8daeb",
        "#b2abd2",
        "#8073ac",
        "#542788",
        "#2d004b"
    ],
    Set2: [
        "#66c2a5",
        "#fc8d62",
        "#8da0cb",
        "#e78ac3",
        "#a6d854",
        "#ffd92f",
        "#e5c494",
        "#b3b3b3"
    ],
    Accent: [
        "#7fc97f",
        "#beaed4",
        "#fdc086",
        "#ffff99",
        "#386cb0",
        "#f0027f",
        "#bf5b17",
        "#666666"
    ],
    Set1: [
        "#e41a1c",
        "#377eb8",
        "#4daf4a",
        "#984ea3",
        "#ff7f00",
        "#ffff33",
        "#a65628",
        "#f781bf",
        "#999999"
    ],
    Set3: [
        "#8dd3c7",
        "#ffffb3",
        "#bebada",
        "#fb8072",
        "#80b1d3",
        "#fdb462",
        "#b3de69",
        "#fccde5",
        "#d9d9d9",
        "#bc80bd",
        "#ccebc5",
        "#ffed6f"
    ],
    Dark2: [
        "#1b9e77",
        "#d95f02",
        "#7570b3",
        "#e7298a",
        "#66a61e",
        "#e6ab02",
        "#a6761d",
        "#666666"
    ],
    Paired: [
        "#a6cee3",
        "#1f78b4",
        "#b2df8a",
        "#33a02c",
        "#fb9a99",
        "#e31a1c",
        "#fdbf6f",
        "#ff7f00",
        "#cab2d6",
        "#6a3d9a",
        "#ffff99",
        "#b15928"
    ],
    Pastel2: [
        "#b3e2cd",
        "#fdcdac",
        "#cbd5e8",
        "#f4cae4",
        "#e6f5c9",
        "#fff2ae",
        "#f1e2cc",
        "#cccccc"
    ],
    Pastel1: [
        "#fbb4ae",
        "#b3cde3",
        "#ccebc5",
        "#decbe4",
        "#fed9a6",
        "#ffffcc",
        "#e5d8bd",
        "#fddaec",
        "#f2f2f2"
    ]
};

const myColors$1 = [
  "aliceblue",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "fuchsia",
  "goldenrod",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lawngreen",
  "lemonchiffon",
  "lightcyan",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "rebeccapurple",
  "rosybrown",
  "royalblue",
  "salmon",
  "seagreen",
  "seashell",
  "springgreen",
  "steelblue",
  "tomato",
];

//console.log(Object.keys(tailwindColors))
//console.log(Object.keys(materialColors))



const indexedMaterialColors = {"red":["#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c","#ff8a80","#ff5252","#ff1744","#d50000"],"pink":["#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f","#ff80ab","#ff4081","#f50057","#c51162"],"purple":["#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c","#ea80fc","#e040fb","#d500f9","#aa00ff"],"deepPurple":["#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92","#b388ff","#7c4dff","#651fff","#6200ea"],"indigo":["#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e","#8c9eff","#536dfe","#3d5afe","#304ffe"],"blue":["#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1","#82b1ff","#448aff","#2979ff","#2962ff"],"lightBlue":["#e1f5fe","#b3e5fc","#81d4fa","#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b","#80d8ff","#40c4ff","#00b0ff","#0091ea"],"cyan":["#e0f7fa","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064","#84ffff","#18ffff","#00e5ff","#00b8d4"],"teal":["#e0f2f1","#b2dfdb","#80cbc4","#4db6ac","#26a69a","#009688","#00897b","#00796b","#00695c","#004d40","#a7ffeb","#64ffda","#1de9b6","#00bfa5"],"green":["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20","#b9f6ca","#69f0ae","#00e676","#00c853"],"lightGreen":["#f1f8e9","#dcedc8","#c5e1a5","#aed581","#9ccc65","#8bc34a","#7cb342","#689f38","#558b2f","#33691e","#ccff90","#b2ff59","#76ff03","#64dd17"],"lime":["#f9fbe7","#f0f4c3","#e6ee9c","#dce775","#d4e157","#cddc39","#c0ca33","#afb42b","#9e9d24","#827717","#f4ff81","#eeff41","#c6ff00","#aeea00"],"yellow":["#fffde7","#fff9c4","#fff59d","#fff176","#ffee58","#ffeb3b","#fdd835","#fbc02d","#f9a825","#f57f17","#ffff8d","#ffff00","#ffea00","#ffd600"],"amber":["#fff8e1","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00","#ffe57f","#ffd740","#ffc400","#ffab00"],"orange":["#fff3e0","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100","#ffd180","#ffab40","#ff9100","#ff6d00"],"deepOrange":["#fbe9e7","#ffccbc","#ffab91","#ff8a65","#ff7043","#ff5722","#f4511e","#e64a19","#d84315","#bf360c","#ff9e80","#ff6e40","#ff3d00","#dd2c00"],"brown":["#efebe9","#d7ccc8","#bcaaa4","#a1887f","#8d6e63","#795548","#6d4c41","#5d4037","#4e342e","#3e2723"],"grey":["#fafafa","#f5f5f5","#eeeeee","#e0e0e0","#bdbdbd","#9e9e9e","#757575","#616161","#424242","#212121"],"blueGrey":["#eceff1","#cfd8dc","#b0bec5","#90a4ae","#78909c","#607d8b","#546e7a","#455a64","#37474f","#263238"]};

const shortMaterialColorAliases = {
  "r": "red",
  "p": "pink",
  "purple": "purple",
  "i": "indigo",
  "b": "blue",
  "lb": "lightBlue",
  "c": "cyan",
  "t": "teal",
  "g": "green",
  "lg": "lightGreen",
  "y": "yellow",
  "a": "amber",
  "o": "orange",
  "do": "deepOrange",
  "grey": "grey",
  "bg": "blueGrey",
};


const allHtmlTags = HTML_NO_CLOSERS.concat(HTML_CLOSING_TAGS);

const terminalColors = {
    BLACK: '\x1b[30m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    YELLOW: '\x1b[33m',
    BLUE: '\x1b[34m',
    RESET: '\x1b[0m',
    BRIGHT: '\x1b[1m',
    BOLD: '\x1b[1m',
};

const assertionErrorMessages = {
    'splitByRegex': {
        default: 'no match',
    },
    'objectGetter': 'Invalid $key to retrieve object',
    'mdComprehensiveVue': {
        default: 'A base component is required as the second arg',
    },
        'CSSBuilder2.build': 'The make fn does not exist',
        QueryList: 'QueryList requires transform()',
        "QueryList.set": 'QueryList requires transform()',
        "VueSetup.getComponent": {
            default: 'x is null',
            template: "The component doesnt exist for key [$key]. Most likely, you forget to register [$key] as an export.",
        },
        'CSSParserBuilder.run.functionWrap': {
            default: `items is empty.
                This happened for the first time on
                Tue 11 Jul 2023 03:59PM.

                The reason was forgot commas @ maxHeight return value in cssApps.js
            `,
        }
};

const huskyColorSchema = [
    {color: 'red'},
    {color: 'red'},
    {color: 'red'},
    {color: 'red'},
    {color: 'red'},
    {color: 'red'},
    {color: 'red'},
];
const colorSchemas = {
    husky: huskyColorSchema,
    asdf: huskyColorSchema,
};

/* @bookmark 1687813851 value */

console.logg = (x) => console.log(stringify(x));
console.sandwich = sandwichLog;
function sandwichLog(x, header) {
    if (header) {
        header += ' ';
    } else {
        header = 'Sandwich Log ';
    }
    const a = header + '-'.repeat(40);
    const b = '-'.repeat(a.length);
    console.log(a);
    switch (type(x)) {
        case 'StateContext':
            x = x.toString();
            break
    }
    console.log(x);
    console.log(b);
}


const linebreakRE = /^--------+/m;

function abf(fn, position) {
    let paramCount = countParameters(fn);

    if (paramCount == 1) {
        return ([a,b]) => fn(b)
    }
    if (paramCount >= 2) {
        if (position == 1) {
            return ([a,b]) => fn(a)
        }
        if (position == 2) {
            return ([a,b]) => fn(b)
        }
        return ([a,b]) => fn(a, b)
    }
    return ([a,b]) => fn(a, b)
}

function countParams(fn) {
    if (isFunction(fn)) {
        let a = fn.length;
        if (a == 0 && firstLine(fn).includes('...')) {
            return 100
        }
        return a
    }
    return getParameters(fn).length
}
function countParameters(fn) {
    if (firstLine(fn.toString()).includes('...')) {
        return 100
    }
    return getParameters(fn).length
}

function assert(x, message, logValue) {
    if (!hasValue(x)) {
        if (logValue) console.log(logValue);
        throw new CustomError(message)
    }
    return x
}

function atSecond(fn, ...args) {
    if (!fn) {
        return identity 
    }
    const AB = ['k', 'v', 'a', 'b'];
    const isAB = AB.includes(getParameters(fn)[1]);
    return function lambda([a,b], i) {
        const newValue = isAB ? 
            fn(b, a, i) :
            fn(b, ...args);
        return [a, isDefined(newValue) ? newValue : b]
    }
}
function bindObject(state, object, ignore) {
    if (!exists$1(object)) {
        return
    }

    function defineGetters(state, getters) {
            if (isObject(getters)) {
                for (let [k, v] of Object.entries(getters)) {
                    defineGetter(state, k, v);
                }
            }
            else {
                console.log('ndy'); assert();
            }
    }
    function bind(k, v) {
        if (ignore && ignore.includes(k)) {
            return 
        }
        if (k == 'getters') {
            return defineGetters(state, v)
        }
        /* not too sure about this */
        const value = isFunction(v) ?
            v.bind(state) :
            merge$1(state[k], v);

        state[k] = value;
    }

    map(object, bind);
}

function brackify(name, value, mode) {
    if (arguments.length == 1) {
        return wrap(newlineIndent(arguments[0]), '{}')
    }
    if (value == Array) {
        return wrap(newlineIndent(arguments[0], Array), '{}')
    }
    if (isArray(name)) {
        return `{\n${name.map((x) => '    ' + x + ',').join('\n')}\n}`
    }
    if (mode == Array && isArray(value)) {
        value = value.map((x) => x + ',');
    }
    return (
        (name ? name + ' ' : '') +
        wrap(newlineIndent(value), '{}')
    )
}

function breaker(limit, message) {
    if (!limit) limit = 20;
    if (breaker.count == null) {
        breaker.count = 0;
        breaker.reset = () => {
            breaker.count = 0;
        };
    }

    if (++breaker.count == limit) {
        const errorMessage = JSON.stringify(message || 'Breaker Limit');
        throw new Error(errorMessage)
    }
}

function bringToLife(x, scope) {
    if (!isString(x)) {
        return x
    }
    x = smartDedent(x);
    if (/^(?:const|var|let)/.test(x)) {
        x = x.replace(/.*? *= */, '');
    }
    if (/^\w+\(/.test(x)) {
        x = 'function ' + x;
    }

    const value = evaluate(parens(x), scope);
    return value.success
}

function camelCase(s) {
    if (hasCamelCase(s)) return uncapitalize(s)
    let f = (x) => x.slice(1).toUpperCase();
    s = s.trim().replace(/[- ]\w/g, f);
    if (/^[A-Z]+$/.test(s)) {
        return s
    }
    return uncapitalize(s)
}

function camelToDash(s) {
    const r = /[a-z][A-Z]/g;
    const fn = (x) => x[0] + '-' + x[1];
    return s.replace(r, fn).toLowerCase()
}

function capitalize(s) {
    return s.replace(/^['"]?[a-zA-Z]/, (x) => x.toUpperCase())
}

function char2n(ch) {
    return ch.charCodeAt(0) - 97
}

function copy(x) {
    return JSON.parse(JSON.stringify(x))
}

function curryStart(fn, ...topArgs) {
    return (...args) => fn(...topArgs, ...args)
}

function dashCase(s, ...args) {
    if (empty(s)) {
        return ''
    }
    if ((isUpperCase(s))) {
        return s.toLowerCase()
    }
    if (s.length < 3) return s
    const dashCaseRE = /^[A-Z]{2,}|[a-z][A-Z]|[_.]|\d+$/g;
    const hasDashes = s.includes('-');
    return s.replace(dashCaseRE, (x, offset) => {
        if (x == '.' && hasDashes) {
            return x
        }
        if (isNumber(x)) {
            return '-' + x
        }
        if (x.length > 1 && x == x.toUpperCase()) {
            if (x == 'HTML') {
                return x
            }
            return x.slice(0, -1) + '-' + x.slice(-1)
        }
        if (x.length == 1) {
            if (offset == 0 && x == ':') {
                return ':'
            }
            return '-'
        }
        if (x.length == 2) return x[0] + '-' + x[1]
    }).toLowerCase()
}

function depluralize(s) {
    return s.replace(/s$/, '')
}

function dict(a, fn) {
    if (!exists$1(a)) {
        return {}
    }


    if (isObject(a)) {
        return Object.entries(a).reduce((acc, [a,b]) => {
            acc[a] = fn(b);
            //console.log(fn(b))
            return acc
        }, {})
    }
    if (isNestedArray(a)) {
        return a.reduce((acc, [a,b]) => {
            acc[a] = fn ? fn(b, a) : b;
            return acc
        }, {})
    }

    if (fn) {
        if (isObject(fn)) {
            fn = dictf(fn);
        }
        return a.reduce((acc, item, i) => {
            const value = fn(item);
            if (isDefined(value)) {
                acc[item] = value;
            }
            return acc
        }, {})
    }
    if (isObject(a)) {
        return a
    }
    return {[a[0]]: a[1]}
}

function dictf(dict, returnKey) {
    return function lambda(key) {
        const value = dict[key];
        if (hasValue(value)) return value
        return returnKey ? key : null
    }
}

function singleQuote(s) {
    return /^["'`]/.test(s) ? s : `'${s}'`
}

function doubleQuote(s) {
    return /^["'`]/.test(s) ? s : `"${s}"`
}

function dreplace(s, dict, regexTemplate) {
    if (!exists$1(dict)) {
        return s
    }
    function fix(x) {
        return isCapitalized(x) ? 
            capitalize(dict[x.toLowerCase()]) : dict[x]
    }
    const r = reWrap(dict, regexTemplate);
    //console.log({r})
    const g = hasCaptureGroup(r.source)
        ? (_, x) => fix(x) : (x) => fix(x) + '';

    return s.replace(r, g)
}

function evaluate(s, scope) {
    function scopedEvaluator(s, scope) {
        if (scope === true) scope = {};

        const evaluator = Function.call(
            null,
            ...Object.keys(scope),
            'expr',
            "return eval('expr = undefined;' + expr)"
        );
        return evaluator.call(null, ...Object.values(scope), s)
    }

    const withContext = true;
    try {
        const value = scope 
            ? scopedEvaluator(s, scope) 
            : withContext
            ? eval(s)
            : (1, eval)(s);

        return {success: value}
    } catch(e) {
        throw new Error(e)
    }
}

function exists$1(input) {
    if (input == null) return false
    if (isString(input)) return input.trim().length > 0
    if (isArray(input)) return input.filter(exists$1).length > 0
    if (isObject(input)) return Object.keys(input).length > 0
    return true
}

function findall(r, s) {
    if (isString(r)) {
        r = RegExp(r, 'g');
    } else if (!r.flags.includes('g')) {
        r = RegExp(r.source, r.flags + 'g');
    }

    const store = [];
    while (true) {
        const m = r.exec(s);
        if (m) {
            store.push(matchGetter(m, 'findall'));
        } else {
            return store
        }
    }
}

function firstLine(s) {
    return search$1(/^.+/, s.toString())
}

function fparse(x, ...args) {
    return isFunction(x) ? x(...args) : x
}

function ftest(x, s) {
    if (isFunction(x)) {
        return x(s)
    }

    if (s == x) {
        return true
    }

    return x.test(s)
}

function getLastWord(x) {
    return search$1(/([a-zA-Z]\w*)\s*$/, x)
}
function getFirstWord(x) {
    return x ? search$1(/[a-zA-Z]\w*/, x) : ''
}

function getIndent(s) {
    if (isNumber(s)) return s
    const match = s.match(/^[\t ]*/g);
    if (!match) return 0
    return match[0].split('').reduce((acc, item, i) => {
        return (acc += item == '\t' ? 4 : 1)
    }, 0)
}

function getLast(arr) {
    return arr[arr.length - 1]
}

function getLongest(arr, measure = len, mode = Number) {
    let currentLength = 0;
    let currentItem = null;
    let currentIndex;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let length = parseFloat(measure(item));
        if (length > currentLength) {
            currentLength = length;
            currentItem = item;
            currentIndex = i;
        }
    }
    if (mode == Number) {
        return currentLength
    } 
    if (mode == 'index') {
        return currentIndex
    }
    else {
        return currentItem
    }
}

function getParameters(s) {
    //s = String(s)
    //s = firstLine(s.toString())
    //console.log({s})
    s = s.toString();

    let r = /\((.*?)\)/;
    if (/^\(/.test(s)) ; else if (/\w+\({/.test(s)) {
        r = /{(.*?)}/;
    } else if (/^.*?=>/.test(s)) {
        r = /= *(.*?) *=>/;
    }
    const text = search$1(r, s);
    //console.log({text, s, r})
    const items = split(text, /(\[.*?\])|,/);
    const f = (x) => {
        if (/^\[/.test(x)) {
            return x
        }
        return getFirstWord(x)
    };
    return items.map(f)
}

function getSpaces(s) {
    return search$1(/^ */, s) || ''
}

function hasCamelCase(s) {
    return /[a-z][A-Z]/.test(s)
}

function hasCaptureGroup(s) {
    return /[^\\]\((?!\?)/.test(s)
}

function hasHtml(s) {
    return test(/^ *<\/?[a-z\/]/m, s)
}

function hasNewline(s) {
    return s && s.toString().trim().includes('\n')
}

function hasValue(s) {
    if (s === '') return false
    if (s == null) return false
    return true
}

function identity(s) {
    return s
}

function indent$1(s, spaces = 4) {
    if (empty(s)) {
        return ''
    }
    let spaceValue = isNumber(spaces) ? 
        ' '.repeat(spaces) :
        spaces.replace(/\t/g, ' '.repeat(4));

    return s.replace(/^/gm, spaceValue)
}

function isArray(a) {
    return Array.isArray(a)
}
function isCapitalized(s) {
    return /^[A-Z]/.test(s)
}

function isClassFunction(x) {
    return isFunction(x) && /^class /.test(String(x))
}

function isDefined(x) {
    return x != null
}

function isFunction(x) {
    return typeof x === 'function'
}

function isJsonParsable(s) {
    return /^[{\[]/.test(s) && /[\]\}]\s*$/.test(s)
}

function isNestedArray(x) {
    return isArray(x) && isArray(x[0])
}

function isNumber(s) {
    return typeof s == 'number' || 
           /^-?\d+(?:\.\d+)?$/.test(s)
}

function isObject(x) {
    const T = type(x);
    return T == 'Object' || T == 'Module'
}
function isObjectArray(x) {
    return isArray(x) && isObject(x[0])
}

function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

function isRegExp(x) {
    return x.constructor.name == 'RegExp'
}

function isSet(x) {
    return x.constructor.name == 'Set'
}

function isString(s) {
    return typeof s === 'string'
}

function isWord(s) {
    return test(/^[a-zA-Z]+$/, s)
}

function join(...args) {
    //console.log(flat(args))
    const items = flat(args).map((item) => {
        if (hasValue(item)) {
            if (isObject(item)) {
                return join(Object.values(item))
            }
            if (!isString(item)) {
                return item.toString()
            }
            return item
        }
        return ''
    });

    let s = '';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        s += item.trimEnd();
        if (item.includes('\n')) {
            s += '\n\n';
        }
        else if ((items[i + 1] || '').includes('\n')) {
            s += '\n\n';
        }
        else {
            s += '\n';
        }
    }
    return s
}

function len(x) {
    if (!exists$1(x)) {
        return 0
    }
    if (isNumber(x)) {
        return x.toString().replace(/0?[-.]/g, '').length
    }
    return x.length || Object.keys(x).length || 0
}

function lineGetter(x, simple) {
    if (isArray(x)) {
        return x
    }
    if (simple) {
        return x.trim().split('\n')
    }
    return split(smartDedent(x), /\n+|(?:\\n)+/)
}

function map(x, fn) {
    if (x == null) {
        return []
    }
    let t = type(x);
    if (t == 'Number') {
        if (isPrimitive(fn)) {
            if (fn.toString().includes('$1')) {
                return range(1, 1 + x).map((x) => {
                    const value = fn.replace(/\$1/g, x);
                    return value
                })
            }
            else {
                return range(1, 1 + x).map((x) => fn)
            }
        } else {
            if (x > 0) {
                return range(1, 1 + x).map(fn)
            } else {
                return range(1, 1 + Math.abs(x)).map((x) => fn(-x))
            }
        }
    }

    let useAbf = false;

    if (t == 'Object' || t == 'Module') {
        x = Object.entries(x);
        useAbf = true;
    }
    else if (isNestedArray(x)) {
        useAbf = true;
    }
    else if (isPrimitive(x)) {
        return map([x], fn)[0]
    }
    else {
        x = Array.from(x);
    }

    let g = fn;

    if (isClassFunction(fn)) {
        g = (x) => new fn(x);
    } else if (isObjectArray(x) && isString(fn)) {
        g = (x) => fparse(x[fn]);
    } else if (isRegExp(fn)) {
        g = curryStart(search$1, fn);
    } else if (isString(fn)) {
        g = curryStart(templater, fn);
        useAbf = false;
    }

    return useAbf ? x.map(abf(g)) : x.map(g)
}

function matchGetter(match, mode) {
    if (mode == 'replace') {
        switch (match.length) {
            case 3: return [match[0]]
            case 4: return [match[1]]
            default: return match.slice(1, -2)
        }
    }
    if (mode == 'mget') {
        return match.length == 1
            ? match[0]
            : match.length == 0
            ? ''
            : match
    }

    if (mode == 'searchArray') {
        return !match
            ? null
            : match.length == 1
            ? [match[0]]
            : match.length == 2
            ? [match[1] || match[0]]
            : match.slice(1).filter(exists$1)
    }


    if (mode == 'search3') {
        /* same as search2 */
        return !match
            ? null
            : match.length == 1
            ? match[0]
            : match.length == 2
            ? isDefined(match[1]) ? match[1] : match[0]
            : match.slice(1).filter(isDefined)
    }

    if (mode == 'search') {
        return !match
            ? null
            : match.length == 1
            ? match[0]
            : match.length == 2
            ? isDefined(match[1]) ? match[1] : match[0]
            : match.slice(1).filter(exists$1)
    }

    if (mode == 'search2') {
        return !match
            ? null
            : match.length == 1
            ? match[0]
            : match.length == 2
            ? isDefined(match[1]) ? match[1] : match[0]
            : match.slice(1).filter(isDefined)
    }

    if (mode == 'search') {
        return !match
            ? null
            : match.length == 1
            ? match[0]
            : match.length == 2
            ? isDefined(match[1]) ? match[1] : match[0]
            : match.slice(1).filter(exists$1)
    }

    if (mode == 'findall') {
        return match.length == 1
            ? match[0]
            : smallify(match.slice(1).filter(isDefined))
    }
}

function merge$1(a, b, delimiter = ' ') {
    if (isObjectArray(a)) {
        return Object.assign({}, ...flat(Array.from(arguments)))
    }
    if (!b) return a
    if (!a) return b

    if (isArray(a)) {
        return flat(Array.from(arguments))
    }

    if (isArray(b)) {
        return [a].concat(b)
    }
    if (isString(a)) {
        return a + delimiter + b
    }
    return b
}

function mget(r, s, mode) {
    const store = [];
    const sliceBy = hasCaptureGroup(r) ? 1 : 0;

    function parser(...args) {
        const bargs = 
            args.slice(sliceBy, -2).filter(isDefined).map(trim);
        const value = smallify(bargs);
        store.push(value);
        return ''
    }

    const gFlag = r.flags.includes('g');
    const text = s.replace(r, parser);

    if (mode == Array && !gFlag) {
        if (sliceBy) {
            return [text, smallify(store)]
        } else {
            return [text, store]
        }
    }
    return gFlag ?
        [text, store] :
        [text, matchGetter(store, 'mget')]
}

function n2char(n) {
    let prefix = -1;
    while (n > 25) {
        	n -= 26;
          prefix += 1;
    }

    let ch = runner(n);
    return prefix > -1 ? runner(prefix) + ch : ch

    function runner(n) {
        return String.fromCharCode(n + 97)
    }
}

function newlineIndent(s, mode) {
    if (!s) {
        return ''
    }
    if (isArray(s)) {
        const delimiter = (mode == Array || mode === true)
            ? ',\n' : '\n';
        s = s.join(delimiter);
    }
    return wrap(indent$1(s.trim()), '\n')
}

function parens(s) {
    return '(' + s + ')'
}

function parseError(e) {
    const r = /^(\w+): ("?(\w+).+)\n +at (\S+).*?\(file:\/\/(.*?):(\d+):(\d+)\)(?:,\s*<anonymous>:(\d+):(\d+))/;
    const m = search$1(r, e.stack).map(toNumber);
    if (m.length == 9) {
        return {
            //type: m[0],
            [camelCase(m[0])]: true,
            notAFunction: m[0] == 'TypeError' && m[1].includes('function'),
            message: m[1],
            target: m[2],
            caller: m[3],
            file: m[4],
            line: m[5],
            ch: m[6],
            evalLine: m[7],
            evalCh: m[8],
        }
    }
    throw 'ndy'
}

function partition(items, n = 2, force = 0) {
    if (!force && isNestedArray(items)) {
        return items
    }
    else if (isFunction(n)) {
        return partitionWithFunctions(...arguments)
    } else if (isNumber(n)) {
        return partitionWithNumber(items, n)
    } else {
        return partitionByDelimiter(items, n)
    }

    function partitionByDelimiter(items, delimiter) {
        let storage = new PageStorage();
        for (let item of items) {
            if (item === delimiter) {
                storage.new();
            } else {
                storage.add(item);
            }
        }
        return storage.toJSON()
    }
    function partitionWithNumber(items, n) {
        const store = [];
        for (let i = 0; i < items.length; i++) {
            if (i % n == 0) {
                store.push([]);
            }
            getLast(store).push(items[i]);
        }
        return store
    }
    function partitionWithFunctions(items, ...args) {
        const store = range(args.length + 1).map(() => []);

        for (let item of items.filter(exists$1)) {
            for (let i = 0; i < args.length; i++) {
                let arg = args[i];

                if (ftest(arg, item)) {
                    store[i].push(item);
                    break
                }

                if (i == args.length - 1) {
                    getLast(store).push(item);
                }
            }
        }
        return store
    }
}

function pascalCase(s) {
    if (s == s.toLowerCase()) {
        return split(s, /\W/).map((item, i) => {
            return i == 0  && item.length < 3 ? item.toUpperCase() : capitalize(item)
        }).join('')
    }
    return capitalize(camelCase(s))
}

function quotify(s) {
    const delimiter = hasNewline(s) ? '`' : '"';
    return delimiter + s + delimiter
}

function range(...a) {
    let start;
    let end;
    let increment = 1;
    a = a.map(Number);

    if (a.length == 1) {
        start = 0;
        end = a[0];
    } else if (a.length == 2) {
        start = a[0];
        end = a[1];
    } else if (a.length == 3) {
        start = a[0];
        end = a[1];
        increment = a[2];
    }
    const store = [];
    for (let i = start; i < end; i += increment) {
        store.push(i);
    }
    return store
}
function reWrap(x, r) {

    if (r == String) {
        return getReplacement(x)
    }
    if (r === null) {
        r = /(?:$1)/g;
    } else if (!r) {
        r = /\b(?:$1)\b/gi;
    }

    function rescapeSymbols(s) {
        if (/\W/.test(s)) {
            return rescape(s)
        }
        return s
    }

    function getReplacement(x) {
        const items = isObject(x) ? Object.keys(x) : x;
        const keys = sorted(unique(items.map(rescapeSymbols)));
        return items.every((x) => x.length == 1) 
            ? keys.join('')
            : keys.join('|')
    }

    const source = r.source.replace(/\$1/g, getReplacement(x));
    return RegExp(source, r.flags)
}

function reduceToString(x, f, delimiter) {
    if (empty(x)) {
        return ''
    }
    const value = map(x, f).filter(isDefined);
    if (delimiter == null) return join(value)

    if (delimiter == '\n\n' || delimiter == '\n') {
        return value.join(delimiter) + delimiter
    }
    return value.join(delimiter)
}
function removeComments(s) {
    const r = /^ *(<!--[^]*?-->|\/\/|\/\*[^]*?\*\/).*\n*(?: *\n)*/gm;
    return s.replace(r, '')
}

function rescape(x, delimiters) {
    if (isRegExp(x)) {
        return x
    }
    if (x.includes('(?:')) {
        /* do not rescape something like  */
        //const items = ['ham(?:my)?', 'v']
        return x
    }
    const rescapeRE = isString(delimiters)
        ? RegExp(
              `[${delimiters.replace(/[\[\]]/g, '\\$&')}]`,
              'g'
          )
        : /[.\\[*+?()|^${}\[\]]/g;
    return x.replace(rescapeRE, '\\$&')
}

function search$1(regex, s, flags = '') {
    if (isString(regex)) regex = RegExp(regex, flags);
    return matchGetter(s.match(regex), 'search')
}

function searchf(x, mode) {
    if (isFunction(x)) {
        if (mode == Array) {
            return function lambda(s) {
                const value = x(s);
                if (value) {
                    if (value == true) {
                        return [s]
                    }
                    return toArray(value)
                }
                return null
            }
        }
        return x
    }
    if (isString(x)) {
        x = RegExp(x);
    }
    const fn = (s) => {
        const value = search$1(x, s);
        return value
    };
    return mode == Array ? 
        wrapf(fn, toArray, 'after') : fn
}

function smallify(a) {
    return a.length == 1 ? a[0] : a
}

function smartDedent(s) {
    if (/^\S/.test(s)) return s
    s = stringBreaker(s);
    s = removeComments(s);
    s = s.replace(/^ *\n*|\n *$/g, '', s);
    const spaces = search$1(/^ *(?=\S)/m, s);
    const secondLineSpaces = search$1(/\n *(?=\S)/, s);
    (
        !spaces &&
        secondLineSpaces &&
        secondLineSpaces.length > 4
    ) ? secondLineSpaces.slice(5) : spaces;

    const regex = RegExp('^' + spaces, 'gm');
    return s.replace(regex, '').trim()
}

function sorted(items, fn, reverse) {
    const defaultObjectSort = (s) => s[1];
    const defaultNumberSort = (s) => s;
    const defaultNumericEntriesSort = (s) => s[0];
    let asObject = false;
    let asDouble = isObject(items) || isNestedArray(items);

    if (isObject(items)) {
        items = Object.entries(items);
        asObject = true;
    }

    if (!fn) {
        fn = asDouble
            ? (
                isNumber(items[0][0]) ? 
                    defaultNumericEntriesSort : 
                    defaultObjectSort
              )
            : isNumber(items[0])
            ? defaultNumberSort
            : char2n;
    } else if (asDouble) {
        fn = abf(fn);
    }

    function runner(a, b) {
        let A = fn(a);
        let B = fn(b);
        if (isNumber(A)) {
            let C = Number(A);
            let D = Number(B);
            return reverse ? D - C : C - D
        } else {
            if (A == B) {
                return 0
            }
            if (reverse) {
                if (A < B) {
                    return 1
                } else {
                    return -1
                }
            } else {
                if (A < B) {
                    return -1
                } else {
                    return 1
                }
            }
        }
    }

    items.sort(runner);
    return asObject ? dict(items) : items
}

function split(s, r = / +/) {
    if (isNumber(s) && arguments.length == 1) {
        return s.toString().split('').map(toNumber)
    }
    if (isRegExp(r)) {
        return s.trim().split(r).filter(exists$1).map(trim)
    }

    if (isNumber(r)) {
        return [s.slice(0, r), s.slice(r)]
    }
    if (isString(r)) {
        const ref = {
            linebreak: /^------+/m,
            comma: /,/,
            linebreak: linebreakRE,
            chunks: /\n\n+/,
            chunks: /\n\n+/,
            chunks: /\n\n+/,
        };
        if (ref.hasOwnProperty(r)) {
            //console.log(ref[r])
            //console.log(s.trim().split(linebreakRE))
            //console.log('hii')
            const items = s.trim().split(ref[r]);
            //console.log(items); throw "";
            return items.map(trim).filter(exists$1)
        }
        return s.trim().split(r).map(trim)
    }
}

function splitOnce(s, delimiter) {
    if (!s) {
        return ['', '']
    }
    if (isNumber(delimiter)) {
        return [s.slice(0, delimiter), s.slice(delimiter)]
    }
    if (isArray(s)) {
        return [s[0], s.slice(1)]
    }
    if (!delimiter) {
        if (s.includes('\n')) {
            delimiter = /\n+/;
        } else {
            delimiter = /\s+/;
        }
    }

    delimiter = isRegExp(delimiter) ?
        delimiter.source : wrap(delimiter.trim(), ' *');

    const r = RegExp('^(.*?)' + delimiter + '([^]+)$');
    return (search$1(r, s.trim()) || [s, '']).map(trim)
}

function stringBreaker(s) {
    const r = /(?:\n *|^)e *\n/;
    if (r.test(s)) {
        return getLast(s.split(r))
    }

    if (/\bender\b/.test(s)) {
        return getLast(s.split(/\bender.*/))
        //return s.match(/^ *ender.+/msi)[0]
    }
    return s.replace(/^\s*breaker.*/msi, '')
}

function stringify(s, birth) {
    return !exists$1(s)
        ? ''
        : isPrimitive(s)
        ? s
        : isFunction(s)
        ? s.toString()
        : isRegExp(s)
        ? s.toString()
        : JSON.stringify(s, birth, 2)
}

function tail(s) {
    return getLast(s.split('/')).replace(/^\W+/, '')
}

function datestamp() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const M = month.toString().padStart(2, 0);
    const D = day.toString().padStart(2, 0);
    const Y = date.getFullYear();
    return `${M}-${D}-${Y}`
}
function templater(s, ref, autofixCapitalization) {
    /*  spook */
    var emDash = '—';
    var TemplaterCallableFunctionRef = {
        linebreak: '-'.repeat(70),
        emDash: emDash,
        cap(s) {
            return capitalize(removeQuotes(s))
        },
        depluralize,
        date: datestamp,
        abspath(s) {
            return s
            //return dir2023 +
        }
    };
    if (/\$(?!\w)/.test(s)) {
        const arg = isArray(ref) ? ref[0] : isObject(ref) ? Object.values(ref)[0] : ref;
        return s.replace(/\$/g, arg)
    }

    let regex = /([\t ]*)(?:\${(.*?)}|\$([a-zA-Z]\w+)\((.*?)\)|\$(\w+)(\[-?\d*:-?\d*\])?)|( *)#(.*?)#/gi;
    let dollarValue = null;
    new Cache();
    if (!isObject(ref)) {
        ref = toArray(ref);
    }
    return runner(s)

    function bracketRunner(s) {
        if (hasDollar(s)) {
            return eval(runner(s))
        } else {
            return eval(dreplace(s, ref))
        }
    }
    function f(_, 
        spaces, 
        bracket,
        callable, 
        callableArg, 
        dollar, 
        dollarSlice,
        hashSpaces, 
        hash
    ) {

        //console.log(arguments)
        if (hash) {
            return hashRunner(hash, hashSpaces)
        }
        if (bracket) {
            return spaces + bracketRunner(bracket)
        }
        if (callable) {
            return spaces + callableRunner(callable, callableArg)
        }
        if (dollar) {
            //console.log({dollar, spaces, dollarSlice})
            return dollarRunner(dollar, spaces, dollarSlice)
        }
    }
    function runner(s) {
        return s.replace(regex, f)
    }
    function callableRunner(fnKey, arg) {
        arg = runner(arg);
        return TemplaterCallableFunctionRef[fnKey](arg)
    }
    function hashRunner(s, hashSpaces) {
        const value = runner(s);
        if (!hasValue(dollarValue)) return ''
        return hashSpaces + value
    }
    function dollarRunner(s, spaces, dollarSlice) {
        //console.log({ref})
        let offset = 1;
        let dollarValue;
        if (isObject(ref)) {
            dollarValue = ref[s];
            if (dollarValue == null) {
                dollarValue = capitalize(ref[uncapitalize(s)]);
            }
        }
        else if (isArray(ref)) {
            dollarValue = ref[Number(s) - offset];
            /* debugtemplater) */
        }

        if (dollarValue == null) {
            dollarValue = TemplaterCallableFunctionRef.hasOwnProperty(s)
            ? fparse(TemplaterCallableFunctionRef[s]) : 
            evaluate(s).success;
        }

        if (dollarValue == null) {
            console.log({s}, 'dv is null'); assert();
        }

        if (!isString(dollarValue)) {
            dollarValue = isFunction(dollarValue) ? 
                dollarValue() : templaterStringify(dollarValue);
        }

        if (dollarSlice) {
            /* not defined atm */
            throw ''
        }
        if (dollarValue == null) return 'ERROR'
        return indent(dollarValue, spaces)
    }
    function templaterStringify(s) {
        return JSON.stringify(s, null, 4)
    }

    function indent(s, spaces) {
        let space = spaces.replace(/\t/g, '    ');
        return toArray(s)
            .map((x) => space + x)
            .join('\n\n')
    }
}

function test(regex, s, flags = '') {
    if (hasValue(s)) {
        if (isString(regex)) {
            regex = RegExp(regex, flags);
        }
        return regex.test(s)
    }
}

function toArray(val) {
    if (val == null) {
        return 
    }
    if (isArray(val)) {
        return val
    }
    if (isSet(val)) {
        return Array.from(val)
    }
    return [val]
}

function transformObject(obj, f) {
    if (isObject(f)) {
        return Object.entries(obj).reduce((acc, [k,v], i) => {
            if (f.hasOwnProperty(k)) {
                const value = f[k](v, i);
                if (isDefined(value)) acc[k] = value;
            } else {
                acc[k] = v;
            }
            return acc
        }, {})
    }

    const usekv = /k, *v|a, *b/.test(firstLine(f));
    return Object.entries(obj).reduce((acc, [k,v], i) => {
        const value = usekv ? f(k, v, i) : f(v, i);
        if (isDefined(value)) acc[k] = value;
        return acc
    }, {})
}

function trim(s) {
    return s.trim()
}


function uncapitalize(s) {
    return s.replace(/\w/, (x) => x.toLowerCase())
}
function unique(a, b) {
    if (isString(a)) {
        return unique(a.split(''))
    }
    if (b) {
        const ignore = Array.from(b);
        const f = (x) => isPrimitive(b) ? x != b : !ignore.includes(x);
        a = a.filter(f);
    }
    return Array.from(new Set(a))
}

function wrap(s, delimiter = '\n') {
    if (isArray(delimiter)) return `[${s}]`
    if (delimiter == Array) return `[${s}]`
    if (delimiter == '[]') return `[${s}]`
    if (delimiter == '{}') return `{${s}}`
    if (delimiter == '{\n\n}') return `{\n${s}\n}`
    if (delimiter == '[\n\n]') return `[\n${s}\n]`
    if (delimiter == '()') return `(${s})`
    if (delimiter == '(?:)') return `(?:${s})`
    if (delimiter == '\\b') return `\\b${s}\\b`
    if (delimiter == '{{}}') return `{{${s}}}`
    return delimiter + s.toString() + delimiter
}

function wrapfo(fn, o) {
    if (o.before) ;
    if (o.after) {
        {
            return (...args) => o.after(fn(...args))
        }
    }
}
function wrapf(fn, decorator, mode) {
    if (isObject(decorator)) {
        return wrapfo(fn, decorator)
    }
    if (mode == 'before') {
        return function lambda(...args) {
            return fn(decorator(...args))
        }
    }
    else {
        return function lambda(...args) {
            return decorator(fn(...args))
        }
    }
}

function yes() {
    return true
}

class Cache {
    constructor(fn) {
        this.fn = fn || identity; 
        this.reset();
    }
    has(x) {
        return this.store.hasOwnProperty(this.fn(x))
    }
    get(x, fallback) {
        let value = this.store[this.fn(x)];
        if (hasValue(value)) {
            console.log('returning known value of x: ', x);
        }
        return hasValue(value) ? 
            value : 
            this.set(x, fparse(fallback, x))
    }
    set(x, y) {
        if (y == null) return 
        this.store[this.fn(x)] = y;
        return y
    }
    reset() {
        this.store = {};
    }
    get values() { return Object.values(this.store) }
    get keys() { return Object.keys(this.store) }
    get entries() { return Object.entries(this.store) }
}

class Watcher {
    static create(...args) {
        const watcher = new Watcher(...args);
        const seen = (x) => {
            return !watcher.isFresh(x)
        };
        return seen
    }
    constructor(fn) {
        this.fn = fn || identity;
        this.reset();
        this.isFresh = this.isFresh.bind(this);
    }
    reset() {
        this.seen = new Set();
    }
    toJSON() {
        return Array.from(this.seen)
    }
    isFresh(key) {
        let value = this.fn(key);
        if (this.seen.has(value)) {
            return false
        }
        this.seen.add(value);
        return true
    }
    has(key) {
        return this.seen.has(this.fn(key))
    }
    add(key) {
        this.seen.add(this.fn(key));
    }
}

function hasDollar(s) {
    return /\$/.test(s)
}

function backspace(s) {
    return s ? s.slice(0, -1) : ''
}

function hasSpaces(s) {
    return s.includes(' ')
}

function hasComma(s) {
    return s.includes(',')
}

class PageStorage {
    get size() {
        return len(getLast(this.store))
    }
    constructor(config = {}) {
        this.store = [[]];
        this.config = config;
    }
    new(x) {
        this.store.push([]);
        if (!this.config.ignoreDelimiter) {
            this.add(x);
        }
    }
    add(x) {
        if (hasValue(x)) getLast(this.store).push(x);
    }
    toJSON() {
        return this.store
    }
}

function isQuote(s) {
    return /^['"]/.test(s)
}

function toArgument(s) {
    if (isNumber(s)) return toNumber(s)
    if (s == 'false') return false
    if (s == 'true') return true
    if (s == 'null') return null
    if (s == 'Number') return Number
    if (s == 'String') return String

    if (isQuote(s)) {
        return s.slice(1, -1)
    }
    if (isJsonParsable(s)) {
        try {
            return eval(parens(s))
        } catch(e) {
            try {
                return evalErrorHandler(e, s)
            } catch(e) {
                console.log(e);
                throw ''
            }
        }
    }
    return s
}

function evalErrorHandler(e, s) {
    const m = parseError(e);
    if (m.referenceError) {
        try {
            return eval(parens(s.replace(/[a-zA-Z]\w*/g, quotify)))
        } catch(e) {
            const error = parseError(e);
            if (error.notAFunction) {
                console.log(error); assert();
                return {__callable__: error.target}
            }
        }
    }
}

function toNumber(val) {
    return isNumber(val) ? Number(val) : val
}

function fixUrl(s) {
    let suffix = /^[a-zA-Z]+$/.test(s) ? '.com' : '';
    if (s.includes('kdog3682')) return 'file:///' + s
    s = s.replace(/view-source:/, '');
    if (!/^https?/.test(s)) s = 'https://' + s;
    return s + suffix
}

function edit(x, ...args) {
    if (isObject(x)) {
        if (args.length == 2) {
            if (args[1] == null) {
                return x
            }
            const value = x[args[0]];
            const newValue = args[1](value, x);
            if (isDefined(newValue)) {
                x[args[0]] = newValue;
            }
            return x
        }
        else if (args.length == 1) {
            if (isFunction(args[0])) {
                const fn = args[0];
                const once = fn.length === 1;
                for (let [k, v] of Object.entries(x)) {
                    const newValue = once ? fn(v) : fn(k, v);
                    if (isDefined(newValue)) {
                        x[k] = newValue;
                    }
                }
                return x
            }
        }
    }
    if (isObjectArray(x)) {
        let [y, fn, ...bargs] = args;
        if (isString(y)) {
            let key = y;
            return x.map((item, i) => {
                item[key] = fn(item[key], ...bargs);
                return item
            })
        }
        if (isObject(y)) {
            const f = (k, v, index) => {
                if (isDefined(y[k])) {
                    const value = y[k](k, v, index);
                    if (value) {
                        return value
                    }
                    return v
                }
                return v
            };
            return x.map((item, i) => {
                return transformObject(item, f) 
            })
        }
    }
    if (isArray(x)) {
        const items = x;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let newValue = args[0](item);
            if (isDefined(newValue)) {
                items[i] = newValue;
            }
        }
        return items
    }
}

function doublef(fn) {
    return function lambda(s) {
        return [s, fparse(fn, s)]
    }
}

function isNode() {
    return typeof window === 'undefined'
}

function exporter(State, key) {
    const state = isClassFunction(State)
        ? new State()
        : State;

    if (!key) {
        const keys = ['run', 'build'];
        key = keys.find((x) => x in state);
    }
    assert(key in state, 'key ' + key + ' must be in state');
    //console.log(key, typeof state[key], typeof state, state[key].toString())
    return state[key].bind(state)
}

function countCaptureGroups(r) {
    let s = r.source || r;
    return (s.match(/(?:[^\\]|^)\((?![\?])/g) || []).length
}

function endsWithWord(s) {
    return /[a-zA-Z]$/.test(s)
}

function mergeToObject(obj, item) {
    if (arguments.length == 1) {
        return runner({}, obj)
    }
    else if (arguments.length === 3 && isString(item)) {
        let prev = obj[arguments[1]];
        if (!prev) {
            if (isObject(arguments[2])) {
                obj[arguments[1]] = arguments[2];
            } else if (isNestedArray(arguments[2])){
                obj[arguments[1]] = dict(arguments[2]);
            } else {
                let [a,b] = arguments[2];
                obj[arguments[1]] = {[a] : b};
            }
        } else {
            return runner(prev, arguments[2])
        }
        return obj
    }
    else {
        return runner(obj, item)
    }

    function runner(obj, item) {
    if (isObject(item)) {
        /* hacky */
        if (item.className && obj.className) {
            [item.className, obj.className];
            //console.log('aaaaa')
            //throw new Error('hacky obj.classname ' + JSON.stringify(a))
            //item.className += ' ' + obj.className
        }
        return Object.assign(obj, item)
    }
    else if (isNestedArray(item)) {
        const set = (a, b, c) => {
            a[b] = c;
        };
        item.forEach(el => {
            if (isNestedArray(el)) {
                el.forEach(item => set(obj, ...item));
            } else {
                set(obj, ...el);
            }
        });
    }
    else if (isObjectArray(item)) {
        item.forEach((item) => Object.assign(obj, item));
    }

    else if (isArray(item)) {
        obj[item[0]] = item[1];
    }
    return obj
    }
}

function xsplit(s, r = / +/) {
    if (!exists$1(s)) {
        return []
    }
    if (isArray(s)) {
        return s
    }
    s = String(s);
    if (/\|/.test(s)) {
        return split(s, /\|/)
    }
    if (/,/.test(s)) {
        return split(s, /,/)
    }
    return split(s, r)
}

function removeQuotes(s) {
    return /^[\'\"]/.test(s) ? s.slice(1, -1) : s
}

function modularIncrement(items, x = 0, increment = 1, stop = 0) {
    if (x == null) {
        return items[0]
    }
    increment = Number(increment);
    const [i, asNumber] = Number.isInteger(x) ?
        [x, true] : [items.indexOf(x), false];

    if (stop && (i + increment < 0|| i + increment >= items.length)) {
        return 
    }
    const newIndex = i + increment < 0 ?
        items.length - 1 : (i + increment) % items.length;

    //console.log({asNumber})
    const value = asNumber ? newIndex : items[newIndex];
    return value
}

function flat(...items) {
    const store = [];
    const runner = (item) => {
        switch (type(item)) {
            case 'Null':
            case 'Undefined':
                return 
            //case 'Storage':
                //item.values.map(runner)
                //break
            //case 'Object':
                //Object.values(item).map(runner)
                //break
            case 'Set':
                Array.from(item).map(runner);
                break
            case 'Array':
                item.map(runner);
                break
            default:
                store.push(item);
        }
        return store
    };
    return runner(items)
}

function noop() {
    return null
}


function getErrorStack(e) {
    const r = /^ *at (\w+\.\w+ \w+ \[.*?\]|\S+) \((.*?):(\d+)/gm;
    const s = (e || new Error()).stack;
    //console.log(s)
    const matches = findall(r, s);
    return matches
}
function getCaller(targetIndex = 0, error) {
    const matches = getErrorStack(error);
    //console.log(matches)
    const keys = ['consoleLog', 'getCaller', 'getCallerObject', 'log'];
    const startIndex = matches.findIndex(([name]) => {
        return keys.includes(name)
    });
    //console.log({startIndex, targetIndex, matches})
    const eIndex = startIndex + 1 + targetIndex;
    const match = matches[eIndex];
    return {
        name: match[0],
        line: Number(match[2]),
        file: match[1],
    }
}

function mixin(Base, ...mixins) {
    if (arguments.length === 3 && isString(arguments[1])) {
        return runner(arguments[1], arguments[2])
    }
    for (const mixin of flat(mixins)) {
        if (isNestedArray(mixin)) {
            for (let item of mixin) {
                runner(...item);
            }
        }
        else if (isArray(mixin)) {
            for (let item of mixin) {
                runner(item.name, item.value);
            }
        }
        else if (isObject(mixin)) {
            for (let [k, v] of Object.entries(mixin)) {
                runner(k, v);
            }
        } else {
            console.log(mixin); throw 'not allowed'
        }
    }
    function runner(k, v) {
        if (v == null) {
            return 
        }
        if (isFunction(v)) {
            if (isFunction(Base)) {
                Base.prototype[k] = v;
            } else {
                Base[k] = v.bind(Base);
            }
        } else if (isObject(v)) {
            if (v.get && isFunction(v.get)) {
                Object.defineProperty(Base.prototype, k, v);
            } 
            else if (k == 'methods') {
                mixin(Base, v);
            }
            else if (Base.hasOwnProperty(k)) {
                Object.assign(Base[k], v);
            }
            else {
                Base[k] = v;
            }
        } else {
            Base[k] = v;
            //console.log({k, v})
        }
    }
}

function getKwargs(s, key) {
    if (empty(s)) {
        return {}
    }
    if (key) {
        const ref = {
            equalSign: getKwargsDelimitedByEqualSign,
        };
        return ref[key](s)
    }
    const configRE = /(:?[\w-]+) *= *(\S+)/g;
    const [text, doubles] = mget(configRE, s);
    const singles = split(text, / +/).map(doublef((x) => true));
    return dict(merge$1(doubles, singles))
}

function callableArgsKwargs(s) {
    const callableRE = /(\w+)\((.*)\)/;
    const m = search$1(callableRE, s.toString());
    if (!m) {
        return 
    }

    const [a,b] = m;
    return split(b || '', /(\[.*?\]|{.*?}|\w+\(.*?\))|,/).reduce((acc, item, i) => {
        const m = search$1(/^(.*?) *= *(.+)/, item.toString());
        if (m) {
            acc[2][m[0]] = toArgument(m[1]);
        } else {
            acc[1].push(toArgument(item));
        }
        return acc
    }, [a, [], {}])
}

function distinct(items, x) {
    const fn = isArray(x)
        ? (y) => !x.includes(y)
        : (y) => y != x;
    return items.filter(fn)
}

function lineDitto(s, items, target) {
    const r = RegExp(target || '\\${2,3}', 'g'); 
    const parcel = lineGetter(s, true).map((el) => {
        if (r.test(el)) {
            const lines = items.map((x) => {
                return el.replace(r, x)
            });
            return lines.join('\n')
        }
        return el
    });
    return parcel.join('\n')
}

//
//


function filter(x, fn = isDefined, mode) {
    if (isArray(fn)) {
        /* mode = anti */
        const g = mode 
            ? (x) => isDefined(x) && !fn.includes(x)
            : (x) => isDefined(x) && !fn.includes(x);

        return x.filter(g)
    }
    if (isObject(x)) {
        if (isString(fn)) {
            let s = fn;
            fn = (k, v) => v == s;
        }
        const values =  Object.entries(x).filter(([k,v]) => {
            return fn(k, v)
        });

        if (mode == 'keys') {
            return values.map((x) => x[0])
        }
        if (mode == 'values') {
            return values.map((x) => x[1])
        }
        if (mode == Object) {
            return dict(values)
        }
        return values
    }
    return x.filter(fn)
}

function defineGetter(base, k, v) {
    if (isFunction(v)) {
        v = {get: v};
    } else if (isObject(v)) {
        edit(v, (x) => x.bind(base));
    }

    if (isClassFunction(base)) {
        Object.defineProperty(base.prototype, k, v);
    } else {
        Object.defineProperty(base, k, v);
    }
}

function stateGetter(state, keys) {
    const payload = {};
    for (let key of keys) {
        const value = state[key];
        if (exists$1(value)) {
            payload[key] = value;
        }
    }
    return payload
}



function entries$1(x) {
    return isObject(x) ? Object.entries(x) : x
}

function reduce(items, fn) {
    const computedItems = entries$1(items);
    return computedItems.reduce((acc, item, i) => {
        const value = fn(item);
        if (value == null) {
            return acc
        }
        if (isArray(value)) {
            const [a, b] = value;
            acc[a] = b;
        }
        else {
            if (isString(item)) {
                acc[item] = value;
            } else {
                acc[item[0]] = value;
            }
        }
        return acc
    }, {})
}

function empty(v) {
    if (v === 0) {
        return false
    }
    return !exists$1(v)
}
function isUpperCase(s) {
    return /^[A-Z]+\d*$/.test(s)
}


function isClassObject(x) {
    const natives = [
        'String',
        'Function',
        'Number',
        'Object',
        'Array',
        'Set',
        'Promise',
        'null',
        'Date',
        'HTMLDivElement',
    ];
    return x && !natives.includes(x.constructor.name)
}



function topComment(s) {
    return search$1(/^.*?\s*\/\* *(.*?) *\*\//, s.toString())
}

function type(x) {
    if (x == Number || x == String || x == Object || x == Array) {
        return x.name
    }

    if (x === null) {
        return "Null"
    }

    if (x == null) {
        return "Undefined"
    }
    if (typeof x === "number" && x.toString() == "NaN") {
        return "NaN"
    }
    try {
        return x.constructor.name
    } catch(e) {
        return 'Module'
    }
}

function cumulativeAssign(base, x, valueKey = 'value') {

    const cumulative = [
        "class",
    ];

    if (!hasValue(x)) return base
    return isObject(x) ? runner(base, x) : add(base, valueKey, x)

    function add(base, key, value, exists) {
        if (exists && cumulative.includes(key)) {
            base[key] += ' ' + value;
        } else {
            base[key] = value;
        }
        return base
    }

    function runner(base, x) {
        Object.entries(x).forEach(([k,v], i) => {
            if (v == null) {
                return 
            }
            if (base[k]) {
                //console.log({k, v})
                switch (type(v)) {
                    case 'Object':
                        return runner(base[k], v)
                    case 'Array':
                        return addArray(base, k, v)
                    default:
                        return add(base, k, v, true)
                }
            } else {
                return add(base, k, v)
            }
        });
        return base
    }

    function addArray(base, k, v) {
        if (!isArray(base[k])) {
            base[k] = [base[k]];
        }
        const prev = base[k];
        toArray(v).forEach((item, i) => {
            if (!prev.includes(item)) {
                prev.push(item);
            }
        });
    }
}
//


function getCaller2(targetIndex = 0) {
    const matches = getErrorStack2();
    const keys = [
        "consoleLog",
        "getCaller",
        "getCallerObject",
        "log",
        "getCaller2",
    ];
    const startIndex = matches.findIndex(([name]) => {
        return keys.includes(name)
    });

    let [caller, file, line] = matches[startIndex + 1 - targetIndex  ];
    if (/\[/.test(caller)) {
        caller = search$1(/(\w+).*? (\w+)/, caller).join(".");
    }
    if (caller == 'ModuleJob.run') {
        caller = 'GlobalContext';
    }
    return {
        caller,
        file: tail(file),
        lineNumber: line,
        string: `${caller} @ ${tail(file)}:${line}`,
    }
}

function getErrorStack2(e) {
    const r = /^ *at (?:new )?(\w+\.\w+ \w+ \[.*?\]|\S+) \((.*?):(\d+)/gm;
    const s = (e || new Error()).stack;
    return findall2(r, s)
}

function findall2(r, s) {
    assert(r.flags.includes('g'));

    const store = [];
    const get = (m) => {
        return m.length == 1
            ? m[0]
            : smallify(m.slice(1).filter(isDefined))
    };

    s = s.toString();
    while (true) {
        const m = r.exec(s);
        if (m) {
            store.push(get(m));
        } else {
            return store
        }
    }
}


function push2(items, item, checkpoint) {
    if (isDefined(item)) {
        if (checkpoint && !checkpoint(item)) {
            return 
        }
        items.push(item);
        return item
    }
}

function testf2(x, mode) {
    switch (mode) {
        case Object:
            switch (type(x)) {
                case "RegExp":
                    return (s) => x.test(s.value)
                case "Function":
                    return x
                default:
                    return (s) => s.value === x
            }
        default:
            switch (type(x)) {
                case "RegExp":
                    return (s) => x.test(s)
                case "Function":
                    return x
                default:
                    return (s) => s === x
            }
    }
}

function indexGetter2(arr, i) {
    if (isNumber(i)) {
        if (i < 0) {
            return arr.length + i
        }
        return i
    }
    return findIndex2(arr, i)
}

function findIndex2(arr, x) {
    const fn = testf2(x);
    const index = arr.findIndex(fn);
    return index > -1 ? index : null
}

function insert2(arr, i, item) {
    if (item == null) {
        return
    }
    const index = indexGetter2(arr, i);
    if (isDefined(index)) {
        arr.splice(index, 0, item);
    }
    return item
}

function pop2(x, key, fallback) {
    if (x == null) {
        return fallback 
    } 
    else if (isArray(x)) {
        const index = findIndex2(x, key);
        if (isDefined(index)) {
            return x.splice(index, 1)[0]
        } else {
            return fallback
        }
    } 
    else if (key in x) {
            const value = x[key];
            //console.log('deleted', value)
            delete x[key];
            return value
    } 
}

function reduce2(items, fn) {
    const computedItems = entries$1(items);
    const asDouble = isNestedArray(computedItems);
    const k =
        fn.length == 2 &&
        isArray(computedItems[0]) &&
        computedItems[0].length == 2;
    const g = k ? abf(fn) : fn;

    return computedItems.reduce((acc, item, i) => {
        const value = g(item);
        if (value == null) {
            return acc
        }
        if (isArray(value) && value.length == 2) {
            const [a, b] = value;
            acc[a] = b;
        } else if (asDouble) {
            acc[item[0]] = value;
        } else {
            acc[item] = value;
        }
        return acc
    }, {})
}

function unshift2(items, x) {
    if (x == null) {
        return
    }
    items.unshift(x);
    return x
}

function stateGetter2(state, keys, clean, deleteIt) {
    if (clean || deleteIt) {
        return reduce(flat(keys), (key) => {
            if (deleteIt) {
                const value = pop2(state, key);
                //console.log({deletedValue: value}, key)
                return value
            }
            return state[key]
        })
    }
    return reduce2(flat(keys), (key) => {
        return [key, state[key]]
    })
}

function toArray2(val) {
    if (val == null) {
        return []
    }
    if (isArray(val)) {
        return val
    }
    if (isSet(val)) {
        return Array.from(val)
    }
    return [val]
}

function dedent2(s, n) {
    const flags = isArray(s) ? '' : 'gm';
    const r = n == null
        ? /^ +/gm
        : isNumber(n)
        ? RegExp('^' + ' '.repeat(n), flags)
        : RegExp('^' + n, flags);
    function runner(s) {
        return s.replace(r, '')
    }
    return isArray(s) ? s.map(runner) : runner(s)
}
function smartDedent2(s) {
    if (isArray(s)) {
        let spaces1 = getSpaces(s[0]);
        let spaces2 = getSpaces(getLast(s));
        //console.log({spaces1, spaces2})
        if (spaces1 == spaces2) {
            return dedent2(s, spaces2).join('\n')
        } else {
            return dedent2(s, spaces1).join('\n')
        }
    } else {
        s = s.replace(/^\n+/, '').trimEnd();
        let spaces1 = getSpaces(s);
        return dedent2(s, spaces1)
    }
}
function warn(...args) {
    if (args.length == 1) {
        throw new Error(args[0])
    }
}

function chalk(a, b) {
    if (!isNode()) {
        return browserChalk(a, b)
    }
        const colors = {
            BLACK: '\x1b[30m',
            RED: '\x1b[31m',
            GREEN: '\x1b[32m',
            YELLOW: '\x1b[33m',
            BLUE: '\x1b[34m',
            RESET: '\x1b[0m',
            BRIGHT: '\x1b[1m',
        };
        if (a.toUpperCase() in colors) {
            return console.log(colorIt(a.toUpperCase(), b))
        }
    if (hasNewline(a) && b == null) {
        a = '';
        b = a;
    }
    const color = /fail|warn|error/i.test(a)
        ? 'red'
        : 'blue';

    console.log(colorIt(color, a, true), colorIt(color, b));

    function colorIt(color, s, bold = '') {
        if (!isPrimitive(s)) {
            return s
        }

        function getColor(color) {
            return colors[color] || colors[color.toUpperCase()] || color
        }

        if (bold) {
            bold = colors.BRIGHT;
            s += ':';
        }
        return getColor(color) + bold + s + colors.RESET
    }
}
function chalk3(arg, color, bold) {
    if (isNode()) {
        const colors = terminalColors;
        const colorValue = colors[color.toUpperCase()];
        const boldValue = bold ? colors.BOLD : '';
        return colorValue + boldValue + stringify(arg) + colors.RESET
    }
    browserChalk(arg);
}

function vueWrap(s) {
    //throw new Error()
    return `{{${s}}}`
}

function fill2(x, longest, fallback) {
    if (fallback == null) fallback = x[0];
    while (x.length < longest) {
        x.push(fallback);
    }
}

function merge2(...args) {
   switch (type(args[0])) {
       case 'Object':
           return Object.assign({}, ...args)
       case 'Array':
           return args.flat()
       default:
           ndy();
   }
}


function TypeAssertion(x, b) {

    function errorStatement(errorType) {
        const caller = getCaller(3);
        return errorType + ': ' + caller.name + ' @ ' + caller.line
    }
    if (isFunction(b)) {
        const pass = b(x);
        if (pass) {
            return 
        }
        chalk(errorStatement('ValueError'), 'NOT ' + b.toString());
        throw ''
    }

    const a = type(x);
    if (javascriptNativeFunctions.includes(b)) {
        b = b.name;
    }
    if (a == b) {
        return 
    }
    const m = errorStatement('TypeError');
    const n = x == null 
        ? 'The value is Null'
        : `Type ${a} != ${b && b.name || b || 'Null'}`;
    chalk(m, n);
    throw ''
}




function splice(items, index, insertions) {
    const eIndex = indexGetter2(items, index);
    items.splice(eIndex, 1, ...insertions);
    return items
}


function getKwargs2(s) {
    const configRE = /(:?[\w-]+) *[:=] *(.+?)(?=$|\w+ * =)/g;
    //console.log({s})
    const [text, doubles] = mget(configRE, s);
    const store = {};
    doubles.forEach(([a,b]) => {
        store[a] = b.replace(/,$/, '');
    });
    split(text).forEach((item, i) => {
        store[item] = true;
    });
    return store
}

function hasHtmlSuffix(el, force) {
    if (force) return true
    return HTML_CLOSING_TAGS.includes(el)
}

function removeInlineComments(s) {
    return s.replace(/ *\/\*.*?\*\/ */, '')
}

function argParse(s) {
    return /^[\[\{'"\(]/.test(s)
        ? split(s.slice(1, -1).trim(), 'comma').map(toArgument) 
        : [s]
}

function argKwargSplit(s) {
    const r = /([^:=\s]+)(?:(?: *[=:] *)(\(.*?\)|\[.*?\]|\{.*?\}|".*?"|'.*?'|\S+))?/g;

    const a = [];
    const b = [];
    while (true) {
        const m = r.exec(s);
        if (m) {
            if (isDefined(m[2])) {
                b.push([m[1], argParse(m[2])]);
            } else {
                a.push(m[1]);
            }
        } else {
            return [a, b]
        }
    }
}

function cumulativeSchemaAssign(base, object, schema) {
    if (empty(object)) {
        return base
    }
    return runner(base, object)

    function add(base, key, value) {
        if (schema && schema[key] == 'merge') {
            base[key] = merge$1(base[key], value);
        } else {
            base[key] = value;
        }
    }

    function runner(base, x) {
        Object.entries(x).forEach(([k,v]) => {
            if (v == null) {
                return 
            } else if (base[k] && isObject(v)) {
                runner(base[k], v);
            } else {
                add(base, k, v);
            }
        });
        return base
    }
}

function exporter2(State, ...args) {
    const state = isClassFunction(State)
        ? new State(...args)
        : State;

    const keys = ['run', 'build'];
    const key = keys.find((x) => x in state);
    return state[key].bind(state)
}

class ArrayState {
    get empty() {
        return empty(this.store)
    }
    constructor() {
        this.reset();
    }
    push(val) {
        push2(this.store, val);
    }
    reset() {
        this.store = [];
    }
    toJSON() {
        return this.store
    }
}

function conditional(fn, condition, gn) {
    return function lambda(...args) {
        return condition(args[0]) ? gn(...args) : fn(...args)
    }
}

function myError(message, ...args) {
    throw new MyError(message, ...args)
}

//const fm = createFuzzyMatch(['a', 'b', 'c', 'd', 'ev', 'bb', 'voo'])
//console.log(fm('v'))
//const aa = {a:1, b:2, c:{d:1}}
//console.log(aa.g.d)
//console.log(mergeObjects(null, {a:1}))
function sort(items, fn, reverse) {

    const gn = fn == null ? identity : fn.length == 2 ? (x) => fn(...x) : fn;

    function runner(a, b) {
        const A = gn(a);
        const B = gn(b);
        return reverse
            ? (isString(A) ? B.localeCompare(A) : B - A)
            : (isString(A) ? A.localeCompare(B) : A - B)
    }

    return isObject(items) 
        ? dict(Object.entries(items).sort(runner))
        : items.sort(runner)
}

function getParameters2(s) {
    if (!s) return []
    const t = search$1(/\(.+/, s.toString());
    const r = /\w+ *= *\S+|['"]?\w+/g;
    const m = t.match(r);
    if (m) {
        return m.filter((x) => /^[a-zA-Z]/.test(x)).map(getFirstWord)
    }
    return []
}

//console.log(type(String))

function argMatch(args, ...keys) {
    const seen = [];
    function is(x) {
        if (isNumber(x)) return 'Number'
        if (isString(x)) return 'String'
    }
    return keys.map((key, i) => {
        const t = type(key);
        return args.find((arg, i) => {
            if (seen.includes(i)) return 
            if (is(arg) === t) {
                seen.push(i);
                return true
            }
        })
    })
}
//console.log(empty(4))

class MyError extends Error {
    constructor(message, ...args) {
        const computedMessage = [
            chalk3(message, 'red', true),
            exists$1(args) ? chalk3({args}, 'blue') : null
        ].filter(isDefined).join(' ');

        super(computedMessage);
    }
}
class CustomError extends Error {
    constructor(message, template, state) {
        const computedMessage = isNode() ? '\x1b[31m\x1b[1m' + message + '\x1b[0m' : message;
        super(computedMessage);
        if (template) this.template = template;
        if (state) this.state = state;
            console.log(this.stack);
    }
}
function type3(x) {
    if (x.type) {
        if (isString(x.type)) {
            return x.type
        }
        return type3(x.type)
    }
    const nativeStrings = [
        'Number',
        'String',
        'Object',
        'Array',
        'Promise',
        'Set',
        'Function',
    ];
    const nativeObjects = [
        Number,
        String,
        Object,
        Array,
        Promise,
        Set,
        Function
    ];
    if (nativeStrings.includes(x)) {
        return x
    }

    if (nativeObjects.includes(x)) {
        return x.name
    }

    if (x === null) {
        return "Null"
    }
    if (x == null) {
        return "Undefined"
    }
    if (typeof x === "number" && x.toString() == "NaN") {
        return "NaN"
    }
    if (isNumber(x)) {
        return 'Number'
    }
    try {
        return x.constructor.name
    } catch(e) {
        return 'Module'
    }
}
function typeMatch(a, b) {
    return type3(a) === type3(b)
}
//const x = new QueryList({})
//x.set('a')
//const items = ['a', 'b', 'c', 'd', 'e'].map((x) => ({x}))
//items.forEach(x.set)
//console.log(x.modular(1))

function messengerAssert(x, ref) {
    if (isDefined(x)) {
        return x
    }
        const key = getCaller2(-1).caller;
        const message = assertionErrorMessages[key];
        if (isObject(message)) {
            if (message.template) {
                const computedTemplate = 
                    templater(message.template, ref);
                throw new MyError(computedTemplate)
            } else {
                throw new MyError(message.default)
            }
        }
        throw new Error('perhaps you forgot the template')
}
//console.log(popIndex(['a', 'b', 'c', 'd', 'e'], -1))
//console.log(Object.keys())


function browserChalk(arg, color, bold) {
    console.log(new Error());
    const style = `color: ${color}; font-weight: ${bold ? 'bold' : '400'}`;
    console.log(`%c${stringify(arg)}`, style);
}
//console.log(modifyNumber('g3', (x) => x + 1))

function display(...args) {
    console.log(...args);
}


function assignAliases(dict, aliases) {
    map(aliases, (k, v) => {
        dict[k] = dict[v];
    });
}

function camelSlice(s, key) {
    if (key == null) {
        return camelCase(s.replace(/.*?-/, ''))
    }
    return uncapitalize(s.replace(key, ''))
}

//console.log(lineGetter('a\n\na\na', true))



function debugDisplay(key, s) {
    if (console.hasOwnProperty(key)) {
        sandwichLog(s, 'debugDisplay: ' + key);
    }
}
//console.log(fuzzyMatch3(['a', 'aaab', 'c', 'd', 'e'], 'ab', {matchAnywhere: true}))


function search3(r, s) {
    const m = s.match(r);
    if (m) {
        switch (m.length) {
            case 1: return m[0]
            case 2: return m[1]
            default: return m.slice(1)
        }
    }
}

function strictMessengerAssert(x, ref) {
    if (exists$1(x)) {
        return x
    }
    const stack = getErrorStack2().slice(2);
    stack[0][2];
    const callers = [];
    let lastFile;
    for (const [caller, file] of stack) {
        if (lastFile && file != lastFile) {
            break
        }
        callers.unshift(caller);
        lastFile = file;
    }
    const computedKey = callers.join('.');
    const message = assertionErrorMessages[computedKey];
        if (isObject(message)) {
                if (message.template) {
                    const computedTemplate = 
                        templater(message.template, ref);
                    throw new MyError(computedTemplate)
                }
            else {
                throw new MyError(message.default)
            }
        }
        else if (message) {
            throw new MyError(message)
        }
        else {
            throw new Error('regular messenger assertion error. need to make a ref for it in variables ... ' + computedKey)
        }
}
//console.log(map2(['a', 'b', 'c', 'd', 'e'], 'ab$1'))
//console.log(map2(['a', 'b', 'c', 'd', 'e'], /a/))
//console.log(map2([{a:1}], 'a'))
//console.log(sortByKeys({1:10, 4:2, 2:30}))


function sortByKeys(items) {
    return sort(entries$1(items), (x) => x[0])
}


//const specA = { a: 1, }
//const specB = { b: 1 }

//const specA = { a: 1, b: 3, }
//const specB = { b: 1 }

//const specA = { a: [1], }
//const specB = { a: [2], }

//const specA = { a: { b: 1, d: [1] } }
//const specB = { a: { c: 12, d:[2] } }

//console.log(mergeSpecs(specA, specB))


function getKwargsDelimitedByEqualSign(s) {
    return dict(partition(split(s, /(\S+) *= */)).map(atSecond(toArgument)))
}
//console.log(getKwargs('asdf =  asdf | asdf | xxxx aa=123'))
//console.log(map2([{a:1, b:{a:1}, c:3}], ['a', 'b.a as ddd']))


function reff(ref) {
    return function lambda(...args) {
        const key = args.pop();
        return ref[key](...args)
    }
}

function eatStart(s, r) {
    assert(r);
        const store = [];
        while (true) {
            s = s.trimStart();
            const m = s.match(r);
            if (m) {
                s = s.slice(m[0].length);
                push2(store, matchGetter(m, 'search2'));
            } else {
                break
            }
        }
        return [s, store]
}
const getOptionsRef = {
    extractStartingOptions(s) {
        const [text, store] = eatStart(s, /^([\w-]+) = (.+)/);
        return [text, dict(store)]
    },
};

//console.log(getOptions('s = a', 'extractStartingOptions'))


//const m = new Map([[1, 2], [3, 4]])
//console.log(m.get(1))

function popEmptyLine(store) {
    if (getLast(store) == '') {
        store.pop();
        return true
    }
}

const getOptions = reff(getOptionsRef);

function gcd(a, b) {
    return !b ? a : gcd(b, a % b)
}

function getNumber(s) {
    const r = /-?\d+(?:\.\d+)?%?/;
    return toNumber(search$1(r, s))
}

function rng(min = 1, max = 10) {
    if (min == max) return min
    if (!isDefined(min)) {
        min = 1;
        max = 10;
    } else if (isArray(min)) {
        if (min.length >= 2) {
            return randomPick(min)
        }
        max = min[1];
        min = min[0];
    } else if (arguments.length == 1) {
        max = min;
        min = 1;
    }
    if (min == max) return min
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomPick(items) {
    if (isObject(items)) {
        items = Object.entries(items);
    }
    if (!isArray(items)) return items
    return items[Math.floor(Math.random() * items.length)]
}

//console.log(addMathComma('food. 123.456' ))

//console.log(fixFloatingPoint(0.1000000006))

function toPercentage(a, b, n = 2) {
    const value = a / b;
    return 100 * value.toFixed(n) + '%'
}
//console.log(roundToNearest(3, 10))

function lcm(numbers) {
  function findTwoLCM(a, b) {
    return (a * b) / gcd(a, b)
  }

  if (numbers.length === 0) {
    return null;
  } else if (numbers.length === 1) {
    return numbers[0];
  } else {
    let lcm = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      lcm = findTwoLCM(lcm, numbers[i]);
    }
    return lcm;
  }
}

class DialogueItem {
    setContent(content) {
        if (content) this.content = content;
    }
    setSpeaker(speaker) {
        if (speaker) this.speaker = speaker;
    }
    constructor(speaker, content) {
        this.setSpeaker(speaker);
        this.setContent(content);
    }
    toJSON(fn, wrapFn) {
        let value = this.content;
        if (fn) {
            value = fn(this.content);
        }
        if (wrapFn) {
            return wrapFn(this.speaker, value)
        }
        return {
            speaker: this.speaker,
            content: value
        }
    }
}


class Dialogue {
    toJSON(fn) {
        const f = (x) => x.constructor.name == 'DialogueItem';
        const g = (x) => x.toJSON();
        const items = this.items.filter(f);
        //console.log(items[0].content.toString()); throw "";
        return items.map(g)
    }
    constructor(speakers) {
        this.setSpeakers(speakers);
        this.items = [];
    }
    setSpeakers(...args) {
        this.speakers = flat(args);
    }
    inferSpeaker(s) {
        return '$'
    }
    add(x, y) {
        if (y && isString(x)) {
            this.items.push(new DialogueItem(x, y));
        }
        else if (x.constructor.name == 'DialogueItem') {
            this.items.push(x);
        }
        else if (isString(x)) {
            const speaker = this.inferSpeaker(x);
            this.items.push(new DialogueItem(speaker, x));
        }
        else if (isNestedArray(x)) {
            x.forEach((item) => {
                this.items.push(new DialogueItem(...item));
            });
        }
        else if (isArray(x)) {
            x.forEach((item) => {
                this.items.push(new DialogueItem('$', item));
            });
        }
    }
    run() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            this.handleSpeaker(item);
            this.handleText(item);
        }
        return this
    }
    mod(...args) {
        const asString = getLast(args) == String && args.pop();
        const value = modularIncrement(this.speakers, ...args);
        return asString && isNumber(value) 
            ? this.speakers[value] : value
    }
    handleText(item) {
        const speakers = distinct(this.speakers, item.speaker);
        const r = /\$(?:prev|next|others|self|me|-?\d+)\b|\${1,2}(?!\w)/g;
        const f = (key) => {
            switch (key) {
                case '$others':
                case '$$':
                    return speakers.join(', ')
                case '$':
                case '$prev':
                    return this.mod(this.speakerIndex, -1, String)
                case '$next':
                    return this.mod(this.speakerIndex, 1, String)
                case '$self':
                case '$me':
                    return item.speaker
                default:
                    throw new Error('todo')
            }
        };

        const value = item.content.includes('$$$')
            ? lineDitto(item.content, speakers)
            : item.content.replace(r, f);
        item.setContent(value);
    }
    setSpeakerIndex(index) {
        if (isDefined(index)) {
            this.speakerIndex = index;
        }
    }
    handleSpeaker(item) {
            let speaker = item.speaker;
            let newSpeakerIndex;

            if (speaker == 'next' || speaker == '$') {
                newSpeakerIndex = modularIncrement(
                    this.speakers, this.speakerIndex,
                );
                item.setSpeaker(this.speakers[newSpeakerIndex]);
            }
            else if (speaker  == 'foo') ;

            else {
                newSpeakerIndex = this.speakers.indexOf(item.speaker);
                if (newSpeakerIndex < 0) {
                    newSpeakerIndex = null;
                    //console.log(item.speaker, 'ggg')
                    //throw new Error()
                } else if (newSpeakerIndex == this.speakerIndex) {
                    throw new Error('same speaker: ' + this.speakers[newSpeakerIndex])
                }
            }
            this.setSpeakerIndex(newSpeakerIndex);
            return newSpeakerIndex
    }
}


function dialogueParser(s, {speakers = ['Ivy', 'Sandy']} = {}) {
    const dialogue = new Dialogue(speakers);
    const ref = {
        h: 'Hammy',
        tg: speakers.join(' & '),
    };
    function f(s, i) {
        let [text, hammy] = mget(/^(?:h|tg) /, s);
        const speaker = ref[hammy];
        if (speaker) {
            dialogue.add(speaker, text);
        } else {
            dialogue.add(text);
        }
    }
    split(s, 'linebreak').forEach(f);
    return dialogue.run().toJSON()
}
//console.log(dialogueParser(str1684785343))
//'/home/kdog3682/MARKDOWN/Ivy and Sandy Teach Hammy Decimals.md'

const cabmap = {"document-page-container":{"position":"relative","width":"8.5in","height":"11in","padding":"0.5in"},"flip":{"transform":"rotate(180)"},"fullscreen":{"width":"100vw","height":"100vh"},"flex":{"display":"flex"},"flex-between":{"justify-content":"space-between","display":"flex","width":"100%"},"leftright":{"justify-content":"space-between","display":"flex","width":"100%"},"space-between":{"justify-content":"space-between","display":"flex"},"jcsb":{"justify-content":"space-between"},"jcsa":{"justify-content":"space-around"},"jcse":{"justify-content":"space-evenly"},"jist":{"justify-items":"stretch"},"jis":{"justify-items":"start"},"jie":{"justify-items":"end"},"jic":{"justify-items":"center"},"ais":{"align-items":"start"},"aistr":{"align-items":"stretch"},"acstr":{"align-content":"stretch"},"aie":{"align-items":"end"},"aib":{"align-items":"end"},"aic":{"align-items":"center"},"aist":{"align-items":"stretch"},"jcs":{"justify-content":"start"},"jce":{"justify-content":"end"},"jcc":{"justify-content":"center"},"jcst":{"justify-content":"stretch"},"acs":{"align-content":"start"},"ace":{"align-content":"end"},"acc":{"align-content":"center"},"acst":{"align-content":"stretch"},"rel":{"position":"relative"},"relative":{"position":"relative"},"abs":{"position":"absolute"},"absolute":{"position":"absolute"},"fixed":{"position":"fixed"},"landscape":{"height":"8.5","width":"11in"},"fwh":{"height":"9.5in"},"portrait":{"width":"8.5in","height":"11in"},"outline":{"outline":"1px solid red"},"blue":{"color":"blue"},"dotted":{"border-style":"dotted"},"red":{"color":"red"},"box":{"width":"100pt","height":"100pt","box-sizing":"border-box","*":"","padding":"0","margin":"0"},"reset":{"padding":"0","margin":"0","box-sizing":"border-box"},"bred":{"border":"2px solid red"},"orange":{"color":"orange"},"green":{"color":"green"},"violet":{"color":"violet"},"black":{"color":"black"},"white":{"color":"white"},"fitc":{"width":"fit-content"},"bgw":{"background":"white"},"bgy":{"background":"yellow"},"bgb":{"background":"black"},"blackwhite":{"background":"black","color":"white"},"bgg":{"background":"green"},"absmiddle":{"position":"absolute","left":"0","right":"0","margin":"auto"},"middle":{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%, -50%)"},"abscenter":{"position":"absolute","top":"0","left":"0","right":"0","bottom":"0","margin":"auto"},"wfc":{"width":"fit-content"},"mirror":{"display":"inline-block","transform":"scaleX(-1)","filter":"FlipH"},"flexwrap":{"display":"flex","flex-wrap":"wrap"},"wrap":{"display":"flex","flex-wrap":"wrap"},"horoflex":{"display":"flex","align-items":"center"},"jsc":{"justify-self":"center"},"asc":{"align-self":"center"},"bugb":{"border":"3px solid green"},"bb":{"border":"1px solid black"},"bor":{"border":"1px solid black"},"border":{"border":"1px solid black"},"ored":{"outline":"1px solid red"},"oblue":{"outline":"1px solid blue"},"ogreen":{"outline":"1px solid green"},"ou":{"outline":"unset"},"ilb":{"display":"inline-block"},"inline":{"display":"inline"},"upper":{"text-transform":"uppercase"},"uppercase":{"text-transform":"uppercase"},"cap":{"text-transform":"capitalize"},"lower":{"text-transform":"lowercase"},"ofs":{"overflow":"scroll","overflow-x":"hidden"},"ofx":{"overflow-x":"hidden"},"ofy":{"overflow-y":"hidden"},"bebas":{"font-family":"bebas"},"katex":{"font-family":"KaTeX_Main"},"whitespace":{"white-space":"pre-wrap"},"pre":{"white-space":"pre-wrap"},"west":{"top":"50%","transform":"translateY(-50%)","left":"0"},"float":{"float":"right"},"northeast":{"right":"0","top":"0"},"east":{"right":"0","top":"50%","transform":"translateY(-50%)"},"south":{"bottom":"0","left":"50%","transform":"translateX(-50%)"},"sw":{"bottom":"0","left":"0"},"mid":{"top":"50%","transform":"translateY(-50%)","left":"0"},"northwest":{"left":"0","top":"0"},"nw":{"left":"0","top":"0"},"code":{"font-family":"source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"},"centered":{"display":"flex","align-items":"center","justify-content":"center"},"center":{"display":"flex","align-items":"center","justify-content":"center"},"spacebetween":{"justify-content":"space-between"},"times":{"font-family":"Times"},"georgia":{"font-family":"Georgia"},"cp":{"font-family":"Crimson Pro"},"minion":{"font-family":"minion"},"crim":{"font-family":"Crimson Text"},"ct":{"font-family":"Crimson Text"},"noto":{"font-family":"Noto Emoji"},"mhauto":{"margin":"0 auto"},"mvauto":{"margin":"auto 0"},"mauto":{"margin":"0 auto"},"caps":{"text-transform":"uppercase"},"underline":{"border-bottom":"1px solid currentColor"},"bold":{"font-weight":"bold"},"italic":{"font-style":"italic"},"flexcol":{"display":"flex","flex-direction":"column"},"tac":{"text-align":"center"},"block":{"display":"block"},"system":{"font-family":"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif"},"arial":{"font-family":"Arial"},"courier":{"font-family":"Courier"},"bigbox":{"width":"400px","height":"400px"}};




const _boxShadows$1 = {
  "layered-smooth": "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12)",
  "tailwind-soft": "0 1px 2px 0 rgba(0,0,0,0.05)",
  "tailwind-normal": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
  "ui-bottom-right": "2px 2px 2px rgba(0, 0, 0, 0.15)",
  "ui-highlight": "0px 2px 4px rgba(0, 0, 0, 0.2)",
  "perfect": "0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08)",
  "raised": "inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1), 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3)",
  "soft-glow": "0px 9px 30px rgba(255, 149, 5, 0.1)",
  "glow": "0px 9px 30px rgba(255, 149, 5, 0.3)",
  "card": "0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1)",
  "minimal": "0px 3px 5px rgba(0, 0, 0, 0.04)",
};
Object.values(_boxShadows$1);


//const cabmap = build(str1686367165)
//const arrayCabmap = build(str1686367165, Array)

const cabmapAliases = {
    sw: 'southwest',
    se: 'southeast',
    nw: 'northwest',
    ne: 'northeast',
};
assignAliases(cabmap, cabmapAliases);
assignFromString(cabmap, `cursor:pointer`);

function assignFromString(obj, s) {
    Object.assign(obj, dict(partition(split(s, /(\S+?):/))));
}

function getBlock2$1(state, spaces, fn, match) {
    const store = [];
    const startingIndex = state.index;
    while (state.index < state.size) {
        let info = state.getLineInfo(state.index++);
        if (info.line && info.spaces < spaces) {
            break
        }
        if (info.newlines) {
            for (let i = 0; i < info.newlines - 1; i++) {
                store.push("");
            }
            continue
        }

        const result =
            state.index - 1 > startingIndex &&
            fn(info.line, info.spaces, spaces, match);

        if (!result) {
            store.push(info.base);
        }
        if (isObject(result)) {
            handleObject(state, result, store, info);
            break
        } 
    }
    return store
}


const bracketRE = /[\{\[]$/;
const tripleSingleQuoteRE = /'''/;
function tripleSingleQuoteStop(line, spaces, originalSpaces, m) {
    if (tripleSingleQuoteRE.test(line)) {
        return true
    }

    return matchSpaceEnd(line, spaces, originalSpaces)
}

const atNamedRE = /^@(?:javascript|python)/;

function blocker(s, spaces) {
    const items = [
        [bracketRE, bracketStop, 'bracket'], /* assignmentRE equivalent */
        [tripleSingleQuoteRE, tripleSingleQuoteStop, 'tripleSingle'],
        //[codeRE, tripleSingleQuoteStop, codeBlock], hard
        // can be used later for markdown 
        [atNamedRE, atNamedStop, 'atNamed'],
    ];

    for (const [a, b, c] of items) {
        const m = search$1(a, s);
        if (m) {
            const value = smartDedent2(
                getBlock2$1(this, spaces, b, m)
            );
            const postParse = this.getBlockPostParseRef[c];
            if (postParse) {
                const newValue = postParse(value);
                return isObject(newValue)  ? edit(newValue, 'value', smartDedent2) : {value: smartDedent2(newValue)}
            }
            return {value}
        }
    }
    return {value: s}
}
function handleObject(state, m, store, info) {
    if (m.changeIndex) {
        state.index += m.changeIndex;
    } else if (m.append) {
        const appends = toArray2(m.append);
        const emptyLine = popEmptyLine(store);
        appends.forEach((append, i) => {
            store.push(" ".repeat(spaces) + append);
        });
        if (emptyLine) {
            store.push("");
        } else {
            state.index--;
        }
    } else if (m.offset) {
        if (m.offset < 0) {
            //console.log({store})
            for (let i = 0; i < Math.abs(m.offset); i++) {
                //store.pop()
                state.index--;
            }
        } else {
            store.push(info.base);
            for (let i = 1; i < m.offset; i++) {
                store.push(state.getLine(++state.index));
            }
        }
    }
}

function bracketStop(line, spaces, originalSpaces, m) {
    if (spaces != originalSpaces) {
        return
    }
    if (
        (m == "{" && line == "}") ||
        (m == "[" && line == "]")
    ) {
        return {
            offset: 1
        }
    }
}

function atNamedStop(line, spaces, originalSpaces) {
    return matchSpaceEnd(line, spaces, originalSpaces)
}

function matchSpaceEnd(line, spaces, originalSpaces) {
    if (line.trim().length && spaces === originalSpaces) {
        return {
            offset: -1
        }
    }
}

//import { BaseLineEdit } from "./LineEdit2.js"
//const aaa = exporter2(BaseLineEdit, options)
//aaa(s)

function metaString(attrs) {
    const [name, content] = entries$1(attrs)[0];
    if (name == "charset") {
        return `<meta charset="utf8">`
    }
    return `<meta name="${name}" content="${content}">`
}

function vueAttrAddQuotes(s) {
    function quote(s) {
        return `"${s}"`
    }

    if (s.includes('\n')) {
        return quote(s.replace(/\n/g, '\\n'))
    }
    if (s.endsWith('"')) {
        return s
    }

    return quote(s)
}
function attrString(src, key, value, spaces = ' ') {
    if (empty(value)) {
        return ""
    }

    const objectEntry = (k, v) => {
        if (v == null) return 
        if (v === '') return attrCase(k)
        const payload = isObject(v)
            ? JSON.stringify(v).replace(/"/g, "'") : v;
        return `${attrCase(k)}=${vueAttrAddQuotes(payload)}`
    };
    const attrCase = (k) => {
        const ignore = [
            "viewBox",
            "patternUnits",
        ];
        if (k.startsWith('@')) return k
        return ignore.includes(k) ? k : dashCase(k)
    };
    const propEntry = (k, v) => ":" + fn(k, v);
    const cssEntry = (k,v) => {
        if (v == null || v === '') return 
        const value = removeInlineComments(v);
        return `${attrCase(k)}: ${value};`
    };
    function reducer(x) {
        if (isObject(x)) {
            return reduceToString(x, cssEntry, " ")
        }
        const items = x.map((x) => {
            if (isObject(x)) {
                return reduceToString(x, cssEntry, " ")
            } else {
                let [a, b] = x;
                return cssEntry(a, b)
            }
        });
        return items.join(' ')
    }
    const payload = key == 'style'
        ? objectEntry(key, reducer(value))
        : key == 'props'
        ? reduceToString(value, propEntry, " ")
        : key == null && isObject(value)
        ? reduceToString(value, objectEntry, " ")
        : objectEntry(key, value);

    //console.log({payload})
    return spaces + payload
}

function xmlString(data, children) {
    if (data.spacer) {
        return ""
    }
    if (data.delete) {
        return
    }
    if (data.html) {
        return data.html
    }

    let {
        props,
        attrs,
        style,
        component,
        tag,
        overrideTag,
        computedStyle,
        computedClass,
        classes,
        value,
        textValue,
        text,
        overrideClass,
        spacerValue,
    } = data;
    const parent = component || overrideTag || tag || "div";
    if (spacerValue && parent != component) {
        if (!style) style = {};
        if (!style.marginBottom) style.marginBottom = spacerValue * 5 + 'pt';
    }
    const className = overrideClass || unique(toArray(data.class || classes))
        .sort(len)
        .join(" ");
    const body = exists$1(children)
        ? children.join("\n")
        : isDefined(textValue)
        ? textValue
        : isDefined(text)
        ? text 
        : value;
    const emptyBody = empty(body);

    if (tag == "meta") {
        return metaString(attrs)
    }
    const prefix =
        tag == "html" && className == "root"
            ? "<html"
            : tag == "html" || tag == "root"
            ? `<!DOCTYPE html><html lang="en"`
            : `<${parent}`;

    if (
        attrs &&
        attrs["v-for"] &&
        attrs["v-for"].includes("$")
    ) {
        attrs["v-for"] = attrs["v-for"].replace(
            "$",
            camelCase(className)
        );
    }

    if (exists$1(props)) {
        if (!exists$1(attrs)) {
            attrs = {};
        }
        Object.assign(attrs, props);
    }
    //throw ''
    let s = prefix;
    s += attrString(s, "class", dashCase(className));
    s += attrString(s, null, attrs);
    if (component) {
        //console.log('aaaaaaaaa component xmlstring')
        s += attrString(s, "style", style);
    } else {
        s += attrString(s, "style", style);
    }
    //s += attrString(s, "props", props)

    if (computedClass) {
        s += ` :class="${computedClassToString(computedClass)}"`;
    }

    if (computedStyle) {
        s += ` :style="${computedStyleToString(computedStyle)}"`;
    }
    if (emptyBody && !hasHtmlSuffix(parent)) {
        s += "/>";
        if (data.spacerValue) { s += '\n'.repeat(data.spacerValue - 1); }
        return s
    }

    s += ">";
    if (!emptyBody) {
        if (hasNewline(body) || hasHtml(body)) {
            s += newlineIndent(body);
        } else {
            s += body;
        }
    }
    s += `</${parent}>`;
    if (s == `<${parent}></${parent}>`) {
        if (parent == 'slot') {
            return s 
        }
        return ""
    }
    if (data.spacerValue) { s += '\n'.repeat(data.spacerValue - 1); }
    return s
}
function computedStyleToString(computedStyle) {
    //console.log(computedStyle)
    //throw ''
    const transform = (s, key) => {
        return s
    };
    const g = (target, items, key) => {
        let s = '';
        for (let i = 0; i < items.length; i++) {
            const [b,a] = items[i].map(singleQuote);
            const value = transform(b);
            if (i == 0) {
                s += `${target} == ${a} ? ${value}`;
            } 

            else if (i == items.length - 1) {
                s += ` : ${target} == ${a} ? ${value} : null`;
            }

            else {
                s += ` : ${target} == ${a} ? ${value}`;
            }
        }
        return s
    };
    const f = ([key, arg]) => {
        if (isString(arg)) {
            return `'${key}': ${arg}`
        }
        let {target, items} = arg;
        return `${key}: ${g(target, items)}`
    };
    const items = entries$1(computedStyle).map(f);
    return `{${items.join(', ')}}`
}

function computedClassToString(items) {
    const f = ([a,b]) => {
        return `'${dashCase(a)}': ${b}`
    };
    return `{${items.map(f).join(', ')}}`
}

class Element2 {

    attrKeys = [
        "computedStyle",
        "computedClass",
        "style",
        "class",
        "props",
        "attrs",
        "slots",
        "events",
        "directives",
    ]

    __init__(x) {
        warn(`
            Abstract Method not Implemented
            Each Class which extends Element2 is different.

            init() occurs as the first hook.
            Afterwards, the parent is set.

            It is important to individually craft each init.
        `);
    }

    __str__(...args) {
        return xmlString(...args)
    }
    __create__(x) {
        return isClassObject(x)
            ? x.setParent(this)
            : new this.constructor(x, this)
    }

    __json__() {
        if (this.jsonKeys) {
            return stateGetter2(this, this.jsonKeys)
        }
        throw new Error("Abstract Method not Implemented")
    }

    get size() {
        return this.children.length
    }

    get root() {
        return this.parent ? this.parent.root : this
    }

    toString(fn = this.__str__) {
        const body = this.children.map((child) => {
            return child.toString(fn)
        });
        const data = this.__json__();
        return fn(data, body)
    }
    constructor(el, parent) {
        this.children = [];
        this.data = {};
        if (el) this.__init__(el);
        this.setParent(parent);
        this.depth = this.parent ? this.parent.depth + 1 : 0;
    }

    toPrettyJSON() {

    function clean(o) {
        return reduce2(o, (k, v) => {
            return v == null ? v : [k, v]
        })
    }
        const runner = (state) => {
            const children = state.children.map(runner);
            const data = clean(state.__json__());
            if (children.length) data.children = children;
            return data
        };
        return runner(this)
    }
    toJSON() {
        const runner = (state) => {
            const children = state.children.map(runner);
            const data = state.__json__();
            if (children.length) data.children = children;
            return data
        };
        return runner(this)
    }
    setNewFamily(parent) {
        this.parent = parent;
        this.children = [];
        return this
    }

    setParent(parent) {
        if (parent == null) {
            this.uid = 0;
        } else {
            this.parent = parent;
            this.uid = parent.uid + parent.size + 1;
            this.iterate((child) => {
                child.uid += this.uid;
            });
        }
        return this
    }

    get prevSibling() {
        if (!this.parent) {
            return null
        }
        if (this.parent.size == 1) return null
        let index = this.parent.children.indexOf(this);
        if (index == 0) return null
        return this.parent.children[index - 1]
    }
    get nextSibling() {
        if (!this.parent) {
            return null
        }
        this.parent.size;
        const index = this.parent.children.indexOf(this);
        return this.parent.children[index + 1]
    }

    get siblings() {
        if (!this.parent) return []
        return this.parent.children.filter((x) => x != this)
    }
    get numSiblings() {
        return this.siblings.length
    }
    get isOnlyChild() {
        return this.isLeaf && this.numSiblings == 0
    }
    getInfo() {
        const size = this.size;
        const childValues = this.children.map((x) => x.getData());
        return {
            size, childValues
        }
    }
    get lastChild() {
        //console.logg(this.getInfo())
        return this.children && this.children[this.size - 1]
    }
    get firstChild() {
        return this.children[0]
    }

    hasChildren() {
        return this.children.length > 0
    }

    get isLeaf() {
        return this.children.length == 0
    }
    get isRoot() {
        return this.uid == 0
    }

    get isBranch() {
        return this.children.length > 0
    }

    prev() {
        return this.prevSibling || this.parent
    }
    next() {
        return this.firstChild || this.nextSibling
    }
    appendChild(...args) {
        if (args[0] === true) {
            return 
        }
        const child = this.__create__(...args);
        return push2(this.children, child)
    }
    prependChild(...args) {
        const child = this.__create__(...args);
        return unshift2(this.children, child)
    }
    insert() {
        
    }
    insertChildBefore(reference, x) {
        const index = indexGetter2(this.children, reference);
        const child = this.__create__(x);
        if (index == null || child == null) {
            return
        }
        return insert2(this.children, index, child)
    }
    insertChildAfter(reference, x) {
        const index = indexGetter2(this.children, reference);
        const child = this.__create__(x);
        if (index == null || child == null) {
            return
        }
        return insert2(this.children, index + 1, child)
    }

    simpleIterate(fn) {
        this.children.forEach((child) => {
            fn(child, child.parent);
            child.simpleIterate(fn);
        });
    }

    oldwalk(fn) {
        let node = this;
        let store = [];
        let count = 0;
        do {
            push2(store, fn(node, count++));
        } while (node = node.next())
        return store
    }
    walk(fn) {
        function runner(node) {
            push2(store, fn(node, count++));
            node.children.forEach((child) => {
                runner(child);
            });
        }

        let count = 0;
        let store = [];
        runner(this);
        return store
    }


    iterateChildrenFirst(fn) {
        if (this.skipIteration) { return }
        this.children.forEach((child) => {
            child.iterateChildrenFirst(fn);
            fn(child, child.parent);
        });
    }

    markChildForDeletion(node) {
        if (!this.deletedNodes) this.deletedNodes = [];
        this.deletedNodes.push(node);
    }
    markForDeletion2() {
        //console.log('aaa')
        this.parent.markChildForDeletion(this);
    }
    markForDeletion() {
        this.markedForDeletion = true;
    }
    iterate(fn) {
        const removals = [];
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];

            if (child.skipIteration) { continue }
            if (child.touched) { 
                child.touched = false;
                continue 
            }

            const response = fn(child);

            if (child.markedForDeletion) {
                removals.push(child);
            }

            if (response === false) {
                continue 
            }
            if (response === 'parentStop') {
                break
            }
            child.iterate(fn);
        }
        removals.forEach((node) => node.remove());
        if (this.insertedChildren) {
            this.insertedChildren.forEach(([index, child]) => {
                insert2(this.children, index, child);
            });
            this.insertedChildren = null;
        }
        if (this.deletedNodes) {
            this.deletedNodes.forEach((node) => {
                this.removeChild(node);
            });
            this.deletedNodes = null;
        }
        return 
    }

    map(fn) {
        const store = [];
        const runner = (child) => push2(store, fn(child));
        this.iterate(runner);
        return store
    }

    getAncestors() {
        const store = [];
        let self = this;
        while (self.parent) {
            store.push(self.parent);
            self = self.parent;
        }
        return store
    }

    enter() {
        const prev = this.children.pop();
        return this.appendChild(prev.__json__())
    }

    exit(n = 1) {
        let context = this;
        for (let i = 0; i < n; i++) {
            context = context.parent;
        }
        return context
    }
    findParent(fn) {
        let state = this;
        while (state = state.parent) {
            if (fn(state)) {
                return state
            }
        }
    }
    defaultAssign(value, markAssigned) {
        if (empty(value)) return 
        const children = pop2(value, "children");
        this.appendChildren(children, true);
        cumulativeAssign(this, value);
        if (markAssigned === true) {
            this._hasAssignedValues = true;
        }
        return this
    }
    assign(value) {
        return this.defaultAssign(value, true)
    }
    select(f) {
        let match;
        let fn = isString(f) ? (x) => x[f]  : f;
        this.iterate((node) => {
            if (fn(node)) {
                match = node;
                return false
            }
        });
        return match
    }

    selectAll(f) {
        const propSelector = (x) => {
            return x.hasOwnProperty(f)
        };
        const fn = arguments.length == 0 
            ? yes 
            : isString(f) 
            ? propSelector
            : testf2(f, Object);

        return this.map((node) => {
            if (fn(node)) {
                return node
            }
        })
    }
    appendChildren(children, skipIteration) {
        if (empty(children)) {
            return 
        }

        return toArray(children).map((child, i) => {
            const cob = this.appendChild(child);
            cob.uid += i;
            cob.skipIteration = skipIteration;
            return cob
        })
    }

    removeChild(x) {
        return pop2(this.children, x)
    }

    replaceChild(node, newNode, assign) {
        const index = indexGetter2(this.children, node);
        const newChild = this.__create__(newNode);
        if (assign) {
            newChild.defaultAssign(node.__json__());
        }
        this.children[index] = newChild;
        return newChild
    }

    removeChildren(children) {
        return children.map((child, i) => {
            return this.removeChild(child)
        })
    }
    removeAllChildren(fn) {
        if (fn) {
            const [removed, remaining] = partition(this.children, fn);
            this.children = remaining;
            return removed
        }
        const children = this.children;
        this.children = [];
        return children
    }

    replaceSelf(x) {
        if (isArray(x)) {
            splice(this.parent.children, this, x);
        } else {
            this.parent.replaceChild(this, x);
        }
        return this
    }
    getDepth() {
        return this.firstChild ? this.firstChild.depth : null
    }
    create(x) {
        const spec = isString(x) ? {class: x} : x;
        return new this.constructor(spec)
    }
    locals() {
        return this._locals
    }
    globals() {
        return this._globals
    }
    wrapWith(tag) {
        const wrapper = this.create({tag});
        wrapper.children = [this];
        this.replaceSelf(wrapper);
    }
    popValue() {
        const value = this.value;
        this.value = null;
        return value
    }
    create(x) {
        return new this.constructor(x)
    }



    /*--------------------------------- experimental */
    /*--------------------------------- experimental */
    /*--------------------------------- experimental */
    /*--------------------------------- experimental */
    /*--------------------------------- experimental */
    /*--------------------------------- experimental */
    /*--------------------------------- experimental */

    setAttribute() {
        
    }

    getAttribute(key) {
        const [computedKey, dataKey] = key.split("-");
        if (dataKey) {
            return this.dataset[dataKey]
        } else {
            return this.attrs[computedKey]
        }
    }
    setAttributes(attributes) {
        entries(attributes).forEach(([k, v]) => this.setAttribute(k, v));
    }
    setAttribute(key, value) {
        if (value == null) return
        const [dataKey, computedKey] = /^data/.test(key) ?
            [search(/data-(\S+)/, key)] : [null, key];
        if (dataKey) {
            this.dataset[dataKey] = value;
        } else {
            this.attrs[computedKey] = value;
        }
    }

    setAttribute(k, v) {
        if (v == null) {
            return 
        }
        if (k == 'class') {
            this.classList.add(v);
        }
        else {
            this.attrs[k] = v;
        }
    }
    extractAll(key) {
        /* doesnt really work well */
        const store = [];
        const checkpoint = isString(key) ? (node) => {
            return node.key === key || node.tag === key
        } : ndy();

        this.iterate((node) => {
            if (checkpoint(node)) {
                store.push(node.remove());
                return false
            }
        });
        return store
    }
    remove() {
        this.parent.removeChild(this);
        return this
    }

    iterateSelfFirst(fn) {
        breaker(10);
        if (this.skipIteration) {
            return 
        }

        const response = fn(this);
        if (response === false) {
            return 
        }

        this.children.forEach((child) => {
            child.iterateSelfFirst(fn);
        });
    }
    copy(node) {
        assert(node, 'need an existing value to copy');
        this.defaultAssign(node.__json__());
        this.children = node.children;
        return this
    }
    get computedSize() {
        return this.children.filter((x) => x.tag || x.component).length
    }
    popAttrs() {
        return stateGetter2(this, this.attrKeys, true, true /* deleteIt */)
    }

    getAttrs() {
        return stateGetter2(this, this.jsonKeys, true)
    }
    reduce(fn) {
        const store = {};
        const gn = (node) => {
            fn(store, node);
        };
        this.walk(gn);
        return store
    }

    tksl() {
        const body = this.children.map((child) => {
            return child.name
        });
        const data = this.__json__();
        return fn(data, body)
    }
    toSkeleton() {
        function runner(state) {
            const kids = state.hasChildren()
                ? state.children.map(runner).join('\n') : '';
            return state.name + indent$1(kids)
        }
        return runner(this)
    }
    toTreeJSON(fn) {
        function defaultGetState(state) {
            return {
                name: state.name,
            }
        }

        function runner(state) {
            count++;
            return {
                main: getState(state),
                children: state.children.map(runner)
            }
        }

        let count = 0;
        const getState = fn || defaultGetState;
        const value = runner(this);
        value.length = count;
        return value
    }

    toLibrary() {
        let node = this;
        let store = {};
        do {
            store[node.name] = node;
        } while (node = node.next())
        return store
    }
    mark(k, v) {
        if (k == null) return 
        if (v == null) { v = true; }
        this.defaultAssign({marks: {[k]: v}});
        return this
    }

    isSkippable() {
            if (this.requireAssignmentTouched && !this._hasAssignedValues) {
                myError('requireAssignmentTouch but this did not get an assignment via assign()');
            }

            if (this.forceSkip) {
                console.log('force skipping');
                return
            }

            if (this.done) {
                return
            }
    }
    getData() {
        return stateGetter2(this, this.jsonKeys, true)
    }
    appendChildFromObject(o) {
        o._doNotUseElementParser = true;
        return this.appendChild(o)
    }
    delete123() {
        this.parent.removeChild(this);
        return this
    }
    doAfterAction() {
        if (this.afterAction) {
            this.afterAction(this);
            this.afterAction = null;
        }
    }
    insertChildAtIndex(index, x) {
        const child = this.__create__(x);
        if (!this.insertedChildren) {
            this.insertedChildren = [];
        }
        this.insertedChildren.push([this.insertedChildren.length + index, child]);
        return child
    }
    getChildValues() {
        return this.children.map((child, i) => {
            return child.value
        })
    }

    popChildValues() {
        const values = this.children.map((child, i) => {
            return child.value
        });
        this.children = [];
        return values
    }
}

class LineEditor {
    toString() {
        return this.lines.join("\n")
    }
    constructor(state) {
        this.options = {
            tabWidth: 4,
            splitRE: /\n/,
        };
        bindObject(this, state);
    }
    load(s) {
        if (s) {
            s = smartDedent(s);
            this.index = 0;
            this.lines = s
                .trim()
                .split(this.options.splitRE)
                .filter(isDefined);
        }
    }

    get size() {
        return this.lines.length
    }

    insertBelow(index, content) {
        this.lines.splice(index + 1, 0, content);
    }

    insertAbove(index, content) {
        this.lines.splice(index, 0, content);
    }

    getSetLine(i, f) {
        let { spaces, line } = this.getLineInfo(i);
        let value = indent$1(fparse(f, line), spaces);
        this.setLine(i, value);
        return value
    }
    getSetLines(x, f, includeEndpoints) {
        //if (isNumber(x)) {
        //return this.getSetLine(x, f)
        //}
        let [from, to] = isObject(x) ? [x.from, x.to] : x;

        iterate(from, to, (i) => {
            return this.getSetLine(i, f)
        });
    }
    getSetRange(x, f, includeEndpoints) {
        let [from, to] = isObject(x) ? [x.from, x.to] : x;
        let length = to - from;
        let value = fill(f(lines), length);
        this.lines.splice(from, length, value);
    }

    getLines(x) {
        if (isObject(x)) {
            let [from, to] =
                x.from > x.to
                    ? [x.to, x.from]
                    : [x.from, x.to];
            return this.lines.slice(from, to)
        }
    }
    getLineInfo(i) {
        let line = this.getLine(i);
        if (line == null) {
            return
        }
        if (/^\n+$/.test(line)) {
            return {
                newlines: line.length,
                index: i,
            }
        }
        let spaces = Math.max(line.search(/\S/), 0);
        return {
            base: line,
            line: line.trim(),
            spaces: spaces,
            index: i,
        }
    }
    updateIndex() {
        if (this.iterationIndex == null) {
            console.log("no iterationIndex.");
            console.log("must call this.iterate() first");
            throw new Error()
        } else {
            this.index = this.iterationIndex;
            this.iterationIndex = null;
        }
    }
    iterate(f, from, updateIndex, offset = 0) {
        const fn = isString(f) ? this[f].bind(this) : f;

        let index = isDefined(from) ? from : this.index;
        let count = 0;
        let store = [];

        for (let i = index; i < this.size; i++) {
            let line = this.getLine(i);
            let spaces = getIndent(line);
            let result = fn(line, spaces, count++, i);
            if (result === false) {
                if (updateIndex) {
                    console.log(
                        "updating index",
                        this.index
                    );
                    this.index = i - offset;
                }
                return store
            } else if (isDefined(result)) {
                store.push(result);
            }
        }
    }

    setLine(n, value) {
        if (n < 0) n = this.size + n;
        this.lines[n] = value;
    }

    getRelativeLine(n) {
        return this.lines[this.index + n]
    }

    getLine(n = this.index) {
        if (n < 0) n = this.size + n;
        return this.lines[n]
    }

    deleteLine(n) {
        if (n < 0) n = this.size + n;
        return this.lines.splice(n, 1)[0]
    }

    findIndex(regex, dir) {
        /** le **/
        const value = this.find(regex, dir, from);
        return value.matchIndex
    }

    sprawlDown(regex, startIndex, force) {
        /** le **/
        let value = this.find(regex, {
            dir: 1,
            start: startIndex,
        });
        if (value) return value
        if (force) {
            return { from: startIndex, to: this.size }
        }
    }

    sprawlUp(regex, startIndex, force) {
        /** le **/
        let value = this.find(regex, {
            dir: -1,
            start: startIndex,
        });
        if (value) return value
        if (force) return { from: startIndex, to: 0 }
    }

    findMultiLine(regexItems, dir, a) {
        /** le **/
        let count = 0;
        let startIndex = a;
        let limit = dir == 1 ? this.size - 1 : this.index;
        while (count++ < limit) {
            if (
                regexItems.every((r, i) => {
                    return anyTest(
                        r,
                        this.getLine(a + dir * i)
                    )
                })
            ) {
                return {
                    from: startIndex,
                    to: a,
                    matchIndex: a,
                }
            }
            a += dir;
        }

        if (dir > 0) {
            return { from: startIndex, to: this.size }
        } else {
            return { from: startIndex, to: 0 }
        }
    }
    find(regex, { dir = 1, start = ".", move = 0 } = {}) {
        /** le **/
        if (start == null) start = this.index;
        else if (start == ".") start = this.index;
        else if (start == "^") start = 0;
        else if (start == "$") start = this.size - 1;

        let a = start;
        let count = 0;
        let limit = dir == 1 ? this.size - 1 : this.index;

        /*---------------------------------*/
        let runner = isArray(regex)
            ? (line, index) => {
                  //console.log({line, regex, index})
                  let [a, b] = splitOnce(regex);
                  if (!a.test(line)) {
                      return
                  }
                  if (
                      b.every((r, i) => {
                          return r.test(
                              this.getLine(index + i)
                          )
                      })
                  ) {
                      return true
                  }
              }
            : isString(regex)
            ? (x) => x == regex
            : searchf(regex);
        /*---------------------------------*/

        while (count++ < limit + 1) {
            let line = this.getLine(a);
            if (line == null) {
                a += dir;
                continue
            }
            let match = runner(line, a);
            //console.log({match, line, a})

            if (isDefined(match)) {
                if (move) {
                    this.index = a;
                }
                return {
                    matchValue: match,
                    matchIndex: a,
                    matchLine: line,
                    from: start,
                    to: a,
                }
            }
            a += dir;
        }
    }

    get firstLine() {
        return this.lines[0]
    }

    get lastLine() {
        return this.lines[this.size - 1]
    }

    moveTo(x) {
        /** le **/
        let index = this.index ? this.index + 1 : 0;

        const result = this.find(x, 1, index);
        if (!result) {
            return false
        }
        this.index = result.index;
        this.matchResult = result;
        return true
    }

    get isLastIndex() {
        return this.index == this.size - 1
    }
    peek(n = 1) {
        return this.getLine(this.index + n) || ""
    }
}

class BaseLineEdit extends LineEditor {
    __init__(options) {
        if (!this.state) this.state = {};
        const baseOptions = {
            tabWidth: 4,
            splitRE: /\n/,
        };
        mixin(this, { options: baseOptions }, options);

        this.debugger('start');
    }
    __preparse__(x) {
        return smartDedent(x)
    }
    __postparse__(x) {
        return x
    }

    __parser__(x) {
        return { value: x }
    }

    constructor(...args) {
        super();
        this.__init__(...args);
    }
    static createParser(options) {
        console.log('not in use');
        throw new Error()
    }

    __getArgs__(args) {

        if (this.options.prepareArgs) {
            console.log('preparing the args via this.options.prepareArgs');

            for (let [index, v] of entries$1(this.options.prepareArgs)) {
                let current = args[index];
                if (typeMatch(current, v)) {
                    const newValue = v.handler(current);
                    if (newValue) args[index] = newValue;
                }
            }
        }

        if (
            args.length == 1 && this.options.useStateBoundArgObject
            && isObject(args[0])
        ) {
            return [[], [], args[0]]
        }
        let beforeArgs = [];
        let afterArgs = [];

        if (args.length > 1 && this.options.argSchema) {
            const beforeAfter = this.options.argSchema.beforeAfter;
            if (beforeAfter) {
                for (let i = 0; i < beforeAfter; i++) {
                    beforeArgs.push(args.shift());
                }
                afterArgs = args;
            } else {
                afterArgs = args;
            }
        } 
        else if (args.length == 1 && isObject(args[0]) && this.options.argSchema == Object) {
            beforeArgs = args;
            afterArgs = args;
        }

        else {
            if (args.length) ;
            afterArgs = args;
        }
        return [beforeArgs, afterArgs, null]
    }

    run(s, ...args) {
        let text = this.__preparse__(s);
        let additionalOptions;
        if (this.options.getAdditionalOptionsFromString) {
[text, additionalOptions] = getOptions(text, 'extractStartingOptions');
            if (exists$1(additionalOptions)) {
                display('additionalOptions', additionalOptions);
                Object.assign(this.options, additionalOptions);
            }
        }

        if (this.options.earlyReturn && this.options.earlyReturn(text)) {
            return text
        }
        const [beforeArgs, afterArgs, argObject] = this.__getArgs__(args);
        if (argObject) {
            /* comes about from options.useStateBoundArgObject */
            this.argObject = argObject;
        }

        this.store = [];
        this.index = 0;
        this.lastSpaces = null;

        this.context = new StateContext();
        this.root = this.context;


        if (this.mounted) { 
            this.mounted(...beforeArgs);
        }
        const lines = this.options.findallRE
            ? findall(this.options.findallRE, text.trim())
            : text.trim().split(this.options.splitRE);

        const payload = this.__run__(lines);
        return this.__postparse__(payload, ...afterArgs)
    }
    debugger2(key, payload) {
        if (!key) {
            return 
        }
        if (this.options.debug == key) {
            console.log(payload);
        }
    }
    debugger(key) {
        if (!key) {
            return 
        }
        if (this.options.debugAt == key || this.options.debug == key) {
            console.log(this[key]);
            throw `debugger@${key}`
        }
    }
    __run__(lines) {
        this.lines = lines;
        this.debugger('lines');
        while (this.index < this.size) {
            this.cycleStartIndex = this.index;
            let { line, spaces, newlines } =
                this.getLineInfo(this.index);

            const result = this.__runner__(
                line,
                spaces,
                newlines
            );
            if (result === null) {
                continue
            }

            this.lastSpaces = spaces;
            if (this.index == this.cycleStartIndex) {
                this.index++;
            }
        }
        return this.root
    }

    __runner__(line, spaces, newlines) {
        //console.log({line, spaces, newlines})

        if (line == "" || newlines) {
            if (newlines && newlines - 1) {
                if (this.onNewline) {
                    if (sameSpacesBeforeAfter(this)) {
                        //console.log(this.context.lastChild)
                        this.onNewline(this.context.lastChild, newlines);
                    } else {
                        this.onNewline(this.context, newlines);
                    }
                }
            } else {
                if (this.options.trackNewLines) ;
            }
            this.index++;
            return null
        }

        if (spaces > this.lastSpaces) {
            this.context = this.context.enter();
        } else if (spaces < this.lastSpaces) {
            const n = (this.lastSpaces - spaces) / 4;
            this.context = this.context.exit(n);
        }

        //console.log({spaces, line})
        const payload = this.__parser__(
            line,
            spaces,
            this.context
        );
        this.debugger2('blocks', payload);
        this.context.appendChild(payload);
    }
}
class StateContext extends Element2 {
    // @documentation 1686436116
    jsonKeys = [
        "spacerValue",
        "overrideClass",
        "overrideTag",
        "computedStyle",
        //"computedStyle",
        //"computedStyle",
        "computedClass",
        "tag",
        "key",
        "html",
        "kwargs",
        "component",
        "props",
        "attrs",
        "slots",
        "style",
        "value",
        "type",
        "class",
        "events",
        "directives",
        "delete",
        "spacer",
        "text",
    ]
    __init__(x) {
        this.defaultAssign(x);
    }
}


function getBlocks(s, spaces) {
    /*******************************
     * 05-09-2023 documentation:
     * This is a hack to group together child elements.
     *******************************/
    function makeRE(spaces, delimiter) {
        return RegExp(`^${" ".repeat(spaces)}${delimiter}`)
    }

    const atNamedRE = /^@(python|javascript) */;
    const leafRE = /^(def|class|const|var|async|function) /;
    const callableRE = /^(\w+)\(/;
    const bracketRE = /{$/;
    const assignmentRE = /= *[\{\[]$/;
    let m;

    if ((m = search$1(atNamedRE, s))) {
        const type = m;
        const stopRE = makeRE(spaces, "-------------");
        const store = this.iterate(
            (line, newSpaces, count) => {
                if (count == 0) {
                    return line.replace(atNamedRE, "")
                }
                if (line && newSpaces < spaces) {
                    return false
                }
                if (stopRE.test(line)) {
                    return false
                }
                return line
            },
            this.index,
            true
        );

        return {
            type,
            value: smartDedent2(store),
        }
    } else if ((m = search$1(leafRE, s))) {
        const store = [];
            let newlines;
        while (true) {
            const block = getCodeBlock(this, spaces, m);
        	  store.push(...block);
            let a = this.index;
            let info = this.getLineInfo(a);

            if (info == null) {
                break
            }
                else if (info.newlines) {
                    newlines = info.newlines;
                } else {
                    m = search$1(leafRE, info.line);
                    if (m) {
                        for (let i = 0; i < newlines; i++) {
                            store.push('');
                        }
                        this.index = a;
                    } else {
                        break
                    }
                }
                a++;
        }
        return {
            type: "code",
            value: smartDedent2(store),
        }
    } 
    else if (m = search$1(callableRE, s)) {
        const block = getBlock(this, spaces, true, null, true);
        return {
            type: "callable",
            key: m,
            value: smartDedent2(block),
        }
    }
    else if ((m = search$1(assignmentRE, s))) {
        function assignmentFn(line, lineSpaces, originalSpaces) {
            //console.log({line, lineSpaces, originalSpaces})
            if (lineSpaces == originalSpaces && /^[\]\}]$/.test(line)) {
                return {offset: 1}
                //console.log('aaa')
                //return {changeIndex: -1}
            }
        }
        const block = getBlock2(this, spaces, assignmentFn);
        //console.log({block})
        return {
            type: "assignment",
            value: smartDedent2(block),
        }
    }
    else if ((m = search$1(bracketRE, s))) {
        const block = getBlock(this, spaces, true, 0, true);
        block.pop();
        const top = block.shift().replace(/ *{$/, '');
        const [key, b] = splitOnce(top);
        const kwargs = getKwargs2(b || '');
        return {
            type: "bracket",
            foo: [12],
            key,
            kwargs,
            value: smartDedent2(block),
        }
    } 

    else {
        return { value: s }
    }
}
function buildParser(...args) {
    const spec = isObject(args[0])
        ? args[0]
        : {
              __postparse__: args[0] || identity,
              __parser__: isFunction(args[1]) ? args[1] : getBlocks,
              options: {
                  trackNewLines: args[1] === true ? true : false
              }
          };

    if (spec.options && spec.options.getBlocks) {
        const f = blockRef[spec.options.getBlocks] || getBlocks;
        spec.__parser__ = f;
    }
    if (spec.postParse) {
        spec.__postparse__ = spec.postParse;
    }
    const lineEdit = new BaseLineEdit(spec);
    return lineEdit.run.bind(lineEdit)
}
//console.log(base(str1684180796).toString())
function getBlock(state, spaces, emptyLinesOkay, offset, stopOnBracket) {
    const store = [];
    while (state.index < state.size) {
        let info = state.getLineInfo(state.index++);
        if (info.line && info.spaces < spaces) {
            console.log("break because less spaces");
            break
        }

        if (info.newlines) {
            for (let i = 0; i < info.newlines - 1; i++) {
                store.push('');
            }
        }
        else {
            store.push(info.base);
        }

        let next = state.getLineInfo(state.index);
        if (next == null) {
            if (emptyLinesOkay) ; else {
                break
            }
        }
        if (stopOnBracket && info.spaces == spaces && info.line == '}') {
            break
        }
        if (
            info.line == "" &&
            next.spaces == spaces &&
            !/^[\]\}]$/.test(next.line)
        ) {
            break
        }
    }
    if (offset) {
        store.pop();
        state.index -= 1;
    }

    return store
}

function getCodeBlock(state, spaces, delimiter) {
    const store = [];
    const terminal = /async|function/.test(delimiter)
        ? jsBlockTerminal
        : /def/.test(delimiter)
        ? pythonBlockTerminal
        : varTerminal;

    function varTerminal(info) {
        if (info.spaces == spaces && /^[}\]]$/.test(info.line)) {
            return true
        }
    }
    function pythonBlockTerminal(info) {
        if (info.spaces == spaces && store.length) {
            state.index--;
            return true
        }
    }

    function jsBlockTerminal(info) {
        if (info.spaces == spaces && info.line == '}') {
            store.push(info.line);
            return true
        }
    }
    while (state.index < state.size) {
        const info = state.getLineInfo(state.index++);
        if (terminal(info)) {
            break
        }

        if (info.newlines) {
            for (let i = 0; i < info.newlines - 1; i++) {
                store.push('');
            }
        } else {
            store.push(info.base);
        }
    }
    return store
}

function d3Blocks(s, spaces) {
    let m;

    const bracketRE = /{$/;

    // 07-07-2023 
    /*---------------------------------*/
    const pyForRE = /^for (\w+)(?: *, *(\w+))? +in +(\w+(?:\.\w+)*)/;
    const braceRE = /\[ *$/;
    if (m = search$1(pyForRE, s)) {
        function stopOnForEnd(s, spaces, startingSpaces) {
            if (spaces == startingSpaces) {
                return {append: '}'}
            }
        }
        const block = getBlock2(this, spaces, stopOnForEnd);
        const index = m[1] || 'i';
        const item = m[0];
        const items = m[2];
        const forLine = `for (let ${index} = 0; ${index} < ${items}.length; ${index}++) {`;
        block.shift();
        block.unshift(`${' '.repeat(spaces + 4)}let ${item} = ${items}[${index}]`);
        block.unshift(forLine);
        return { value: smartDedent2(block), }
    }
    else if (m = search$1(braceRE, s)) {
        function stopOnBraceCloseFn(s, spaces, startingSpaces) {
            if (s == ']' && spaces == startingSpaces) {
                return {offset: 1}
            }
        }
        const block = getBlock2(this, spaces, stopOnBraceCloseFn);
        return { value: smartDedent2(block), }
    }
    /*---------------------------------*/

    else if (m = search$1(bracketRE, s)) {
        const block = getBlock(this, spaces, true, 0, true);
        return { value: smartDedent2(block), }
    } 
    return { value: s }
}

const blockRef = {
    d3Blocks,
    default: getBlocks,
    default: blocker,
};
function sameSpacesBeforeAfter(state) {
    const runner = (n) => {
        return getSpaces(state.getRelativeLine(n))
    };
    return runner(1) == runner(-1)
}


function getBlock2(state, spaces, fn) {
    const store = [];
    const startingIndex = state.index;
    while (state.index < state.size) {
        let info = state.getLineInfo(state.index++);
        if (info.line && info.spaces < spaces) {
            break
        }

        if (info.newlines) {
            for (let i = 0; i < info.newlines - 1; i++) {
                store.push('');
            }
            continue
        }
        
        const m = state.index - 1> startingIndex && fn(info.line, info.spaces, spaces);
        if (m) {
            if (isObject(m)) {
                if (m.changeIndex) {
                    state.index += m.changeIndex;
                }
                else if (m.append) {
                    const appends = toArray2(m.append);
                    const emptyLine = popEmptyLine(store);
                    appends.forEach((append, i) => {
                        store.push(' '.repeat(spaces) + append);
                    });
                    if (emptyLine) {
                        store.push('');
                    } else {
                        state.index--;
                    }
                }
                else if (m.offset) {
                    //console.debug(store, state.index, state.getLine(state.index - 1), 'aaa')
                    if (m.offset < 0) {
                        for (let i = 0; i < m.offset; i++) {
                            store.pop();
                            state.index--;
                        }
                    } else {
                        store.push(info.base);
                        for (let i = 1; i < m.offset; i++) {
                            store.push(state.getLine(++state.index));
                        }
                    }
                }
            }
            break
        } else {
            store.push(info.base);
        }
    }
    return store
}

const colors = {
    BLACK: '\x1b[30m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    YELLOW: '\x1b[33m',
    BLUE: '\x1b[34m',
    RESET: '\x1b[0m',
    BRIGHT: '\x1b[1m',
};

function getColor$2(color) {
    return colors[color] || colors[color.toUpperCase()] || color
}
const log = console.log;
const factory = (color) => {
    color = getColor$2(color);
    function colorIt(s, bold = '') {
        if (bold) {
            bold = colors.BRIGHT;
            s += ':';
        }
        return color + bold + s + colors.RESET   
    }

    return function chalk(a, ...args) {
        const size = args.length;
        switch (size) {
            case 0: 
                return log(colorIt('::'), a)
            case 1:
                return log(colorIt(a, true))
            case 2:
                return log(colorIt(a, true) + colorIt(args[0]))
            default: 
                return log(colorIt(a, true), ...args)
        }
    }
};

factory('green');
factory('red');
factory('red');
factory('blue');
factory('black');

/* @bookmark 1688647386 CSSAttributeItems */

const _boxShadows = {
  "layered-smooth": "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12)",
  "tailwind-soft": "0 1px 2px 0 rgba(0,0,0,0.05)",
  "tailwind-normal": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
  "tailwind-medium": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
  "fluent-ui": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
  "ui-bottom-right": "2px 2px 2px rgba(0, 0, 0, 0.15)",
  "ui-highlight": "0px 2px 4px rgba(0, 0, 0, 0.2)",
  "perfect": "0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08)",
  "raised": "inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1), 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3)",
  "soft-glow": "0px 9px 30px rgba(255, 149, 5, 0.1)",
  "glow": "0px 9px 30px rgba(255, 149, 5, 0.3)",
  "card": "0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1)",
  "minimal": "0px 3px 5px rgba(0, 0, 0, 0.04)",
};
const boxShadows = Object.values(_boxShadows);

const CSSFunctionDict2 = {
    borderHorizontal(...args) {
        return cssBorder$1('borderLeft', ...args)
    },

    borderLeft(...args) {
        return cssBorder$1('borderLeft', ...args)
    },
    borderTop(...args) {
        return cssBorder$1('borderTop', ...args)
    },
    borderBottom(...args) {
        return cssBorder$1('borderBottom', ...args)
    },
    border(...args) {
        return cssBorder$1('border', ...args)
    },
    grid(...bargs) {
        const { store, args } = cssGrid$1(...bargs);
    const gridTemplateAreas = 
        store.map((x) => singleQuote(x.join(' '))).join(' ');
    
    const gridTemplateColumns = exists$1(args) ?
        args.join(' ') : `repeat(${lc}, 1fr)`;

    const css = {
        gridTemplateAreas,
        gridTemplateColumns,
        gridAutoRows: 'min-max(100px, auto)',
        display: 'grid'
    };
    return css
    },
    flex(...args) {
        const payload = {display: 'flex'};
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            if (/^\d/.test(arg)) {
                payload.gap = cssAddUnit$1(arg);
            }
            else if (arg  == 'row') {
                payload['flex-direction'] = 'row';
            }

            else if (arg  == 'col') {
                payload['flex-direction'] = 'column';
            }

            else if (arg in cabmap) {
                Object.assign(payload, cabmap[arg]);
            }
        }
        return payload
    },
    sandwich(width, color) {
        const comment = this.options.commentColors;
        const computedWidth = cssAddUnit$1(width, this.unit);
        const computedColor = colorTransform(color || 'black', comment);
        const border = `${computedWidth} solid ${computedColor}`;
        const borderBottom = border;
        const borderTop = border;
        return {
            borderBottom,
            borderTop,
        }
    },
    xy(s) {
        let unit = 'pt';
        let [left, top] = xsplit(s);
        if (isDefined(left)) left = cssAddUnit$1(left, unit);
        if (isDefined(top)) top = cssAddUnit$1(top, unit);
        return {
            left,
            top,
            position: 'absolute',
        }
    },

    pos(s) {
        let left;
        let unit = '%';
        let top;

        switch (s.length) {
            case 1:
            case 2:
                left = s.slice(0, 2);
            case 3:
                left = s.slice(0, 2);
                top = s.slice(3);
            case 4:
                left = s.slice(0, 2);
                top = s.slice(2, 4);
        }

        left = cssAddUnit$1(left, unit);
        top = cssAddUnit$1(top, unit);
        return {
            left,
            top,
            position: 'absolute',
        }
    },
    fontWeight(s) {
        return s
    },

    fontFamily(s) {
        const font = GoogleFontAliases[s] || s;
        if (this.fontWatcher.isFresh(font)) {
            fontLoader(font);
        }
        return font
    },
    content(x) {
        const ref = {
            'leftQuote': '\\201C',
            'colon': '\\003A',
            'comma': '\\002C',
            'rightQuote': '\\201D',
        };
        const content = ref[x] || x;
        return {
            content
        }
    },
    fooga() {
        return {
            fooga: 'fooooooooooooooooga',
        }
    },
    /* @bookmark 1686421630 box */
    box(n) {
        const value = cssAddUnit$1(n, this.unit);
        return { width: value, height: value, }
    },
    boxShadow(s) {
        if (s == 'rainbow') {
            return gradientBoxShadow()
        }
        console.log({s});
        return boxShadows[s]
    },
};

function gradientBoxShadow() {
    const colors = 
        flatColorBrewer[randomPick(Object.keys(flatColorBrewer))];
    const n = colors.length;

    const strokeWidth = 1;
    const k = rng(1, 5);
    const store = [];
    for (let i = 0; i < n; i++) {
        const m = i * k;
        const blur = 0;
        const color = colors[i];
        const boxShadow = `${m} ${m} ${blur} ${strokeWidth}px ${color}`;
        store.push(boxShadow);
    }
    return store.join(', ')
}
const CSSFunctionDict = {
    /* not in use ...  */
    box(n) {
        const w = cssAddUnit$1(n);
        return {
            width: w,
            height: w,
        }
    },
    pos([left, top]) {
        left = cssAddUnit$1(left, "pt");
        top = cssAddUnit$1(top, "pt");
        return {
            left,
            top,
            position: 'absolute',
        }
    },
    font(s) {
        return {
            fontFamily: GoogleFontAliases[s] || s,
        }
    },
    bg(s) {
        return {
            background: colorTransform(s),
        }
    },
    fs(s) {
        return {
            "font-size": cssAddUnit$1(s, "pt"),
        }
    },
    gap(s) {
        return {
            "column-gap": cssAddUnit$1(s, "pt"),
        }
    },
    fc(s) {
        return {
            color: colorTransform(s),
        }
    },
    border(s) {
        //console.log({s})
        let m;
        if (isNumber(s)) {
            return {
                borderWidth: cssAddUnit$1(s, "px"),
            }
        } else if ((m = search$1(/(\d+) +(\w+)/, s))) {
            let [a, b] = m;
            return {
                border: `${a}px solid ${colorTransform(b)}`,
            }
        } 
        else if (isWord(s)) {
            return {
                border: `1px solid ${colorTransform(s)}`,
            }
        }

        else {
            //console.log('sdfs')
            return {
                border: s.replace(/\w+(?= *$)/, colorTransform)
            }
        }
    },
    grid(s) {
        const preset = {
            2: "1fr 1fr",
            3: "1fr 1fr 1fr",
        };
        const gridTemplateColumns = preset[s] || s;
        return {
            display: "grid",
            gridTemplateColumns,
        }
    },
    rc() {
        return {
            color: randomColor(),
        }
    },
    wh(v) {
        const value = cssAddUnit$1(v, "pt");
        return {
            width: value,
            height: value,
        }
    },

    my(v) {
        const value = cssAddUnit$1(v, "pt");
        return {
            marginTop: value,
            marginBottom: value,
        }
    },
    mx(v) {
        const value = cssAddUnit$1(v, "pt");
        return {
            marginLeft: value,
            marginRight: value,
        }
    },

    py(v) {
        const value = cssAddUnit$1(v, "pt");
        return {
            paddingTop: value,
            paddingBottom: value,
        }
    },
    px(v) {
        const value = cssAddUnit$1(v, "pt");
        return {
            paddingLeft: value,
            paddingRight: value,
        }
    },
};
const CSSFunctions = {
    'grid-area': cssGridArea,
    x(n) {
        return {
            "left": cssAddUnit$1(n, 'px')
        }
    },
    y(n) {
        return {
            "top": cssAddUnit$1(n, 'px')
        }
    },
    padding(n) {
        return {
            "padding": cssAddUnit$1(n, 'px')
        }
    },
    marginBottom(n) {
        return {
            "marginBottom": cssAddUnit$1(n, 'px')
        }
    },
    marginLeft(n) {
        return {
            "marginLeft": cssAddUnit$1(n, 'px')
        }
    },
    marginRight(n) {
        return {
            "marginRight": cssAddUnit$1(n, 'px')
        }
    },
    marginTop(n) {
        return {
            "marginTop": cssAddUnit$1(n, 'px')
        }
    },
    paddingBottom(n) {
        return {
            "paddingBottom": cssAddUnit$1(n, 'px')
        }
    },
    paddingLeft(n) {
        return {
            "paddingLeft": cssAddUnit$1(n, 'px')
        }
    },
    paddingRight(n) {
        return {
            "paddingRight": cssAddUnit$1(n, 'px')
        }
    },
    paddingTop(n) {
        return {
            "paddingTop": cssAddUnit$1(n, 'px')
        }
    },
    height(n) {
        return {
            "height": cssAddUnit$1(n, 'px')
        }
    },
    margin(n) {
        return {
            "margin": cssAddUnit$1(n, 'px')
        }
    },
    width(n) {
        return {
            "width": cssAddUnit$1(n, 'px')
        }
    },
    fontSize(n) {
        return {
            "fontSize": cssAddUnit$1(n, 'px')
        }
    },
    borderWidth(n) {
        return {
            "borderWidth": cssAddUnit$1(n, 'px')
        }
    },
    color(color) {
        return {
            "color": colorTransform(color)
        }
    },
    background(color) {
        return {
            "background": colorTransform(color)
        }
    },
    outline(color) {
        if (color == 'none') {
            return {outline: 'none'}
        }
        return {
            "outlineColor": colorTransform(color),
            "outlineWidth": "1px",
            "outlineStyle": "solid"
        }
    },

    border(color) {
        if (color == 'none') {
            return {border: 'none'}
        }
        return {
            "borderColor": colorTransform(color),
            "borderWidth": "1px",
            "borderStyle": "solid"
        }
    },
    font(font) {
        return {
            "font": aliaser(font, 'gfonts')
        }
    },
    //position(obj) {
        //return fixObjectStyle(obj)
    //},

    textAlign(mode) {
        return {
            textAlign: 'center',
            lineHeight: 'center',
        }
    },
    shape(key) {
        
    },
    center() {
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
};

/* @bookmark 1688647386 CSSAttributeItems */
const CSSAttributeItems$1 = [
  {"key": "padding-left", "alias": "pl", "type": "pmwh"},
  {"key": "padding-right", "alias": "pr", "type": "pmwh"},
  {"key": "padding-top", "alias": "pt", "type": "pmwh"},
  {"key": "padding-bottom", "alias": "pb", "type": "pmwh"},
  {"key": "margin-top", "alias": "mt", "type": "pmwh"},
  {"key": "margin-right", "alias": "mr", "type": "pmwh"},
  {"key": "margin-bottom", "alias": "mb", "type": "pmwh"},
  {"key": "margin-left", "alias": "ml", "type": "pmwh"},
  {"key": "width", "alias": "w", "type": "pmwh"},
  {"key": "height", "alias": "h", "type": "pmwh"},
  {"key": "margin", "alias": "m", "type": "pmwh"},
  {"key": "padding", "alias": "p", "type": "pmwh"},
  {"key": "top", "alias": "t", "type": "pmwh"},
  {"key": "right", "alias": "r", "type": "pmwh"},
  {"key": "bottom", "alias": "b", "type": "pmwh"},
  {"key": "left", "alias": "l", "type": "pmwh"},
  {"key": "left", "alias": "x", "type": "pmwh"},
  {"key": "top", "alias": "y", "type": "pmwh"},
  {"key": "min-width", "alias": "minw", "type": "pmwh"},
  {"key": "border-radius", "alias": "br", "type": "pmwh"},
  {"key": "max-width", "alias": "maxw", "type": "pmwh"},
  {"key": "min-height", "alias": "minh", "type": "pmwh"},
  {"key": "max-height", "alias": "maxh", "type": "pmwh"},
  {"key": "border-width", "alias": "bw", "type": "pmwh"},
  {"key": "gap", "alias": "gap", "type": "pmwh"},
  {"key": "row-gap", "alias": "rgap", "type": "pmwh"},
  {"key": "column-gap", "alias": "cgap", "type": "pmwh"},
  {"key": "font-size", "alias": "fs", "type": "pmwh"},

  {"recursive": ["ml", "mr"], "alias": "mx"},
  {"recursive": ["pl", "pr"], "alias": "px"},
  {"recursive": ["mt", "mb"], "alias": "my"},
  {"recursive": ["pt", "pb"], "alias": "py"},

  {"key": "background-color", "alias": "bg", "type": "color"},
  {"key": "border-color", "alias": "bc", "type": "color"},
  {"key": "outline-color", "alias": "oc", "type": "color"},
  {"key": "color", "alias": "c", "type": "color"},
  {"key": "color", "alias": "fc", "type": "color"},
  {"key": "z-index", "alias": "zi", "type": "unitless"},
  {"key": "line-height", "alias": "lh", "type": "unitless"},
  {"key": "opacity", "alias": "o", "type": "unitless"},

  {"key": "display", "alias": "d", "type": "abrev"},
  {"key": "text-align", "alias": "ta", "type": "abrev"},
  {"key": "vertical-align", "alias": "va", "type": "abrev"},
  {"key": "overflow", "alias": "overflow", "type": "abrev"},
  {"key": "align-self", "alias": "as", "type": "abrev"},
  {"key": "align-items", "alias": "ai", "type": "abrev"},
  {"key": "justify-content", "alias": "jc", "type": "abrev"},
  {"key": "font-weight", "alias": "fw", "type": "functional"},
  {"key": "border", "alias": "b", "type": "functional"},
  {"key": "border-left", "alias": "bl", "type": "functional"},
  {"key": "border-top", "alias": "bt", "type": "functional"},
  {"key": "border-bottom", "alias": "bb", "type": "functional"},
  {"key": "font-weight", "alias": "fw", "type": "functional"},
  {"key": "font-family", "alias": "ff", "type": "functional"},
  {"alias": "pos", "type": "functional"},
  {"alias": "xy", "type": "functional"},
  {"alias": "grid", "type": "functional"},
  {"alias": "content", "type": "functional"},
  {"alias": "sandwich", "type": "functional"},
  {"alias": "flex", "type": "functional"},
  {"alias": "grid", "type": "functional"},
  {"alias": "box", "type": "functional"},
  {"alias": "wh", "fnKey": "box", "type": "functional"},
  {"alias": "fooga", "fnKey": "fooga", "type": "functional"},
  {"key": "box-shadow", "alias": "bs", 'fnKey': 'boxShadow', "type": "functional"},
];

//const cssDontAddPeriodRE = reWrap(HTML_NO_CLOSERS.concat(HTML_CLOSING_TAGS), /^([#*.]|$1)\b/)
//const cssDontAddPeriodRE = reWrap(HTML_NO_CLOSERS.concat(HTML_CLOSING_TAGS), /^([#*.]|(?:$1))\b/)
//console.log(cssDontAddPeriodRE)

//console.log(cssDontAddPeriodRE)
function getFirstName(s) {
    return search$1(/^[a-zA-Z][\w-]+/, s)
}
function cssAddPeriod(s) {
    if (/^(?:[#*.])/.test(s)) return s
    if (allHtmlTags.includes(getFirstName(s))) {
        return s
    }
    if (s.includes(' ')) {
        return '.' + s.replace(/ +/g, '.')
    }
    return "." + s
}

function cssEntry(a, b) {
    if (a == 'assign') {
        return null
    }
    if (b == null) {
        return 
    }
    return `${dashCase(a)}: ${b};`
}

function cssString(name, store) {
    if (!exists$1(store)) {
        return ""
    }
    const items = reduceToString(store, cssEntry);
    const cssName = cssAddPeriod(camelToDash(name));
    return brackify(cssName, items)
}

function colorTransform(key, comment) {
    //if (key in htmlColors) {
        //return key
    //}
    if (key == 'random') {
        return randomColor()
    }
    const aliases = {
        r: "red",
        b: "blue",
        g: "green",
        gr: "grey",
        t: "teal",
        o: "orange",
        a: "amber",
        bl: "black",
        w: "white",
        dp: "deepPurple",
        c: "cyan",
        p: "pink",
        y: "yellow",
    };
    let [a, b] = key.split(/(?=\d)/);
    a = aliases[a] || a;
    if (!b) {
        b = "500";
    } else if (b.length == 1) {
        b += "00";
    }

    const ref = materialColors[a];
    const value = ref ? ref[b] : key;
    return comment ? value + ` /* ${key} */ ` : value
}

//function cssGrid({ columns, rows }) {}

function cssGrid$1(...args) {
    
    const numbers = split(args.shift());
    const lc = lcm(numbers);
    const keys = new Set();
    let count = 0;
    const items = numbers.map((n) => {
        const size = lc / n;
        const store = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < size; j++) {
                const key = n2char(count);
                keys.add(key);
                store.push(key);
            }
            count++;
        }
        return store
    });
    return {
        store: items,
        size: lc,
        args,
    }
}

function myColors(i) {
    return myColors$1[Number(i)] 
}
function randomColor(i) {
    if (isNumber(i)) {
        return myColors$1[Number(i)] 
    }
    return randomPick(roygbiv)
}

//console.log(styleParser('w = 100;h = 2%'))
//const styleRE = aggregateRE(dict, /( +|(?:$1)(?:\((.*?)\))?)/)

function cssAddUnit$1(s, unit = "pt", key) {
    if (s == 0) {
        return s
    }
    if (s == 'fit') {
        return 'fit-content'
    }
    const ignore = ["zIndex", "flexGrow", "fontWeight", 'lineHeight'];
    if (key && ignore.includes(key)) {
        return s
    }

    //console.log({key})
    if (key == 'gridTemplateColumns' || key == 'gridTemplateRows') {
        return `repeat(${s}, 1fr)`
    }
    if (s != '0' && /\d$/.test(s)) {
        if (unit == 'pt' && Math.abs(Number(s)) < 1) {
            unit = 'in';
        }
        return s + unit
    }

    //console.log({unit})
    let m = search$1(/[a-z]+$/, s);
    if (m == 'u') {
        return getNumber(s) * 12 + 'pt'
    }
    return s
}

function getStylePayload$1(s, arg) {

    s = s.trim();
    const configRE = /^(\w+(?:-\w+)*) *= *(.+)|^(fc|bg)(\w+)|^([a-zA-Z]+)(-?\d+)/;
    let match;

    if (isElementTag(s)) {
        return 
    }
    else if (arg == true) {
        return cabmap[s]
    }
    else if (arg) {
        return runner(s, arg)
    }
    else if (match = callableArgsKwargs(s)) {
        return cssCak(...match)
    }
    else if (match = cabmap[s]) {
        return match
    }
    else if (match = matchGetter(s.match(configRE), "searchArray")) {
        return runner(...match)
    }

    function runner(a, b) {
        if (CSSValueAliases.hasOwnProperty(b)) {
            b = CSSValueAliases[b];
        }

        else if (a == 'font' && GoogleFontAliases.hasOwnProperty(b)) {
            return ['font-family', GoogleFontAliases[b]]
        }
        else if (CSSAliases.hasOwnProperty(a)) {
            const name = CSSAliases[a];
            const value = [name, cssAddUnit$1(b, "pt", name)];
            const fill = CSSFill[name];
            if (fill) {
                return [value, fill]
            }
            return value
        } else if (CSSFunctionDict.hasOwnProperty(a)) {
            return Object.entries(CSSFunctionDict[a](b))
        } 

        else if (CSSFunctions.hasOwnProperty(a)) {
            return Object.entries(CSSFunctions[a](b))
        } 

        else if (cabmap.hasOwnProperty(a)) {
            console.log({a, b});
            throw new Error("put it at function dict")
        } else {
            return [a, b]
        }
    }
}

const CSSFill = {
    borderWidth: ["border", "1px solid black"],
    borderColor: ["border", "1px solid black"],
};
const CSSValueAliases = {
    fit: "fit-content",
};
const CSSAliases = {
    size: 'fontSize',
    fs: 'fontSize',
    colgap: "column-gap",
    rowgap: "row-gap",
    bc: "borderColor",
    bw: "borderWidth",
    br: "borderRadius",
    lh: "lineHeight",
    pt: "paddingTop",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
    fw: "fontWeight",
    w: "width",
    maxw: "maxWidth",
    wmax: "maxWidth",
    h: "height",
    gtc: "gridTemplateColumns",
    gtr: "gridTemplateRows",
    mt: "marginTop",
    mb: "marginBottom",
    ml: "marginLeft",
    mr: "marginRight",
    p: "padding",
    padding: "padding",
    m: "margin",
    margin: "margin",
    mh: "minHeight",
    mw: "minWidth",
    minw: "minWidth",
    flexgrow: "flexGrow",
    fg: "flexGrow",
    left: "left",
    right: "right",
    bottom: "bottom",
    bot: "bottom",
    top: "top",
};
//console.log(getStylePayload('border = black'))
//console.log(styleParser('center'))
//console.log(cssStringToArray(str0207, 'foo'))


    //const style = styleParser(`
        //bg = green
        //center
        //w = 100
        //left = 0
        //mw = 40
        //p = 5
        //bor
    //`)
    //console.log(style)

function cssCak(fnKey, args, kwargs) {
    const cakAliases = {
        'b': 'border',
    };
    if (fnKey in cakAliases) {
        fnKey = cakAliases[fnKey];
    }
    const ref = {
        grid: {
            fn(cols) {
                const gridTemplateColumns = `repeat(${cols}, 1fr)`;
                return {
                    display: "grid",
                    gridTemplateColumns,
                }
            }
        },
        border: {
            fn(width, color, kwargs = {}) {
                const value = `${width}px solid ${color}`;
                if (kwargs.y) {
                    return {
                        borderBottom: value,
                        borderTop: value,
                    }
                }

                if (kwargs.x) {
                    return {
                        borderLeft: value,
                        borderRight: value,
                    }
                }
                if (kwargs.left || kwargs.l) {
                    return { borderLeft: value }
                }

                if (kwargs.right || kwargs.r) {
                    return { borderRight: value }
                }

                if (kwargs.top || kwargs.t) {
                    return { borderTop: value }
                }

                if (kwargs.bottom || kwargs.b) {
                    return { borderBottom: value }
                }
                return value
            },
        }
    };
    const child = ref[fnKey];
    let {fn, key} = child;
    if (!key) key = fnKey;

    const params = getParameters(fn);
    const seen = [];

    const paramRef = {
        color: {
            type: String,
            transform: colorTransform,
            defaults: {
                border: 'black',
            }
        },
        width: {
            type: Number,
            defaults: {
                border: 1,
            }
        },
        cols: {
            type: Number,
            defaults: {
                grid: 3,
            }
        }
    };

    const effectiveArgs = params.map((param, i) => {
        //console.log({kwargs, param}); assert();
        if (kwargs.hasOwnProperty(param)) {
            return fix(kwargs[param], param)
        }
        if (paramRef.hasOwnProperty(param)) {
            const ReferenceType = paramRef[param].type.name;
            const arg = args.find((x, i) => {
                if (seen.includes(i)) {
                    return
                }
                const yes = type(x) == ReferenceType;
                if (yes) {
                    seen.push(i);
                    return true
                }
            });
            return fix(arg, param)
        }
        if (param == 'kwargs') {
            return kwargs
        }
    });
    function fix(arg, param) {
            if (!isDefined(arg)) {
                arg = paramRef[param].defaults[key];
            }
                const transform = param && paramRef[param] &&
                    paramRef[param].transform;

                if (transform) {
                    return transform(arg)
                }
                return arg
    }
    const value = fn(...effectiveArgs);
    if (isPrimitive(value)) {
        return [key, value]
    }
    return value
}
//console.log(callableArgsKwargs('foo(asdf = adsf, 1123, a = 1, d = {a: 3})'))
function isElementTag(s) {
    if (/^h\d(?![-\w])/.test(s)) {
        return true
    }
}

const cssSetupString = `

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

svg {
    margin: 0;
    padding: 0;
}

body, html {
    height: 100%; 
    width: 100%; 
    position: relative;
}

hr {
    outline: none;
}

td:empty:after {
  content: '.';
  color: transparent;
  visibility: hidden;
}

table {
  empty-cells: show;
  border-collapse: collapse;
}

`;
function isCSS(s) {
    return /^\s*@import|;/.test(s)
}
function makeCSSObject() {

    function postParse(state) {
        const f = ({value}) => {
            return getStylePayload$1(value)
        };

    const aliases = {
        'root': '&',
        'focused': '&.cm-editor.cm-focused',
    };

    return state.children.reduce((acc, item, i) => {
        const name = item.value in aliases
            ? aliases[item.value] : item.value;
        const styles = item.children.reduce((css, item, i) => {
            return cssMerge(css, f(item))
        }, {});
        acc[name] = styles;
        return acc
    }, {})
    }
    return buildParser(postParse)
    //return BaseLineEdit.createParser(postParse)
}

function cssMerge(base, value) {
    return mergeToObject(base, value)
}

function cssGridArea(s) {
    const items = split(s, /\|/).map((x) => x.split(' '));
    const longest = getLongest(items);
    items.forEach((item, i) => fill2(item, longest));
    const gridTemplateAreas = items.map((x) => doubleQuote(x.join(' '))).join(' ');
    const gridTemplateColumns = `repeat(${longest}, 1fr)`;

    return {
        display: 'grid',
        gridTemplateAreas,
        gridTemplateColumns,
    }
}
//console.log(Object.keys(CSSFunctions).map(abrev))
makeCSSObject(); /* used in cm */

class CSSBuilder {
    constructor(items = CSSAttributeItems$1, dict = CSSFunctionDict2, options) {
        this.items = items;
        this.functionDict = dict;
        this.store = {};
        this.fontWatcher = new Watcher();
        this.aliases = {};
        const baseOptions = {
            commentColors: true,
            unit: 'pt'
        };
        this.options = merge2(baseOptions, options);
        this.unit = this.options.unit;
    }


    build() {
        let lambda;
        const defaultUnit = this.unit;
        const store = this.store;
        const comment = this.options.commentColors;

        for (let item of this.items) {
            const alias = item.aliases && item.aliases[0] 
                || item.alias || item.key;
            const attributeKey = item.key;
            //save(alias || JSON.stringify(item))


            if (item.type == 'pmwh') {
                lambda = function (s, unit) {
                    const value = cssAddUnit$1(s, unit || defaultUnit);
                    return {[attributeKey]: value}
                };
            }
            else if (item.type == 'cabmap') {
                ndy();
            }

            else if (item.type == 'color') {
                lambda = function (s) {
                    return {[attributeKey]: colorTransform(s, comment)}
                };
            }

            else if (item.type == 'abrev' || item.type === '') {
                lambda = function (s) {
                    return {[attributeKey]: s}
                };
            }
            else if (item.type == 'unitless') {
                lambda = function (s) {
                    return {[attributeKey]: s}
                };
            }
            else if (item.type == 'functional') {
                const self = this;
                const fnKey = item.fnKey;
                function wrap(key, fn) {
                    if (!fn) {
                        console.log(key); assert();
                    }
                    if (countParams(fn) == 1) {
                        return key ? function lambda(...args) {
                            const value = fn.call(self, ...args); 
                            return isObject(value)  ? 
                                value : { [key]: value }
                        } : fn
                    }

                    function foobar(...a) {
                        const args = a.length == 1 && !/^\w+$/.test(a[0])
                            ? argParse(a[0]) : a;
                        const value = fn.call(self, ...args);
                        if (isObject(value)) {
                            return value
                        }
                        return key ? { [key]: value } : value
                    }
                    return foobar
                }
                const fn = fnKey && this.functionDict[fnKey]
                    || this.functionDict[alias || ''] 
                    || this.functionDict[camelCase(attributeKey || '')];
                lambda = wrap(attributeKey, fn);
            }
            else if (item.recursive) {
                const fns = item.recursive.map((key) => store[key]);
                lambda = function (s, ...args) {
                    const value = fns.map((fn) => fn(s, ...args));
                    return merge2(...value)
                };
            }
            else {
                console.log(item); assert();
                ndy();
            }

            if (item.aliases) {
                item.aliases.forEach((a) => {
                    this.aliases[a] = item.key;
                    this.store[a] = lambda;
                });
            } else {
                this.aliases[alias] = item.key;
                this.store[alias] = lambda;
                if (alias != item.key) {
                    this.store[item.key] = lambda;
                }
            }
        }
        return this
    }
    run(a, b) {
        try {
            return /\[/.test(b)
                ? this.store[a](...argParse(b))
                : b.includes(' ')
                ? {[this.aliases[a] || a] : b}
                : this.store[a](b)
        } catch(e) {
            const message = `
                Most likely the error has something to do with an invalid store[key]. For example:

    log-container > *
        color:green
        px:5
        py:10
        logs

        logs is not a valid key value.
        Not to mention that there is no associated b value.

            `;
            console.log("ERRORRRRRRRR", {a, b, message}, e.stack);
            throw new Error(e)
        }
    }
    static buildParser(...args) {
        const css = new CSSBuilder(...args);
        css.build();
        const f = exporter(css);
        f.self = css;
        return f
    }
}




const cssSpec = {
    postParse(node) {
        const parse = ({value}) => {
            let m;
            if (/\w+-/.test(value) && (m = cache[value])) {
                return m
            }
            if (isWord(value) && (m = cabmap[value])) {
                return cabmap[m]
            }
            const [a,b] = value.split(/ *: */);
            return cssColon$1(a, b)
        };
        const reducer = (acc, grandNode) => {
            const css = parse(grandNode);
            return merge2(acc, css)
        };
        const cache = {};

        return reduceToString(node.children, (child) => {
            const name = child.value;
            if (name == 'setup') {
                return cssSetupString
            }
            const styles = child.children.reduce(reducer, {});
            cache[name] = styles;
            return cssString(name, styles)
        })
    },
    options: {
        ignoreEmptyLines: true,
        earlyReturn: isCSS,
    }
};

function svgColor(s) {
    if (!s) return "black"
    return s.startsWith("#")
        ? `url(${s})`
        : colorTransform(s)
}
function cssFromObject(o) {
    return reduceToString(o, (name, styles) => {
        return cssString(name, styles)
    })
}
//console.log(cssFromObject({'asdf > *': {background: 'yellow', color: 'green'}, book: {background: 'yellow', color: 'green'}}))

conditional(buildParser(cssSpec), isObject, cssFromObject);
function cab(...args) {
    const base = isObject(args[0]) ? args.shift() : {};
    const g = (x) => {
        return isString(x) ? x.split(' ').map(trim) : x
    };
    const keys = flat(args.map(g));
    const parse = (key) => {
        const m = search$1(/([a-zA-Z]+)([^a-zA-Z]\w*)/, key);
        if (m) {
            return cssColon$1(...m)
        }
    };
    for (const key of keys) {
        const payload = isString(key)
            ? cabmap[key] || parse(key)
            : mapObject(key, cssColon$1);
        Object.assign(base, payload);
    }
    return base
}
function mapObject(item, transformer) {
    const value = entries$1(item).map(([a,b]) => {
        return [a, transformer(a, b)]
    });
    return isObject(item) ? dict(value) : value
}
 //cabmap.js
//tester(cssGridFromNumber, '121213')
//console.log(cab('wh50'))
function cssBorder$1(key, ...args) {
    let [color, strokeWidth] = args;
        if (args.length == 1) {
            const s = args[0];
            if (isNumber(s)) {
                return { [key + 'Width']: cssAddUnit$1(s, "px"), }
            } 
            if (isWord(s)) {
                return { [key]: `1px solid ${colorTransform(s)}`, }
            }
            return {
                [key]: s.replace(/\w+(?= *$)/, colorTransform)
            }
        }
        if (!strokeWidth) strokeWidth = 1;
        const computedColor = colorTransform(color || 'black');
        return {
            [key]: `${cssAddUnit$1(strokeWidth, 'px')} solid ${computedColor}`
        }
}

function parseColor(s) {
    const [a, b] = search$1(/^([a-zA-Z]+)(\d*)/, s);
    const colorKey = shortMaterialColorAliases[a] || a;
    const colorIndex = b === '' ? 5 : Number(b) - 1;
    return [colorKey, colorIndex]
}

function getColor$1(colorKey, colorIndex, comment = true) {
    const computedColorKey = shortMaterialColorAliases[colorKey] || colorKey;
    let value = indexedMaterialColors[computedColorKey][colorIndex];
    //vueAssertion(value, template, {colorKey, colorIndex})
    if (comment === true) {
        value += ` /* ${colorKey}-${colorIndex || 0} */`;
    }
    return value
}

let cssColon$1;
//const cssColon = CSSBuilder.buildParser()

function xline(anchor, x1, x2, stroke, strokeWidth) {
    return line(x1, anchor, x2, anchor, stroke, strokeWidth)
}
function line(x1, y1, x2, y2, stroke, strokeWidth) {
    return {
        tag: "line",
        attrs: {
            x1,
            y1,
            x2,
            y2,
            stroke: svgColor(stroke),
            strokeWidth: strokeWidth
        }
    }
}

function yline(anchor, y1, y2, stroke, strokeWidth) {
    return line(anchor, y1, anchor, y2, stroke, strokeWidth)
}

function radialGradient(...args) {
    return gradient('radialGradient', ...args)
}

function linearGradient(...args) {
    return gradient('linearGradient', ...args)
}

function gradient(tag, ...colors) {
    const children = colors.map((color, i, a) => {
        const offset = toPercentage(i, a.length - 1);
        return {
            tag: "stop",
            attrs: {
                offset,
                stopColor: colorTransform(color)
            }
        }
    });
    return {
        tag,
        attrs: {
            x1: "0%",
            x2: "100%",
            y1: "0%",
            y2: "100%"
        },
        children
    }
}

function rect(x, y, width, height, fill, strokeWidth) {
    if (!height) height = width;
    if (!fill) fill = "black";
    if (!strokeWidth) strokeWidth = "1";
    return {
        tag: "rect",
        attrs: {
            x,
            y,
            width,
            height,
            fill,
            strokeWidth
        }
    }
}

function circle$1(x, y, r, fill) {
    if (!fill) fill = "black";
    if (!r) r = "1";
    return {
        tag: "circle",
        attrs: { cx:x , cy:y, r, fill }
    }
}


function pattern(width, height, id) {
    assert(id, 'id is required for patterns');
    if (width == null) width = 10;
    if (height == null) height = 10;

    return {
        tag: "pattern",
        attrs: {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse"
        }
    }
}

function g(tx, ty, rotate, translate, fill) {
    const transform = [];
    if (rotate) { transform.push(`rotate(${rotate})`); }
    if (tx && ty) {
translate = [tx, ty];
    }
    if (translate) {
        transform.push(`translate(${translate.join(', ')})`);
    } else {
        if (tx) transform.push(`translate(${tx}, 0)`);
        if (ty) transform.push(`translate(0, ${ty})`);
    }
    if (fill) fill = svgColor(fill);

    return {
        tag: "g",
        attrs: {
            transform: transform.join(' '),
            fill,
        }
    }
}

function square(x, y, length, ...args) {
    return rect(x, y, length, length, ...args)
}

var svgElements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  circle: circle$1,
  g: g,
  gradient: gradient,
  line: line,
  linearGradient: linearGradient,
  pattern: pattern,
  radialGradient: radialGradient,
  rect: rect,
  square: square,
  xline: xline,
  yline: yline
});

function pythonParams(s) {

    var r = /(?:[$a-zA-Z_]\w* *= *(?:(?:".*?"|'.*?')|\[.*?\]|[\w$]+))(?: *, *(?:[$a-zA-Z_]\w* *= *(?:(?:".*?"|'.*?')|\[.*?\]|[\w$]+)))*(?= *,? *\))/g;
    const f = (x) => {
        return wrap(x.replace(/ *= */g, ': '), '{}')
    };
    return s.replace(r, f)
}


function jankyJavascript(s) {
    if (isArray(s)) {
        s = join(s);
    }
    s = pythonParams(s);
    return s
}

function createFunctions(localState, ref) {
    function popper(args) {
        if (isObject(getLast(args))) {
            return args.pop()
        }
        return {}
    }
    const aliases = {
        w: "width",
        h: "height"
    };
    function aliaser(o, aliases) {
        return reduce(o, ([k, v]) => [aliases[k] || k, v])
    }
    return reduce(ref, ([k, fn]) => {
        const params = getParameters(fn);
        const wrapper = (...args) => {
            const kwargs = aliaser(popper(args), aliases);
            const bargs = [];
            for (let i = 0; i < params.length; i++) {
                let param = params[i];
                if (kwargs.hasOwnProperty(param)) {
                    bargs.push(kwargs[param]);
                } 
                else if (/^\.\.\./.test(param)) {
                    bargs.push(...args.slice(i));
                } else {
                    bargs.push(args[i]);
                }
            }
            localState.push(fn(...bargs));
        };
        return wrapper
    })
}

const ScopedEvaluate = (scope) => {
    let context = {};
    let scopedEvaluator = noop;
    let keys;

    const update = (scope) => {
        if (empty(scope)) {
            return
        }

        Object.assign(context, scope);
        Object.values(context);
        keys = Object.keys(context);

        const evaluator = Function.call(
            null,
            ...keys,
            "expr",
            "return eval('expr = undefined;' + expr)"
        );
        function $eval(s) {
            debugDisplay('viewEvalString', s);
            try {
                const values = Object.values(context);
                const value = evaluator.call(
                    null,
                    ...values,
                    s
                );
                return value
            } catch (e) {
                console.log({INPUT: s, ERROR: e.toString()});
                throw ""
            }
        }
        scopedEvaluator = $eval;
    };

    update(scope);
    scopedEvaluator.update = update;
    return scopedEvaluator
};

class LocalEvaluator {
    constructor(transform = identity) {
        this.code = new ArrayState();
        this.state = new ArrayState();
        this.context = {};
        this.transform = transform.bind(this);
    }
    load(...dicts) {
        dicts.forEach((dict, i) => {
            Object.assign(this.context, dict);
        });
    }
    evaluate() {
        if (this.code.empty) {
            return
        }
        this.state.reset();
        const lines = this.code.toJSON().map(this.transform);
        const code = jankyJavascript(lines);
        this.$eval(code);
        this.code.reset();
        return this.state.toJSON()
    }
    $eval(code) {
        console.log(code);
        throw 'abstract $eval not implemented until build()'
    }
    build(functions) {
        const moreFunctions = createFunctions(this.state, functions);
        Object.assign(this.context, moreFunctions);
        this.$eval = ScopedEvaluate(this.context);
        return this.evaluate.bind(this)
    }
}

/* @bookmark 1689168044 main */

function createSplitParser(obj, wrapFn) {
    if (!wrapFn && isObject(obj)) {
        wrapFn = pop2(obj, "wrapFn");
    }
    const items = createParsersFromObject(obj);
    if (
        items.filter((x) => x.name && x.name != "default")
            .length < 2
    ) {
        items.unshift({
            name: "filler",
            regex: /(\1\2\3)/,
            parser: noop
        });
    }
    const regexes = {};
    const ref = {};
    const functions = {};

    let keyCount = 0;
    let n = 0;

    for (let { regex, name, parser } of items) {
        functions[name] = parser || identity;
        if (name == "default") {
            continue
        }

        if (isString(regex)) {
            if (REGEXLIB.hasOwnProperty(regex)) {
                regex = RegExp(REGEXLIB[regex]);
            } else {
                regex = RegExp(regex);
            }
        } else if (!regex) {
            if (REGEXLIB.hasOwnProperty(name)) {
                regex = RegExp(REGEXLIB[name]);
            } else {
                myError('no regex in regexlib for', name);
            }
        }
        let captureGroups = countCaptureGroups(regex);
        if (captureGroups == 0) {
            throw new Error('need to capture the regex')
            //regex = RegExp(parens(regex.source), regex.flags)
        }
        regexes[++n] = regex;
        let key = keyCount;
        ref[key] = name;
        keyCount += captureGroups;
    }

    const rt = RegExp(map(n, "$$1").join("|"));
    const r = reCombine(rt, regexes, true);
    //assert(functions.default, 'functions.default is required')
    if (!functions.default) {
        functions.default = identity;
    }

    /* @bookmark 1683518105 splitParser */
    return function splitParser(s) {
        const items = s.trimStart().split(r);
        const groups = groupByAlternatingAmounts(
            items,
            1,
            keyCount
        );
        const filteredGroups = groups.filter(exists$1);
        const values = valuesByType(filteredGroups, ref);
        const fvalues = filter(values);
        const typed = !!wrapFn;
        const mvalues = mapValues(fvalues, functions, typed);
        return wrapFn ? wrapFn(mvalues) : mvalues
    }
}

function createParsersFromObject(x) {
    if (isArray(x)) {
        return x
    }
    if (empty(x)) {
        return
    }

    if (x.hasOwnProperty('1')) {
        return filter(sortByKeys(x).map((x) => runner(x[1])))
    }
    return filter(Object.values(x).map(runner))
            function runner(v) {
            let comment = topComment(v);
            if (
                !comment &&
                REGEXLIB.hasOwnProperty(v.name)
            ) {
                comment = v.name;
            }
            if (!comment) {
                return {
                    name: v.name,
                    parser: v
                }
            }
            const regex = REGEXLIB.hasOwnProperty(comment)
                ? RegExp(REGEXLIB[comment])
                : comment.startsWith("/")
                ? RegExp(comment.slice(1, -1))
                : RegExp(comment);

            //console.log({regex, name: v.name, parser: v})

            return {
                name: v.name,
                parser: v,
                regex
            }
        }
}

const mathRE2 =
    /((?:(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?)|(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?))(?: *(?:[+*=-] *|div +)(?:(?:(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?)|(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?))|\w+))+|(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*)?))/g;
const mathRE3 =
    /((?:(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?)|(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?))(?: *(?:[+*=-] *|div +)(?:(?:(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?)|(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?))|\w+))+|(?:\d+ )?(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?)\/(?:\((?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?\)|(?:\d+\.)?\d\w*(?:\^(?:\d+\.)?\d\w*|%)?))/g;

//const mathRE4 = /((?:(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))|(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))(?: *(?:[+*=-^] *|div +)(?:(?:(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))|(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))|\w+))+|(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))/g


const mathRE4 = /((?:(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))|(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))(?: *(?:[+*=^-] *|div +)(?:(?:(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))|(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))|\w+))+|(?:\d+ )?(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc]))\/(?:\((?:(?:\d+\.)?\d\w*|[xyzmnabc])\)|(?:(?:\d+\.)?\d\w*|[xyzmnabc])))/g;

const REGEXLIB = {
    bold: "\\*\\*(.*?)\\*\\*",
    emoji: ":(\\w+):",
    link: "\\[(.*?):(.*?)\\]",
    math: mathRE2,
    tilda: "`(.*?)`",
    math: mathRE3,
    math: mathRE4,
    topLevelVarRE: "^(\\w+) *= *(.+)",
    linebreakRE: "^--------+",
    r: "'(.*?)'|\"(.*?)\"",
    callableRE: "(\\w+)\\((.*)\\)",
    bigNumberRE: "\\d{4,}",
    commaRE: " *, *",
    delimiter: "\\n+",

    //directive:
        //"v((?:-\\w+)+)(:\\w+)?(\\.\\w+)*(?: *= *(\\S+))?",
    directive: "(v(?:-\\w+)+(?::\\w+)?(?:\\.\\w+)*)(?: *= *(\\S.+))?",
    event: "@([\\w-]+)(?: *= *([\\w.]+(?:\\(.*?\\))?)|\\S+)?",
    //prop: ":([\\w-]+)(?: *= *(\".*?\"|\\S+(?: *\\+ *\\w+)?))?",
    prop: ":([\\w-]+)(?: *= *(\".*?\"|\\S+(?: *(?:\\+|-|[><=]=) *\\w+)?))?",
    //attr: "([\\w-]+) *= *(\\S+)",
    // locational-bookmark: 1688998928
    attr: "([\\w-]+) *= *(\\w+ in \\S+|\".*?\"|{.*?}|\\[.*?\\]|\\S+)",
    class: "\\.([\\w-]+)",
    style: "[\\w-]+:[\\w-]+",
    colonCSS:
        "([\\w-]+):(\\(.*?\\)|\\[.*?\\]|\\{.*?\\}|\\S+)",
    cssColon:
        "([\\w-]+):(\\(.*?\\)|\\[.*?\\]|\\{.*?\\}|\\S+)",
    cssColon: "([\\w-]+):(\\w.+)",
    colonCSS: "^([\\w-]+):(\\S.*)",
    cssPreset: "ai[cse]|jc(?:[cse]|s[ae])",
    //doubleColonStyle: "([\\w-]+)::([^:\s]+) (.+)",
    doubleColon: "([\\w-]+)::(.+)",
    /* merge them together */

    bindingRE:
        "^(?:def|class|const|var|(?:async )?function) ([\\w$]+)",
    regex: "([\\t ]*)(?:\\${(.*?)}|\\$([a-zA-Z]\\w+)\\((.*?)\\)|\\$(\\w+)(\\[-?\\d*:-?\\d*\\])?)|( *)#(.*?)#",
    dashCaseRE: "^[A-Z]{2,}|[a-z][A-Z]|[_]|\\d+$",
    usekv: "k, *v|a, *b",
    suffix: "^[a-zA-Z]+$",
    r2: "^(\\S+) *(?:= *(.+)|{([^]+?)})"
};

function reCombine(r, ref, useFlags) {
    let flags = "";
    let template = isString(r) ? r : r.source;
    const value = template.replace(/\$(\d+)/g, (_, x) => {
        let refRegex = isObject(ref)
            ? ref[x]
            : ref[Number(x) - 1];
        if (useFlags && !flags.includes(refRegex.flags)) {
            flags += refRegex.flags;
        }
        return refRegex.source
    });
    return RegExp(value, flags)
}

function groupByAlternatingAmounts(items, ...sizes) {
    const store = [];
    const f = () => items[count++];
    let count = 0;
    while (true) {
        for (let size of sizes) {
            store.push(map(size, f));
            if (count >= items.length) {
                return store
            }
        }
    }
}

function valuesByType(groups, ref) {
    return groups.map((group, i) => {
        if (group.length == 1) {
            if (group[0] == "") {
                return
            }
            return {
                type: "default",
                value: group[0].trim()
            }
        } else {
            const index = group.findIndex(isDefined);
            let a = index + 1;
            while (isDefined(group[a])) {
                a++;
            }
            if (a == index + 1) {
                return {
                    type: ref[index],
                    value: group[index]
                }
            } else {
                return {
                    type: ref[index],
                    value: group.slice(index, a)
                }
            }
        }
    })
}

function mapValues(items, ref, typed) {
    return items.map((item, i) => {
        const fn = ref[item.type];
        const value = fn(...toArray(item.value));
        return typed ? { type: item.type, value } : value
    })
}
function oxNodeFactory(obj) {
    if (!obj) {
        return
    }
    const items = createParsersFromObject(obj);
    return function oxNode(node, getLeafData) {
        for (let { regex, parser } of items) {
            if (node.value == null) {
                continue
            }

            const extract = parser.name == "for";
            const [text, kwargs] = extract
                ? extractColonKwargs(node.value)
                : [node.value, {}];

            node.kwargs = kwargs;
            const m = search$1(regex, text);
            if (isDefined(m)) {
                // @documentation 1686414690 Accumulate Child Attrs
                if (getLeafData) {
                    const removals = [];
                    for (let child of node.children) {
                        if (!child.isLeaf) {
                            continue
                        }
                        const value = getLeafData(
                            child.value,
                            child
                        );
                        if (value.type == "leafAttribute") {
                            delete value.type;
                            node.defaultAssign(value);
                            removals.push(child);
                        }
                    }
                    /* i think the removals have been taken care of */
                    removals.forEach((child, i) => {
                        node.removeChild(child);
                    });
                    /*
                     * again this is janky ... but will do for now
                     * */
                }

                /* 07-17-2023 ---------------------------------- */
                /* 1689639598 */
                const value = parser.call(this, node, ...toArray(m));
                /* const value = parser(node, ...toArray(m))     */
                /*---------------------------------------------- */
                if (
                    value === false ||
                    value === "parentStop"
                ) {
                    return value
                }
                return true
            }
        }
    }
}

function parserFactory(obj, mode, options = {}) {
    if (mode == "split") return createSplitParser(obj)
    if (empty(obj)) {
        return
    }
    const items = createParsersFromObject(obj);
    const [r, computedIndexes] = setup(items);
    //console.log({r, computedIndexes})
    //Debugger('elementRE', r)
    const ref = {
        match,
        eat,
        matchall,
        eatall
    };
    return ref[mode]

    function eatall(s) {}
    function matchall(s) {
        const store = [];
        while (true) {
            s = s.trimStart();
            const m = s.match(r);
            if (m) {
                s = s.slice(m[0].length);
                push2(store, runner(m));
            } else {
                break
            }
        }
        return store
    }

    function match(s) {
        console.log({s, r})
        const m = s.match(r);
        console.log({m})
        return runner(m)
    }

    function eat(s) {
        const m = s.match(r);
            //console.log({m})
        return m && [s.slice(m[0].length).trim(), runner(m)]
    }

    function runner(match) {
        if (!match) return
        match = match.slice(1);

        const startIndex = match.findIndex(isDefined);
        const args = getArgs(match, startIndex);
        const computedIndex = computedIndexes[startIndex];
        const parser = items[computedIndex].parser;
        return parser(...args)
    }

    function getArgs(match, startIndex) {
        let endIndex = startIndex;
        while (isDefined(match[endIndex])) {
            endIndex++;
        }

        const args =
            endIndex == startIndex + 1
                ? [match[startIndex]]
                : match.slice(startIndex, endIndex);
        return args
    }

    function regexTemplater(r, ref) {
        let template;
        let flags;
        let asString = false;
        if (isString(r)) {
            template = r;
            flags = "";
            asString = true;
        } else {
            template = r.source;
            flags = r.flags;
        }

        const value = template.replace(
            /\$(\d+)/g,
            (_, x) => {
                let refRegex = isObject(ref)
                    ? ref[x]
                    : ref[Number(x) - 1];

                if (refRegex.regex) {
                    refRegex = refRegex.regex;
                }
                return isString(refRegex)
                    ? refRegex
                    : refRegex.source
            }
        );
        return asString ? value : RegExp(value, flags)
    }

    function setup(items) {
        const regexes = items
            .map((x) => x.regex)
            .filter(isDefined);
        const f = map(regexes.length, "$$1").join("|");
        const template = "^(?:$1)".replace("$1", f);
        const stringTemplate = regexTemplater(
            template,
            regexes
        );
        const r = RegExp(stringTemplate);
        const computedIndexes = {};
        let count = 0;
        regexes.forEach((regex, i) => {
            computedIndexes[count] = i;
            let n = countCaptureGroups(regex);
            count += n;
        });
        return [r, computedIndexes]
    }
}

function compose2(...functions) {
    const fns = flat(functions);
    if (fns.length == 1) {
        return fns[0]
    }
    return function postParse(x, ...args) {
        for (let i = 0; i < fns.length; i++) {
            const fn = fns[i];
            const newValue =
                i == fns.length - 1
                    ? fn.call(this, x, ...args)
                    : fn.call(this, x);

            if (isDefined(newValue)) {
                x = newValue;
            }
        }
        return x
    }
}
function createPostParse(o) {
    const endFunctions = o.onReturn
        ? o.onReturn
        : [
              o.onReturn1,
              o.onReturn2,
              o.onReturn3,
              o.onReturn4,
              o.onReturn5
          ];

    if (o.postParse) {
        return compose2(o.postParse, endFunctions)
    }
    const ox = oxNodeFactory(o.ox);
    const leafFn = parserFactory(o.leafAttributes, "match");
    const typedHandlers = o.typedHandlers || {};
    const elementParser = createElementParser({
        startFn:o.elementStart,          /* fn */
        eatFunctions: o.elementEat,      /* Array | Object */
        endFn: o.elementEnd,             /* fn */
        earlyParse: o.elementEarlyParse, /* fn */
    });
    const branchParser = o.branchParser || elementParser;

    function getLeafData(s, state) {
        let m = leafFn && leafFn(s);
        console.log({s, m})
        if (m) {
            m.type = "leafAttribute";
        } else {
            m = elementParser(s, state);
            m.type = "leafElement";
        }
        return m
    }

    function getBranchData(s, state) {
        const m = branchParser(s, state, "branch");
        m.type = "branchElement";
        return m
    }

    const main = createMainParse(
        ox,
        //callingGetLeafData,
        //callingGetBranchData,

        getLeafData,
        getBranchData,
        typedHandlers
    );
    const actions = flat(
        o.onStart,
        main,
        o.onEnd,
        addDefaultClassWrapper,
        endFunctions
    );

    return function postParse(node, ...args) {
        let currentValue = node;
        for (let i = 0; i < actions.length; i++) {
            const action = actions[i];
            const newValue =
                i == actions.length - 1
                    ? action.name == "main"
                        ? action.call( this, currentValue, ...args )
                        : action.call( this, currentValue, ...args )
                        //: action.call(currentValue, ...args)
                    : action.name == "main"
                    ? action.call(this, currentValue)
                    : action(currentValue);

            if (isDefined(newValue)) {
                currentValue = newValue;
            }
        }
        return currentValue
    }
}

function assignFactory(schema) {
    return assign

    function assign(base, x) {
        if (base == null) base = {};

        for (let [k, v] of entries$1(x)) {
            add(base, k, v);
        }
        return base
    }

    function add(base, k, v) {
        if (v == null) {
            return
        }
        const scheme = schema[k];
        switch (scheme) {
            case Object:
                return addObject(base, k, v)
            case Array:
                return addArray(base, k, v)
            default:
                base[k] = v;
        }
    }

    function addArray(base, k, v) {
        if (base.hasOwnProperty(k)) {
            const prev = base[k];
            toArray(v).forEach((item, i) => {
                if (!prev.includes(item)) {
                    prev.push(item);
                }
            });
        } else {
            base[k] = toArray(v);
        }
    }

    function addObject(base, k, v) {
        if (base.hasOwnProperty(k)) {
            Object.assign(base[k], v);
        } else {
            base[k] = v;
        }
    }
}

function createElementParser({startFn, eatFunctions, endFn, earlyParse} = {}) {
    const assignmentSchema = {
        tag: String,
        attrs: Object,
        style: Object,
        props: Object,
        class: Array,
        directives: Array
    };

    let _assign = assignFactory(assignmentSchema);
    let _eat = parserFactory(eatFunctions, "eat");
    let _earlyParse = empty(earlyParse)
        ? null
        : isFunction(earlyParse) 
        ? earlyParse 
        : createElementParser(earlyParse);

    return function elementParser(s, ...endArgs) {
        let m;
        let store = {};

        if (m = _earlyParse && _earlyParse(s, ...endArgs)) {
            return m
        }
        if (startFn) {
            let r = /\S+/;
            if ((m = mget(r, s))) {
                s = m[0].trim();
                const val = startFn(m[1]);
                if (val === false) {
                    return 
                }
                _assign(store, val);
            }
        }

        for (let i = 0; i < 10; i++) {
            if ((m = _eat(s))) {
                s = m[0];
                _assign(store, m[1]);
            } else {
                const value = endFn
                    ? endFn(s, ...endArgs)
                    : s;

                if (isPrimitive(value)) {
                    store.value = value;
                } else {
                    Object.assign(store, value);
                }

                return store
            }
        }
    }
}

function createMainParse(
    ox,
    getLeafData,
    getBranchData,
    typedHandlers
) {
    return function main(node) {
        node.iterate((child, i) => {
            TypeAssertion(child, "StateContext");

            /* @bookmark 1689168044 main */
            if (child.isSkippable()) {
                return 
            }

            if (child.type) {
                if (
                    typedHandlers.hasOwnProperty(child.type)
                ) {
                    typedHandlers[child.type](child);
                    child.done = true;
                    /* child.done prevents double iteration */
                } else if (!child.class) {
                    child.defaultAssign({ class: child.type });
                }
                return
            }

            if (ox) {
                /* breaking ---------------------------------*/
                /* 1689639598 */
                const value = ox.call(this, child, getLeafData);
                //const value = ox(child, getLeafData)
                /*-------------------------------------------*/

                if (
                    value === false ||
                    value === "parentStop"
                ) {
                    return value
                } else if (value) {
                    return
                }
            }

            if (!child.value) {
                return
            }

            if (child._doNotUseElementParser) {
                return 
            }
            const raw = child.popValue();
            const fn = child.isLeaf
                ? getLeafData
                : getBranchData;
            const value = fn(raw, this);


            if (value.type == "leafAttribute") {
                const data = childDataGetter(value);
                child.parent.defaultAssign(data);
                /* we stop further iteration due to return false */
                return false
            }

            child.defaultAssign(value);
        });
        
        node.doAfterAction();
    }
}
function childDataGetter(value) {
    const keys = [

        "computedStyle",
        "computedClass",
        "attrs",
        "style",
        "events",
        "directives",
        "props",
        "class"
    ];
    return stateGetter(value, keys)
}

function addDefaultClassWrapper(node, baseName = "root") {
    if (node.size == 1) {
        node = node.firstChild;
    } else {
        node.defaultAssign({ class: baseName });
    }
    return node
}

function buildParser3(spec) {
    function buildInternalParser({getBlocks, earlyParse}) {

        const getBlockFn = blockRef[getBlocks || 'default'];
        return function __parser__(s, ...args) {
            let m;
            if (m = earlyParse && earlyParse(s)) {
                return m
            }
            if (m = getBlockFn.call(this, s, ...args)) {
                return m
            }
            myError('no earlyParse or getBlock');
        }
    }
    const o = {
        __postparse__: createPostParse(spec),
        __preparse__: spec.preParse,
        __parser__: buildInternalParser(spec.options || {}),
        options: spec.options,
        methods: spec.methods,
        mounted: spec.mounted,
        state: spec.state,
        debug: spec.debug,
        atRef: spec.atRef,
        evalScope: spec.evalScope,
        getBlockPostParseRef: spec.getBlockPostParseRef || {},
    };
    return exporter2(BaseLineEdit, o)
}
function extractColonKwargs(s, dir = 1) {
    const store = {};
    const [r, trim] =
        dir == 1
            ? [/(\w[\w-]*):(\S+)$/, "trimEnd"]
            : [/^(\w[\w-]*):(\S+)/, "trimStart"];

    let keepGoing;
    do {
        keepGoing = false;
        s = s[trim]().replace(r, (_, a, b) => {
            store[a] = b;
            keepGoing = true;
            return ""
        });
    } while (keepGoing)
    return [s[trim](), store]
}

const pi = Math.PI;
const tau = 2 * pi;
const epsilon = 1e-6;
const tauEpsilon = tau - epsilon;

class Path {
    constructor() {
        this._x0 = null;
        this._y0 = null;
        this._x1 = null;
        this._y1 = null;
        this._ = "";
    }

    _append(strings) {
        this._ += strings[0];
        for (let i = 1, n = strings.length; i < n; ++i) {
            this._ += arguments[i] + strings[i];
        }
    }
    moveTo(x, y) {
        this._append`M${(this._x0 = this._x1 =
            +x)},${(this._y0 = this._y1 = +y)}`;
    }
    closePath() {
        if (this._x1 !== null) {
(this._x1 = this._x0), (this._y1 = this._y0);
            this._append`Z`;
        }
    }
    lineTo(x, y) {
        this._append`L${(this._x1 = +x)},${(this._y1 = +y)}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${(this._x1 =
            +x)},${(this._y1 = +y)}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this
            ._append`C${+x1},${+y1},${+x2},${+y2},${(this._x1 =
            +x)},${(this._y1 = +y)}`;
    }
    arcTo(x1, y1, x2, y2, r) {
(x1 = +x1),
            (y1 = +y1),
            (x2 = +x2),
            (y2 = +y2),
            (r = +r);

        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`)

        let x0 = this._x1,
            y0 = this._y1,
            x21 = x2 - x1,
            y21 = y2 - y1,
            x01 = x0 - x1,
            y01 = y0 - y1,
            l01_2 = x01 * x01 + y01 * y01;

        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
            this._append`M${(this._x1 = x1)},${(this._y1 =
                y1)}`;
        }

        // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
        else if (!(l01_2 > epsilon));
        else if (
            !(Math.abs(y01 * x21 - y21 * x01) > epsilon) ||
            !r
        ) {
            // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
            // Equivalently, is (x1,y1) coincident with (x2,y2)?
            // Or, is the radius zero? Line to (x1,y1).
            this._append`L${(this._x1 = x1)},${(this._y1 =
                y1)}`;
        }

        // Otherwise, draw an arc!
        else {
            let x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l =
                    r *
                    Math.tan(
                        (pi -
                            Math.acos(
                                (l21_2 + l01_2 - l20_2) /
                                    (2 * l21 * l01)
                            )) /
                            2
                    ),
                t01 = l / l01,
                t21 = l / l21;

            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) {
                this._append`L${x1 + t01 * x01},${
                    y1 + t01 * y01
                }`;
            }

            this._append`A${r},${r},0,0,${+(
                y01 * x20 >
                x01 * y20
            )},${(this._x1 = x1 + t21 * x21)},${(this._y1 =
                y1 + t21 * y21)}`;
        }
    }
    arc(x, y, r, a0, a1, ccw) {
(x = +x), (y = +y), (r = +r), (ccw = !!ccw);

        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`)

        let dx = r * Math.cos(a0),
            dy = r * Math.sin(a0),
            x0 = x + dx,
            y0 = y + dy,
            cw = 1 ^ ccw,
            da = ccw ? a0 - a1 : a1 - a0;

        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
            this._append`M${x0},${y0}`;
        }

        // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
        else if (
            Math.abs(this._x1 - x0) > epsilon ||
            Math.abs(this._y1 - y0) > epsilon
        ) {
            this._append`L${x0},${y0}`;
        }

        // Is this arc empty? We’re done.
        if (!r) return

        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = (da % tau) + tau;

        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
            this._append`A${r},${r},0,1,${cw},${x - dx},${
                y - dy
            }A${r},${r},0,1,${cw},${(this._x1 =
                x0)},${(this._y1 = y0)}`;
        }

        // Is this arc non-empty? Draw an arc!
        else if (da > epsilon) {
            this._append`A${r},${r},0,${+(
                da >= pi
            )},${cw},${(this._x1 =
                x + r * Math.cos(a1))},${(this._y1 =
                y + r * Math.sin(a1))}`;
        }
    }
    rect(x, y, w, h) {
        this._append`M${(this._x0 = this._x1 =
            +x)},${(this._y0 = this._y1 = +y)}h${(w =
            +w)}v${+h}h${-w}Z`;
    }
    toString() {
        return this._
    }
}
function pathFromPoints(points, close = false) {
    const store = ["M", ...points[0]];

    for (let i = 1; i < points.length; i++) {
        store.push("L", ...points[i]);
    }

    if (close) {
        store.push("Z");
    }

    return store.join(" ")
}

const SVGFunctionDict = {
    rotate(...args) {
        return `rotate(${args.join(", ")})`
    },
    tx(n) {
        return `translate(${n}, 0)`
    },
    ty(n) {
        return `translate(0, ${n})`
    },
    t(x, y) {
        return `translate(${x}, ${y})`
    },
    fill: svgColor
};
const SVGAttributeItems = [
    { alias: "tx", key: "transform", type: "functional" },
    { alias: "ty", key: "transform", type: "functional" },
    { alias: "t", key: "transform", type: "functional" },
    {
        alias: "rotate",
        key: "transform",
        type: "functional"
    },

    { alias: "ta", key: "text-anchor", type: "" },
    {
        aliases: ["f", "fill"],
        key: "fill",
        type: "functional"
    },
    {
        alias: "s",
        key: "stroke",
        type: "functional",
        fnKey: "fill"
    },
    { alias: "sw", key: "stroke-width", type: "" },
    { alias: "h", key: "height", type: "" },
    { alias: "w", key: "width", type: "" },
    { alias: "x", key: "x", type: "" },
    { alias: "y", key: "y", type: "" },
    { alias: "id", key: "id", type: "" }
];

function tickHeight(i, interval, minor, major) {
    return i % interval === 0 ? minor : major
}

class SVGData {
    constructor() {
        this.arrayStore = [];
        this.objectStore = {};
    }
    push(...args) {
        args.length == 1
            ? this.arrayStore.push(args[0])
            : this.arrayStore.push(args);
    }
    update(...args) {}
    toJSON() {
        return empty(this.arrayStore)
            ? this.objectStore
            : this.arrayStore
    }
}

function prependCode(code, o) {
    let s = "";
    if (exists$1(o.declarations)) {
        s += `let ${o.declarations}\n`;
    }
    return code.trimStart().replace(/\n/, (x) => {
        "\n" + indent(s.trim());
    })
}
const svgCallableRef = {
    points(node, value) {
        inProgress();
        node.assign({ tag: "g" });
    },
    code: svgCode,
    lines: svgCode,
    path(node, value) {
        const fn = bringToLife(value);
        const path = new Path();
        fn(path);
        const d = path.toString();
        const data = {
            tag: "path",
            attrs: { d }
        };
        node.assign(data);
    }
};
const svgBracketRef = {
    path(node, value) {
        const points = partition(findall(/\d+/g, value));
        node.assign({
            tag: "path",
            attrs: { d: pathFromPoints(points) }
        });
    },

    points(node, value, kwargs) {
        const { r, fill } = node.kwargs;
        const points = partition(findall(/\d+/g, value));
        const children = points.map((point, i) => {
            return circle(...point, r, fill)
        });
        node.assign({ tag: "g" });
        node.appendChildren(children);
    }
};

const leafAttributes = {
    colonAttr(a, b) {
        /* (\S+):(\[.*?\]|\S+) */
        return { attrs: svgColon(a, b) }
    }
};

function oxford(...args) {
    if (empty(args)) {
        return ''
    }
    return flat(args).filter(hasValue).join(', ')
}
function optionString(x) {
    if (empty(x)) {
        return ''
    }
    function addQuotes(s) {
        if (s.includes(' ')) {
            return `"${s}"`
        }
        return s
    }
    return wrap(reduceToString(x, (k, v) => {
        if (v == null) {
            return 
        }
        assert(isPrimitive(v), 'optionString v value must be primitive');
        return `${k}: ${addQuotes(v)}`
    }, ', '), '{}')
}
function fixD3(s) {
    //let m
    //if (m = search(/^for (.*?) in (\w+))) {
        
    //}
    //if (/^for \w+/.test(s)) {
        //return inlinePythonToJavascript(s)
    //}
    if (/^ *\w+ \w+/.test(s)) {
        //console.log({s})
        const [args, kwargs] = argKwargSplit(s);
        const name = args.shift();
        const value = `${name}(${oxford(args, optionString(kwargs))})`;
        return value
    }
    return s
}
function d3PostParse(node, value) {
    const evaluator = new LocalEvaluator(fixD3);
    const colors = {
        $globalBlue: "blueee",
        red: "red",
        blue: "blue",
        green: "green"
    };
    const functions = {
        double
    };

    evaluator.load({
        ...this.state.contextProps,
        ...colors,
        ...functions
    });

    const evaluate = evaluator.build(svgElements);
    const self = this;
    const payload = topRunner(node);
    return payload

    function topRunner(node, parent = new StateContext()) {

        for (const child of node.children) {
            evaluator.code.push(child.value);

            if (child.isBranch) {
                const children = evaluate();
                parent.appendChildren(children);
                topRunner(child, parent.enter());
            }
        }

        const svgContainerTags = [
            "g",
            "mask",
            "svg",
            "pattern",
            "marker",
            "symbol",
            "defs",
            "g",
        ];

        const children = evaluate();
        if (svgContainerTags.includes(parent.tag)) {
            parent.appendChildren(children);
        } else if (parent.parent) {
            if (self.options.svgMergeStrategy == 'familial') {
                console.log('familial merge strategy');
                const newContainer = parent.parent.appendChild({tag: 'g'});
                newContainer.appendChild(parent.remove());
                newContainer.appendChild({tag: 'g'}).appendChildren(children);
            } 
            else if (self.options.svgMergeStrategy == 'close') {
                parent.appendChild({tag: 'g'}).appendChildren(children);
            } else {
                parent.appendChildren(children);
            }
        }
        /*******************************
        * 05-29-2023 documentation:
        * This is an interesting effect and possibly wrong
        * 
        *******************************/
        return parent
    }
}
function doublerf(base) {
    let computedBase = toArray(base);
    return function lambda(newBase) {
        if (newBase) {
            computedBase = toArray(newBase);
        }
        const value = computedBase;
        computedBase = double(computedBase);
        return value
    }
}
const d3Spec = {
    //debug: 'blocks',

    options: {
        svgMergeStrategy: '',
        getBlocks: "d3Blocks",
    },
    postParse: d3PostParse,
    onReturn1: svgReturn1,
    /* seems to create a wrapper */
    onReturn2: svgReturn2,
    /* seems to create a wrapper for defs */
    onReturn3: d3Return3,
    /* seems to add container styling */
    state: {
        mode: String,
        width: 200,
        height: 300,
        contextProps: {
            $ticks: doublerf({pos: 'child', start: 1, end: 2})
        }
    },
    methods: {
        foo() {
            console.log('howdy from d3Spec.methods.foo');
        },
        /* 
         * This foo method will be bound via the power of mixin()
         * mixin() is quietly a super function
         * */
    }
};
const svgSpec = {
    options: { getBlocks: true },
    typedHandlers: {
        callable(node) {
            if (node.key in svgCallableRef) {
                return svgCallableRef[node.key](
                    node,
                    node.popValue()
                )
            }
        },
        bracket(node) {
            if (node.key in svgBracketRef) {
                return svgBracketRef[node.key](
                    node,
                    node.popValue(),
                    node.kwargs
                )
            }
        }
    },
    onReturn1: svgReturn1,
    onReturn2: svgReturn2,
    leafAttributes,
    elementParser(s) {
        const [args, kwargs] = argKwargSplit(s);
        const key = camelCase(args.shift());

        const payload =
            key in svgElementRef
                ? svgElementRef[key](...args)
                : { value: s };

        for (let [a, b] of kwargs) {
            const value = { attrs: svgColon(a, b) };
            cumulativeSchemaAssign(payload, value, {
                transform: "merge"
            });
        }
        return payload
    }
};
//console.log(svgBuilder(str1685043085))
//

function svgCode(node, value) {
    const fix = (s) => {
        const declarations = findall(/^ *(\w+) *=/gm);
        return prependCode(s, { declarations })
    };
    const data = new SVGData();
    const yline = (...args) => data.push("yl", ...args);
    const xline = (...args) => data.push("xl", ...args);
    const localContext = {
        data,
        tickHeight,
        yline,
        xline
    };
    const context = merge(localContext, state.context);
    bringToLife(fix(value), context)();
    const datum = data.toJSON();
    if (empty(datum)) return
    const aliases = {
        yline: "yl",
        xline: "xl"
    };
    const children = datum.map((item, i) => {
        const [rawKey, ...args] = item;
        const fnKey = aliases[rawKey] || rawKey;
        const fn = this[fnKey] || svgElementRef[fnKey];
        return fn(...args)
    });
    node.assign({ tag: "g" });
    node.appendChildren(children);
}
//console.log(svgBuilder(svgString))

function double(x) {
    return x.concat(copy(x))
}

function svgReturn2(node) {
    const patterns = node.children.filter((child) => {
        const r = /linearGradient|pattern/;
        return r.test(child.tag)
    });
    const defs = node.prependChild({ tag: "defs" });
    defs.children = patterns;
    patterns.forEach((pattern, i) => {
        node.removeChild(pattern);
    });
    return node
}
function svgReturn1(node) {

    const width = this.state.width || 400;
    const height = this.state.height || 400;
    const attrs = {
        width: width + "pt",
        height: height + "pt",
        viewBox: `0 0 ${width} ${height}`
    };

    if (
        node.class == "root" ||
        node.tag == "div" ||
        !node.tag
    ) {
        return node.assign({
            attrs,
            class: "",
            tag: "svg"
        })
    } else {
        const parent = node.create({
            attrs,
            tag: "svg"
        });
        parent.appendChild(node);
        return parent
    }
}

function d3Return3(node, options, mode) {
    node.assign(rollupOptions(options));
    return mode === false ? node : node.toString()
}
function rollupOptions(o) {
    if (empty(o)) {
        return 
    }

    /* add in some css effects */
    const attrs = {};
    const style = {};
    const payload = {attrs, style};
    if (o.class) payload.class = o.class;
    if (o.w) attrs.width = o.w;
    if (o.width) attrs.width = o.width;
    if (o.h) attrs.height = o.h;
    if (o.fill) attrs.fill = o.fill;
    if (o.height) attrs.height = o.height;
    if (o.border) style.border = o.border;
    return payload
}

const svgColon = CSSBuilder.buildParser(
    SVGAttributeItems,
    SVGFunctionDict,
    { commentColors: false }
);
buildParser3(svgSpec);
buildParser3(d3Spec);

const spellcheckJson = {
  "defly": "definitely",
  "shud": "should",
  "r": "are",
  "u": "you",
  "im": "I'm",
  "i'm": "I'm",
  "nthg": "nothing",
  "gj": "good job",
  "evtime": "every time",
  "absly": "absolutely",
  "comraderie": "camaraderie",
  "shouldnt": "shouldn't",
  "bc": "because",
  "deosnt": "doesn't",
  "twie": "twice",
  "thats": "that's",
  "consquences": "consequences",
  "mks": "makes",
  "youre": "you're",
  "dont": "don't",
  "twicce": "twice",
  "outloud": "out loud",
  "assingment": "assignment",
  "corec": "correct",
  "kno": "know",
  "doesnt": "doesn't",
  "knwo": "know",
  "scentist": "scientist",
  "yesir": "yes sir",
  "i": "I",
  "im": "I\\'m",
  "y=mxpb": "$y = mx + b$",
  "evtime": "every time",
  "ev1": "everyone",
  "pat": "pattern",
  " y= mx + b": " $y = mx + b$",
  "y = mxpb": "$y = mx + b$",
  "b/c": "because",
  "hwu": "how would you",
  "witvo": "what is the value of",
  "witv": "what is the value",
  "itv": "is the value",
  "insts": "instances",
  "kev": "Kev",
  "line1": "Line 1",
  "l1": "Line 1",
  "l2": "Line 2",
  "line2": "Line 2",
  "srcs": "sources",
  "ftham": "Fort Hamilton",
  "emc": "EMC Learning Center",
  "viet": "Vietnamese",
  "2gthr": "together",
  "fbafw": "for better and for worse",
  "wts": "what's",
  "smth": "something",
  "algo": "algorithm",
  "2b": "to be",
  "goin": "going",
  "wndr": "wonder",
  "otherwse": "otherwise",
  "erlier": "earlier",
  "2m": "too much",
  "abrev": "abbreviation",
  "essly": "essentially",
  "folo/s": "follow",
  "posbly": "possibly",
  "envs": "environments",
  "yt": "Youtube",
  "tis": "this is",
  "evthg": "everything",
  "drei": "Andrei",
  "adverts": "advertisements",
  "prply": "properly",
  "rsns": "reasons",
  "ot": "of this",
  "lern": "learn",
  "absrb": "absorb",
  "jayden": "Jayden",
  "dont": "don't",
  "purp": "purpose",
  "eo": "everyone",
  "alu": "aluminum",
  "hoisinsauce": "Hoisin Sauce",
  "alw": "allow",
  "delish": "delicious",
  "ev": "every",
  "info": "information",
  "ex": "example",
  "pri": "priority",
  "abt": "about",
  "prp": "purpose",
  "wudnt": "wouldn't",
  "exs": "examples",
  "wt": "what",
  "wo": "without",
  "popu": "population",
  "theyre": "they're",
  "q": "question",
  "wich": "which",
  "u": "you",
  "wknd": "weekend",
  "hey": "Hey",
  "abble": "able",
  "occs": "occassions",
  "facetime": "FaceTime",
  "4ward": "forward",
  "gon": "going to",
  "stdnts": "students",
  "wheres": "where's",
  "awa": "as well as",
  "actuly": "actually",
  "dne": "!=",
  "dng": "doing",
  "tpofgr": "the path of greatest resistance",
  "thnking": "thinking",
  "alwys": "always",
  "dnt": "don't",
  "tfyhas": "thanks for your help and support",
  "evning": "evening",
  "imo": "in my opinion",
  "lrnd": "learned",
  "fl": "feel",
  "stl": "still",
  "chng": "change",
  "imp": "important",
  "mygithubvimrc": "https://raw.githubusercontent.com/kdog3682/backup/master/.vimrc",
  "folo": "follow",
  "feb": "Februrary",
  "Thx": "Thanks",
  "val": "value",
  "mightve": "might've",
  "acs": "access",
  "justinyan": "Justin Yan",
  "rslt": "result",
  "fevr": "forever",
  "evnings": "evenings",
  "cnt": "can\\'t",
  "hpn": "happen",
  "dich": "dichotomy",
  "obss": "observations",
  "cssrem": "rem",
  "strng": "strong",
  "wasnt": "wasn't",
  "exped": "experienced",
  "ntbi": "not the best idea",
  "shtct": "shortcut",
  "anythg": "anything",
  "wen": "when",
  "lrg": "large",
  "td": "today",
  "ralph": "Ralph",
  "lrn": "learn",
  "hv": "have",
  "dunno": "don't know",
  "tkn": "taken",
  "tangi": "tangible",
  "wimsies": "whimsies",
  "leggo": "Let's go",
  "dec": "December",
  "reqd": "required",
  "mite": "might",
  "aygaot": "Appreciate your guys's advice on this",
  "mypersonalwebsite": "https://zzsdfidsfsfdasdf",
  "npaa": "No problem at all!",
  "hnging": "hanging",
  "lets": "let's",
  "ans": "answer",
  "dev": "Devin",
  "thsi": "this",
  "frds": "friends",
  "wrds": "words",
  "gv/s": "give",
  "alrdy": "already",
  "dled": "downloaded",
  "prsn": "person",
  "adv": "advantage",
  "whenev": "whenever",
  "bobby": "Bobby",
  "althou": "although",
  "gm": "Good morning",
  "twoa": "The Way of America",
  "tyvm4th": "Thank you very much for the help",
  "tyfth": "Thanks for the help!",
  "ty4th": "Thanks for the help!",
  "twoc": "The Way of China",
  "receved": "received",
  "grws": "grows",
  "ull": "you'll",
  "4ever": "forever",
  "shud": "should",
  "eff": "effect",
  "stmch": "stomach",
  "xtra": "extra",
  "tgether": "together",
  "thxus": "than-yous",
  "usly": "usually",
  "bndries": "boundaries",
  "supp": "suppose",
  "becom": "become",
  "bel": "believe",
  "darren": "Darren",
  "tyfg": "thanks for your guidance",
  "aytap": "appreciate your tips and advice",
  "ur": "your",
  "essen": "essentially",
  "lst": "list",
  "t4th": "Thanks for the help",
  "rn": "right now",
  "stfuf": "stuff",
  "svd": "saved",
  "msg/s": "message",
  "aea": "appreciate everyone\u2019s advice on this",
  "hm": "how much",
  "sig": "significant",
  "freq": "frequent",
  "whats": "what's",
  "svs": "saves",
  "ael": "addEventListener",
  "freqly": "frequently",
  "thts": "thats",
  "hrd": "hard",
  "wanna": "want to",
  "alilbit": "a little bit",
  "probs": "problems",
  "maylynn": "Maylynn",
  "hapd": "happened",
  "grnd": "ground",
  "sbs": "slowly, but surely",
  "thgs": "things",
  "mtr": "matter",
  "nethg": "anything",
  "hapn": "happen",
  "ty4g": "Thanks for your guidance",
  "ty4th": "Thanks for the help!",
  "gud": "good",
  "xchng": "exchange",
  "hvnt": "haven't",
  "rslts": "results",
  "jst": "just ",
  "prsns": "persons",
  "diffclt": "difficulty",
  "shouldnt": "shouldn't",
  "tpo": "the purpose of",
  "receve": "receive",
  "rly": "really",
  "wnt": "want",
  "ssp": "Sunset Park",
  "grw": "grow",
  "isc": "is correct",
  "recs": "recommends",
  "tfth": "Thanks for the help",
  "azn": "Asian",
  "sugs": "suggestions",
  "bingo": "Bingo",
  "sm": "some",
  "btwn": "between",
  "btw": "by the way",
  "2gethr": "together",
  "bable": "be able",
  "frc": "force",
  "frd": "friend",
  "sv": "save",
  "cmpnt": "component",
  "diff": "difference",
  "lving": "living",
  "im": "I'm",
  "chngs": "changes",
  "frm": "from",
  "hrdr": "harder",
  "mygithubbashrc": "https://raw.githubusercontent.com/kdog3682/backup/master/.bashrc",
  "advs": "advantages",
  "arnd": "around",
  "fooz": "food",
  "smo": "someone",
  "simp": "simple",
  "freqcy": "frequency",
  "ez": "easy",
  "2mrw": "tomorrow",
  "althgh": "although",
  "arnt": "aren\\'t",
  "haneka": "Hanukkah",
  "absly": "absolutely",
  "ltrs": "letters",
  "pls": "please",
  "lerning": "learning",
  "drping": "dropping",
  "speces": "species",
  "ppls": "people's",
  "mks": "makes",
  "ayga": "Appreciate your advice",
  "def": "definitely",
  "hving": "having",
  "thru": "through",
  "incorec": "incorrect",
  "mar": "March",
  "cr8": "create",
  "itz": "its",
  "diffs": "difficulties",
  "diffly": "differently",
  "lkd": "liked",
  "iisc": "it is correct",
  "uncomf": "uncomfortable",
  "isinc": "is incorrect",
  "tpoflr": "the path of least resistance",
  "2day": "today",
  "shcts": "shortcuts",
  "drp": "drop",
  "tm": "tomorrow",
  "shct": "shortcut",
  "hw": "homework",
  "obs": "observation",
  "cudnt": "couldn't",
  "lks": "likes",
  "ts": "this",
  "its": "it's",
  "tu": "thank you",
  "ubiqitis": "ubiquitous",
  "gv": "give",
  "ty": "Thank you!",
  "nvr": "never",
  "dese": "of these",
  "undrstnding": "understanding",
  "xmas": "Christmas",
  "aong": "along",
  "strt": "start",
  "thots": "thoughts",
  "posibl": "possible",
  "sd": "should",
  "slping": "sleeping",
  "wud": "would",
  "bst": "best",
  "exprsd": "expressed",
  "chg": "change",
  "chi": "Chinese",
  "hasnt": "hasn't",
  "exp": "experience",
  "alwd": "allowed",
  "2gether": "together",
  "noness": "nonessential",
  "mayo": "mayonaise",
  "esp": "especially",
  "esq": "esque",
  "chldrn": "children",
  "exps": "experiences",
  "thats": "that's",
  "brg": "bring",
  "brk": "break",
  "colab": "collaboration",
  "wudve": "would've",
  "chkpt/s": "checkpoint",
  "lvl": "level",
  "youre": "you're",
  "occ": "occassion",
  "thou": "though",
  "imdly": "immediately",
  "nec": "necessary",
  "grwing": "growing",
  "hpns": "happens",
  "mself": "myself",
  "ese": "else",
  "mtrs": "matters",
  "ur": "you're",
  "wrld": "world",
  "alumin": "aluminum",
  "dir": "directory",
  "dis": "this",
  "kp": "keep",
  "isto": "is to",
  "isnc": "it is incorrect",
  "helthy": "healthy",
  "on2": "onto",
  "nding": "needing",
  "ubiq": "ubiquitous",
  "arent": "aren't",
  "bt": "but",
  "alota": "a lot of",
  "euivalent": "equivalent",
  "isnt": "isn't",
  "bu": "back-up",
  "inc": "include",
  "deving": "developing",
  "ne": "any",
  "// '4": "for",
  "shudve": "should've",
  "org": "organize",
  "evplace": "every place",
  "becky": "Becky",
  "ctown": "C-Town",
  "mch": "much",
  "hap": "happen",
  "b4": "before",
  "reg": "regular",
  "sprt": "sport",
  "anyo": "anyone nemor anymore",
  "rem": "remember",
  "diffclty": "difficulty",
  "mems": "memories",
  "didnt": "didn't",
  "mech": "mechanism",
  "wo": "without",
  //"st": "start",
  "ive": "I've",
  "estabd": "established",
  "lmk": "let me know",
  "ist": "is to",
  "vm": "very much",
  "whil": "while",
  "buildup": "build-up",
  "prbly": "probably",
  "intrd": "interested",
  "myemail": "kdog3682@gmail.com",
  "smtimes": "sometimes",
  "lk": "like",
  "asp": "aspect",
  "yr": "year",
  "nxt": "next",
  "sigly": "significantly",
  "bc": "because",
  "gonna": "going to",
  "nd": "need",
  "fut": "future",
  "spk": "speak",
  "mny": "money",
  "lking": "looking",
  "algos": "algorithms",
  "thnk": "think",
  "tken": "taken",
  "ctina": "Christina",
  "lazzefair": "laizze-faire",
  "w/": "with",
  "corec": "correct",
  "nds": "needs",
  "diss": "this is",
  "fam": "family",
  "transltn": "translation",
  "waterb": "waterbottle",
  "ezier": "easier",
  "comf": "comfortable",
  "itic": "I think it's correct",
  "nthg": "nothing",
  "ny": "New York",
  "wrd": "word",
  "infrnt": "infront",
  "wrg": "wrong",
  "lang": "language",
  "mtrd": "mattered",
  "wrk": "work",
  "pert": "pertinent",
  "evwhere": "everywhere",
  "posble": "possible",
  "delishh": "delish",
  "whte": "white",
  "wrt": "with respect to",
  "jan": "January",
  "mxmas": "Merry Christmas",
  "whl": "while",
  "wa": "Washington",
  "evone": "everyone",
  "wd": "would",
  "cudve": "could've",
  "whr": "where",
  "hser/s": "high school student",
  "t4yh": "Thanks for your help",
  "t4yi": "thanks for your input",
  "fing": "f'ing",
  "suprt": "support",
  "imd": "immediate",
  "t4yr": "thanks for your reply",
  "lifecy": "lifecycle",
  "stuf": "stuff",
  "lbr": "----------",
  "mk": "make",
  "ml": "Maylynn",
  "istaw": "is there a way",
  "cb": "Challenge Basketball",
  "cc": "chit-chat",
  "gdrive": "Google Drive",
  "mv": "move",
  "cud": "could",
  "vry": "very",
  "ck": "cook",
  "comp": "computer",
  "ephemeraly": "ephemerally",
  "cn": "cannot",
  "prob": "problem",
  "acheve": "achieve",
  "4evr": "forever",
  "beleve": "believe",
  "prog": "progress",
  "fls": "feels",
  "cur": "current",
  "mem": "memory",
  "thot": "thought",
  "ppl": "people",
  "t4yhas": "thanks for your help and support",
  "basicly": "basically",
  "serches": "searches",
  "sry": "sorry",
  "estab": "establish",
  "bklyn": "Brooklyn",
  "evn": "even",
  "evo": "everyone",
  "prep": "prepare",
  "evr": "ever",
  "evt": "everything",
  "defly": "definitely",
  "gens": "generations",
  "mor": "more",
  "ltly": "lately",
  "diffi": "difficulty",
  "t4yhasitm": "thanks for your help and support in this matter",
  "bball": "basketball",
  "tyvm": "Thank you very much",
  "lrgr": "larger",
  "tfyhasitm": "thanks for your help and support in this matter",
  "shudnt": "shouldn't",
  "opp": "opportunity",
  "wil": "will",
  "loc": "location",
  "fl8": "feeling",
  "cant": "can't",
  "abrevs": "abbreviations",
  "nye": "New Year's Eve",
  "thg": "thing",
  "mser/s": "middle school student",
  "oft": "often",
  "thn": "then",
  "wknds": "weekends",
  "wont": "won't",
  "thr": "there",
  "tht": "that",
  "fe": "for example",
  "thx": "thanks",
  "efrt": "effort",
  "np": "No Problem",
  "lauren": "Lauren",
  "src": "source",
  "wouldnt": "wouldn't",
  "tmrw": "tomorrow",
  "somehow": "some how",
  "chld": "child",
  "dl": "download",
  "lbrphone": "----------",
  "aprox": "approximately",
  "srs": "serious",
  "hardr": "harder",
  "thxgiving": "Thanksgiving",
  "hoisauce": "Hoisin Sauce",
  "queyr": "query",
  "bndry": "boundary",
  "yamisuke": "Yami Sukehiro",
  "xchg": "exchange",
  "utube": "YouTube",
  "doesnt": "doesn't",
  "cls": "class",
  "fav": "favorite",
  "ayaot": "Appreciate your advice on this",
  "couldnt": "couldn't",
  "xtrmly": "extremely",
  "hlpful": "helpful",
  "thiiss": "this",
  "is": "is",
  "do": "do",
  "to": "to",
  "backwards": "backwards",
  "unintended": "unintended",
  "bk": "back",
  "brgs": "brings",
  "forwards": "forwards",
  "vim": "vim",
  "me": "me",
  "responsive": "responsive",
  "currly": "currently",
  "class Storage extends StorageTemplate": "class StorageTemplate ",
  "zoomba": "zumba",
  "be4": "before",
  "qu": "question",
  "subsqly": "subsequently",
  "lcation": "location",
  "or": "or",
  "bkmrks": "bookmarks",
  "be": "be",
  "litl": "little",
  "stackoverflow": "stackoverflow",
  "of": "of",
  "https": "https",
  "downsides": "downsides",
  "conv": "convenient",
  "comf": "comfortable",
  "my": "my",
  "storing": "storing",
  "js": "js",
  "an": "an",
  "migt": "might",
  "feling": "feeling",
  "ading": "adding",
  "thrd": "thread",
  "verbos": "verbose",
  "howdy": "howdy",
  "sameul": "Samuel",
  "toggle": "toggle",
  "wordundercursor": "wordundercursor",
  "programatically": "programmatically",
  "endfunction": "endfunction",
  "regex": "regex",
  "cr": "cr",
  "setline": "setline",
  "getline": "getline",
  "resultant": "resultant",
  "foobarlicious": "foobarlicious",
  "programmatically": "programatically",
  "foobar": "foobar",
  "svg": "svg",
  "totaly": "totally",
  "doable": "doable",
  "flatter": "flatter",
  "postdinner": "post-dinner",
  "culprit": "culprit",
  "ariving": "ariving",
  "tuna": "tuna",
  "cereal": "cereal",
  "vegies": "vegies",
  "gist": "gist",
  "pea": "pea",
  "canned": "canned",
  "bloated": "bloated",
  "cm": "cm",
  "fallback": "fallback",
  "keyconfig": "keyconfig",
  "vue": "vue",
  "denom": "denominator",
  "h": "Hammy",
  "hammy": "Hammy",
  "sam": "Sam",
  "i": "I",
  "u": "you",
  "uuu": "you",
  "uuu": "you",
  "uuu": "you",
  "uuu": "you",
  "haojun": "Haojun",
  "shujing": "Shujing",
  "austin": "Austin",
  "anderson": "Anderson",
  "alexander": "Alexander",
  "mingrui": "Mingrui",
  "bonnie": "Bonnie",
  "stephen": "Stephen",
  "felix": "Felix",
  "stephanie": "Stephanie",
  "jayden": "Jayden",
  "ivy": "Ivy",
  "vincent": "Vincent",
  "alex": "Alex",
  "jeffery": "Jeffery",
  "sandy": "Sandy",
  "leon": "Leon",
  "raymond": "Raymond",
  "olivia": "Olivia",
  "jamin": "Jamin",
  "daphne": "Daphne",
  "emerson": "Emerson",
  "owen": "Owen"
};

//const spellcheck = spellcheckf(spellcheckJson)

function smallSpellcheck(s) {
    const r = /\b(?:i'?m|i|u|r|h|y)\b|[a-zA-Z]\w+(?:\'\w+)?/g;
    const ref = spellcheckJson;
    return s.replace(r, (x) => {
        if (x in ref) {
            return ref[x]
        }
        if (x.endsWith('s') && x.length > 3 && x.slice(0, -1) in ref) {
            return ref[x.slice(0, -1)] + 's'
        }

        if (isCapitalized(x) && ref[x.toLowerCase()]) {
            return capitalize(ref[x.toLowerCase()])
        }
        return x
    })
}
const spellcheck = smallSpellcheck;

const MATH_IGNORE_WORDS = ['equals', 'to', 'means', 'as', 'is'];
const QUESTION_WORDS = [
    'want',
    'istaw',
    'would',
    'are',
    'can',
    'for',
    'will',
    'which',
    'whose',
    'shud',
    'who',
    'what',
    'where',
    'when',
    'why',
    'how',
    'should',
    'could',
    'do',
    'is',
    'have',
    'has',
    'does',
    'are',
    'might',
    'would',
    'can',
    'for',
    'will',
    'which',
    'whose',
    'shud',
    'who',
    'what',
    'where',
    'when',
    'why',
    'how',
    'should',
    'could',
    'do',
    'is',
    'have',
    'has',
    'does',
    'are',
    'might',
];

function isQuestion(s) {
    return QUESTION_WORDS.includes(getFirstWord(s.toLowerCase()))
}
function segmentedAddQuestionMarkOrPeriod(s, first) {
    if (MATH_IGNORE_WORDS.includes(getLastWord(s))) {
        return s
    }
    if (endsWithWord(s) || /(?:\$\w*|\)) *$/.test(s)) {
        s += isQuestion(first) ? '?' : '.';
    }
    return s
}

function emojiParser(s) {
    return nojiAliases[s]
}

function linkParser([value, url]) {
    const href = fixUrl(globals.urls[url] || url);
    return {
        href,
        value,
    }
}
const parserItems = [
    { name: "tilda"},
    { name: "bold"},
    { name: "emoji", parser: emojiParser },
    { name: "link", parser: linkParser },
    { name: "math" },
    { name: "default", parser: spellcheck },
];

function wrapFn(items) {

    const tags = {
        'bold': 'em',
        'emoji': 'span',
        'link': 'a',
        'default': 'span',
    };
    const components = {
        'math': 'VInlineMath',
    };
    const classes = {
        'default': 'prose',
    };

    fixCaps(items);
    const children = items.map(({type, value}) => {
        const tag = tags[type];
        const component = components[type];
        const payload = {};
        if (tag) payload.tag = tag;
        if (component) payload.component = component;
        payload.value = value;
        payload.class = classes[type] || type;
        return payload
    });

    if (children.length == 1) {
        if (children[0].class == 'prose') {
            return { tag: 'p', value: children[0].value }
        } else {
            return children[0]
        }
    }

    return {
        class: 'mixed-markdown-line',
        tag: 'p',
        children: children,
    }
}

//function markdownLeafParser(s) {
    //const ref = {
        //b: 'bold'
    //}
    //const r = /^(h[1-6]|b(?:old)?) /
    //const [text, m] = mget(r, s)
    //const p = _markdownLeafParser(text)
    //if (m) {
        //cumulativeSchemaAssign(p, {class: ref[m] || m}, {class: 'merge'})
    //}
    //return p
//}

//const _markdownLeafParser = createSplitParser(parserItems, wrapFn)
const markdownLeafParser = createSplitParser(parserItems, wrapFn);

function fixCaps(items) {
    if (items[0].type == 'default') {
        items[0].value = capitalize(items[0].value);
    }

    const lastIndex = items.length - 1;
    if (items[lastIndex].type == 'default') {
        items[lastIndex].value = segmentedAddQuestionMarkOrPeriod(items[lastIndex].value, items[0].value);
    }
}
//console.log(markdownLeafParser(s))

function borderVertical(...args) {
    return borderTop(...args).concat(borderBottom(...args))
}

function borderHorizontal(...args) {
    return borderLeft(...args).concat(borderRight(...args))
}

function borderRight(...args) {
    return cssBorder("borderRight", ...args)
}

function borderLeft(...args) {
    return cssBorder("borderLeft", ...args)
}

function borderTop(...args) {
    return cssBorder("borderTop", ...args)
}

function borderBottom(...args) {
    return cssBorder("borderBottom", ...args)
}

function border(...args) {
    return cssBorder("border", ...args)
}

function grid(...args) {
    const { store, size } = cssGrid(args.shift());
    const gridTemplateAreas = store
        .map((x) => singleQuote(x.join(" ")))
        .join(" ");

    const gridTemplateColumns = exists$1(args)
        ? args.join(" ")
        : `repeat(${size}, 1fr)`;

    const css = {
        gridTemplateAreas,
        gridTemplateColumns,
        gridAutoRows: "min-max(100px, auto)",
        display: "grid"
    };
    return css
}


function box(n) {
    return [
        ['width', n],
        ['height', n],
    ]
}

function content(x) {
    const ref = {
        leftQuote: "\\201C",
        colon: "\\003A",
        comma: "\\002C",
        rightQuote: "\\201D"
    };
    const content = ref[x] || x;
    return {
        content
    }
}


function positionByPercents(left, top) {
    left = String(left);
    if (top == null && left.length == 4) {
        top = left.slice(2, 4);
        left = left.slice(0, 2);
    }
    return [
        ['left', left ? left + '%' : null],
        ['top', top ? top + '%' : null],
    ]
}


function positionByPoints(left, top) {
    return [
        ['left', left],
        ['top', top],
    ]
}

function sandwich(...args) {
    const [color, width] = argMatch(args, String, Number);
    return [
        ['border-bottom-width', width],
        ['border-bottom-color', color],
        ['border-top-width', width],
        ['border-top-color', color],
    ]
}

function cssBorder(key, ...args) {
    const [color, strokeWidth] = argMatch(args, String, Number);
    return [
        [key + 'Color', color],
        [key + 'Width', strokeWidth || 1],
        [key + 'Style', 'solid']
    ]
}

function cssGrid(arg) {
    
    const numbers = split(Number(arg));
    const lc = lcm(numbers);
    const keys = new Set();
    let count = 0;
    const items = numbers.map((n) => {
        const size = lc / n;
        const store = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < size; j++) {
                const key = n2char(count);
                keys.add(key);
                store.push(key);
            }
            count++;
        }
        return store
    });
    return {
        store: items,
        size: lc,
    }
}

function colorMatch(s) {
    const [colorKey, colorIndex] = parseColor(s);
    const complementIndex = 9 - colorIndex;
    return [
        ['background-color', getColor$1(colorKey, colorIndex)],
        ['color', getColor$1(colorKey, complementIndex)],
    ]
}

function fontWeight(s) {
    const ref = {
        'bold': 'bold',
        'bold': 'bold',
        'xlg': 'xlg',
        'thin': 'thin',
        'super': 'super',
    };
    return [
        ['font-weight', ref[s] || s]
    ]
}
function maxHeight(s) {
    return [
        ['overflow-y', 'scroll'],
        ['max-height', s],
    ]
}

function maxWidth(s) {
    return [
        ['overflow-x', 'scroll'],
        ['max-width', s],
    ]
}

var cssApps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  b: border,
  bb: borderBottom,
  bl: borderLeft,
  box: box,
  bt: borderTop,
  bx: borderHorizontal,
  by: borderVertical,
  cm: colorMatch,
  content: content,
  fw: fontWeight,
  g: grid,
  hmax: maxHeight,
  pos: positionByPercents,
  sw: sandwich,
  wmax: maxWidth,
  xy: positionByPoints
});

function cssParserOnError(e, a, b) {
    const message = `Most likely the error is an invalid store[key]`;
    throw new MyError(message, a, b)
}

function addUnitf(defaultUnit) {
    return function addUnit(s, unit) {
        return cssAddUnit(s, unit || defaultUnit)
    }
}

function cssAddUnit(s, unit) {
    return empty(s)
        ? ""
        : /\d$/.test(String(s))
        ? s + unit
        : s
}

class CSSParserBuilder {
    static options = {
        commentColors: true,
        defaultUnit: "pt"
    }

    constructor(items, cssApps, options) {
        this.store = {};
        this.aliases = {};
        this.options = merge2(
            CSSParserBuilder.options,
            options
        );

        this.items = items;
        map(cssApps, (alias, fn) => {
            this.items.push({
                alias,
                fn,
                type: "functional"
            });
        });
        //console.log(this.items.map((x) => x.alias))
    }

    build() {
        const wrapIt = this.options.wrapFunctionalParser;
        this.store;
        const addUnit = addUnitf(this.options.defaultUnit);
        const withComment = this.options.commentColors;
        new Watcher();

        function functionWrap(items) {
            strictMessengerAssert(items);
            return items.map((item) => {
                const [a, b] = item;
                if (/color$/i.test(a)) {
                    return [a, getColor(b)]
                }

                if (/^(?:padding|margin)|(?:width|height)$/i.test(a)) {
                    return [a, addUnit(b)]
                }
                return item
            })
        }

        const ref = {
            pmwh(item) {
                const keys = item.keys || [item.key];
                return function lambda(s, unit) {
                    const value = addUnit(s, unit);
                    return keys.map((key, i) => {
                        return [key, value]
                    })
                }
            },
            color(item) {
                const keys = item.keys || [item.key];
                return function lambda(s, unit) {
                    const value = getColor(s, withComment);
                    return keys.map((key, i) => {
                        return [key, value]
                    })
                }
            },
            unitless(item) {
                return function lambda(s) {
                    return [item.key, s]
                }
            },
            functional(item) {
                return wrapIt ? function lambda(...args) {
                    return functionWrap(item.fn(...args))
                } :  item.fn
            }
        };

        for (const item of this.items) {
            
            const alias = item.alias;
            assert(alias, 'item.alias is required');
            const make = ref[item.type];
            messengerAssert(make, item);
            const lambda = make(item);
            this.store[alias] = lambda;
        }
        return this
    }
    run(a, b, ...args) {
        this.store[a];
        const bargs = argParse(b).concat(args);
        try {
            if (this.store.hasOwnProperty(a)) {
                return this.store[a](...bargs)
            }
            else {
                return {
                    [a]: b
                }
            }
        } catch (e) {
            console.log(e.stack);
            cssParserOnError(e, a, b, ...args);
        }
    }
    static buildColonParser(options) {
        const css = new CSSParserBuilder(
            CSSAttributeItems,
            cssApps,
            options,
        );
        css.build();
        const f = exporter(css);
        f.self = css;
        return f
    }
}


const CSSAttributeItems = [
  {"key": "padding-left", "alias": "pl", "type": "pmwh"},
  {"key": "padding-right", "alias": "pr", "type": "pmwh"},
  {"key": "padding-top", "alias": "pt", "type": "pmwh"},
  {"key": "padding-bottom", "alias": "pb", "type": "pmwh"},
  {"key": "margin-top", "alias": "mt", "type": "pmwh"},
  {"key": "margin-right", "alias": "mr", "type": "pmwh"},
  {"key": "margin-bottom", "alias": "mb", "type": "pmwh"},
  {"key": "margin-left", "alias": "ml", "type": "pmwh"},
  {"key": "width", "alias": "w", "type": "pmwh"},
  {"key": "height", "alias": "h", "type": "pmwh"},
  {"key": "margin", "alias": "m", "type": "pmwh"},
  {"key": "padding", "alias": "p", "type": "pmwh"},
  {"key": "top", "alias": "t", "type": "pmwh"},
  {"key": "right", "alias": "r", "type": "pmwh"},
  {"key": "bottom", "alias": "b", "type": "pmwh"},
  {"key": "left", "alias": "l", "type": "pmwh"},
  {"key": "left", "alias": "x", "type": "pmwh"},
  {"key": "top", "alias": "y", "type": "pmwh"},
  {"key": "min-width", "alias": "minw", "type": "pmwh"},
  {"key": "max-width", "alias": "wmax", "type": "pmwh"},
  {"key": "max-height", "alias": "hmax", "type": "pmwh"},
  {"key": "border-radius", "alias": "br", "type": "pmwh"},
  {"key": "max-width", "alias": "maxw", "type": "pmwh"},
  {"key": "min-height", "alias": "minh", "type": "pmwh"},
  {"key": "max-height", "alias": "maxh", "type": "pmwh"},
  {"key": "border-width", "alias": "bw", "type": "pmwh"},
  {"key": "gap", "alias": "gap", "type": "pmwh"},
  {"key": "row-gap", "alias": "rgap", "type": "pmwh"},
  {"key": "column-gap", "alias": "cgap", "type": "pmwh"},
  {"key": "font-size", "alias": "fs", "type": "pmwh"},
  {"alias": "mx", "type": "pmwh", "keys": ["margin-left", "margin-right"]},
  {"alias": "mwh", "type": "pmwh", "keys": ["min-width", "min-height"]},
  {"alias": "px", "type": "pmwh", "keys": ["padding-left", "padding-right"]},
  {"alias": "my", "type": "pmwh", "keys": ["margin-top", "margin-bottom"]},
  {"alias": "py", "type": "pmwh", "keys": ["padding-top", "padding-bottom"]},
  {"alias": "wh", "type": "pmwh", "keys": ["width", "height"]},
  {"key": "background-color", "alias": "bg", "type": "color"},
  {"key": "border-color", "alias": "bc", "type": "color"},
  {"key": "outline-color", "alias": "oc", "type": "color"},
  {"key": "color", "alias": "fc", "type": "color"},
  {"key": "z-index", "alias": "zi", "type": "pmwh", "isUnitless": true},
  {"key": "line-height", "alias": "lh", "type": "pmwh", "isUnitless": true},
  {"key": "opacity", "alias": "o", "type": "pmwh", "isUnitless": true}
];
function getColor(s, comment) {
    if (s.startsWith('#')) return s
    const [color, index] = parseColor(s);
    const value = indexedMaterialColors[color][index];
    return comment
        ? `${value} /* ${color}-${index || 0} */`
        : value

    function parseColor(s) {
        const [a, b] = search3(/^([a-zA-Z]+)(\d*)/, s);
        const colorKey = shortMaterialColorAliases[a] || a;
        const colorIndex = !hasValue(b) ? 5 : Number(b) - 1;
        return [colorKey, colorIndex]
    }
}



const cssColon = CSSParserBuilder.buildColonParser({
    wrapFunctionalParser: true,
    defaultUnit: "px"
});

function inlineForParser(s) {
    if (hasSpaces(s)) {
        if (/^\(/.test(s) || !hasComma(s)) return s
        return replaceBefore(s, "in", (x) => parens(x))
    }
    if (/value$/i.test(s)) {
        return `(item, i) in ${s}`
    }
    const child = forIterationArg(s);
    return `${child} in ${s}`
}


function forIterationArg(s) {
    s = s.replace("computed", "");
    if (s.endsWith("s")) {
        return uncapitalize(backspace(s))
    }
    const match = (search$1(/children$/i, s) || "");
    const key = match.toLowerCase() || s;

    const forDict = {
        children: 'child',
        row: 'cell'
    };

    return forDict[key] || 'item'
}


function inlineParser(k, v) {
    const ref = {
        for: inlineForParser,
    };
    //console.log({k, v})
    return ref.hasOwnProperty(k) ? ref[k](v) : v
}

function setAttr(k, v) {
    const payload = mergeToObject(getStylePayload(k, v));
    if (payload) {
        this.assign({ style: payload });
    }
}
function htmlPreciseStartingTag(s) {
    let presets = {
        i: { tag: "i" },
        div: { tag: "div" }
    };
    const ignore = ["i", "slot", "p"];

    if (ignore.includes(s)) {
        return {
            tag: s
        }
    }
    if (s in presets) {
        return presets[s]
    }
    if (/^#/.test(s)) {
        return { tag: "div", id: s.slice(1) }
    }
    if (/^\./.test(s)) {
        return { tag: "div", class: s.slice(1) }
    }
    if (["header", "footer"].includes(s)) {
        return { tag: "div", class: s }
    }

    const zooper = {
        title: {
            tag: "h2",
            class: "title"
        },
        author: {
            tag: "h2",
            class: "title"
        }
    };
    if (s in zooper) {
        return zooper[s]
    }

    if (htmlTags.includes(s)) {
        return { tag: s }
    }
    if (
        /^(?:app-|v-|v\w{1,3}$|keep-alive|transition)/.test(
            s
        )
    ) {
        return { component: s }
    }
    return false
}
function startingTag(s) {
    let presets = {
        i: { tag: "i" },
        span: { tag: "span" },
        div: { tag: "div" }
    };
    const ignore = ["i", "slot"];

    if (ignore.includes(s)) {
        return {
            tag: s
        }
    }
    if (s in presets) {
        return presets[s]
    }
    if (/^#/.test(s)) {
        return { tag: "div", id: s.slice(1) }
    }
    if (/^\./.test(s)) {
        return { tag: "div", class: s.slice(1) }
    }
    if (["header", "footer"].includes(s)) {
        return { tag: "div", class: s }
    }

    const zooper = {
        title: {
            tag: "h2",
            class: "title"
        },
        author: {
            tag: "h2",
            class: "title"
        }
    };
    if (s in zooper) {
        return zooper[s]
    }

    if (htmlTags.includes(s)) {
        return { tag: s }
    }

    /* note:vueComponentRE 1689700251 */
    if (
        /^(?:app-|v-|v\w{1,3}$|keep-alive|transition)/.test(
            s
        )
    ) {
        return { component: s }
    }

    /* anything that is just one word will be taken here */
    const lastWord = getLastWord(s);
    switch (lastWord) {
        case 'button':
        case 'button':
        case 'button':
            return {tag: lastWord, class: s}
        default: return { tag: "div", class: s }
    }
}

function addTemplateWrapperToComponentChildren(node) {
    if (node.tag == "slot") {
        if (!node.attrs?.name) {
            node.assign({ attrs: { name: "default" } });
        }
        pop2(node, "style");
        return
    }
    if (node.component && node.computedSize) {
        const firstTag = node.children[0].tag;
        if (firstTag == "template") {
            return
        }

        if (firstTag == "slot") {
            // @documentation 1688396091
            return
        }
        const children = node.removeAllChildren();
        const payload = {
            tag: "template"
        };

        /* jank - fixing nested templates */
        if (node.component != "v-numbered") {
            payload.attrs = { "v-slot": "{item, index}" };
        }
        const container = node.appendChild(payload);
        container.appendChildren(children);
    }
}

const htmlLeafAttributeFunctions = {

    directive(k, v) {
        return {
            attrs: {
                [k]: v
            }
        }
    },
    event(a, b) {
        if (!b) b = onify(a, "on");
        if (b.startsWith('emit')) {
            return {attrs: { ["@" + a]: `$emit('${camelSlice(b)}', $event)` }}
        }
        return {
            attrs: { ["@" + a]: b }
        }
    },
    attr(a, b) {
        if (vmap.hasOwnProperty(a)) {
            b = inlineParser(a, b);
            a = vmap[a] || a;
        }
        return {
            attrs: {
                [a]: b
            }
        }
    },
    //doubleColonStyle,
    //doubleColonClass,
    doubleColon,
    colonCSS,
    prop(a, b) {
        if (!b) {
            const fastProps = {
                keydown: { "@keydown": "keydown" },
                keyup: { "@keyup": "keyup" },
                mouseover: { "@mouseover": "mouseover" },
                mouseleave: { "@mouseleave": "mouseleave" },
                done: { "@done": "onDone" }
            };
            if (a in fastProps) {
                return { attrs: fastProps[a] }
            }
            if (a.startsWith("on")) {
                return {
                    attrs: {
                        ["@" + a.slice(2).toLowerCase()]: a
                    }
                }
            }
            b = a;
        }
        return {
            attrs: {
                [":" + a]: b
            }
        }
    }
};

function onify(s, term) {
    s = s.replace(RegExp(term, "i"), "");
    return term + pascalCase(s)
}

function forItems(node, x, y) {
    function getName(x) {
        return /k *, *v/.test(x)
            ? "kv"
            : dashCase(getFirstWord(x))
    }
    const name = node.kwargs?.name || getName(x);
    const moreAttrs = node.kwargs || {};
    pop2(moreAttrs, "name");
    if (x.includes(",")) x = wrap(x, "()");
    const childClass = `${name}-item`;
    const parentClass = /container|list/i.test(name)
        ? name
        : `${name}-item-list`;
    const moreData = node.popAttrs();
    const childData = {
        tag: "div",
        class: childClass,
        attrs: {
            "v-for": `${x} in ${y}`
        }
    };
    cumulativeAssign(childData, moreData);

    const data = {
        tag: "div",
        class: parentClass,
        attrs: moreAttrs
    };

    const elements = node.removeAllChildren();
    const child = node.assign(data).appendChild(childData);
    child.appendChildren(elements);
    return true
}
function foogaGridContainer(s) {
    const args = split(s, " ");
    const numbers = split(args.shift());
    const lc = lcm(numbers);
    const keys = new Set();
    let count = 0;
    const items = numbers.map((n) => {
        const size = lc / n;
        const store = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < size; j++) {
                const key = n2char(count);
                keys.add(key);
                store.push(key);
            }
            count++;
        }
        return store
    });

    const gridTemplateAreas = items
        .map((x) => singleQuote(x.join(" ")))
        .join(" ");

    const gridTemplateColumns = exists(args)
        ? args.join(" ")
        : `repeat(${lc}, 1fr)`;

    const css = {
        gridTemplateAreas,
        gridTemplateColumns,
        gridAutoRows: "min-max(100px, auto)",
        display: "grid"
    };

    return {
        items,
        keys: Array.from(keys),
        css
    }
}
const singleItemRef = {
    instructions(node) {
        node.children.forEach((child, i) => {
            child.value = "p " + child.value;
        });
        node.assign({ class: "instructions" });
    },
    el() {
        const data = {
            value: "el" + Math.random(),
            class: "el"
        };
        return data
    }
};
const fastFormRef = {
    layout(node, s) {
        const { keys, items, css } = foogaGridContainer(s);
        //cab(css, 'rel w300')

        node.assign({ style: css, class: "grid-container" });

        /* @bookmark 1686422258 grid */
        if (node.size == 0) {
            for (let i in keys) {
                const color = myColors(i);
                node.appendChild({
                    style: {
                        "grid-area": keys[i],
                        background: color,
                        ...cab("center")
                    },
                    text: color
                });
            }
        } else if (node.size == keys.length) {
            node.children.forEach((child, i) => {
                const color = myColors(i);
                child.assign({
                    style: {
                        "grid-area": keys[i],
                        background: color,
                        ...cab("center")
                    }
                });
            });
        } else {
            throw new Error(
                "node.size doesnt equal grid-container size"
            )
        }
        //console.log(node.size, {s}, numbers)
    },

    button(s) {
        return {
            tag: "button",
            class: `fast-button ${s}`,
            attrs: {
                "@click": s
            },
            value: s
        }
    },
    ["button-icon"](s) {
        return {
            component: "v-button-icon",
            props: { value: s },
            value: ""
        }
        /* @bookmark 1686433209 bi */
    },
    author(s) {
        return {
            tag: "div",
            class: `${s}`,
            value: vueWrap(s)
        }
    },
    title(s) {
        return {
            tag: "div",
            class: `${s}`,
            value: vueWrap(s)
        }
    }
};
const htmlImplicitDirectionalRef = {
    label(node, children, source, key) {
        const ref = {
            horizontal: {
                parentClass: 'horizontal-label',
                left: 'left',
                right: 'right',
                tag: 'div',
            }, 
            vertical: {
                parentClass: 'vertical-label',
                left:'top',
                right: 'bottom',
                tag: 'div',
            },
        };

        const {tag, parentClass, left, right} = ref[source];

        node.assign({ class: parentClass, tag });
        children.forEach((item, i) => {
            const className = i == 0 ? left : right;
            const data = {
                text: maybeVueWrap(item),
                class: className,
            };
            node.appendChild(data);
        });
    }
};
function oxImplicits(node, s, y) {
    /* ^(i-\S+) ?(.*) */
    const isHorizontal = y && y.includes("|");
    const children = isHorizontal
        ? split(y, "|")
        : node.popChildValues();
    const source = isHorizontal ? "horizontal" : "vertical";
    const key = camelSlice(s);
    return htmlImplicitDirectionalRef[key](
        node,
        children,
        source,
        key
    )
}
const htmlOxFunctions = {
    /*******************************
     * 06-14-2023 documentation:
     * It is ...
     *
     *******************************/
    oxImplicits,
    singlePlurals(node, s) {
        /* ^\w+s$ */
        if (node.hasChildren()) ;
        node.assign({
            value: vueWrap(s),
            class: s
        });
    },
    fastVueWrap(node, s) {
        /* ^{(.*?)} *$ */
        //console.log({s})
        node.defaultAssign({
            value: vueWrap(s),
            class: s
        });
    },
    nodeElse,
    vueNodeLogic,
    for(node, s, x, y) {
        /* ^for (\S+$|(.*?) +in +(.+)) */

        return forItems(node, x, y)
    },

    exclam(node, s) {
        /* ^(\w+)! *$ */

        let word = "";
        try {
            word =
                getFirstWord(node.parent.attrs["v-for"]) +
                ".";
        } catch (e) {
            console.log(e.toString(), { s });
        }

        word += s;
        const data = {
            tag: "div",
            value: vueWrap(word),
            class: dashCase(s)
        };
        node.assign(data);
    },
    transition(node) {
        /* ^transition */

        const data = {
            tag: "transition",
            attrs: {
                mode: "out-in",
                name: "fade"
            }
        };
        node.assign(data);
    },
    atHandler,
    singleItem(node, a) {
        /* ^(?:el|\w+Items|instructions) *$*/

        const { fn, params } = functionObjectGetter(
            singleItemRef,
            a
        );
        if (fn) {
            params.includes("node")
                ? fn(node, a)
                : node.assign(fn(a));
        } else if (/items$/i.test(a)) {
            const newNode = node.create({
                class: dashCase(a)
            });

            node.parent.replaceChild(
                node,
                newNode,
                true /* assign */
            );
            const grandChild = newNode.appendChild({
                class: dashCase(depluralize(a)),
                attrs: {
                    "v-for": vfor(a)
                }
            });
            grandChild.children = node.children;
        } else ;
    },

    fastForm(node, a, b) {
        /* ^(layout|author|title|button-icon|grid-container|button) (\w+) *$ */

        const aliases = {
            "grid-container": "layout"
        };

        const { fn, params } = functionObjectGetter(
            fastFormRef,
            a,
            aliases
        );
        params.includes("node")
            ? fn(node, b)
            : node.assign(fn(b));
    }
};

const htmlElementAttributeFunctions = {
    class(s) {
        return { class: s }
    },
};

function switchAction(node) {
    const action = (node) => {
        const switchValue = search$1(
            /switch (\S+)/,
            node.value
        );
        const newNodes = node.children.map((child, i) => {
            const prefix = i == 0 ? "v-if" : "v-else-if";
            const m = search$1(/case (\S+)/, child.value);
            const arg = isNumber(m) ? m : `'${m}'`;
            child.value = "";
            if (!child.attrs) child.attrs = {};
            child.attrs[prefix] = `${switchValue} == ${arg}`;
            child.tag = "template";
            return child
            //return edit2(child, 'value', (s) => f(s, i, switchValue))
        });
        node.replaceSelf(newNodes);
    };
    const nodes = node.selectAll(/switch/);
    nodes.forEach(action);
}

const atRef = {
    rainbow(node, { scheme = "husky" } = {}) {
        const colorSchema = colorSchemas[scheme];
        node.children.forEach((child, i) => {
            const { background, color } = colorSchema[i];
            child.assign({ style: { background, color } });
        });
    },
    delete(node) {
        node.nextSibling.delete123();
        node.delete123();
    },
    numbered(node) {
        node.assign({ tag: "ol" });
        node.children.forEach((child, i) => {
            child.assign({
                overrideTag: "li",
                text: child.value
            });
        });
    },
    bulleted(node) {
        node.assign({ tag: "ul" });
        node.children.forEach((child, i) => {
            child.assign({
                overrideTag: "li",
                text: child.value
            });
        });
    },
    graph(node) {
        node.assign({ class: "graph", value: "" });
    }
};
function atHandler(node, key, s) {
    /* ^@(\w+)(?:\( *(.*?)\)|( .+))? */

    if (key in this.atRef) {
        return this.atRef[key].call(
            this,
            node,
            getKwargs(s)
        )
    }
    const modes = ["numberedList", "grid", "float"];

    if (modes.includes(key)) {
        node.value = s ? s.trim() : "";
        gloaters[key](node);
        return
    }
    throw new Error("ndy")
}

function quoteTheColor(s) {
    return s.replace(/(\S+) *: *(\S+)/, (_, a, b) => {
        if (!isNumber(a)) a = singleQuote(a);
        if (!isNumber(b)) b = singleQuote(b);
        return `${a} : ${b}`
    })
}
function colonCSS(a, b) {
    if (b.includes("?")) {
        if (a == "color" || a == "background") {
            return {
                computedStyle: {
                    [a]: quoteTheColor(b)
                }
            }
        }
        //:style="{color: "
        //color:item.name == activeElement ? selected : unselected

        const f = (s) => {
            return s.replace(
                /(\S+) +: +(\S+)/,
                (_, a, b) => {
                    return `'${a}' : '${b}'`
                }
            )
        };
        return { attrs: { [":" + a]: f(b) } }
    }
    if (a == "directive") {
        const [a1, b1] = splitOnce(b, '=');
        return { 
            attrs: {
                [a1]: b1
            }
        }
    }

    if (a == "class") {
        return { class: b }
    }
    if (a in vmap) {
        return { attrs: { [vmap[a]]: b } }
    }
    if (a == "css") {
        return { style: cab(b) }
    }
    try {
        return { style: cssColon(a, b) }
    } catch (e) {
        console.log("ERRORRRRRRRR", { a, b });
        throw e
    }
}

function doubleColon(a, b) {
    let [c, d] = splitOnce(b);
    if (c.includes(":")) {
        return doubleColonClass(b)
    }
    return doubleColonStyle(a, c, d)
}
function doubleColonClass(s) {
    const r = /(\S*?):/;
    const items = partition(split(s, r));
    return {
        computedClass: items
    }
}
function doubleColonStyle(cssKey, switchTarget, s) {
    const items = findall(/(\w+):(\w+)/g, s);
    return {
        computedStyle: {
            [cssKey]: {
                target: switchTarget,
                items
            }
        }
    }
}
function presetMarkdownHandler(node, tag, s) {
    /* ^(h[1-6]|p|div|span) (.+) */
    const classRE = /^ *(\.[\w-]+(?: *\.[\w-]+)*)/;
    let [text, className] = mget(classRE, s);
    className = className.trim().replace(/\./g, "");
    node.assign({
        tag,
        value: text.trim(),
        class: className
    });
}

function floatAction(node) {
    const action = (floatNode) => {
        const key = floatNode.float;
        if (isNumber(key)) {
            for (let i = 0; i < key; i++) {
                let child = floatNode.nextSibling;
                while (child.spacer) {
                    child = child.nextSibling;
                }
                floatNode.parent.removeChild(child);
                floatNode.appendChild(child);
            }
        }
        return floaters[key](floatNode)
    };
    const floatNodes = node.selectAll("float");
    floatNodes.forEach(action);
}

const mdBracketRef = {
    graph(node) {
        node.assign({ class: "graph" });
        //node.value = 'hi'
    },

    boo(node, { asdf = null, foo = 1 } = {}) {
        node.assign({ class: foo });
    },

    html(node, { scoped = false } = {}) {
        return node.assign({
            component: "v-html-container"
        })
    },
    d3(node, kwargs) {
        return node.assign({ component: "v-d3-container" })
    },

    dialogue(node, { speakers = [] } = {}) {
        const dialogueItems = dialogueParser(
            node.value,
            speakers
        );
        const children = dialogueItems.map(
            ({ content, speaker }) => {
                const container = new StateContext({
                    class: "dialogue-item"
                });
                container.appendChild({
                    class: "dialogue-left",
                    value: speaker
                    //component: 'VSpeaker', value: speaker
                });
                const node = inlineMarkdownBuilder(content);
                if (node.class == "root") {
                    node.class = "dialogue-right";
                    container.appendChild(node);
                } else {
                    container
                        .appendChild({
                            class: "dialogue-right"
                        })
                        .appendChild(node);
                }
                return container
            }
        );

        node.appendChildren(children);
        node.assign({ class: "dialogue" });
    }
};

const markdownEatFunctions = {
    tag(s) {
        /* (h[1-6]|bold|code) */
        return {
            class: s
        }
    }
};

function modeHandler(rootNode) {
    rootNode
        .selectAll((x) => x.mode)
        .map((node) => {
            gloaters[node.mode](node);
        });
}

const gloaters = {
    float(node) {
        const arg = node.value || "split";
        node.value = "";
        floaters[arg](node);
    },
    numberedList(node) {
        if (node.value) {
            const children = node.removeAllChildren();
            const data = node.__json__();
            const top = node.create("ol-container");
            top.appendChild(data);
            top.appendChild(container);
            const container = node.create("list-container");
            container.children = children;
            node.replaceSelf(top);
        } else {
            node.class = "ol-container";
            node.children.forEach((child, i) => {
                child.wrapWith("li");
            });
        }
    }
};
const floaters = {
    list(floatNode) {
        let node = floatNode;
        let store = [];
        let className = "float-list";
        while ((node = node.nextSibling)) {
            store.push(node);
        }
        floatNode.parent.removeChildren(store);
        floatNode.appendChildren(store);
        floatNode.assign({ class: className });
    },
    dunno(floatNode) {
        let prev = floatNode.prevSibling;
        while (prev.spacer) {
            prev = prev.prevSibling;
        }

        let next = floatNode.nextSibling;
        while (next.spacer) {
            next = next.nextSibling;
        }
        floatNode.parent.removeChild(prev);
        floatNode.parent.removeChild(next);

        floatNode.appendChild(prev);
        floatNode.appendChild(next);
    },
    splitAll(floatNode) {
        const newNode = floatNode.parent;
        const children = floatNode.parent.children;
        const [a, b] = splitArray(children, floatNode);
        newNode.children = [];

        const c1 = newNode.appendChild(container("left"));
        const c2 = newNode.appendChild(container("right"));
        c1.appendChildren(a);
        c2.appendChildren(b);
    },
    ["+"](floatNode) {
        const parent = floatNode.parent;
        const children = parent.children;
        children.length;
        const store = [];
        let child = floatNode.nextSibling;
        while (child.spacer) {
            child = child.nextSibling;
        }
        while (true) {
            store.push(child);
            child = child.nextSibling;
            if (!child || child.spacer) {
                break
            }
        }

        const payload = container("float-plus");
        const c = parent.replaceChild(floatNode, payload);
        parent.removeChildren(store);
        c.appendChildren(store);
    },

    split(floatNode) {
        const parent = floatNode.parent;
        const children = parent.children;
        const length = children.length;
        const before = [];
        const after = [];
        const removals = [];
        let a = findIndex2(children, floatNode);
        let i = a;
        let touchedElement;
        while (i > 0) {
            i--;
            let prevNode = children[i];
            removals.push(prevNode);
            if (prevNode.spacer) {
                if (touchedElement) {
                    break
                } else {
                    continue
                }
            } else {
                touchedElement = true;
                before.unshift(prevNode);
            }
        }

        i = a;
        touchedElement = null;
        while (i < length - 1) {
            i++;
            let nextNode = children[i];
            removals.push(nextNode);
            if (nextNode.spacer) {
                if (touchedElement) {
                    break
                } else {
                    continue
                }
            } else {
                touchedElement = true;
                after.push(nextNode);
            }
        }

        const c = classify("float-container");
        const c0 = parent.insertChildBefore(floatNode, c);
        const c1 = c0.appendChild(classify("float-left"));
        const c2 = c0.appendChild(classify("float-right"));

        parent.removeChild(floatNode);
        removals.forEach((node, i) => {
            parent.removeChild(node);
        });

        c1.appendChildren(before);
        c2.appendChildren(after);
    }
};
function classify(name) {
    return { class: name }
}

function inlineMarkdownBuilder(b) {
    let nodeA = markdownEssayBuilder(b, false);
    if (nodeA.children.length == 1) {
        nodeA = nodeA.children[0];
    }

    return nodeA
}
//console.log(htmlBuilder(str1684177914))
function nodeIterator(fn) {
    return function nodeIterator(node) {
        node.iterate(fn);
    }
}

//} from "./pl-create.js"

function pipeHandler(node, s) {
    /* (.*? \| \S.+) */
    /* ^(.*?) \| (\S.+) */
    const children = split(s, /\|/).map(
        inlineMarkdownBuilder
    );
    //let nodeA = inlineMarkdownBuilder(a)
    //let nodeB = inlineMarkdownBuilder(b)
    //node.appendChildren([nodeA, nodeB])
    node.appendChildren(children);
    node.assign({ class: "pipe-float" });
    node.done = true;
}

function containerHandler(node, prefix, s) {
    /* ^(?:(\w+)-)?container(.*) */

    //const [arg, args, kwargs] = argArgsKwargs(s)
    //console.log({arg, args, kwargs, prefix})
    //args.unshift('container')

    const ref = {
        md: "p",
        code: "pre"
    };
    const className = prefix
        ? `${prefix}-container`
        : "container";
    const tag = ref[prefix] || "div";
    node.assign({
        tag: tag,
        class: className
    });
}

function vfor(s) {
    return `(item,i) in ${s}`
}
function functionObjectGetter(ref, key, aliases = {}) {
    const fn = ref[aliases[key] || key];
    return fn ? { fn, params: getParameters2(fn) } : {}
}

function vueNodeLogic(node, prefix, s) {
    /* ^(if|elif) (.*) */
    const key = vmap[prefix];
    const value = / \w+$/.test(s)
        ? s.replace(/\w+$/, singleQuote)
        : s;
    node.assign({
        tag: "template",
        attrs: { [key]: value }
    });
}

function nodeElse(node) {
    /* ^else$ */
    node.assign({
        tag: "template",
        attrs: { "v-else": "" }
    });
}
//console.log(prettyStringify(vueErrorMarkdownBuilder(str1687523612, {child: 'aaa'}).toString()))
//console.log(prettyStringify(vueErrorMarkdownBuilder(str1687523612).toPrettyJSON()))

function mdBracketHandler(node) {
    const { key, kwargs } = node;
    if (mdBracketRef.hasOwnProperty(key)) {
        mdBracketRef[key](node, kwargs);
        node.assign({ class: "" });
    } else {
        node.assign({ class: key });
    }
}

function htmlTokenParser(s) {
    const A = s[0];
    const B = s[1];
    if (A + B == "</") {
        return true
        /* skips */
    }
    if (A != "<") {
        return
    }

    let tag, attrs, text
    ;[s, tag] = mget(/^<(\w+)/, s)
    ;[s, attrs] = mget(/(.*?)>/, s);
    attrs = dict(
        partition(findall(/([\w-]+)="(.*?)"/, attrs || ""))
    );
    if (s) {
        text = search$1(/(.*?)</, s);
    }
    return {
        tag,
        attrs,
        text
    }
}

function htmlOnReturn(node, arg) {
    if (isObject(arg)) {
        arg = arg.name || arg.class; /* see docs.vueBindings */
    }
    if (
        (node.class == "root" || !node.class) &&
        isString(arg)
    ) {
        node.class = arg;
    }
    return node.toString(xmlString)
}

function htmlMounted(arg) {
    if (arg?.vueBindings) {
        this.state.vueBindings = arg.vueBindings;
    }
}

function htmlElementEnd(s, bleState) {
    if (/^\w+$/.test(s) && bleState.state?.vueBindings) {
        if (bleState.state.vueBindings.includes(s)) {
            return vueWrap(s)
        }
        return s
    }

    if (/^(?:\w+(?:\.\w+)+|item|value)$/.test(s)) {
        return vueWrap(s)
    }
    return maybeVueWrap(s)
}

function isHTML2(s) {
    return /^\s*<\w/.test(s)
}

function tripleSinglePostParse(s) {
    function f(s) {
        return s.replace(/\n/, "\\n")
    }
    const [a, b] = s.split(/'''/);
    const newValue = f(smartDedent2(b));
    console.log({ newValue });
    return {
        component: a.trim(),
        attrs: {
            value: newValue
        },
        value: ""
    }
}
function atNamedPostParse(s) {
    const [value, lang] = mget(/@(\w+)/, s);
    return { lang, value }
}
const baseGetBlockPostParseRef = {
    atNamed: atNamedPostParse,
    tripleSingle: tripleSinglePostParse
};
const htmlSpec = {
    getBlockPostParseRef: baseGetBlockPostParseRef,
    options: {
        //debug: 'blocks',
        argSchema: Object,
        earlyReturn: isHTML2,
        earlyParse: htmlTokenParser
    },
    mounted: htmlMounted,
    onReturn: htmlOnReturn,
    ox: htmlOxFunctions,

    leafAttributes: htmlLeafAttributeFunctions,
    elementStart: startingTag,
    elementEat: merge2(
        htmlElementAttributeFunctions,
        htmlLeafAttributeFunctions
    ),
    elementEnd: htmlElementEnd,
    onStart: switchAction,
    onEnd: nodeIterator(
        addTemplateWrapperToComponentChildren
    ),
    atRef: atRef
};
function bulletHandler(node, s) {
    /* ^- *(.+) */
    node.assign({ text: s, tag: "li" });
    node.parent.afterAction = parentBulletAggregator;
}
function parentBulletAggregator(node) {
    /*
     * It only seems to work as a top level item
     * When it is nested another layer deep, it stops working
     * */

    let container;
    node.children.forEach((current, i) => {
        if (current.tag == "li") {
            if (!container) {
                const options = {
                    tag: "ul"
                };
                container = node.insertChildAtIndex(
                    i,
                    options
                );
                /* the new version */
            }
            container.appendChild(current);
            node.markChildForDeletion(current);
        } else {
            container = null;
        }
    });
}
const mdSpec = {
    getBlockPostParseRef: baseGetBlockPostParseRef,
    leafAttributes: {
        colonCSS
    },
    ox: {
        10: oxImplicits,
        20: pipeHandler,
        25: bulletHandler,
        30: containerHandler,
        40: presetMarkdownHandler,
        50: atHandler
    },
    elementEarlyParse: {
        startFn: htmlPreciseStartingTag,
        eatFunctions: merge2(
            htmlElementAttributeFunctions,
            htmlLeafAttributeFunctions
        ),
        endFn: htmlElementEnd
    },
    elementEat: markdownEatFunctions,
    elementEnd: markdownLeafParser,
    onEnd: [floatAction, modeHandler],
    options: {
        getAdditionalOptionsFromString: true,
        earlyParse: htmlTokenParser,
        getBlocks: "default",
        trackNewLines: true,
        splitRE: /(\n+)/,
        argSchema: Object
        //earlyReturn: isHTML,
    },
    typedHandlers: {
        bracket: mdBracketHandler
    },
    methods: {
        onNewline(context, value) {
            context.assign({ spacerValue: value });
        }
    },
    mounted() {
        mixin(StateContext, "set", setAttr);
        /* define mixins explicitly */
    }
};


function maybeVueWrap(s) {
    return s.replace(/{+(\w.*?)}+/g, (_, s) => vueWrap(s))
}

const markdownEssayBuilder = buildParser3(mdSpec);
//console.log(htmlTokenParser('<p class="asdfasdf">hi asfd asdf</p>'))
const htmlBuilder = buildParser3(htmlSpec);

//console.log(markdownBuilder(str1684253818))
//console.sandwich(markdownEssayBuilder(str1687541594))
//console.log(htmlBuilder(str1689867098))
//console.sandwich(htmlBuilder(str1687541594))
const str1689867098a = `
    
    .v-grid :style = computedStyle.parent
        .v-grid-item :style = computedStyle.child for = value 
            slot :item = item :index = i 
e


        container
            p for = sentence in computedValue 
                span for = sentence :class = item.class {item.value}

        v-btn icon = close
e
        v-keypress-instruction '''

            Press Enter to add the word to the help list
            Press Space to skip the word
            
        howdy    
        e

        span class = material-icons {value}
            click:onClick
            ref:main
            e

        v-icon :value = icon @click @mouseover @mouseout
        e

    i-label Tree Elements | {treeLength}
e

        span .material-icons {value}
            click:onClick
            ref:main
            cursor:pointer
            directive:v-cardinal-position.southeast = 'main'
e

        v-base-list value = loremList name = alphabet
            p {item, index}
            e

        table-of-contents
            v-base-list :value = buffers name = buffers
                div @click = open(item) {item}
e

            v-base-list :value = keymapCommands name = keymapCommands
                p item.key
                p item.key
e

        button toggle keyCommand
            click = "showKeymapCommands = !showKeymapCommands"
        if showKeymapCommands
            v-base-list :value = keymapCommands name = keymapCommands
                button click = item.fn {item.key}

        div ref = codemirror
        e
        foo-button ab
e

            show = active

            type {computedType}
            p {message}
e


        transition name = fade
            message :style = computedStyle {message} 
                show:message
e

            bg:g3
            p {label}
                bg:y1
            p {type}
                bg:b1
e

        keymap-commands
            mouseover = "showKeymapCommands = true"
            mouseout = "showKeymapCommands = false"
e

        p ref = asdf hi
        if internalValue
            v-html :value = internalValue
            input ref = input
e

            v-html :value = internalValue
            v-input ref = input @enter = emitEvent
e

        container show = internalValue
            p ref = asdf hi
            v-input ref = input @enter = emitEvent
            v-html :value = internalValue
e

        v-base-list :value = files
            container
                name = haa
                v-color.green = index == activeFileIndex
e

    .v-tree
        v-tree-node :value = computedTree if = computedTree
            template v-slot = {item}
                slot :item = item
                    v-pre :value = item.main
                        padding-left:5
`
//console.sandwich(htmlBuilder(str1689867098a))


const raw_vuejs2 = `

    VAbc 
        p hi
        v-def

    VDef
        p hi
        v-sayhi
`
const vuejs2 = splitter(raw_vuejs2)
console.log(vuejs2)


function splitter(s) {
    const text = smartDedent(s)
    const raw = text.split(/(^V\w+ *$)/m)
    raw.shift()
    const items = partition(raw)
    return reduceToString(items, (k, v) => {
        const t = `
            const $1 = {
                name: "$1",
                template: \`
                    $2
                \`,
            }
        `
        return templater(smartDedent(t), [k, v])
    })
}

console.log(typeof true)
