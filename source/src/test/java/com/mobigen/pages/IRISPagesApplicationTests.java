package com.mobigen.pages;

import com.mobigen.framework.iris.IRISProperties;
import com.mobigen.framework.iris.Token;
import com.mobigen.framework.test.AbstractRestDocTest;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;

import javax.servlet.http.Cookie;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class IRISPagesApplicationTests extends AbstractRestDocTest {
    @Autowired
    private Token token;

    @Autowired
    private IRISProperties properties;

    private String getXAccessToken() throws Exception {
        String username = properties.getTest().getBrickUsername();
        String password = properties.getTest().getBrickPassword();
        String xAccessToken = token.getXAccessToken(username, password);
        return xAccessToken;
    }
}
