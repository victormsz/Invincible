#!/bin/bash

set -e

echo "🧩 Iniciando backend Node.js..."

cd Backend_Node
npm install

# Altere para 'npm start' se não tiver script 'dev' no package.json
npm run dev &  
BACKEND_PID=$!

cd ..

echo "⚛️ Iniciando frontend React..."

cd Frontend_React
npm install
npm run dev

# Finaliza backend quando React for parado com Ctrl+C
kill $BACKEND_PID