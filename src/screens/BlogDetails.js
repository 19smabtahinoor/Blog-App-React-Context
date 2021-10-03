import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../App';

const Blogdetails = () => {
    const [blogs] = useContext(BlogContext);
    const params = useParams()

    return (
        <div className="container mx-auto" style={{ margin: '100px 0px' }}>
                {
                blogs?.filter((blog) => {
                    return blog.title === params.title
                })?.map(({ title, description, image }) => (
                    <div className="card w-100 mx-auto" style={{ width: '18rem' }} key={Math.random()}>
                        <img src={image} style={{width:'100%',objectFit:'cover'}} alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Blogdetails
