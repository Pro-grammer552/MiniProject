package com.MiniProject.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MiniProject.model.Login;
import com.MiniProject.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginrepo;

	public void saveLogins(Map<String, String> loginData) {
		Login l = new Login();
		l.setFirstname(loginData.get("firstName"));
		l.setLastName(loginData.get("lastName"));
		l.setEmailId(loginData.get("email"));

		loginrepo.save(l);
	}
	
	
	public List<Login > getAlllogins()
	{
		return loginrepo.findAll();
	}


	 public void updateLogin(int id, Map<String, String> map) {
	        Optional<Login> optionalLogin = loginrepo.findById(id);

	        if (optionalLogin.isPresent()) {
	            Login existingLogin = optionalLogin.get();
	            existingLogin.setFirstname(map.get("firstName"));
	            existingLogin.setLastName(map.get("lastName"));
	            existingLogin.setEmailId(map.get("email"));

	            loginrepo.save(existingLogin);
	        }
	    }

	    public void deleteLogin(int id) {
	        loginrepo.deleteById(id);
	    }
	    
	    public Login getLoginById(int id) {
	        return loginrepo.findById(id).orElse(null);
	    }

}
