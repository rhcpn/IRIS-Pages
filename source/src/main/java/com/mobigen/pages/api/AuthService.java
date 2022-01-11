package com.mobigen.pages.api;

import com.mobigen.framework.iris.Token;
import com.mobigen.framework.security.SessionManager;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
@AllArgsConstructor
public class AuthService {
    private final Token token;
    private final SessionManager sessionManager;

    public Object authenticate(HttpServletRequest request, HttpServletResponse response, String username, String password) throws Exception {
        String xAccessToken = token.getXAccessToken(username, password);
        sessionManager.addTokenToResponse(request, response, xAccessToken);
        return xAccessToken;
    }
}
