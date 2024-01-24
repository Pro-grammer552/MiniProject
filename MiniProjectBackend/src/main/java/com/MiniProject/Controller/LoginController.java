package com.MiniProject.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MiniProject.Service.LoginService;
import com.MiniProject.model.Login;

import jakarta.persistence.EntityNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginserv;

	@PostMapping("/saveLogins")
	public void saveLogins(@RequestBody Map<String, String> map) {
		loginserv.saveLogins(map);
	}

	@GetMapping("/getAllLogins")
	public ResponseEntity<List<Login>> getAllLogins() {
        try {
            List<Login> logins = loginserv.getAlllogins();
            return new ResponseEntity<>(logins, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception or handle it in a way that makes sense for your application
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
    @DeleteMapping("/deleteLogin/{id}")
    public ResponseEntity<String> deleteLogin(@PathVariable int id) {
        try {
            loginserv.deleteLogin(id);
            return new ResponseEntity<>("Login deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting login", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateLogin/{id}")
    public ResponseEntity<String> updateLogin(@PathVariable int id, @RequestBody Map<String, String> map) {
        try {
            loginserv.updateLogin(id, map);
            return ResponseEntity.ok("Login updated successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Login not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating login");
        }
    }
    
    @GetMapping("/view/{id}")
    public ResponseEntity<?> viewDetailsById(@PathVariable int id) {
        try {
            Login login = loginserv.getLoginById(id);

            if (login != null) {
            	 return new ResponseEntity<>(login, HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Login details not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving login details");
        }
    }


}
