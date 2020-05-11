# BitCoin
_This is an app test for Bitphy_

### Pre-requisites
You will need npm installed on your computer.

To check if npm is already installed, open a terminal window and type
```
npm -v
```
If you get a version number (6.13.4 for example), npm is installed on your computer.
If you get an error, go to https://nodejs.org/ and install it.

### How to install
Make a folder to contain the files. For example: Documents/Bitcoin

Download or clone this repo in that folder

Open a terminal window, go to the project folder and type
```
npm -i
```
to install all the required dependencies

### How to run
Open a terminal window, go to the project folder and type
```
ng serve
```
Then, open a web-browser and go to http://localhost:4200

# Considerations
This is an app for a Bitphy test.

The skeleton is quite simple, just separating components, services, etc, by folders.
Personally I prefer to split the components from the "pages" (components after all) because I think components are bricks and pages are the place to put those bricks.

As for the hard work of the app, I prefer to relegate it to services and keep the controllers concerned only with the view. That also allows me more reuse of the code.

The exercise calls for an analysis of the evolution of bitcoin price in USD, but I couldn't find a free API from where to get that information. I tried a couple of hours with api.coingecko.com but the results were not as expected or I did not know how to do it.

