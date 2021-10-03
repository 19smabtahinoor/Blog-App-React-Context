import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../App';

const HomeScreen = () => {
    const [blogs] = useContext(BlogContext);

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row g-4">
                    {blogs?.map(({ title, description, image }) => (
                        <div className="card col-3 p-2" style={{ width: '18rem' }} key={Math.random()}>
                            <img src={image} className="card-img-top img-fluid" alt={title} style={{height:'200px',objectFit:'cover'}} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description.slice(0, 150)}</p>
                                <Link className="btn btn-primary" to={`/${title}`}>Read More</Link>
                            </div>
                        </div>
                    ))}    
            </div>
        </div>
    )
}

export default HomeScreen
