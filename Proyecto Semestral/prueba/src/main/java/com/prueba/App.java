package com.prueba;

import static spark.Spark.*;
import org.json.JSONObject;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Cars objCars = new Cars();
        
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/html/piramides", (req, res) -> {
            res.type("application/json");
            JSONObject jsonobj = new JSONObject(objCars);
            return jsonobj;
        });

        get("/html/piramides/:id", (req, res) -> {
            res.type("application/json");
            JSONObject jsonobj = new JSONObject(objCars.getCars().get(Integer.parseInt(req.params(":id")) - 1));
            return jsonobj;
        });

        post("/html/piramides", (req, res) -> {
            res.type("application/json");
            Car car = new Car();
            JSONObject body = new JSONObject(req.body());
            car.setId(objCars.getCars().size() + 1);
            car.setRecorrido(body.getString("recorrido"));
            car.setPiramide(body.getString("piramide"));
            objCars.addCar(car);
            JSONObject jsonobj = new JSONObject(objCars);
            return jsonobj;
        });
    }
}