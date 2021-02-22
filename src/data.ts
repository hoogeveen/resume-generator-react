import { ProfileData } from './types';

const data: ProfileData  = {
    personal: {
        firstName: 'Merijn',
        lastName: 'Hoogeveen',
        birthday: '02-10-1989',
        phoneNumber: '+31624809278',
        email: 'mail@merijn.pt',
        picture: 'https://avatars.githubusercontent.com/u/4540853?s=460&u=6e5c72fb9467257e2ad489902ee87ed547314e48&v=4',
        currentSituation: {
            jobTitle: 'Development Team Lead',
            jobDescription: 'Responsible for building websites for our clients, ranging from integrating the CMS to building complex frontend solutions.',
            company: {
                name: 'Strangelove',
                website: 'https://strangelove.nl',
                location: {
                    city: 'Amsterdam',
                    country: 'The Netherlands'
                }
            }
        },
        location: {
            city: 'Amsterdam',
            country: 'The Netherlands'
        }
    },
    profile: {
        bio: '<p>The first time my hands touched a keyboard was at the age of two. \n Today I am a Full Stack Developer.</p>'
    },
    workExperience: [
        {
            jobTitle: 'Development Team Lead',
            jobDescription: 'Responsible for building websites for our clients, ranging from integrating the CMS to building complex frontend solutions.',
            company: {
                name: 'Strangelove',
                website: 'https://strangelove.nl',
                location: {
                    city: 'Amsterdam',
                    country: 'The Netherlands'
                }
            }
        },
        {
            jobTitle: 'Full Stack Developer',
            jobDescription: 'Responsible for building websites for our clients, ranging from integrating the CMS to building complex frontend solutions.',
            company: {
                name: 'Strangelove',
                website: 'https://strangelove.nl',
                location: {
                    city: 'Amsterdam',
                    country: 'The Netherlands'
                }
            },
            date: {
                start: new Date('2016-11-01'),
                end: new Date('2018-10-31')
            }
        },
        {
            jobTitle: 'Digital Developer',
            jobDescription: 'Responsible for working on our in-house Content Management System. Integrating the CMS in the websites for our clients.',
            company: {
                name: 'Strangelove',
                website: 'https://strangelove.nl',
                location: {
                    city: 'Amsterdam',
                    country: 'The Netherlands'
                }
            },
            date: {
                start: new Date('2014-11-01'),
                end: new Date('2016-10-31')
            }
        },
        {
            jobTitle: 'Webdeveloper',
            jobDescription: 'Responsible for designing and developing websites.',
            company: {
                name: 'Impacto (Portugal)',
                location: {
                    city: 'Viseu',
                    country: 'Portugal'
                }
            },
            date: {
                start: new Date('2013-03-01'),
                end: new Date('2014-10-31')
            }
        }
    ],
    languages: [
        {
            name: 'Dutch',
            value: 'Native speaker'
        },
        {
            name: 'Portuguese',
            value: 'Native speaker'
        },
        {
            name: 'English',
            value: 'Fluent in writing and speaking'
        }
    ],
    skills: [
        {
            name: 'Javascript',
            color: '#F0DB4F'
        },
        {
            name: 'Typescript',
            color: '#007acc'
        },
        {
            name: 'Node.JS',
            color: '#68A063'
        },
        {
            name: 'React',
            color: '#61DBFB'
        },
        {
            name: 'Angular',
            color: '#B52E31'
        },
        {
            name: 'Docker',
            color: '#0db7ed'
        },
        {
            name: 'GraphQL',
            color: '#e535ab'
        }
    ],
    education: [
        {
            name: 'Digital Product Development',
            institution: {
                name: 'University of Aveiro Norte',
                location: {
                    city: 'Aveiro',
                    country: 'Portugal'
                }
            },
            date: {
                start: new Date('2009-03-01'),
                end: new Date('2010-02-28')
            }
        },
        {
            name: 'Curso Profissional de Multimedia',
            institution: {
                name: 'Escola Profissional Mariana Seixas',
                location: {
                    city: 'Viseu',
                    country: 'Portugal'
                }
            },
            date: {
                start: new Date('2005-09-01'),
                end: new Date('2008-07-31')
            }
        }
    ],
    projects: [
        {
            name: 'Resume Generator',
            description: 'Create your own CV in a couple of seconds by filling out a JSON file',
            url: 'https://github.com/hoogeveen/resume-generator-react',
            tags: [
                {
                    name: 'Javascript',
                    color: '#F0DB4F'
                }
            ]
        },
        {
            name: 'Apply',
            description: 'World of Warcraft interactive apply form',
            url: 'https://github.com/hoogeveen/apply',
            tags: [
                {
                    name: 'Javascript',
                    color: '#F0DB4F'
                }
            ]
        }
    ]
}

export default data
