// src/Data/WeatherData.js

class WeatherData {
    constructor() {
      this.weatherQueue = [];
      this.weatherStack = [];
      this.weatherMap = new Map();
    }
  
    // Add weather data to the queue (FIFO)
    addWeatherToQueue(data) {
      this.weatherQueue.push(data);
      if (this.weatherQueue.length > 5) {
        this.weatherQueue.shift();  // Keep only the last 5 entries
      }
    }
  
    // Push weather data to the stack (LIFO)
    addWeatherToStack(data) {
      this.weatherStack.push(data);
    }
  
    // Pop weather data from the stack (Undo the last action)
    undoWeatherStack() {
      return this.weatherStack.pop();
    }
  
    // Add weather data to the map for fast lookup by location
    addWeatherToMap(location, data) {
      this.weatherMap.set(location, data);
    }
  
    // Get weather data from the map by location
    getWeatherFromMap(location) {
      return this.weatherMap.get(location);
    }
  
    // Get all data in the queue
    getWeatherQueue() {
      return this.weatherQueue;
    }
  
    // Get all data in the stack
    getWeatherStack() {
      return this.weatherStack;
    }
  }
  
  // Exporting the class with a named export
  export { WeatherData };
  