# Bayer Tech Challenge - Frontend
<img src="https://imgur.com/4FgVSoI.jpg"/>
This project was done following the code challenge on the root of this repository.
It's main purpose is to make a card in which one can search farmers by document number or name.

On this README you will find information about the frontend (angular), some feedbacks, and how to run it. The backend readme will be in its folder.

## How to run it
I've left the default instructions from Angular CLI to run the project, but I will leave my own here too.

- To run the frontend application just run the command:
```
npm start
```
The application will start on http://localhost:4200


Note: <b style="color:red">Since it also has a backend, follow the readme instructions on the 'farmer-back' folder.  Without the backend it wont be possible to search for farmers.</b>

If you desire to build the application, you can check the section "BUILD" bellow.


## Feedbacks and Informations
The app is very "basic", as in the way of being simple and trying to follow the instructions of the challenge accordingly.

Seeing that it was a small task to be developed, no lazy loading was implemented.

The abstract providers was required to use <i>Promises</i>, which isn't very common in Angular, normaly I would use observables, since http requests on Angular are observables by default.

I didn't name the component selector  exactly "farmer-search-card" due to linting issues, if one wants to use the prefix farmer, it would have to be configured before so that all components would also have farmer prefix.

Knowing that I didn't have to follow the card mockup by the letter, I did my interpration of it.

<b>You can search a farmer by document or name by inputing on the "Name or Doc#" field. You can search by pressing ENTER or by clicking on the search icon.</b> Note: You can see the list of farmers on the backend readme.

If more than one farmer is found, the first one is returned.

## Tests 
The unit tests were done with Karma and Jasmine, trying to achieve 100% coverage. You can run it by executing:

```
npm test
```
The instanbul coverage was enabled to make it easies to see which lines were/werent covered.

# FarmerFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
