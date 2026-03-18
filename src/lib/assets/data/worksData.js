import BenfordsImage1 from '$lib/assets/images/works/benfords-1.webp';
import BenfordsImage2 from '$lib/assets/images/works/benfords-2.webp';
import BenfordsImage3 from '$lib/assets/images/works/benfords-3.webp';
import BenfordsImage4 from '$lib/assets/images/works/benfords-4.webp';

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
        title: 'Benford\'s Law',
        client: 'Personal project',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: BenfordsImage3, alt: 'Bar charts showcasing Benford\'s Law in different datasets', cols: 1 },
            { type: 'image', src: BenfordsImage4, alt: 'Pages of a magazine with numbers highlighted which will be tested against Benfords Law', cols: 1 },
            { type: 'image', src: BenfordsImage2, alt: 'Grid showcasing how Benfords occurs when a value grows exponentially', cols: 1 },
            {
                type: 'text',
                title: 'Benford\'s Law',
                description: "A visual explainer on Benford's Law which was one of the <strong>winners of the Pudding Cup 2025</strong>",
                link: '/benfords-law',
                cols: 2
            },
            { type: 'image', src: BenfordsImage1, alt: 'Proportion plots showcasing Benford\'s Law in various year columns', cols: 1 },
        ]
    },
    {
        title: 'WWF Milk Story',
        client: 'World Wildlife Fund India',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: WWFMilkStoryImage4, alt: 'Still from a scrollytelling section which showcases the delivery of milk', cols: 1 },
            {
                type: 'text',
                title: 'Dairy Cold Chain Transition',
                description: 'An interactive story on the role of technology in dairy chain in India. Nominated for the <strong>Information is Beautiful Awards 2025</strong>',
                link: 'https://csp.wwfindia.org/dairy-cold-chain-transition/',
                cols: 2
            },
            { type: 'image', src: WWFMilkStoryImage1, alt: 'Treemap of global milk production', cols: 1 },
            { type: 'image', src: WWFMilkStoryImage3, alt: 'Scrollytelling section showcasing the anatomy of a milk chiller', cols: 1 },
            { type: 'image', src: WWFMilkStoryImage2, alt: 'Calculator to understand energy savings by switching to renewable energy sources', cols: 1 },
        ]
    },
    {
        title: 'One Step Ahead',
        client: 'Personal project',
        projectType: 'Scrollytelling narrative',
        blocks: [
            { type: 'image', src: WorldDatavizWorkImage1, alt: 'Small multiples of area charts showing health and wellbeing progress', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage3, alt: 'Bar chart showing the decrease in global poverty', cols: 1 },
            { type: 'image', src: WorldDatavizWorkImage2, alt: 'Maps showing the divide in life expectancy in recent years', cols: 1 },
            {
                type: 'text',
                title: 'One Step Ahead',
                description: 'A scrollytelling piece on the shortcomings of the efforts to achieve the UN SDG targets',
                link: 'https://schubert-da.github.io/dvs-world-summit/',
                cols: 2
            },
            { type: 'image', src: WorldDatavizWorkImage4, alt: 'Bar chart showing the rise in global hunger', cols: 1 },
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
            { type: 'image', src: ISNImage1, alt: 'choropleth map showing kidney disease data', cols: 1 },
            { type: 'image', src: ISNImage3, alt: 'dashboard showing country-specific kidney health data', cols: 1 },
            { type: 'image', src: ISNImage2, alt: 'loctor globe for kidney health data', cols: 1 },
            { type: 'image', src: ISNImage4, alt: 'choropleth map showing kidney disease data', cols: 1 },
        ]
    },
    {
        title: 'Mera First Vote',
        client: 'BehanBox',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: BehanBoxImage1, alt: 'title screen for Mera First Vote', cols: 1 },
            { type: 'image', src: BehanBoxImage2, alt: 'Illustrated treemap showing women\'s issues', cols: 2 },
            {
                type: 'text',
                title: 'Mera First Vote',
                description: 'Documenting the aspirations of young women and queer Indians',
                link: 'https://myfirstvote.behanbox.com/',
                cols: 1
            },
            { type: 'image', src: BehanBoxImage3, alt: 'Video explorer of interviews with the participants', cols: 1 },
            { type: 'image', src: BehanBoxImage4, alt: 'Explorer for women\'s issues and aspirations with audio', cols: 1 },
        ]
    },
    {
        title: 'WWF Arkavathi',
        client: 'World Wildlife Fund India',
        projectType: 'Interactive Story',
        blocks: [
            { type: 'image', src: WWFArkavathiImage4, alt: 'Scrollytelling section highlighting issues to the Arkavathi river', cols: 1 },
            { type: 'image', src: WWFArkavathiImage1, alt: 'Bar charts showing the condition of wetlands around the Arkavathi river basin', cols: 1 },
            { type: 'image', src: WWFArkavathiImage3, alt: 'Opening scrollytelling section of the state of the Arkavathi river basin', cols: 1 },
            {
                type: 'text',
                title: 'Reviving Arkavathi',
                description: 'An interactive story on the restoration of the Arkavathi river basin in Karnataka',
                link: 'https://csp.wwfindia.org/reviving-the-arkavathi-river/',
                cols: 2
            },
            { type: 'image', src: WWFArkavathiImage2, alt: 'Slider showing the revival of the wetlands in recent years', cols: 1 },
        ]
    },
];