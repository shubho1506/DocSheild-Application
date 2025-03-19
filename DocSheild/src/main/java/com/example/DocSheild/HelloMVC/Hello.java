package com.example.DocSheild.HelloMVC;

import lombok.Getter;
import org.springframework.context.annotation.Bean;

//Model - POJO
public class Hello {
    private String Name;
    private int Id;

    public Hello(int id,String name){
        this.Id = id;
        this.Name = name;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    @Override
    public String toString() {
        return "Hello{" +
                "Name='" + Name + '\'' +
                ", Id=" + Id +
                '}';
    }

}
