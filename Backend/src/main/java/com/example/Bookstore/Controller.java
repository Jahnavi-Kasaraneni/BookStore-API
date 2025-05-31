package com.example.Bookstore;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:5173/")
public class Controller {
    private Bookservice servicebook;

    public Controller(Bookservice servicebook){
        this.servicebook=servicebook;
    }


    //to know whether this application working or not in postman app we write this function
    // @GetMapping("/books")
    // public String getallbooks(){
    // return "all books";
    // }


    //adding the record --->   (Now we add the record ,for adding the record we use @PostMapping)
    @PostMapping("/add")
    public ResponseEntity<String> addbook(@RequestBody Book bookparameter){
        boolean result=servicebook.addbook(bookparameter);
        if(result){
            return new ResponseEntity<>("successfully added", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Book not added",HttpStatus.NOT_FOUND);
        }
    }


    //retrieving all the record --> (Now lets get the records ,for getting the record we use @GetMapping)
    @GetMapping("/get")
    public List<Book> getbook(){
        return servicebook.getBooks();

    }

    //retrieving the Single Book
    @GetMapping("/getsingle/{id}")
    public Optional<Book> getindividualbook(@PathVariable Long id){
        //here we are getting only single record so we won't mention List or optional
        // so...we use only book(single book will return)
        return servicebook.getSinglebook(id);
    }

    @GetMapping("/editing/{id}")
    public Optional<Book> getIndividualToDo(@PathVariable Long id) {

        return servicebook.getSinglebook(id);
    }


    //deleting the record!!
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletebook(@PathVariable Long id){
        boolean deleted= servicebook.deletebook(id);
        if(deleted){
            return new ResponseEntity<>("deleted",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("not deleted",HttpStatus.NOT_FOUND);
        }
    }


    //updating/editing the record
    @PutMapping("/edit/{id}")
    public ResponseEntity<String> editbook(@PathVariable Long id ,@RequestBody Book editbook ){
        boolean Result= servicebook.editbook(id, editbook);
        if(Result==true)
            return new ResponseEntity<>("Book is updated",HttpStatus.OK);
        else
            return new ResponseEntity<>("Book is Not Updated",HttpStatus.NOT_FOUND);

    }
}
