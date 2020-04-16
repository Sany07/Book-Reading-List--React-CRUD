import React , { useContext, useState }  from 'react'
import { BookContext } from '../context/BookContext';
import { useHistory } from "react-router-dom";

  
const AddBook = () =>{
    const { addBook } = useContext(BookContext);
    const [ title ,  setTitleChangeHandler] = useState('')
    const [ author , setAuthorChangeHandler] = useState('')
    
    const history = useHistory();
    const goHome = () => history.push('/');


    const submitHandler =(event) =>{
        event.preventDefault();
        if(title === ''){
            alert('Enter Book Name')
        }else if(author === ''){

            alert('Enter Author name')
            
        }else{
            addBook(title , author);
            goHome();
        }
 
        setTitleChangeHandler('');
        setAuthorChangeHandler('');
    }
    return(

        <div style={{ margin:120 }}>

        <form onSubmit={submitHandler} className="form-group"> 
        
            <input style={{ margin:20 }} name="title" className="form-control"
             onChange={(event)=> setTitleChangeHandler(event.target.value)}
            type="text" value={title} placeholder="Enter Book Name" />

            <input style={{ margin:20 }} name="author" className="form-control"
            onChange={(event)=> setAuthorChangeHandler(event.target.value)} 
            type="text" value={author} placeholder="Enter Author Name"/>

            <button style={{ margin:20 }} onClick={submitHandler}  className="btn btn-primary" type="submit" > 
                    Submit
            </button>
        </form>
           

        </div>
    )

}

export default AddBook;
