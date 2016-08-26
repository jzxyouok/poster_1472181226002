@echo off

echo.
pause
echo.

cd %~dp0
cd..

call mvn deploy

cd bin
pause