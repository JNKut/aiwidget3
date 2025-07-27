#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync } from 'fs';

console.log('🚀 Simple Railway build - no vite complexity...');

try {
  // Clean and create directories
  execSync('rm -rf dist', { stdio: 'inherit' });
  mkdirSync('dist/public', { recursive: true });

  console.log('📦 Copying static files...');
  
  // Copy client files as static content
  cpSync('client', 'dist/public', { recursive: true });
  
  console.log('🔧 Building backend only...');
  
  // Build only the backend
  execSync(
    'npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist',
    { stdio: 'inherit' }
  );

  console.log('✅ Simple build completed!');
  
} catch (error) {
  console.error('❌ Simple build failed:', error.message);
  process.exit(1);
}
