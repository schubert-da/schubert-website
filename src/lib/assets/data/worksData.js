

import WorldDatavizWorkImage1 from '$lib/assets/images/works/wdvp-1.png';
import WorldDatavizWorkImage2 from '$lib/assets/images/works/wdvp-2.png';
import WorldDatavizWorkImage3 from '$lib/assets/images/works/wdvp-3.png';
import WorldDatavizWorkImage4 from '$lib/assets/images/works/wdvp-4.png';

export const worksData = [
    {
        title: 'One Step Ahead',
        client: 'Personal project',
        projectType: 'Scrollytelling narrative',
        blocks: [
            { type: 'image', src: WorldDatavizWorkImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage3, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage2, alt: 'temp alt text', cols: 1 },
            {
                type: 'text',
                title: 'One Step Ahead',
                description: 'A scrollytelling piece on the shortcomings of the efforts to achieve the UN SDG targets',
                link: 'https://www.google.com',
                cols: 2
            },
            { type: 'image', src: WorldDatavizWorkImage4, alt: 'temp alt text', cols: 1 },
        ]
    },
    {
        title: 'One Step Ahead',
        client: 'Personal project',
        projectType: 'Scrollytelling narrative',
        blocks: [
            {
                type: 'text',
                title: 'One Step Ahead',
                description: 'A scrollytelling piece on the shortcomings of the efforts to achieve the UN SDG targets',
                link: 'https://www.google.com',
                cols: 2
            },
            { type: 'image', src: WorldDatavizWorkImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage4, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage2, alt: 'temp alt text', cols: 2 },
        ]
    },
];