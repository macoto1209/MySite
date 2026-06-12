import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://macoto1209.github.io/MySite/',
    title: 'Marco Yang',
    description: 'Personal thoughts, film observations and AI experiments.',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Space Ahead ✨ - A minimal space-inspired personal blog template, created by Siddhesh Thadeshwar.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
                {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: "Facebook",
            href: "https://www.facebook.com/macoto.yang"
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/marcoyang1209/'
        },
        {
            text: 'Threads',
            href: 'https://www.threads.com/@marcoyang1209'
        }
    ],
    hero: {
        eyebrowText: 'Film • AI • Technology',
        title: 'Marco Yang ',
        text: "Video editor, film enthusiast and builder of small digital projects.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Read Now',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },
    about: {
        title: 'About',
        text: 'My Personal Thoughts And AI generations',
    },
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:macoto1209@gmail.com",
            email: "macoto1209@gmail.com"
        },
        socialProfiles: [
            {
                text: "Facebook",
                href: "https://www.facebook.com/macoto.yang"
            },
            {
                text: "Instagram",
                href: "https://www.instagram.com/marcoyang1209/"
            },
            {
                text: "Threads",
                href: "https://www.threads.com/@marcoyang1209"
            }
        ]
    },
    subscribe: {
        title: 'Subscribe',
        text: 'One update per week. All the latest stories in your inbox.',
        formUrl: '#'
    },
    blog: {
        description: "Read about my journeys."
    },
    postsPerPage: 2,
    recentPostLimit: 3
};

export default siteConfig;
