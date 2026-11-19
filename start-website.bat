@echo off
title REDIFFF Website - Production Server
cd /d "%~dp0"
echo ==============================================
echo   REDIFFF - Starting Production Server
echo   URL: http://localhost:3000
echo ==============================================
echo.
npm.cmd run start -- -p 3000
pause
