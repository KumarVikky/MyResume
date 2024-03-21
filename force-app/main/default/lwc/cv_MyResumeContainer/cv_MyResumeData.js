import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import MYIMAGE from '@salesforce/resourceUrl/MyImage'

export const PROFILE_IMAGE = MYIMAGE + '/MyPic_1.jpeg';

export const SOCIAL_LINKS = [
    {
        type: "linkedin",
        label: "linkedin/KumarVikky",
        link: "https://www.linkedin.com/in/vikky-kumar",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/KumarVikky",
        link: "https://trailblazer.me/id/kumar-trail-hub",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },
    {
        type: "github",
        label: "github/KumarVikky",
        link: "https://github.com/KumarVikky",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type:'twitter',
        label:"twitter/KumarVikky",
        link:"https://twitter.com/info2vikky",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
];

export const USER_DETAILS = {
    NAME:'Vikky Kumar Saha',
    ROLE:'Salesforce Developer',
    EMAIL:'kumarvikkysaha@gmail.com',
    PHONE:'080 163 20205',
    BIRTHDATE: '10/08/1995',
    ADDRESS: 'Raiganj, North Dinajpur, West Bengal - 733123'
};

export const CAREER_SUMMARY = {
    HEADING:"PROFILE",
    DESCRIPTION: "I am a Salesforce Certified Developer with 4.5 years of experience currently working as a Salesforce Developer with Accenture, driven by new challenges and capable of adapting to any cultural and business environment. Seeking an opportunity to be part of a progressive organization to use my skills in the best possible way to achieve the company’s goals."
};

export const EXPERIENCE_DATA = { 
    HEADING: "PROJECTS",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Accenture Private Limited.",
            DURATION: "2021 - Present",
            DESCRIPTION_POINTS: [
                "Developed Lightning web Components in line with business requirements. Familiarity with component lifecycle & events, utilization of properties and wire methods, as well as Apex classes (through wire and imperative calls).",
                "Developed and customized Salesforce Communities and portals using Lightning components so that customers and partners can access Salesforce data and collaborate with the organization.",
                "Managed API integrations and web services to connect Salesforce with other systems.",
                "Created flows and triggers to automate business processes.",
                "Worked on multiple batch jobs and scheduled jobs to automate the processing of large volumes of records asynchronously.",
                "Applied best practices to streamline the business process by leveraging the capabilities of Salesforce with my development expertise.",
                "Extensive development in Service Cloud."
            ]
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Girikon Private Limited.",
            DURATION: "2019 - 2021",
            DESCRIPTION_POINTS: [
                "Involved in Salesforce Customization.",
                "Gained knowledge and experience in integration of Salesforce.com with external applications by using web services REST API.",
                "Develop and maintain test data as necessary to support testing efforts.",
                "Development using Apex Trigger, Batch Apex, Lightning Component, Lightning Application, Apex, Visualforce page, and Visualforce component.",
                "Integration with Twilio for sending and receiving messages from salesforce to related contacts through Text or WhatsApp.",
                "Extensive development in Sales & Experience Cloud."
            ]
        }
    ]
};

export const SKILLS_DATA = {
    HEADING: "CORE QUALIFICATIONS",
    SKILLS:[
        "Have substantial experience in Salesforce Development and Design.",
        "Have hands-on experience with various Salesforce tools, including Apex Classes, Asynchronous Apex, Lightning Web Component, Lightning Component, Visualforce, SOQL/SOSL, Salesforce Integration, and Migration Tool.",
        "Excellent understanding of Vs Code with Salesforce CLI and other Integrated Development Environments.",
        "Excellent understanding of Source and Version Control, specifically Git, GitHub & Bitbucket.",
        "Have good knowledge of HTML, CSS, JavaScript, Core & Advance JAVA, and SQL.",
        "Skilled in integrating various business processes across different systems using various Salesforce API's."
    ]
};

export const EDUCATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Bachelor in Computer science",
            UNIVERSITY_NAME: "Abacus Institute of Engineering and Management",
            DURATION: "2014 - 2018",
        },
        {
            NAME: "Higher Secondary",
            UNIVERSITY_NAME: "Dr. Zakir Hussain High School",
            DURATION: "2011 - 2013",
        }
    ]
};

export const CERTIFICATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Certified Administrator",
        },
        {
            NAME: "Salesforce Platform Developer 1",
        },
        {
            NAME: "Salesforce Platform Developer 2"
        }
    ]
};

export const INTERESTS_DATA = {
    HEADING: "INTERESTS",
    POINTS: ["Reading books and articles", "Photography", "Travel", "Sports"]
};
