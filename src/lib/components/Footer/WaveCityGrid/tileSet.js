export const TILE_SET = [
    // BLANK TILE
    {
        name: 'BLANK',
        image: {
            paths: ['tile-blank.webp'],
            rotation: [0, 90, 180, 270]
        },
        top: {
            connection: false
        },
        right: {
            connection: false
        },
        bottom: {
            connection: false
        },
        left: {
            connection: false
        }
    },
    // CROSS TILE
    {
        name: 'CROSS',
        image: {
            paths: ['tile-crossroad.webp'],
            rotation: [0, 90, 180, 270]
        },
        top: {
            connection: true
        },
        right: {
            connection: true
        },
        bottom: {
            connection: true
        },
        left: {
            connection: true
        }
    },
    // HORIZONTAL LINE TILE
    {
        name: 'HORIZONTAL LINE',
        image: {
            paths: ['tile-straight.webp'],
            rotation: [0, 180]
        },
        top: {
            connection: false
        },
        right: {
            connection: true
        },
        bottom: {
            connection: false
        },
        left: {
            connection: true
        }
    },
    // VERTICAL LINE TILE
    {
        name: 'VERTICAL LINE',
        image: {
            paths: ['tile-straight.webp'],
            rotation: [90, 270]
        },
        top: {
            connection: true
        },
        right: {
            connection: false
        },
        bottom: {
            connection: true
        },
        left: {
            connection: false
        }
    },
    // LEFT T TILE
    {
        name: 'LEFT T',
        image: {
            paths: ['tile-tjunction.webp'],
            rotation: [0]
        },
        top: {
            connection: true
        },
        right: {
            connection: false
        },
        bottom: {
            connection: true
        },
        left: {
            connection: true
        }
    },
    // RIGHT T TILE
    {
        name: 'RIGHT T',
        image: {
            paths: ['tile-tjunction.webp'],
            rotation: [180]
        },
        top: {
            connection: true
        },
        right: {
            connection: true
        },
        bottom: {
            connection: true
        },
        left: {
            connection: false
        }
    },
    // TOP T TILE
    {
        name: 'TOP T',
        image: {
            paths: ['tile-tjunction.webp'],
            rotation: [90]
        },
        top: {
            connection: true
        },
        right: {
            connection: true
        },
        bottom: {
            connection: false
        },
        left: {
            connection: true
        }
    },
    // BoTTOM T TILE
    {
        name: 'BOTTOM T',
        image: {
            paths: ['tile-tjunction.webp'],
            rotation: [270]
        },
        top: {
            connection: false
        },
        right: {
            connection: true
        },
        bottom: {
            connection: true
        },
        left: {
            connection: true
        }
    },
    // TOP RIGHT L TILE
    {
        name: 'TOP RIGHT L',
        image: {
            paths: ['tile-curve.webp'],
            rotation: [180]
        },
        top: {
            connection: true
        },
        right: {
            connection: true
        },
        bottom: {
            connection: false
        },
        left: {
            connection: false
        }
    },
    // BOTTOM LEFT L TILE
    {
        name: 'BOTTOM LEFT L',
        image: {
            paths: ['tile-curve.webp'],
            rotation: [0]
        },
        top: {
            connection: false
        },
        right: {
            connection: false
        },
        bottom: {
            connection: true
        },
        left: {
            connection: true
        }
    },
    // TOP LEFT L TILE
    {
        name: 'TOP LEFT L',
        image: {
            paths: ['tile-curve.webp'],
            rotation: [90]
        },
        top: {
            connection: true
        },
        right: {
            connection: false
        },
        bottom: {
            connection: false
        },
        left: {
            connection: true
        }
    },
    // BOTTOM RIGHT L TILE
    {
        name: 'BOTTOM RIGHT L',
        image: {
            paths: ['tile-curve.webp'],
            rotation: [270]
        },
        top: {
            connection: false
        },
        right: {
            connection: true
        },
        bottom: {
            connection: true
        },
        left: {
            connection: false
        }
    },
    // TOP DEAD END TILE
    {
        name: 'TOP DEAD END',
        image: {
            paths: ['tile-deadend.webp'],
            rotation: [270]
        },
        top: {
            connection: false
        },
        right: {
            connection: false
        },
        bottom: {
            connection: true
        },
        left: {
            connection: false
        }
    },
    // RIGHT DEAD END TILE
    {
        name: 'RIGHT DEAD END',
        image: {
            paths: ['tile-deadend.webp'],
            rotation: [180]
        },
        top: {
            connection: false
        },
        right: {
            connection: true
        },
        bottom: {
            connection: false
        },
        left: {
            connection: false
        }
    },
    // BOTTOM DEAD END TILE
    {
        name: 'BOTTOM DEAD END',
        image: {
            paths: ['tile-deadend.webp'],
            rotation: [90]
        },
        top: {
            connection: true
        },
        right: {
            connection: false
        },
        bottom: {
            connection: false
        },
        left: {
            connection: false
        }
    },
    // LEFT DEAD END TILE
    {
        name: 'LEFT DEAD END',
        image: {
            paths: ['tile-deadend.webp'],
            rotation: [0]
        },
        top: {
            connection: false
        },
        right: {
            connection: false
        },
        bottom: {
            connection: false
        },
        left: {
            connection: true
        }
    },
]
