#!/bin/bash
cd /home/kavia/workspace/code-generation/babysense-dashboard-94246-94279/baby_sense_dashboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

