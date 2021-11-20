export type Personal = {
    firstName: string
    lastName: string
    birthday: string
    phoneNumber: string
    email: string
    location: Place
    currentSituation: workExperience
    picture: string
}

export type Profile = {
    bio: string
}

export type Place = {
    city: string
    country: string
}

export type Company = {
    name: string
    location: Place
    website?: string
}

export type workExperience = {
    jobTitle: string
    jobDescription: string
    company: Company
    date?: Timespan
}

export type Proficiency = 'Native speaker' | 'Fluent in writing and speaking' | 'Native or bilingual proficiency' | 'Professional working proficiency'

export type Language = {
    name: string
    value: Proficiency
}

export type Timespan = {
    start: Date
    end: Date
}

export type Institution = {
    name: string
    location: Place
}

export type Education = {
    name: string
    institution: Institution
    date: Timespan
}

export type Tag = {
    name: string
    color: string
}

export type Project = {
    name: string
    description: string
    url: string
    tags: Tag[]
}

export type ProfileData = {
    personal: Personal
    profile: Profile
    workExperience: workExperience[]
    languages: Language[]
    education: Education[]
    projects: Project[]
    skills: Tag[]
}
