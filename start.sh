#!/bin/bash
set -e

echo "Iniciando backend Node.js..."
cd Backend_Node
npm install
npm run start &
BACKEND_PID=$!
cd ..

echo "Iniciando frontend React..."
cd Frontend_React
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Servindo Frontend HTML estático..."
npx serve Frontend_html/Index -l 5500 &
HTML_PID=$!

sleep 2
open http://localhost:5500/Index

wait $FRONTEND_PID

kill $BACKEND_PID $HTML_PID
