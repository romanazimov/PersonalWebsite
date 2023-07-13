import BlogData from '../Components/blog/BlogData'
import '../Components/blog/BlogPost.css'

function Blog() {
    return (
        <div>
            <h1>2023</h1>
            {BlogData.map((blogPost) => (
                <div key={blogPost.id}>
                    <li className='blog-post-name'>{blogPost.name}</li>
                </div>
            ))}

            <div className='blog-container'>
                <div className='blog-upper'>
                    <img className='blog-img' alt=''/>
                </div>
                <p className='blog-short-summary'>
                    JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code in your JavaScript files. It is a syntax extension provided by React and is used to describe the structure and appearance of UI components. JSX gets transformed into regular JavaScript during the build process. JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code in your JavaScript files. It is a syntax extension provided by React and is used to describe the structure and appearance of UI components. JSX gets transformed into regular JavaScript during the build process.
                </p>
            </div>
        </div>
    );
}

export default Blog;