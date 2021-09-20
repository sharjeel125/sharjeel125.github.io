// config.js
module.exports = {
    github: {
        username: 'sharjeel125', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'muhammad-sharjeel-7a540a1b7',
        twitter: '',
        facebook: 'muhammad.abdulsharjeel',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: '',
        phone: '03318932524',
        email: 'sharjeelwaheed125@gmail.com'
    },
    skills: [
        
        
        'JavaScript',
        'React.js',
        'Vue.js',
        'Node.js',
        'Express.js',
        'Jquery',
        'NoSQL',
        'Firebase',
        'Git',
        'CSS',
        'Material UI',
        'Tailwind',
        'Bootstrap',
    ],
    
    education: [
         { 
            institution: 'University of karachi',
            degree: 'Bachelor of Science',
            from: '2019',
            to: '2022'
        },
        { 
            institution: 'P.E.C.H.S College, karachi',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2016',
            to: '2018',
        },
        { 
            institution: 'ETN Nasra School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2004',
            to: '2016'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'arifszn',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
