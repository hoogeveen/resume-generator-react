import { z } from "zod";

const LocationSchema = z.object({
    city: z.string(),
    country: z.string()
});

const CompanySchema = z.object({
    name: z.string(),
    website: z.string().url().optional(),
    location: LocationSchema
});

const DateRangeSchema = z.object({
    start: z.date(),
    end: z.date()
});

const CurrentSituationSchema = z.object({
    jobTitle: z.string(),
    jobDescription: z.string(),
    company: CompanySchema
});

const PersonalSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthday: z.string(),
    phoneNumber: z.string(),
    email: z.string().email(),
    picture: z.string().url(),
    currentSituation: CurrentSituationSchema,
    location: LocationSchema
});

const ProfileSchema = z.object({
    bio: z.string()
});

const WorkExperienceSchema = z.object({
    jobTitle: z.string(),
    jobDescription: z.string(),
    company: CompanySchema,
    date: DateRangeSchema.optional()
});

const LanguageSchema = z.object({
    name: z.string(),
    value: z.string()
});

const SkillSchema = z.object({
    name: z.string(),
    color: z.string()
});

const InstitutionSchema = z.object({
    name: z.string(),
    location: LocationSchema
});

const EducationSchema = z.object({
    name: z.string(),
    institution: InstitutionSchema,
    date: DateRangeSchema
});

const ProjectSchema = z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    tags: z.array(SkillSchema)
});

export const ProfileDataSchema = z.object({
    personal: PersonalSchema,
    profile: ProfileSchema,
    workExperience: z.array(WorkExperienceSchema),
    languages: z.array(LanguageSchema),
    skills: z.array(SkillSchema),
    education: z.array(EducationSchema),
    projects: z.array(ProjectSchema)
});

export type ProfileData = z.infer<typeof ProfileDataSchema>;

