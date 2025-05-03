

import WorldDatavizWorkImage1 from '$lib/assets/images/works/wdvp-1.png';
import WorldDatavizWorkImage2 from '$lib/assets/images/works/wdvp-2.png';
import WorldDatavizWorkImage3 from '$lib/assets/images/works/wdvp-3.png';
import WorldDatavizWorkImage4 from '$lib/assets/images/works/wdvp-4.png';

import ISNImage1 from '$lib/assets/images/works/isn-1.png';
import ISNImage2 from '$lib/assets/images/works/isn-2.png';
import ISNImage3 from '$lib/assets/images/works/isn-3.png';
import ISNImage4 from '$lib/assets/images/works/isn-4.png';

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
        title: 'Global Kidney Health Atlas',
        client: 'International Society of Nephrology',
        projectType: 'Dashboard',
        blocks: [
            {
                type: 'text',
                title: 'Global Kidney Health Atlas',
                description: 'A dashboard to visualize the data collected by the ISN on kidney health around the world',
                link: 'https://www.google.com',
                cols: 2
            },
            { type: 'image', src: ISNImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage3, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage2, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage4, alt: 'temp alt text', cols: 1 },
        ]
    },
];