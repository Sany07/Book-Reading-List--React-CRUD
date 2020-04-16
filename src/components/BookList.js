import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetail from './BookDetail';
const BookList = () => {

    const { books } = useContext(BookContext)

    return (
        books.length ?
            <div className="card">

                {books.map(book => {
                    return <BookDetail book={book} key={book.id} />

                })}

            </div> : <div className="card text-center">
                <div className="card-header">
                    Book List
                        </div>
                <div className="card-body">
                    <h5 className="card-title">Currently No Listing</h5>
                    <p className="card-text">Add Your Reading List.</p>
                </div>
            </div>
    );

}
export default BookList;
