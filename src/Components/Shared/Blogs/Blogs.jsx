import React from 'react';

const Blogs = () => {
    return (
        <div className='space-y-5 mt-20 mb-20 p-5'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token and a refresh token are both used in authentication and authorization systems. Here's an overview of what they are and how they work:
                        <br />
                        <br />
                        Access Token: <br />
                        It is typically issued by an authentication server or an authorization server after a user successfully authenticates and authorizes access.
                        <br />
                        <br />
                        Refresh Token:
                        <br />
                        A refresh token is a credential that is used to obtain a new access token once the current access token expires.
                        It is typically issued alongside the access token and has a longer lifespan than the access token.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>Differences between SQL and NoSQL are:
                        <br /> SQL databases are relational, and NoSQL databases are non-relational.
                        <br /> SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        <br /> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        <br /> SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        <br /> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Next JS?
                </div>
                <div className="collapse-content">
                    <p>js and Express. js are two different frameworks that are used to build different sets of applications. While ExpressJs is a Node. js-based web application framework to build APIs and server-side applications, NextJs on the other hand is a react-based framework used for creating static websites and SEO optimizations.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>When working with data in MongoDB, you may quickly have to run complex operations, with multiple stages of operations to gather metrics for your project.

                    Generating reports and displaying useful metadata are just two major use cases where MongoDB aggregation operations can prove incredibly useful, powerful, and flexible.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;