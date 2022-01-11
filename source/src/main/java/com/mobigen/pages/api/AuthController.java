package com.mobigen.pages.api;

import com.mobigen.framework.iris.IRISProperties;
import com.mobigen.framework.result.annotation.ResponseJsonResult;
import com.mobigen.framework.utility.RSA;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Slf4j
@RequestMapping("/api")
@Controller
@AllArgsConstructor
public class AuthController {
    private final IRISProperties properties;
    private final RSA rsa;
    private final AuthService service;

    @ResponseJsonResult
    @GetMapping("/authenticate/key")
    public Object publicKey() throws Exception {
        String base64PublicKey = null;
        if (Boolean.TRUE.equals(properties.getAuth().getRsaEnabled())) {
            base64PublicKey = rsa.getBase64PublicKeyFromKeyPair(rsa.getKeyPair());
        }
        return base64PublicKey;
    }

    @ResponseJsonResult
    @PostMapping("/authenticate")
    public Object authenticate(@RequestBody Map<String, String> param, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String username = param.get("username");
        String password = param.get("password");

        log.debug("== BEFORE RSA Password[{}]", password);
        Boolean result = properties.getAuth().getRsaEnabled();
        if (Boolean.TRUE.equals(result)) {
            password = rsa.decryptRSA(password, rsa.getKeyPair().getPrivate());
        }
        log.debug("== AFTER RSA Password[{}]", password);

        return service.authenticate(request, response, username, password);
    }
}
