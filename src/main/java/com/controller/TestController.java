package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by aijing on 2017/10/18.
 */
@Controller
public class TestController {


    @RequestMapping(value = "/test")
    public String index(){
        return "test";
    }
}
