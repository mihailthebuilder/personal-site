# Portfolio Site

My portfolio site. Made with a [React](https://reactjs.org/) front-end and [Firebase](https://www.firebase.com/) back-end.

# Table of Contents

- [Portfolio Site](#portfolio-site)
- [Table of Contents](#table-of-contents)
- [Firebase Setup](#firebase-setup)
  - [Cloud Firestore](#cloud-firestore)
  - [Cloud Storage](#cloud-storage)
  - [Google Analytics](#google-analytics)
- [Animations](#animations)
  - [`startAnimationFunction()`](#startanimationfunction)
  - [Typewriter](#typewriter)
  - [Landing](#landing)
  - [About](#about)
  - [Projects](#projects)
  - [Contact](#contact)
- [Responsive Design](#responsive-design)

# [Firebase](https://www.firebase.com/) Setup

I wanted to set up a back-end service that would act as the CMS for my projects. I picked Firebase because it's simple, robust, secure and it offers a free plan (very important for now :D). I am leveraging the following products from their suite:

## [Cloud Firestore](https://firebase.google.com/products/firestore)

A NoSQL database that enables me to store all the non-image data.

![firestore](./demo/firestore.png)

Each project is represented by a document inside the `projects` collection. All the data is loaded right after the [`Project`](src/components/Projects/index.jsx) component is mounted:

```js
const [projectList, setProjectList] = useState([]);
useEffect(() => {
  fire
    .firestore()
    //access the "projects" collection in firestore
    .collection("projects")
    //sort document objects by publication date in descending order
    .orderBy("publication_date", "desc")
    .get()
    .then((querySnapshot) => {
      //add the projects one by one to the projectList state
      let newProjectList = [];
      querySnapshot.forEach((doc) => {
        const project = {
          //include the document ID in projectList
          id: doc.id,
          ...doc.data(),
        };
        newProjectList = newProjectList.concat(project);
      });
      setProjectList(newProjectList);
    })
    .catch((error) => {
      console.log("Error getting project data", error);
    });
}, []);
```

The API for my database in publicly-accessible, so I've set up read-only access to avoid any tampering with the data.

## [Cloud Storage](https://firebase.google.com/products/storage)

Used to store content - in my case, it's screenshots of the websites I've built.

![storage](./demo/storage.png)

I send a request to its API every time a project is displayed in the [`Project`](src/components/Projects/index.jsx) component:

```jsx
// the data for the project displayed is in the focusProject state
const [focusProject, setFocusProject] = useState({
  id: "",
  image_src: "",
  description: "",
  title: "",
  website_link: "",
  github_link: "",
});
//projectIndex indicates which project in projectList is shown
const [projectIndex, setProjectIndex] = useState(0);

useEffect(() => {
  if (projectList.length > 0) {
    const project = projectList[projectIndex];

    //access Cloud Storage API
    fire
      .storage()
      .ref()
      //get the URL for the image
      .child(`img/${project.id}.png`)
      .getDownloadURL()
      .then((url) => {
        //add it to the focus project
        setFocusProject({ image_src: url, ...project });
      })
      .catch((error) => {
        console.log("Error getting image: ", error);
      });
  }
}, [projectIndex, projectList]);

//...code

return (
  //...code
  /* where the Cloud Storage API response data is used */
  <img
    src={focusProject.image_src}
    //..code
  />
  //...code
);
```

As with [Cloud Firestore](#cloud-firestore), the API can be queried by anyone on the Internet so I set up read-only access.

## [Google Analytics](https://firebase.google.com/products/analytics)

It's incredibly easy to plug Google Analytics with Firebase. All I needed to run is this statement in [fire.js](./src/resources/fire.js):

```js
firebase.analytics();
```

![analytics](./demo/analytics.png)

# Animations

## `startAnimationFunction()`

## Typewriter

## Landing

## About

## Projects

## Contact

# Responsive Design
