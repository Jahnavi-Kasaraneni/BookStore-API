package com.example.Bookstore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

    private String title;

    private String authorname;

    private Long isbn;

    private Long price;

    private String publisher;

    private Long noc;

    private Long nop;


    //non parameterized constructor
    public Book(){

    }

    public Book(Long id, String title, String authorname, Long isbn, Long price, String publisher, Long noc, Long nop) {
        this.id = id;
        this.title = title;
        this.authorname = authorname;
        this.isbn = isbn;
        this.price = price;
        this.publisher = publisher;
        this.noc = noc;
        this.nop = nop;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthorname() {
        return authorname;
    }

    public void setAuthorname(String authorname) {
        this.authorname = authorname;
    }

    public Long getIsbn() {
        return isbn;
    }

    public void setIsbn(Long isbn) {
        this.isbn = isbn;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Long getNoc() {
        return noc;
    }

    public void setNoc(Long noc) {
        this.noc = noc;
    }

    public Long getNop() {
        return nop;
    }

    public void setNop(Long nop) {
        this.nop = nop;
    }
}
