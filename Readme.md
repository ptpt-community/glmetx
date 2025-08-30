# GLMetX
Find out branch info of GLSL Shading Language programs.

# Usage Guide

The tool is Open Source and can be found on github at github.com/ptpt-community/glmetx. The
term paper submission project is in term-paper-submission branch. You can follow these steps to
process any GLSL.
## Installation
```
$ git clone -b term-paper-submission https://github.com/ptpt-community/glmetx

$ cd glmetx
$ npm install
```
If the npm command does not work, you will have to download and install NodeJS and NPM 

Use node runtime to run the program.
```
$ node index <filename>.glsl
```
For example, to run the example program provided into the repository, you can do this:
```
$ node index vtest.glsl
```
And you should get the result with all the metrics calculated in stdout.
