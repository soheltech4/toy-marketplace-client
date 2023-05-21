import React from 'react';

const ClientComment = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-white bg-black rounded-lg p-3 mt-10 mb-5'>Client Comment</h1>
            <div className='md:flex justify-center gap-5'>
                <div className='text-center border-2 rounded-lg p-5 shadow-sm'>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <img src="https://i.ibb.co/zHs2swh/photo-1507003211169-0a1dd7228f2d.jpg" />
                        </div>
                    </div>
                    <p className='tex-xl font-bold'>John Doe</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt semper ex, sit amet tristique lacus aliquam et.</p>
                </div>
                <div className='text-center border-2 rounded-lg p-5 shadow-sm'>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <img src="https://i.ibb.co/6wPmFVJ/photo-1438761681033-6461ffad8d80.jpg" />
                        </div>
                    </div>
                    <p className='tex-xl font-bold'>David Johnson</p>
                    <p>Nulla facilisi. Sed semper ex in metus scelerisque, eget consectetur enim consectetur. Vivamus nec ipsum id elit tempus bibendum</p>
                </div>
                <div className='text-center border-2 rounded-lg p-5 shadow-sm'>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <img src="https://i.ibb.co/g9g6Jyk/photo-1500648767791-00dcc994a43e.jpg" />
                        </div>
                    </div>
                    <p className='tex-xl font-bold'>Watson</p>
                    <p>Fusce eget sapien gravida, molestie nisi ac, pharetra metus. Sed in ullamcorper urna, id convallis neque.</p>
                </div>
            </div>
        </div>
    );
};

export default ClientComment;