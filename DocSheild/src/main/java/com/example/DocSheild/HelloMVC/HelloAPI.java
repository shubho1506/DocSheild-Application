package com.example.DocSheild.HelloMVC;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //restful API
@RequestMapping("/api") //class url mapping
public class HelloAPI {

    @GetMapping("/hello-api")
    public String helloAPI() {
        return "Hello Shubhodeep Sarkar";
    }
}
