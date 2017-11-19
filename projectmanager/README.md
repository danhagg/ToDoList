This app build is based upon Traversy Media's tutorial which can be found [here](https://www.youtube.com/watch?v=A71aqufiNtQ).

I will walk through, in detail, the steps I went through to produce the final version of the app found on my GitHub page [here](https://github.com/danhagg/ToDoList).

Firstly, make on the GitHub website, create a new repository called "ToDoList".

Make a directory locally to store the app. Then cd into the directory and link the directory to GitHub.
```
echo "# ToDoList" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:danhagg/ToDoList.git
git push -u origin master
```

Let's make a new git branch for production
```
git branch v0.1
git checkout v0.1
```

The nice people at React have created a `create-react-app` tool that creates react app in a single command thereby abnegating the use of webpack or Gulp. We will create and name our app `projectmanager` in the ToDoList directory as follows...

```
create-react-app projectmanager
cd projectmanager
npm start
```
Opening your browser and navigating to `localhost:3000` displays the default React app created in the `projectmanager` folder.

But we wish to modify much of the default code.

Find the `index.html` file in the `public` directory. Strip out all annotations to leave the following code.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

    <title>Project Manager</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>
```

Note that the only `div` has id `root`. The entire app will be passed into, and displayed, via this `div`.

All of React stuff goes in the `src` directory. The `index.js` looks like this.

```js
import React from 'react';
import ReactDOM from 'react-dom';
// import App component from App.js
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// App component will be rendered in the root div
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

Both the `index.js` and `index.html` files remain pretty untouched from this point forwards. All the development takes place by building components in separate `.js` files and feeding the output of those files into our `App.js` file, which looks like this.

```js
import React, { Component } from 'react';
import './App.css';

// EVERYTHING rendered has to be within ONE element
class App extends Component {
  render () {
    return (
      <div className='App'>
        My App
      </div>
    );
  }
}

export default App;
```

Also delete all the css code in `App.css`. So, now this setup is basically the start point for any React App that we wish to build.
Our stripped down React app, on `localhost:3000`, now looks like this

![image](../readme_images/img_1.png)

1. Let's make our first component, with an export statement
2. import the component to the `App.js` and add it to the `render()` function.

Here we go!
1. First Component
Make a new folder called Components in `src` and a new file called `Projects.js`
The following code is also the base for all components.

```js
import React, { Component } from 'react';

// class name defines name of component.
class Projects extends Component {
  render () {
    return (
      // single outer element with className='Component'
      <div className='Projects'>
        My projects
      </div>
    );
  }
}

// export statement with Component name
export default Projects;
```

2. Add import statement `import Projects from './Components/Projects';` to `App.js` and add ``<Projects />`` placeholder into `App div` part of the `render()` function.

```js
import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        My App
        <Projects />
      </div>
    );
  }
}

export default App;
```

For our ToDo app all our ToDos will not be saved in a database, but will be saved in `state`. What does that mean?

There are two types of data that control a `Component` - `props` and `state`. `Props` is used to represent unchanging data that lasts for the lifetime of the `Component`. On the other hand, `state` can be used to work with changing data. Our ToDo list will contain items that will be added and removed by the user, which will be reflected in the code based upon their `state`.

Firstly, we need to add a `constructor` to the `App` component. And we add our constructor `Projects` - a mock `array` of our of ToDo `objects`.
We also call `super()` in our `constructor` as `this` would remain uninitialized if `super()` was not called.

And we add some JSX `<Projects projects={this.state.projects} />` to the `Projects` handle to take in the data for display.


In `projects.js` we need to add `console.log(this.props);`
```js
import React, { Component } from 'react';

class Projects extends Component {
  render () {
    console.log(this.props);
    return (
      <div className='Projects'>
        My projects
      </div>
    );
  }
}

export default Projects;
```

Now our webpage looks like this and the browser's developer console displays our projects objects showing that the projects component can access the data added to `App.js`.

![image](../readme_images/img_2.png)

Let's take a breather and push the current local version (v0.1) of the app to GitHub. Make a GitHub pull request to merge v0.1 with GitHub Master. Merge v0.1 and master. Update local master. Make a new local branch v0.2 to continue development.


```
git add -A
git commit -m"First Component in the making"
git push
```
