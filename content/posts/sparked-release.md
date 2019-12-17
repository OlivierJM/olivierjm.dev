---
date: 2019-04-02T17:16:07.430Z
title: sparked-release
author: Olivier JM
hero_image: "/content/images/sparked.png"
---

## Introduction

This project was inspired from working on a variety of educational programs in sub-Saharan Africa over the past decade where lack of access to educational resources and poor and/or expensive internet remain challenges. After working with a number of different platforms, we could not find one with flexibility to add local content (which in many cases is extensive and well developed) organized around local curriculum, programs and resources.
SparkEd remains open source

> SparkEd was deployed on a server and it loaded more than 1,500 resources. It worked very well in an office setting and was tested with 20 hosts.

## Initial Development

The SparkEd design offers ability to add textbooks and other locally owned or publicly available content organized by school, grade, class, module, program, etc. and deliverable on any LAN or on mobile devices.
Initial programming was done in Zambia by programmers at Hackers Guild(@hackersguild) who trained programmers in Ethiopia (@supedplc). End product of the project in Ethiopia now includes all Secondary and Preparatory subjects and content (grades 9–12) with suplemental content delivered on servers that are radio-linked for updating. (see E-learning Tool Development ). Software is meant to be available for use in any setting where content is developed and could be uploaded.

## Tech Stack

SparkEd is written entirely in Javascript apart from some utilities written in bash.

- Meteorjs
- Reactjs
- MongoDB
- Docker
- Travis CI

**Meteorjs** was used as a backend for file storage, database communication and fast reactive data serving, Meteorjs has been a good option in this case because the reactivity it provides made it for us to provide users with real time data, the cons were on testing and deployment, testing meteor apps isn't easy but this is only the setup and lots of mocking that needs to be done.

Reactjs due to how much dynamic and real time data SparkEd has we found it wise to use reactjs and we don't regret this choice, implementing things features like language translation and dark mode was much easier than it could have been.
**MongoDB**
we used MongoDB as our database, on this one we really didn't have much choice since Meteorjs comes bundled with it and it is a very seemless integration, actually even some of the resources are stored in **MongoDB GRIDFS** to easily manage file backup and real time serving.

We used **Docker** hub to host the image of SparkEd which is publicly available and you can find it here.

For continuous integration and continuous deployment we used **TravisCI** which has been working for our case but the plans is to migrate to Jenkins.
For the build history of SparkEd on TravisCI you can find it all here.
We used TravisCI to make sure that all required tests and lint rules pass before any pull request is merged into the master.

Since SparkEd runs mostly in offline environment we don't have it hosted online, however we keep the docker image updated on every pull request merged or any changes committed to the master, this makes it easy for us to avoid the need of doing this manually and anyone can pull and run that image smooothly.

## Notable new features 

### Dark mode

The implementation of night mode was an important implementation, many users stay on the screen for too long and we don't know exactly at what time users might be using the software so it was best to provide a way for users to choose night or day mode.

To accommodate this we had to do a little change on some pages but most of other components were ready for this update, for pages that had lists, it was a bit hard to implement this in a more pleasing way and we decided to re-design such pages, these included notification, the modal wrapper and the feedback page.
a simple example implementation of this is shown here

```Javascript
/* eslint class-methods-use-this: "off" */
/* eslint import/no-unresolved: "off" */
import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/layouts/Header';

export const ThemeContext = React.createContext();

export default class AppWrapper extends React.Component {
  state = {
    isDark: JSON.parse(localStorage.getItem('isDark')),
    mainDark: '#212121',
    main: '#005555',
  };
  toggleDarkMode = async () => {
    await this.setState(state => ({
      isDark: !state.isDark,
    }));
    await localStorage.setItem('isDark', JSON.parse(this.state.isDark));
  };
  render() {
    const { children } = this.props;
    const { isDark } = this.state;
    return (
      <ThemeContext.Provider
        value={{ state: this.state, toggle: this.toggleDarkMode }}
      >
        <div style={{ backgroundColor: isDark ? '#252829' : '#fff' }}>
          <Header />
          <Fragment>{children}</Fragment>
        </div>
      </ThemeContext.Provider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.object,
};

```

You can see the themecontext being used here in the same component that toggles the day/night here.

```Javascript

// This file has been truncated for brevity

import React, { Fragment, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import { ThemeContext } from '../../containers/AppWrapper';

const T = i18n.createComponent();

class UserInfo extends Component {

  render() {
    const user = Meteor.user();
    return (
      <ThemeContext.Consumer>
        {({ state }) => (
          <div>
            <MainModal
              show={isOpen}
              onClose={this.close}
              subFunc={this.handleSubmit}
              title={title}
              confirm={confirm}
              reject={reject}
            />
            <ul
              id="slide-out"
              className="sidenav"
              style={{
                backgroundColor: state.isDark ? state.mainDark : '#ffffff', // an implementation of the theme from the context
              }}
            >
            {/* The switch that toggles day/night mode */}
              <div className="switch">
                <label>
                  Day Mode
                  <input
                    type="checkbox"
                    onChange={this.props.handleNightMode}
                    checked={this.props.checked}
                  />
                  <span className="lever" />
                  Night Mode
                </label>
              </div>
            </ul>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
UserInfo.propTypes = {
  handleNightMode: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default UserInfo;

```

### Internationalisation and Localisation

another good feature to note is that SparkEd supports multiple languages, we provided a boilerplate that can be used with different languages.

```JSON
// this is truncated and don't mind this comment in JSON 😉
{
  "_locale": "en-us",
  "_namespace": "common",
  "language": {
    "enUS": "English - U.S.",
    "esES": "Spanish - SP",
    "frFr": "French - FR",
    "Language": "Language"
  },
  "header": {
    "openExternalLink": "Click here to Open all the external links in a page",
    "externalLink": "External Links"
  },
  "notFound": "Oooops Page not Found Take me",
  "titles": {
    "addreference": "Add Reference",
    "referenceDisplaced": "References displayed",
    "feedback": "Feedback",
    "source": "Source",
    "usersfeedback": "Users Feedback",
    "notifications": "Notifications",
    "bookmarks": "Bookmarks"
  }
}

```

Normally the file above is long and includes all translations that are used across the SparkEd, the translation files are according to how many languages you want to support if you have your own fork of this project.
This is the english but if you want to support french you would then have a similar file then change on the values like the following:
Note: the file was truncated for brevity.

```JSON
  "titles": {
    "addreference": "Ajouter Références",
    "referenceDisplaced": "Références affichées",
    "feedback": "Commentaire",
    "source": "Source",
    "usersfeedback": "Commentaires de l'utilisateur",
    "notifications": "Notifications",
    "bookmarks": "Signets"
  }
```

This can be applied to as many languages as you would want to support.
The interesting part of this implementation is that it doesn't only affect the user interface language but also the contents that users are able to see.
The reason for this implementation is this, in the current setup of SparkEd in Ethiopia, they have different language and that means the contents delivered is should match the language in that region.

Users still have an option to choose what they want to see and what language they want to navigate SparkEd in and Administrators can choose a language whose data they are adding belongs to.

e.g: If an administrator or a content-manager is uploading a video, they can choose what language that video is in, this helps users get the right content, without digging much.

Another slightly minor feature we added was stats, Administrators initially were able to see who is viewing what resource and how many times(Thanks to Brian Mukuka) but they needed a way to also view statistics for all the contents that SparkEd has, this was a simple implementation but it was important and it comes as an update to this current version.

### ErrorBoundary

`ErrorBoundaries` were introduced in React v16 and this was an important feature for us because some components in one way or another would break in production, and when one react component breaks the whole app breaks, but with an ErrorBoundary component you can choose what to render instead and provide a better experience to the user, this can also include a guidance on how the user can troubleshoot the problem, how they can contact the maintainer or even the administrator, and this will be while the rest of the app is still functioning.
The error boundary is a component like any other, it takes children as other components. consider this example shown below.

```Javascript

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { formatText } from '../utils/utils';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, info });
    Meteor.call('logger', formatText(error, Meteor.userId(), 'error-boundary'), 'error');
  }
  takeBack = e => {
    e.preventDefault();
    return history.go(-1);
  };
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          <h1 className="notFoundHead">
            Error Happened <i className="fa fa-frown-o" />
          </h1>
          <h3 className="notFound">
            {' '}
            Sorry it seems like something went wrong <br />Try
            <a href="" onClick={e => this.takeBack(e)}>
              {' '}
              go back
            </a>
          </h3>
        </>
      );
    }
    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

```

An implement of the above component is simply to wrap another component inside the `<ErrorBoundary />`

```Javascript

    <ErrorBoundary>
        <ComponentThatCanCauseAnError />
    { /* If you want you can even nest this */ }
        <ErrorBoundary>
            <AnotherComponent />
        </ErrorBoundary>
    </ErrorBoundary>

```

The errors caught in the nested component are sent to the parent component which in this case the ErrorBoundary and you can do whatever you want to do with error.
You can read more about error boundaries from the react docs here [Error Boundaries - React](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)

In the past, JavaScript errors inside components used to corrupt React's internal state and cause it to emit cryptic errors.

## Bug Fixed

### Video updating

There was a bug that was reported, videos were not updating if you are viewing a pdf resource then you change back to video the UI wasn't noticing the change,
you can read the issue details here  
[Videos doesn't update · Issue #13 · SparkEdUAB/SparkEd](https://github.com/SparkEdUAB/SparkEd/issues/13)
The videos don't update only when you change the resource type and go back to the video.

### Broken Sidebar

The sidenav was conflicting with another implementation of a slightly different sidenav added on the dashboard and this would cause to not properly close when you intend to close it.  
[Sidenav is broken · Issue #71 · SparkEdUAB/SparkEd](https://github.com/SparkEdUAB/SparkEd/issues/71)
Due to the select I added on the home page, The sidenav which contains a lot of info like user info, dashboard link, ...

### List of uncaught errors

These weren't really bugs but errors that were not caught and could end up crashin the whole app in one or another, we gathered a list and fixed them one by one.

[List of uncaught errors · Issue #41 · SparkEdUAB/SparkEd](https://github.com/SparkEdUAB/SparkEd/issues/41)
I will be updating this list as I find more errors that were uncaught during development and I will be fixing them…github.com
Other issues closed and still can be [found here](https://github.com/SparkEdUAB/SparkEd/issues)

Check the following articles for previous release notes to learn more on what's changed since version one.

[SparkEd v1.7.0 · SparkEd](https://sparkeduab.github.io/sparked-manual/blog/2019/01/17/v1.7.0-out.html)

[SparkEd v1.8.0 · SparkEd](https://sparkeduab.github.io/sparked-manual/blog/2019/02/12/v1.8.0-out.html)

[Docker Support](https://sparkeduab.github.io/sparked-manual/blog/2019/03/21/docker-support.html)

You can also check the releases page for more insights on each release

https://github.com/SparkEdUAB/SparkEd/releases

## Releases

SparkEd releases follow semantic versioning(**semver**) with that every release carries changes that lead up a major release.

> Major.Minor.Patch

Consider version 1.8.2, The major version would be 1, the minor 8 and patch 2, patches are only counted as bug fixes that don't make any changes that affect the project then the minor releases follow an addition of some functionality the major release is when there is some big noticeable changes that users would need to know and mostly carries breaking changes.

## Contributors

As an opensource project we are always open for contributions and we appreciate those who have contributed in the past.
What's next
We are planning to migrate the stack to something different but we will keep the RFC open so that it's indicated we need the change.

V3 of SparkEd will be a complete re-write of the whole application, we will start and incrementally finish it all, the reason for this is to make sure we increase the test coverage, provide better performance a good user experience to the users.
