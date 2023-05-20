import React from 'react';

const Blogs = () => {
    return (
        <div className='space-y-5 mt-20 mb-20 p-5'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={2} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={3} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;