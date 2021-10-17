import React from 'react';
import Title from '../Components/Title';
import allBlogs from '../Components/allBlogs';

function BlogPage() {
    return (
        <div>
            <div className="title">
                    <Title title={'Blog'} span={'Blog'}/>
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="/"></img>
                                <a href={blog.link} class-name="blog-link">
                                   {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogPage
