package com.example.Bookstore;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Bookservice {
    private List<Book> bookstore=new ArrayList<>();

    @Autowired
Bookrepo repo;
    //adding the record
    Long nextid = 1L;
    public boolean addbook(Book bookparameter){
//        bookparameter.setId(nextid++);
//        bookstore.add(bookparameter);
        repo.save(bookparameter);
        return true;
    }

    //retrieving all the records
    public List<Book> getBooks()
    {
//        return bookstore;
        return repo.findAll();
    }


    //retrieving the Single Book
    public Book getindividualbook(Long id)
    {
        //looping all books
        for(Book books:bookstore){
            if(books.getId().equals(id)){
                return books;
            }
        }
        return null;
    }

    //deleting the record
    public boolean deletebook(Long id)
    {
//        return bookstore.removeIf(book -> book.getId().equals(id));
        Optional<Book> dataById=repo.findById(id);

        if(dataById.isPresent()){
            repo.deleteById(id);
            return true;
        }
        else{
            return false;
        }
    }


    //updating/modifying/editing the record
    public boolean editbook(Long id, Book editbook)
    {
//        for(Book book:bookstore)
//        {
//            if(book.getId().equals(id))
//            {
//                book.setTitle(editbook.getTitle());
//                book.setAuthorname(editbook.getAuthorname());
//                book.setIsbn(editbook.getIsbn());
//                book.setPrice(editbook.getPrice());
//                book.setPublisher(editbook.getPublisher());
//                book.setNoc(editbook.getNoc());
//                book.setNop(editbook.getNop());
//                return true;
//            }
//        }
//        return false;
        Optional<Book> databyid=repo.findById(id);
        if(databyid.isPresent()){
            Book dbdata=databyid.get();
            dbdata.setTitle(editbook.getTitle());
            dbdata.setAuthorname(editbook.getAuthorname());
            dbdata.setIsbn(editbook.getIsbn());
            dbdata.setPrice(editbook.getPrice());
            dbdata.setPublisher(editbook.getPublisher());
            dbdata.setNoc(editbook.getNoc());
            dbdata.setNop(editbook.getNop());
            repo.save(dbdata);
            return true;
        }
        else{
            return false;
        }

    }

    public Optional<Book> getSinglebook( Long id){
        return repo.findById(id);
    }
}
