import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import EditBook from './EditBook';

const BookDetail = ({ book }) => {

    const { removeBook } = useContext(BookContext)
    const { editBook } = useContext(BookContext)
    const [isEdit, setTrue] = useState(!true)


    return (
        <div className="card" >
            <h5 className="card-header">
                <div onClick={() => removeBook(book.id)} className="btn btn-primary">Delete</div>
                {
                    isEdit === false ?
                        <div onClick={() => setTrue()} className="btn btn-primary ml-5">Edit</div>
                        :
                        <div onClick={() => setTrue(!true)} className="btn btn-primary ml-5">Back</div>
                }
            </h5>
            <div className="card-body">
                {
                    isEdit === false ?
                        <h5 className="card-title">{book.title}</h5>
                        :
                        <EditBook id={book.id} title={book.title} editBook={editBook} setTrue={setTrue} />}
                <p className="blockquote-footer">{book.author}</p>
            </div>
        </div>


    );
};

export default BookDetail;