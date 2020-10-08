package com.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add((new Todo(++idCounter, "gunjan", "learn to dance", new Date(), false)));
        todos.add((new Todo(++idCounter, "gunjan", "learn to Angular", new Date(), false)));
        todos.add((new Todo(++idCounter, "gunjan", "learn to microservices", new Date(), false)));
        todos.add((new Todo(++idCounter, "gunjan", "learn to make cake", new Date(), false)));
        todos.add((new Todo(++idCounter, "gunjan", "learn Docker", new Date(), false)));
        todos.add((new Todo(++idCounter, "gunjan", "learn to Kubernates", new Date(), false)));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null) return null;
        todos.remove(todo);
        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
