export interface Timespan {
    start: Date;
    end: Date;
}

export interface Location {
    city: string;
    country: string;
}

export interface Company {
    name: string;
    website?: string;
    location: Location;
}

export interface CurrentSituation {
    jobTitle: string;
    jobDescription: string;
    company: Company;
}

export interface Personal {
    firstName: string;
    lastName: string;
    birthday: string;
    phoneNumber: string;
    email: string;
    picture: string;
    currentSituation: CurrentSituation;
    location: Location;
}

export interface Profile {
    bio: string;
}

export interface workExperience {
    jobTitle: string;
    jobDescription: string;
    company: Company;
    date?: Timespan;
}

export interface Language {
    name: string;
    value: string;
}

export interface Tag {
    name: string;
    color: string;
}

export interface Institution {
    name: string;
    location: Location;
}

export interface Education {
    name: string;
    institution: Institution;
    date: Timespan;
}

export interface Project {
    name: string;
    description: string;
    url: string;
    tags: Tag[];
} 