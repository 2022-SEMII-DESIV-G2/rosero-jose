package com.prueba;

import java.util.ArrayList;

public class Cars {
  ArrayList<Car> cars = new ArrayList<Car>();

  public ArrayList<Car> getCars() {
    return cars;
  }

  public void addCar(Car car) {
    cars.add(car);
  }
}
