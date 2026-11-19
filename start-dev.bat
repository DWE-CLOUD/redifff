@echo off
title REDIFFF Website - Development Server
cd /d "%~dp0"
echo ==============================================
echo   REDIFFF - Starting Development Server
echo   URL: http://localhost:3000
echo ==============================================
echo.
npm.cmd run dev -- -p 3000
pause
