package com.example.DocSheild.HelloMVC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class HelloController {

    //say-hello
    @RequestMapping("/say-hello-html")
    @ResponseBody
    public String sayHelloHTML(){
        StringBuffer sb = new StringBuffer();
        sb.append("<!DOCTYPE html>");
        sb.append("<html lang=\"en\">");
        sb.append("<head>");
        sb.append("<meta charset=\"UTF-8\">");
        sb.append("<title>My first Web Page</title>");
        sb.append("</head>");
        sb.append("<body>");
        sb.append("My First Web page with spring ");
        sb.append("</body>");
        sb.append("</html>");
        return sb.toString();
    }


    //say-hello-jsp => sayHello.jsp
    @RequestMapping("/say-hello-jsp")
    @ResponseBody
    public String sayHello(){
        return "HelloController";
    }

    private HelloService _helloService;

    public HelloController(HelloService helloService){
        this._helloService = helloService;
    }

    //listing Helloes
    @GetMapping("/getAllHelloes")
    @ResponseBody //telling the spring to directly  return this JSON and not a view
    public List<Hello> getAllHelloes(){
        List<Hello> allHelloes = _helloService.findAllHelloes();
        return allHelloes.stream().toList();
    }

    @GetMapping("/getHelloByName")
    @ResponseBody
    public List<Hello> getHelloByUsername(@RequestParam String name){
        List<Hello> helloes = _helloService.findHelloByName(name);
        return helloes;
    }

    @GetMapping("/getHelloById")
    @ResponseBody
    public String getHelloById(@RequestParam int id){
        return _helloService.findHelloById(id);
    }

    @RequestMapping("/deleteHelloById")
    @ResponseBody
    public String deleteHelloById(@RequestParam int id){
        _helloService.deleteHelloById(id);
        return "deleted the hello by Id";
    }

    @RequestMapping("/deleteHelloByName")
    @ResponseBody
    public String deleteHelloByName(@RequestParam String name){
        _helloService.deleteHelloByName(name);
        return "deleted the hello by Name";
    }

    @GetMapping("/updateHelloById")
    @ResponseBody
    public String updateHelloById(@RequestParam int id, @RequestParam String name){
        _helloService.updateHelloById(id, name);
        return _helloService.findHelloById(id);
    }

    @GetMapping("/updateHelloByName")
    @ResponseBody
    public List<Hello> updateHelloByName(@RequestParam String name, @RequestParam String newName){
        _helloService.updateHelloByName(name, newName);
        return _helloService.findHelloByName(newName);
    }

    @PostMapping("/addHello")
    @ResponseBody
    public String addHello(@RequestParam int id, @RequestParam String name) {
        _helloService.addHello(id, name);
        return "Added new hello: " + name + " with ID: " + id;
    }

}
