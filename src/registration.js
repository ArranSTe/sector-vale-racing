export function validateRegistration(body){
 if(!body||typeof body!=='object')throw new Error('Please complete the registration form.');
 const email=String(body.email||'').trim().toLowerCase();
 const password=typeof body.password==='string'?body.password:'';
 const forename=String(body.forename||'').trim(),surname=String(body.surname||'').trim();
 if(email.length>254||!/^\S+@[^\s@]+\.[^\s@]+$/.test(email))throw new Error('Enter a valid email address.');
 if(password.length<12||password.length>128)throw new Error('Use a password between 12 and 128 characters.');
 if(!forename||!surname||forename.length>80||surname.length>80||/[\u0000-\u001f]/.test(forename+surname))throw new Error('Enter your forename and surname (up to 80 characters each).');
 if(!['GT3','GT4','Both'].includes(body.category)||!['Beginner','Intermediate','Experienced'].includes(body.experience))throw new Error('Choose your racing preference and experience level.');
 if(body.privacy_acknowledged!==true||body.regulations_accepted!==true)throw new Error('Read and acknowledge the privacy notice and racing regulations.');
 if(!Number.isInteger(body.policy_version)||body.policy_version<1)throw new Error('Refresh the page to read the current policies.');
 return {email,password,metadata:{forename,surname,category:body.category,experience:body.experience,privacy_acknowledged:true,regulations_accepted:true,marketing_consent:body.marketing_consent===true,policy_version:body.policy_version}};
}
