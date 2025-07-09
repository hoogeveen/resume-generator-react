#!/usr/bin/env node

import { ProfileDataSchema } from '../src/schema/Schema.js';
import { data } from '../src/data.js';

console.log('🔍 Validating resume data...');

try {
    const result = ProfileDataSchema.safeParse(data);
    
    if (!result.success) {
        console.error('❌ Data validation failed:');
        console.error('Validation errors:');
        result.error.errors.forEach((error, index) => {
            console.error(`${index + 1}. ${error.path.join('.')}: ${error.message}`);
        });
        process.exit(1);
    }
    
    const validatedData = result.data;
    console.log('✅ Data validation passed!');
    console.log(`📊 Resume contains:`);
    console.log(`   - ${validatedData.workExperience.length} work experiences`);
    console.log(`   - ${validatedData.education.length} education entries`);
    console.log(`   - ${validatedData.skills.length} skills`);
    console.log(`   - ${validatedData.languages.length} languages`);
    console.log(`   - ${validatedData.projects.length} projects`);
    
} catch (error) {
    console.error('❌ Unexpected error during validation:', error);
    process.exit(1);
} 