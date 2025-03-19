package com.example.DocSheild.JWTBackend;

import com.example.DocSheild.Model.User;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/auth")
//@CrossOrigin(origins = "http://localhost:5175") // Adjust based on frontend URL
@CrossOrigin(origins = "http://localhost:5175", allowedHeaders = "*", allowCredentials = "true")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private final JwtUtil jwtUtil;

    static List<User> userList = new ArrayList<>();
    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest request) {
        logger.info("Received login request: Username={} Password={}");

        String username = request.getUsername();
        String password = request.getPassword();

        if ("user".equals(username) && "password".equals(password)){
            String token = jwtUtil.generateToken(username);
            logger.info("Login successful for user: {}");
            return ResponseEntity.ok(new JwtResponse(token));
        }else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    @PostMapping("/signup")
    public  ResponseEntity<?> signUp(@RequestBody SignUpRequest request){
        String username = request.getUsername();
        String password = request.getPassword();
        String email = request.getEmail();

        userList.add(new User(username,password,email));
        return ResponseEntity.ok("User registered successfully");
    }
}

