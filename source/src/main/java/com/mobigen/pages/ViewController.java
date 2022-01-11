package com.mobigen.pages;

import com.mobigen.framework.iris.User;
import com.mobigen.framework.security.SessionManager;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
@AllArgsConstructor
public class ViewController {
    private final SessionManager sessionManager;

    @GetMapping("/")
    public String index() {
        User user = sessionManager.getUser();
        if (null == user) {
            return "index";
        }
        return "app";
    }

    /**
     * Vue Route가 History 모드 일 경우, route 설정대로 Controller 에
     * 넘어오게 되어 있는데 이때 세션이 있는 상태이면 메인 페이지로 돌릴 수 있어야 함
     */
    @GetMapping("/error")
    public String error() {
        return index();
    }

    @GetMapping("/app")
    public String app() {
        return "app";
    }
}
