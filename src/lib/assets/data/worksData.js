

import WorldDatavizWorkImage1 from '$lib/assets/images/works/wdvp-1.webp';
import WorldDatavizWorkImage2 from '$lib/assets/images/works/wdvp-2.webp';
import WorldDatavizWorkImage3 from '$lib/assets/images/works/wdvp-3.webp';
import WorldDatavizWorkImage4 from '$lib/assets/images/works/wdvp-4.webp';

import ISNImage1 from '$lib/assets/images/works/isn-1.webp';
import ISNImage2 from '$lib/assets/images/works/isn-2.webp';
import ISNImage3 from '$lib/assets/images/works/isn-3.webp';
import ISNImage4 from '$lib/assets/images/works/isn-4.webp';

import BehanBoxImage1 from '$lib/assets/images/works/behanbox-1.webp';
import BehanBoxImage2 from '$lib/assets/images/works/behanbox-2.webp';
import BehanBoxImage3 from '$lib/assets/images/works/behanbox-3.webp';
import BehanBoxImage4 from '$lib/assets/images/works/behanbox-4.webp';

import WWFMilkStoryImage1 from '$lib/assets/images/works/wwfmilk-1.webp';
import WWFMilkStoryImage2 from '$lib/assets/images/works/wwfmilk-2.webp';
import WWFMilkStoryImage3 from '$lib/assets/images/works/wwfmilk-3.webp';
import WWFMilkStoryImage4 from '$lib/assets/images/works/wwfmilk-4.webp';

import WWFArkavathiImage1 from '$lib/assets/images/works/wwfarkavathi-1.webp';
import WWFArkavathiImage2 from '$lib/assets/images/works/wwfarkavathi-2.webp';
import WWFArkavathiImage3 from '$lib/assets/images/works/wwfarkavathi-3.webp';
import WWFArkavathiImage4 from '$lib/assets/images/works/wwfarkavathi-4.webp';

export const worksData = [
    {
        title: 'WWF Milk Story',
        client: 'World Wildlife Fund India',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: WWFMilkStoryImage4, alt: 'temp alt text', cols: 1 },
            {
                type: 'text',
                title: 'Dairy Cold Chain Transition',
                description: 'An interactive story on the pivotal role of technology in dairy delivery chain in India',
                link: 'https://csp.wwfindia.org/dairy-cold-chain-transition/',
                cols: 2
            },
            { type: 'image', src: WWFMilkStoryImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WWFMilkStoryImage3, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WWFMilkStoryImage2, alt: 'temp alt text', cols: 1 },
        ]
    },
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
                link: 'https://schubert-da.github.io/dvs-world-summit/',
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
                link: 'https://gkha.theisn.org/',
                cols: 2
            },
            { type: 'image', src: ISNImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage3, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage2, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: ISNImage4, alt: 'temp alt text', cols: 1 },
        ]
    },
    {
        title: 'Mera First Vote',
        client: 'BehanBox',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: BehanBoxImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: BehanBoxImage2, alt: 'temp alt text', cols: 2 },
            {
                type: 'text',
                title: 'Mera First Vote',
                description: 'Documenting the aspirations of young women and queer Indians',
                link: 'https://myfirstvote.behanbox.com/',
                cols: 1
            },
            { type: 'image', src: BehanBoxImage3, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: BehanBoxImage4, alt: 'temp alt text', cols: 1 },
        ]
    },
    {
        title: 'WWF Arkavathi',
        client: 'World Wildlife Fund India',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: WWFArkavathiImage4, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WWFArkavathiImage1, alt: 'temp alt text', cols: 1 },
            { type: 'image', src: WWFArkavathiImage3, alt: 'temp alt text', cols: 1 },
            {
                type: 'text',
                title: 'Reviving Arkavathi',
                description: 'An interactive story on the restoration of the Arkavathi river basin in Karnataka',
                link: 'https://csp.wwfindia.org/reviving-the-arkavathi-river/',
                cols: 2
            },
            { type: 'image', src: WWFArkavathiImage2, alt: 'temp alt text', cols: 1 },
        ]
    },
];