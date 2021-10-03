import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blogdetails from './screens/BlogDetails';
import CreateBlog from './screens/CreateBlog';
import HomeScreen from './screens/HomeScreen';

export const BlogContext = createContext();

const App = () => {
  const [blogs,setBlogs] = useState([
    {
      title:'tesla',
      image:'https://tesla-cdn.thron.com/delivery/public/image/tesla/acf2a27a-c360-4e77-9e81-f91ec4dd5eb1/bvlatuR/std/2452x1336/lhd-interior-carousel-2-slide-4-desktop-1',
      description: 'The stumps are three vertical posts which support two bails.[1] The stumps and bails are usually made of wood, most commonly ash,[2] and together form a wicket at each end of the pitch.The overall width of each wicket is 9 inches(22.9 cm).Each stump is 28 inches(71.1 cm) tall with maximum and minimum diameters of 11⁄2 inches(3.81 cm) and 13⁄8 inches(3.49 cm).They have a spike at one end for inserting into the ground, and the other end has a U- shato provide a resting place for the bails.[3] In junior cricket the items have lesser dimensions.Each stump is referred to by a specific name'
    }
  ])
  return (
    <BlogContext.Provider value={[blogs,setBlogs]}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/create-blog" component={CreateBlog} />
        <Route exact path="/:title" component={Blogdetails} />
      </Switch>
    </BlogContext.Provider>
  )
}

export default App
