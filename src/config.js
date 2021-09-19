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
        linkedin: 'https://www.linkedin.com/in/muhammad-sharjeel-7a540a1b7/',
        
        facebook: 'https://www.facebook.com/muhammad.abdulsharjeel/',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: '',
        phone: '',
        email: ''
    },
    skills: [
        
        'JavaScript',
        'React.js',
        'Node.js',
        'Jquery',
        'NoSQL',
        'Git',
        'CSS',
        'Tailwind',
        'Bootstrap',
    ],
    ,
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
    ,
  
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
