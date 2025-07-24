import exampleImage from '$lib/assets/images/works/wdvp-2.webp';

export const myWork = [
    {
        content: [
            {
                type: 'text',
                title: 'Some Content with a Title',
                text: [
                    'So my current title is "Frontend and Data Visualisation Developer" but often this means little to most people. People may sometimes get the "frontend" part but that\'s rarely the focus of what I do.',
                    'Dataviz (short for data visualisation) involves taking data and information and representing it in a way that is easy to comprehend and gain value from. This can take the form of charts, diagrams, visual explainers and much more. And if it needs to have its\' own space on the web, then that\s where I come in.'
                ]
            }
        ]
    },
    {
        content: [
            {
                type: 'text',
                text: [
                    'You can often find me working on bits of projects like:',
                    '<strong>Charts and graphics</strong>'
                ]
            },
            { type: 'image', src: exampleImage, alt: 'example graphic content' }
        ]
    },
    {
        content: [
            {
                type: 'text',
                text: [
                    '<strong>Dashboards and explorers</strong>'
                ]
            },
            { type: 'image', src: exampleImage, alt: 'example graphic content' }
        ]
    },
    {
        content: [
            {
                type: 'text',
                text: [
                    '<strong>Interactive stories and visual explainers</strong>'
                ]
            },
            { type: 'image', src: exampleImage, alt: 'example graphic content' }
        ]
    },
    {
        content: [
            {
                type: 'text',
                title: 'Some Content with a Title',
                text: [
                    'I build charts and weird interactives on the web while I struggle to fill out a sketchbook on the side.',
                    'One more line here to make it look better.'
                ]
            }
        ]
    }
];