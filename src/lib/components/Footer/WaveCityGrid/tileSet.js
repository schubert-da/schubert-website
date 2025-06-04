import TileBlank from '$lib/assets/images/wave-playground/tile-blank.jpg';
import TileCrossroad from '$lib/assets/images/wave-playground/tile-crossroad.jpg';
import TileStraight from '$lib/assets/images/wave-playground/tile-straight.jpg';
import TileDeadend from '$lib/assets/images/wave-playground/tile-deadend.jpg';
import TileTJunction from '$lib/assets/images/wave-playground/tile-tjunction.jpg';
import TileCurve from '$lib/assets/images/wave-playground/tile-curve.jpg';

export const TILE_SET = [
    // BLANK TILE
    {
        name: 'BLANK',
        image: {
            paths: ['tile-blank.jpg'],
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
            paths: ['tile-crossroad.jpg'],
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
            paths: ['tile-straight.jpg'],
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
            paths: ['tile-straight.jpg'],
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
            paths: ['tile-tjunction.jpg'],
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
            paths: ['tile-tjunction.jpg'],
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
            paths: ['tile-tjunction.jpg'],
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
            paths: ['tile-tjunction.jpg'],
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
            paths: ['tile-curve.jpg'],
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
            paths: ['tile-curve.jpg'],
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
            paths: ['tile-curve.jpg'],
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
            paths: ['tile-curve.jpg'],
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
            paths: ['tile-deadend.jpg'],
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
            paths: ['tile-deadend.jpg'],
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
            paths: ['tile-deadend.jpg'],
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
            paths: ['tile-deadend.jpg'],
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
