import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { BlogContext } from '../App';

const CreateBlog = () => {
    // eslint-disable-next-line no-unused-vars
    const [blogs,setBlogs] = useContext(BlogContext);
    const [input,setInput] = useState({
        title:'',
        image:'',
        description:'',
    })
    const history = useHistory()

    //handle change 
    const handleChange = (e) => {
        const {value, name} = e.target ;
        setInput((prevValue) => {
            return{
                ...prevValue,
                [name]:value
            }
        })
    }
    
    //handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        setBlogs((prevValue) => {
            return  [
                ...prevValue,
                {
                    title: input.title,
                    image: input.image,
                    description: input.description,
                }
            ]
        })
        history.push('/')
        
    }

    return (
        <>
            <main>
                <section className="container px-5 create_bog_wrapper">
                    <h1 className="roleway_font text-center mb-4">Create a new blog</h1>

                    {/* title and blogs  */}
                    <div className="w-100 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="blog_title" className="form-label h6">🚀 Blog Title</label>
                                <input 
                                type="text" 
                                className="form-control" id="blog_title" placeholder="Blog Title" 
                                    value={input.title}
                                    name="title"
                                    onChange={handleChange}
                                />
                            </div>
                            {/* cover image link  */}
                            <div className="mb-4">
                                <label htmlFor="image_link" className="form-label h6">📸 Blog Cover Image </label>
                                <input 
                                type="text" 
                                    className="form-control" id="image_link" placeholder="Blog Cover Image Link"
                                    value={input.image}
                                    name="image"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="blog_details" className="form-label h6">✍ Write your blog</label>
                                <textarea 
                                className="form-control" id="blog_details" 
                                rows="6"
                                placeholder="Write your blog here......."
                                    value={input.description}
                                    name="description"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 py-2">📢 Publish</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CreateBlog
