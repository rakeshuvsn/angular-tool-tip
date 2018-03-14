# AngularToolTip

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Install:

```
    npm install angular-tool-tip --save
    import AngularToolTipModule from 'angular-tool-tip';
```

## Usage:

 ```
    <button class="angularToolTip" aToolTip="your tool tip message here" aPosition="bottom" aBgColor="#555" aColor="#fff" > your button</button>
    <a href="#" class="angularToolTip" aToolTip="your tool tip message here" aPosition="bottom" aBgColor="#555" aColor="#fff" > your link here</a>
 ```
## Attributes:

```
    class="angularToolTip"
    aToolTip="your tool tip message here"
    aPosition="left|right|top|bottom" // by default position bottom
    aBgColor="#555" //tool tip display back ground color here by default #555
    aColor="#fff" // tool tip display text color here by default #fff
```
## Css:
you can update the css classes by overriding existing classes for poinyter position etc.

```
all available css classes:

.tootltiptext // bottom position by default
.tooltiptextTop // top position
.tooltiptextRight // right position
.tooltiptextLeft // left position

for example if you want pointer position to be relative to parent of position right tooltip then

.tooltiptextRight::after{
    top: 25% !important; // adjuist as per your needs by default its 50%;
}

for left position

.tooltiptextLeft::after{
    top: 25% !important; // adjuist as per your needs by default its 50%;
}

for top and bottom positions the tool tip pointer is always middle, if you want to change you can modify as:

.tooltiptextTop::after{
    left: 25%; // adjuist as per your needs by default its 50%;
}
.tooltiptext::after{
    left: 25%; // adjuist as per your needs by default its 50%;
}

```

## Access demo link here https://rakeshuvsn.github.io/angular-tool-tip/

Publish project to NPM:

## ng-packagr
```
ng-packagr is a node library that can compile and package a TypeScript library to Angular Package Format. We’re going to use it to pull our components out of this CLI project and package them up for us into a format that can be used within other Angular applications.

Run npm install ng-packagr --save-dev from the root of your project folder, this will download ng-packagr and declare it as adevDependency of your project in your package.json file, so we can call it from our npm scripts.

As per the ng-packagr docs, we’ll need to add two files to our project, ng-package.json and public_api.ts. We’ll use ng-package.json to configure n-packagr and to tell it where to find our public_api.ts file, which we’ll use to export the feature modules of our component library. (Note: public_api.ts is a convention used by Angular component libraries.)
```
Add the following to ng-package.json:
```
{
  "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "public_api.ts"
  }
}
```
And export your header.module.ts from public_api.ts:

export * from './src/app/modules/header/header.module'
Now we’ll add a packager script to our package.json that we can use to tell ng-packagr to package up our library according to the configuration of ng-package.json. Also, switch private to false so that you can publish your library when you need to.
```
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "packagr": "ng-packagr -p ng-package.json"
},
"private": false

```
## Create our package
Now for the good stuff. Run npm run packagr, and once the process is complete you’ll find a dist folder in your project root. This is your component library. Fully self sufficient, packaged according to best practices, and ready to shine it’s red header-y light upon the world.

## Pack it for local development
```
Let’s get a tarball setup that we can npm install from Angular applications within our local dev environments. cd into the dist folder and run npm pack. This will create a file in the root of the dist folder called my-component-library-0.0.0.tgz. The 0.0.0 part comes from the top of your package.json. You’ll want to keep bumping that up as you start to truly deploy your component library for consumption.
From other Angular applications on your system that require your component library, you can npm install ../some-relative-path/dist/my-component-library-0.0.0.tgz to install your component library into your application.
```
## Publish it on npm
```
Once you login to your npm account with npm login you can publish your component library with npm publish dist. Just be sure that you have a unique package name (hint: my-component-library may be taken). Once published, you’ll be able to install your component library from npm with npm install my-component-library.
```