import React from "react";
import "./style.css";

function Saved({ books, deleteBooks }) {
  return (
    books.map(book => {
      return (
        <div key={book.id} className="container">
          <div className="card bg-warning">
            <div className="row mb-4 mt-3">
              <div className="col-lg-4 bookImage">
                {book.image ? <img src={book.image} alt="title" className="img-fluid mx-5" />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
              </div>
              <div className="col-lg-8 savedContent">
                <h2>{book.title}</h2>
                <p>{book.authors}</p>
                <p className="mr-4">{book.description}</p>
                <a className="viewBtn btn btn-primary" target="_blank" rel="noreferrer" href={book.link}>View</a>
                <button onClick={() => deleteBooks(book._id)} className=" deleteBtn btn ml-3">Remove</button> 
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Saved;