import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='qa-container'>
                <h2>Today's Blog📝:</h2>
                <div>
                    <h3>Q1: Difference between javascript and nodejs?</h3>
                    <p>Ans: 1. Javascript is a programming language, but nodejs is a server-side javascript runtime environment that allows js to run in backend. <br />
                        2. Js is used in front end however ndejs is used in backend. <br />
                        3. Js framework example: Jquery, Angular, Next.js etc. but nodejs frameworks are Expressjs, meteor etc. <br />
                        4. Js can be run in browser, but it can be run in server side with the help of nodejs.</p>
                </div>
                <div>
                    <h3>Q2: When should you use nodejs and when should you use mongodb?</h3>
                    <p>Ans: nodeJs is a server side Js runtime environment. That allows to run js on server side. Nodejs is used as a server to make a connection between the client side and the database. On the other hand mongodb is itself a database. It's a nosql database. client side retrives data from database like mongodb using nodejs. User can create, read, update, delete data from mongodb.</p>
                </div>
                <div>
                    <h3>Q3:  Differences between sql and nosql databases?</h3>
                    <p>Ans: 1. SQL database store data in tables but nosql databases store data as object or json. <br />
                        2. sql is more structured but  nosql is flexible.
                        3. sql example: Mysql, oracle etc. but nosql example mongodb. <br />
                        4. sql databases are scalable vertically but nosql is scalable horizontally.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;