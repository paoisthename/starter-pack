## Built with VITE + ReactJS
#### To run, on your terminal run the code:

```
cd /path/to/starter-pack
npm install
npm run dev
```

#### Directory Explanation

- ``public`` - put assets like images on the images folder
- ``pages`` - this will contain the pages you will be adding (Home, About, Services, Contact)
- ``components`` - this contains reusable code such as the Layout and Navigation
  - For example, you will need to create a reusable Link. You can create a file inside the Components folder then use it as such:
  ```
  import React from 'react';
  
  const ButtonLink = ({children}) => (
    <a href="" className="tailwindclasses">
     {children}
    </a>
  );
  ```
  Explanation: Children is a prop (property) of the component you can implement this to other pages/components like:
  ```
  <ButtonLink>Link Text</ButtonLink>
  ``` 
  
#### File Explanation

- ``Routing.jsx`` this contains the list of routes/paths for your website
    - Example:
  ```
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
  ```
  If you want to add a path/page you can add a new line like this:
  ```
  <Route path="/about" element={<About />} />
  ```
  ``path`` is the link that will be shown in your browser
  
  ``element`` is the page that will be shown when the browser goes to the path configured

    Result:
    ```
    import {BrowserRouter, Route, Routes} from "react-router-dom";
    import Home from "./pages/Home.jsx";
    import About from "./pages/About.jsx";
    import Layout from "./components/Layout.jsx";
    
    const Routing = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    };
    
    export default Routing;
    ```
  
- ``App.css`` this will contain your custom CSS