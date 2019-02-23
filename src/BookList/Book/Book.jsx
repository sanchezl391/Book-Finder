import React from 'react';
import './Book.scss';

const book = () => {
    return (
        <div className="book-container">
            <h3>Book Title</h3>
            <div className="body">
                <div className="front">
                    <img src="https://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71O9akYeAAY_2fL4ZRACrB4dhfb0DnJPFM3hCTk69hOX99C9iTCboKZs3R2BcLhEDWzB13ql34fqr7C-j5VcVIwZAUA1uWhNu5_qkillrQg_57WBgpp6XOLSC1T_Gn-lpJDPnM_&source=gbs_api" alt="book cover"/>
                </div>
                <div className="back">
                    <a href="#">
                        back data
                    </a>
                </div>
            </div>
        </div>
    );
};

export default book;
