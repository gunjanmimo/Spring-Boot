package com.example.demo.dependency_demo;

import org.springframework.stereotype.Component;

@Component
public class Technologies {
    private int techid;
    private String techName;

    public int getTechid() {
        return techid;
    }

    public void setTechid(int techid) {
        this.techid = techid;
    }

    public String getTechName() {
        return techName;
    }

    public void setTechName(String techName) {
        this.techName = techName;
    }

    public void tech() {
        System.out.println("tech class completed");
    }
}
