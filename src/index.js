import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Functional_Components/Header";
import Body from "./Functional_Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Functional_Components/About";
import Contact from "./Functional_Components/Contact";
import Error from "./Functional_Components/Error";
import RestaurantMenu from "./Functional_Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Functional_Components/Cart";
import './index.css';
import Login from "./Functional_Components/Login";
import Register from "./Functional_Components/Register";

// Chunking
// Code spliting
// dynamic bundling
// lazy loading - on demand loading

// const heading= React.createElement('h1', {}, 'Hello World with React')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// const parent=React.createElement('div', {id:'parent'},[
// React.createElement('div', {id:'child'},
// [React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
// ),
// React.createElement('div', {id:'child'},
// [React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
// )]
// )

// const root=ReactDOM.createRoot(document.getElementById('root'))

// root.render(parent)


// This is a core React
// React.createElement => object => HTMLElement(render)

// const heading=React.createElement('h1', {id : 'heading'}, 'Namaste React');

// console.log(heading);



// This is a JSX Syntax in react
// JSX - HTML like or XML like JSX

// React Element
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// React Components
// Class based Components
// Functional Components

// React Functional Components

// const HeadingComponent = ()=>{
//   return <h1>Namaste React Functional Components</h1>;
// }

// const Element1 = () => <h1>Namaste React Functional components 1</h1>

// const Element2 = <h1>Namaste React Element</h1>

// const HeadingComponent2 = () => {
//   return <div>
//     {Element1()}
//     <Element1 />
//     <Element1></Element1>
//     {Element2}
//     <h1>Namaste React Functional Components</h1>
//   </div>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<HeadingComponent2 />)



// Food App through React

const Grocery = lazy(() => import("./Functional_Components/Grocery"))

const AppLayout = () => {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    const data = {
      name: "Deepanshu"
    }
    setUserName(userName)
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>This is a grocery</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path : "/cart",
        element :<Cart/>
      },
      {
        path : "/login",
        element :<Login/>
      },
      {
        path : "/register",
        element :<Register/>
      }
    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);