#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

console.log('🚀 Starting production build...');

// Set environment for production
process.env.NODE_ENV = 'production';

try {
  // Ensure dist directory exists
  if (!existsSync('dist')) {
    mkdirSync('dist', { recursive: true });
  }
  
  if (!existsSync('dist/public')) {
    mkdirSync('dist/public', { recursive: true });
  }

  console.log('📦 Building frontend...');
  
  // Build frontend from client directory with production settings
  execSync(
    'npx vite build --mode production --emptyOutDir',
    {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        // Disable problematic plugins
        REPL_ID: undefined,
        REPLIT_CLUSTER: undefined
      }
    }
  );

  console.log('🔧 Building backend...');
  
  // Build backend
  execSync(
    'npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist',
    { stdio: 'inherit' }
  );

  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
