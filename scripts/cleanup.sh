#!/bin/bash
set -e

# Navigate to the project directory
cd /vercel/share/v0-project

# Remove all node_modules and lockfiles
echo "Removing corrupted node_modules and cache..."
rm -rf node_modules pnpm-lock.yaml package-lock.json yarn.lock bun.lockb .vite .next dist build

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Reinstall dependencies
echo "Installing dependencies..."
npm install

echo "Dependency cleanup completed successfully!"
