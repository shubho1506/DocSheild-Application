package com.example.DocSheild.HelloMVC;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service //service is in Model and handles buisness Logic of the application
public class HelloService {

    private static List<Hello> helloList = new ArrayList<>();

    static {
        helloList.add(new Hello(1,"Shubhodeep"));
        helloList.add(new Hello(2,"Aman"));
    };

    public void addHello(int id,String name){
        helloList.add(new Hello(id,name));
    }

    public List<Hello> findHelloByName(String name){
        Predicate<Hello> helloPredicate = hello -> hello.getName().equalsIgnoreCase(name);
        return helloList.stream().filter(helloPredicate).toList();
    }

    public String findHelloById(int id){
        Predicate<Hello> helloPredicate = hello -> hello.getId()==id;
        return helloList.stream().filter(helloPredicate).toString();
    }

    public List<Hello> findAllHelloes(){
        return helloList;
    }

    public void deleteHelloById(int id){
        helloList.removeIf(a -> a.getId()==id);
    }

    public void deleteHelloByName(String name){
        helloList.removeIf(a -> a.getName().equalsIgnoreCase(name));
    }

    public void updateHelloById(int id, String name) {
        helloList = helloList.stream()
                .map(hello -> hello.getId() == id ? new Hello(id, name) : hello)
                .toList();
    }


    public void updateHelloByName(String name, String newName) {
        helloList.forEach(hello -> {
            if (hello.getName().equalsIgnoreCase(name)) {
                hello.setName(newName);
            }
        });
    }

}
