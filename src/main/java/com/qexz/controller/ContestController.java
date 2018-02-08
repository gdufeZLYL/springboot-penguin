package com.qexz.controller;

import com.qexz.service.ContestService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/contest")
public class ContestController {

    private static Log LOG = LogFactory.getLog(ManageController.class);

    @Autowired
    private ContestService contestService;



}
