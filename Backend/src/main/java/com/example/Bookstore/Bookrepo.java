package com.example.Bookstore;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface Bookrepo extends JpaRepository<Book,Long> {
}
