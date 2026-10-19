import {defineConfig,loadEnv} from 'vite';
export default defineConfig(({command,mode})=>{
 const env=loadEnv(mode,process.cwd(),'VITE_');
 if(command==='build'&&(!env.VITE_SUPABASE_URL||!env.VITE_SUPABASE_PUBLISHABLE_KEY||!env.VITE_SUPABASE_EDGE_ANON_KEY))throw new Error('Configure VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY before deploying this league.');
 return {server:{allowedHosts:['terminal.local']},build:{sourcemap:false}};
});
