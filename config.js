var config = {
    style: 'mapbox://styles/ead2200/cl1ee21g6001r14mt3c01jl56',
    accessToken: 'pk.eyJ1IjoiZWFkMjIwMCIsImEiOiJja3M2ZTIzcmIwOTg5MndwNXM5ODZ5d2J3In0.LQXO-PEblZkmvFSlZpSS1w',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'right',
            title: 'MINING',
            image: './images/Mining-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 0 },
                {layer: 'Shipping and Trade copy', opacity:0 },
                {layer: 'Shipping and Trade', opacity:0 },
                {layer: 'Agriculture copy', opacity:0 },
                {layer: 'Agriculture', opacity:0 },
                {layer: 'Manufacturing copy', opacity:0 },
                {layer: 'Manufacturing', opacity:0 },
                {layer: 'Mining copy', opacity:0 },
                {layer: 'Mining', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            title: 'MANUFACTURING',
            image: './images/Manufacturing-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 0 },
                {layer: 'Shipping and Trade copy', opacity:0 },
                {layer: 'Shipping and Trade', opacity:0 },
                {layer: 'Agriculture copy', opacity:0 },
                {layer: 'Agriculture', opacity:0 },
                {layer: 'Manufacturing copy', opacity:0 },
                {layer: 'Manufacturing', opacity:1 },
                {layer: 'Mining copy', opacity:1 },
                {layer: 'Mining', opacity:0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'AGRICULTURE',
            image: './images/Agriculture-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 0 },
                {layer: 'Shipping and Trade copy', opacity:0 },
                {layer: 'Shipping and Trade', opacity:0 },
                {layer: 'Agriculture copy', opacity:0 },
                {layer: 'Agriculture', opacity:1 },
                {layer: 'Manufacturing copy', opacity:1 },
                {layer: 'Manufacturing', opacity:0 },
                {layer: 'Mining copy', opacity:1 },
                {layer: 'Mining', opacity:0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4',
            alignment: 'right',
            title: 'SHIPPING & TRADE',
            image: './images/Trades-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 0 },
                {layer: 'Shipping and Trade copy', opacity:0 },
                {layer: 'Shipping and Trade', opacity:1 },
                {layer: 'Agriculture copy', opacity:1 },
                {layer: 'Agriculture', opacity:0 },
                {layer: 'Manufacturing copy', opacity:1 },
                {layer: 'Manufacturing', opacity:0 },
                {layer: 'Mining copy', opacity:1 },
                {layer: 'Mining', opacity:0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter5',
            alignment: 'right',
            title: 'TOURISM',
            image: './images/Tourism-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 1 },
                {layer: 'Shipping and Trade copy', opacity:1 },
                {layer: 'Shipping and Trade', opacity:0 },
                {layer: 'Agriculture copy', opacity:1 },
                {layer: 'Agriculture', opacity:0 },
                {layer: 'Manufacturing copy', opacity:1 },
                {layer: 'Manufacturing', opacity:0 },
                {layer: 'Mining copy', opacity:1 },
                {layer: 'Mining', opacity:0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter6',
            alignment: 'right',
            title: 'ALL INDUSTRIES',
            image: './images/All-01.jpg',
            description: '',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'Tourism copy', opacity: 0 },
                {layer: 'Tourism', opacity: 1 },
                {layer: 'Shipping and Trade copy', opacity:0 },
                {layer: 'Shipping and Trade', opacity:1 },
                {layer: 'Agriculture copy', opacity:0 },
                {layer: 'Agriculture', opacity:1 },
                {layer: 'Manufacturing copy', opacity:0 },
                {layer: 'Manufacturing', opacity:1 },
                {layer: 'Mining copy', opacity:0 },
                {layer: 'Mining', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        }
    ]
};
