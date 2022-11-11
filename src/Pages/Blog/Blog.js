import React from 'react';
import img1 from '../../assets/blog/sql'
import img2 from '../../assets/blog/jwt'
import img3 from '../../assets/blog/jn'
import img4 from '../../assets/blog/jp'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-20'>
            <h1 className='text-4xl text-orange-600 text-center my-20 text-orange-600'>Welcome To Blog</h1>
            <h1 className='text-4xl text-green-700 mx-12'>1 .Difference between SQL and NoSQL ?</h1><br />
            <img className='w-3/5 mx-auto my-12' src={img1} alt="" />
            <p className='text-justify text-xl mx-12'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. <br /><br /> The five critical differences between SQL vs NoSQL are:

<br /> 1.SQL databases are relational, NoSQL databases are non-relational.
<br /> 2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
<br /> 3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
<br /> 4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
<br /> 5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p><br />
<h1 className='text-4xl text-green-700 mx-12'>2.What is JWT, and how does it work?</h1><br />

<img className='w-3/5 mx-auto my-12' src={img2} alt="" />

<p className='text-justify text-xl mx-12'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP) <br />

<h2>What Are Tokens?</h2><br /><br />
Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. </p> <br />
<h1 className='text-4xl text-green-700 mx-12'>3.What is the difference between javascript and NodeJS?</h1><br />

<img className='w-3/5 mx-auto my-12' src={img3} alt="" />

<p className='text-justify text-xl mx-12'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
<h3>1. NodeJS :</h3> <br />
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 

<h3>2. JavaScript :</h3> <br />
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p><br /><br />


<h1 className='text-4xl text-green-700 mx-12'>4.How does NodeJS handle multiple requests at the same time?</h1> <br />

<img className='w-3/5 mx-auto my-12' src={img4} alt="" />

<p className='text-justify text-xl mx-12'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>

        </div>
    );
};

export default Blog;