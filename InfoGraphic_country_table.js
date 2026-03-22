const cases = [
  {
    "country": "AT",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 12.8
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 39.3
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 34.4
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.0
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 51.8
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 41.8
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 5.4
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 4.1
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 41.7
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 48.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 5.4
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 16.4
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 34.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 29.8
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 19.3
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 11.2
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 36.3
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 44.0
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 8.5
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 12.5
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 29.8
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 38.5
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 52.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 23.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 22.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 16.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 43.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 30.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 10.0
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 23.4
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 40.1
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 30.1
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 6.4
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 3.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 7.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 33.1
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 56.1
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 9.9
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 53.8
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 20.5
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 15.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 8.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 13.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 53.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 25.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 4.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 6.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 24.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 65.3
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 9.2
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.5
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 32.6
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 47.7
      }
    ]
  },
  {
    "country": "BE",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 12.7
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 28.8
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 31.1
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 27.4
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.8
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 30.5
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 57.5
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 10.1
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.5
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 40.0
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 46.7
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.9
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 8.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 29.6
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 32.1
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 29.5
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 15.5
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 29.9
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 41.1
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 20.7
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 28.5
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 33.7
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 17.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 4.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 48.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 23.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 23.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 17.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 44.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 28.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 9.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 20.8
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 35.2
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 34.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 9.3
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 19.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 19.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 28.6
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 31.6
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 9.0
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 51.3
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 22.2
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 16.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 25.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 46.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 12.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 11.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 16.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 31.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 41.3
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 7.7
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.3
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 28.4
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 53.5
      }
    ]
  },
  {
    "country": "BG",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 31.5
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 31.9
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 31.5
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 36.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 48.9
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 12.8
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 41.5
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 11.5
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 10.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 32.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 32.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 24.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 4.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 27.2
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 57.0
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 11.8
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 22.4
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 46.9
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 23.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 36.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 20.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 40.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 15.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 28.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 40.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 15.2
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 30.9
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 35.6
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 27.1
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 6.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 10.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 13.5
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 25.8
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 49.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 8.9
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 50.1
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 23.5
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 15.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 15.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 49.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 11.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 12.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 34.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 42.0
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 15.1
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 15.1
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 32.9
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 37.0
      }
    ]
  },
  {
    "country": "CH",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 8.2
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 34.4
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 38.7
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 18.8
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.0
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 37.5
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 50.3
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 11.2
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.8
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 40.4
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 47.7
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.2
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 14.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 30.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 27.6
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 26.9
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 9.5
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 29.2
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 46.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 14.8
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 9.1
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 23.9
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 42.6
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 24.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 42.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 22.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 33.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 17.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 43.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 32.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 6.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 19.9
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 38.4
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 33.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 8.0
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 11.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 10.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 31.7
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 47.0
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 12.6
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 50.7
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 19.2
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 9.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 53.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 20.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 7.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 13.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 29.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 50.1
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.9
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 14.0
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 30.5
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 44.7
      }
    ]
  },
  {
    "country": "CZ",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 12.6
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 45.0
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.5
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 9.0
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.9
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 47.8
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 44.5
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.9
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.0
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 45.9
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 47.9
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 5.2
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 20.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 44.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 25.6
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 9.8
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 8.3
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 41.7
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 44.9
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 5.1
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 11.2
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 38.1
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 38.0
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 12.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 63.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 18.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 15.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 15.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 51.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 30.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 2.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 27.3
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 38.9
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 28.3
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 5.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 3.3
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 9.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 40.4
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 46.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 6.4
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 49.9
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 28.7
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 15.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 17.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 57.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 18.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 4.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 7.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 33.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 54.8
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 5.8
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.5
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 43.1
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 40.6
      }
    ]
  },
  {
    "country": "DE",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 11.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 33.4
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 34.6
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 20.9
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.1
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 45.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 45.7
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 7.7
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 37.6
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 50.5
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.3
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 21.1
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 32.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 29.4
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 17.3
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 10.1
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 33.6
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 45.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 10.9
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 15.1
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 28.7
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 35.5
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 20.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 48.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 24.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 23.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 28.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 35.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 28.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 7.2
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 22.5
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 36.5
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 30.5
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 10.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 8.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 12.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 35.3
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 43.6
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 10.3
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 56.3
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 18.1
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 15.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 8.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 14.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 54.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 22.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 6.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 9.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 26.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 58.7
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 9.2
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 12.7
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 32.7
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 45.3
      }
    ]
  },
  {
    "country": "DK",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.9
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 31.7
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 34.4
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 28.0
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 2.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 42.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 45.5
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 9.1
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 4.7
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 45.6
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 40.6
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 9.1
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 13.4
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 30.1
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 25.2
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 31.3
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 23.1
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 29.0
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 34.4
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 14.9
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 30.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 33.7
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 21.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 6.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 49.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 24.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 22.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 40.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 28.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 8.8
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 22.1
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 36.3
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 34.5
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 7.1
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 12.1
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 15.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 27.8
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 44.8
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 13.5
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 50.5
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 14.8
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 21.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 18.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 24.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 43.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 8.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 15.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 31.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 44.9
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 13.1
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 14.8
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 30.5
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 41.6
      }
    ]
  },
  {
    "country": "EE",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 3.4
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 27.4
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 39.9
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 29.3
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.8
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 46.0
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 43.9
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 9.3
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 42.1
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 48.0
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 8.8
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 10.0
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 31.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 27.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 31.0
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 12.8
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 35.9
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 35.8
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 15.6
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 10.7
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 33.1
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 39.7
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 16.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 42.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 22.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 32.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 20.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 43.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 30.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 6.1
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 30.2
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 36.5
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 27.9
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 5.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 14.7
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 20.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.1
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 32.4
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 11.1
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 49.3
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 23.4
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 16.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 22.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 23.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 44.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 10.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 14.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 19.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 32.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 34.4
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 15.9
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 18.2
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 31.9
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 34.0
      }
    ]
  },
  {
    "country": "ES",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 16.9
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 30.9
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 29.7
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 22.5
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.5
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 49.4
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 42.6
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.5
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 27.9
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 50.1
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 20.3
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 3.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 18.0
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 30.3
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 47.8
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 1.9
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 10.0
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 72.9
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 15.1
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 4.8
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 21.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 46.1
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 27.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 25.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 15.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 57.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 10.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 28.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 43.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 18.4
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 27.9
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 28.7
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 33.8
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 9.6
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 8.6
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 15.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 38.3
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 37.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 25.0
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 52.2
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 11.8
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 10.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 12.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 17.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 58.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 11.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 10.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 15.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 41.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 33.0
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.5
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 17.5
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 48.9
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 23.1
      }
    ]
  },
  {
    "country": "FI",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 2.9
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 24.3
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.1
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 39.7
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.3
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 35.1
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 50.4
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 13.2
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 40.0
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 45.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 12.1
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 13.6
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 29.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 29.3
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 27.2
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 17.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 35.4
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 34.7
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 12.9
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 17.1
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 34.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 28.9
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 3.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 38.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 17.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 40.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 19.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 33.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 36.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 11.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 26.1
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 35.1
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.4
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 7.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 13.5
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 18.6
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 33.6
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 34.3
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 24.1
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 51.2
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 13.1
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 11.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 22.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 19.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 40.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 18.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 8.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 14.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 36.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 39.8
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 11.6
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.1
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 31.1
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 47.2
      }
    ]
  },
  {
    "country": "FR",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 24.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 30.3
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 29.0
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 16.7
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 2.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 47.8
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 43.5
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.0
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 4.1
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 40.2
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 45.6
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.1
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 11.6
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 26.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 34.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 26.6
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 8.4
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 28.3
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 51.9
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 11.5
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 17.1
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 33.0
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 35.6
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 14.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 3.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 48.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 20.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 27.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 23.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 41.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 25.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 9.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 22.0
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 34.3
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 12.1
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 6.6
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 11.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.0
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 50.4
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 12.7
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 53.9
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 17.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 15.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 11.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 18.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 52.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 11.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 35.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 45.7
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 6.0
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 11.4
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 32.2
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 50.4
      }
    ]
  },
  {
    "country": "GR",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 7.7
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 41.0
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 32.5
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 18.8
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.4
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 50.2
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 43.1
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.3
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.0
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 44.1
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 46.7
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 8.3
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 3.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 37.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 41.1
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 17.7
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 2.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 16.5
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 73.4
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 8.2
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 6.3
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 28.9
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 41.4
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 23.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 0.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 29.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 15.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 53.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 10.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 29.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 47.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 13.3
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 21.7
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 34.7
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 37.2
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 6.3
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 5.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 9.6
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 29.8
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 55.3
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 6.8
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 54.1
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 20.4
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 18.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 6.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 11.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 63.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 18.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 3.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 9.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 29.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 57.6
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.8
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.7
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 37.8
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 40.6
      }
    ]
  },
  {
    "country": "HR",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.3
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 35.2
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 40.3
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 19.3
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.4
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 55.1
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 41.3
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 3.2
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.5
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 46.5
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 45.3
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 7.7
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 9.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 37.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 35.3
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 18.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 3.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 28.9
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 60.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 7.6
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 4.8
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 30.0
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 45.6
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 0.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 37.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 26.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 36.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 13.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 46.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 35.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 4.8
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 31.7
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 34.2
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 29.6
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 4.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 8.1
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 13.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 42.6
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 36.2
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 6.3
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 51.7
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 24.5
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 8.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 18.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 59.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 7.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 18.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 39.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 34.8
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 5.5
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 11.7
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 40.6
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 42.2
      }
    ]
  },
  {
    "country": "HU",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 14.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 37.4
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.0
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 15.6
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.8
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 52.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 39.1
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 7.5
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.9
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 46.2
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 43.2
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 9.7
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 29.1
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 48.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 12.1
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 10.2
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 4.2
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 47.5
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 42.7
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 5.6
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 9.6
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 48.3
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 31.6
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 10.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 58.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 21.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 18.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 12.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 44.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 37.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 5.5
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 23.8
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 34.2
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 34.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 7.3
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 2.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 11.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 28.0
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 58.2
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 10.3
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 49.4
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 22.8
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 8.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 14.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 49.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 27.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 7.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 14.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 40.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 37.0
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 8.8
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 14.9
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 40.5
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 35.8
      }
    ]
  },
  {
    "country": "IE",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 4.8
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 27.7
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 41.1
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 26.4
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 33.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 51.3
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 14.4
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.3
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 36.0
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 16.8
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 15.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 17.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 26.0
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 40.6
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 14.6
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 19.9
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 43.7
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 21.9
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 12.7
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 24.7
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 38.7
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 24.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 7.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 49.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 23.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 27.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 38.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 25.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 9.0
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 23.6
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 35.3
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.5
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 9.6
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 20.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 17.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.1
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 29.7
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 21.4
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 45.6
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 16.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 16.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 17.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 18.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 51.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 11.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 16.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 19.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 37.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 26.2
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 20.8
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 17.2
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 32.7
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 29.3
      }
    ]
  },
  {
    "country": "IT",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 14.3
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 33.8
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.5
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 18.4
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 2.4
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 41.4
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 41.7
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 14.6
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 3.0
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 28.7
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.2
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 24.2
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 11.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 20.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 36.0
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 32.4
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 5.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 15.6
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 66.2
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 13.2
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 9.3
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 26.0
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 43.2
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 21.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 4.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 32.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 14.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 48.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 6.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 26.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 50.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 16.0
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 28.1
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 28.3
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 12.0
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 5.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 7.7
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 28.4
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 58.8
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 9.2
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 40.8
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 25.4
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 24.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 5.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 9.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 66.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 4.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 9.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 38.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 47.0
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 3.5
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 5.2
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 33.3
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 58.0
      }
    ]
  },
  {
    "country": "LT",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 48.4
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.4
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 11.4
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.2
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 41.2
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 51.8
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.8
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 48.4
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 46.1
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 5.4
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 5.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 39.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 32.8
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 22.0
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 6.3
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 43.1
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 45.8
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 4.9
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 5.0
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 42.4
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 39.3
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 13.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 1.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 49.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 21.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 28.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 21.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 45.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 29.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 3.8
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 32.3
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 32.1
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 30.0
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 5.6
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 9.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 17.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.4
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 40.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 4.2
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 40.7
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 27.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 27.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 18.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 21.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 43.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 16.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 9.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 15.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 39.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 36.1
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.9
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 17.3
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 38.0
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 33.8
      }
    ]
  },
  {
    "country": "LV",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 3.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 28.9
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 35.9
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 32.1
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.6
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 46.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 45.6
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 7.3
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.6
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 46.7
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.3
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 7.4
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 14.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 31.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 23.4
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 30.7
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 10.9
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 32.5
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 41.3
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 15.3
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 12.2
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 36.0
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 32.7
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 39.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 25.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 32.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 21.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 43.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 27.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 7.3
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 35.8
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 33.1
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 24.9
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 6.2
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 16.1
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 16.5
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 34.1
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 33.3
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 10.1
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 43.8
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 23.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 22.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 22.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 18.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 45.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 12.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 10.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 24.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 31.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 34.1
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 15.9
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 13.6
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 40.4
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 30.1
      }
    ]
  },
  {
    "country": "NL",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.4
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 22.5
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.0
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 39.2
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.6
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 23.0
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 65.9
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 10.4
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.3
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 27.6
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 54.5
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 15.6
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 17.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 28.7
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 34.3
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 19.8
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 12.8
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 31.1
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 46.3
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 9.9
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 11.5
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 25.3
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 44.1
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 5.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 45.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 20.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 28.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 20.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 36.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 29.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 13.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 24.8
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 36.9
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 27.3
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 11.0
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 9.3
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 22.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.6
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 36.1
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 15.5
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 59.0
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 13.3
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 12.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 16.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 22.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 45.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 15.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 9.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 14.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 33.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 43.2
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.2
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 12.9
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 34.0
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 43.1
      }
    ]
  },
  {
    "country": "NO",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 7.8
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 27.3
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 36.0
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 29.0
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.4
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 39.2
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 49.8
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 9.6
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.3
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 46.2
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 41.2
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.4
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 9.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 22.4
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 25.1
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 43.0
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 19.8
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 32.6
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 37.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 10.2
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 13.0
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 33.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 35.2
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 18.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 6.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 57.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 17.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 19.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 39.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 31.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 9.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 15.7
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 40.2
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 36.2
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 7.9
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 11.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 18.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 32.7
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 37.6
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 16.9
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 50.5
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 16.4
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 16.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 9.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 17.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 54.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 6.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 11.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 31.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 49.9
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 14.6
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 16.4
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 30.4
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 38.7
      }
    ]
  },
  {
    "country": "PL",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.2
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 33.2
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 35.5
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 26.1
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.5
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 32.7
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 55.1
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 11.8
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.5
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 34.1
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 51.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 13.6
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 10.6
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 35.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 34.0
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 20.2
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 7.1
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 42.8
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 42.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 7.7
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 8.0
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 38.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 36.9
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 16.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 60.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 18.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 29.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 40.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 27.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 3.1
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 28.3
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 36.3
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 29.5
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 5.9
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 14.2
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 21.3
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 33.7
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 30.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 8.1
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 49.5
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 25.3
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 11.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 20.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 50.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 17.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 6.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 15.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 38.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 39.0
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 10.7
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 16.6
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 42.3
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 30.5
      }
    ]
  },
  {
    "country": "PT",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 12.5
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 31.0
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 27.9
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 28.6
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 41.3
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 44.5
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 12.6
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 1.6
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 20.6
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 51.6
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 26.2
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 5.0
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 21.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 21.8
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 52.0
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 4.2
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 15.9
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 53.4
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 26.6
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 6.8
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 28.7
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 38.8
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 25.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 1.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 39.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 39.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 22.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 31.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 32.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 12.9
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 29.9
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 32.0
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 30.0
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 8.1
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 14.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 11.7
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 29.2
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 44.4
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 13.8
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 54.1
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 14.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 17.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 19.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 20.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 42.0
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 18.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 16.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 22.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 38.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 22.3
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 16.8
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 18.9
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 37.2
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 27.1
      }
    ]
  },
  {
    "country": "RO",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 8.7
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 35.6
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 34.5
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 21.2
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.5
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 52.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 39.8
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 6.0
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 44.4
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 47.8
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 7.6
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 10.2
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 41.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 26.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 21.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 3.1
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 30.8
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 48.0
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 18.1
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 5.1
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 35.7
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 42.8
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 16.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 51.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 18.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 27.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 11.6
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 42.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 41.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 4.0
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 27.6
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 37.0
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.8
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 3.7
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 11.0
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 28.9
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 53.2
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 5.3
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 48.1
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 26.9
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 19.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 14.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 16.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 51.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 17.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 11.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 12.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 36.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 39.7
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 15.5
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 16.3
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 43.4
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 24.8
      }
    ]
  },
  {
    "country": "SE",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 9.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 34.5
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 34.9
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 21.5
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.7
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 33.4
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 52.2
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 12.8
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 3.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 41.7
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.4
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 10.7
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 11.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 22.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 33.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 31.9
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 17.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 27.5
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 42.2
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 13.3
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 12.8
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 32.4
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 36.4
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 18.5
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 7.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 49.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 24.5
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 26.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 42.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 26.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 5.8
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 18.8
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 39.0
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 34.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 7.6
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 8.1
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 16.8
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 33.2
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 42.0
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 18.4
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 57.0
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 14.4
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 10.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 11.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 22.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 46.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 6.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 11.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 30.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 51.7
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 15.5
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 14.3
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 31.9
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 38.3
      }
    ]
  },
  {
    "country": "SL",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 4.5
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 38.2
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 38.4
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 18.9
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.2
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 36.6
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 56.1
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 7.2
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.6
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 35.1
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 53.0
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 11.3
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 11.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 38.9
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 34.2
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 15.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 3.9
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 28.3
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 56.6
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 11.3
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 8.6
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 33.2
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 43.3
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 14.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 2.8
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 45.3
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 32.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 13.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 40.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 39.4
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 7.1
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 22.0
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 33.8
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 35.5
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 8.7
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 4.9
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 10.7
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 41.4
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 43.0
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 7.7
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 52.0
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 23.5
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 16.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 7.8
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 17.2
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 55.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 5.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 10.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 39.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 44.2
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 9.6
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 10.9
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 42.0
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 37.5
      }
    ]
  },
  {
    "country": "SK",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 6.2
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 38.1
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 37.8
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 18.0
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 0.4
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 42.3
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 50.0
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 7.4
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 0.4
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 40.3
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 50.3
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 9.1
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 13.8
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 40.4
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 30.2
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 15.6
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 2.5
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 32.6
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 58.3
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 6.6
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 5.2
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 37.5
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 44.3
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 13.0
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 1.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 61.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 18.6
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 19.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 18.3
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 47.2
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 33.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 1.5
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 24.6
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 43.8
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 27.7
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 3.9
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 5.3
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 9.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 37.2
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 48.2
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 6.9
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 52.5
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 25.1
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 15.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 8.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 14.7
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 57.4
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 19.2
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 5.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 11.5
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 37.3
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 45.5
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 7.7
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 11.8
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 38.1
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 42.4
      }
    ]
  },
  {
    "country": "UK",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 5.1
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 30.6
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 38.8
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 25.6
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.2
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 35.3
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 51.8
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 11.6
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.3
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 37.4
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 44.6
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 15.7
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 17.0
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 23.0
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 29.9
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 30.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 20.0
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 22.5
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 44.0
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 16.9
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 32.3
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 33.6
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 17.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 10.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 53.9
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 15.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 20.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 18.7
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 32.9
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 32.8
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 15.6
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 22.0
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 32.4
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 32.1
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 13.5
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 10.1
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 14.6
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 34.2
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 41.1
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 23.9
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 48.3
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 14.5
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 13.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 9.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 19.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 50.5
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 20.1
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 10.7
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 16.6
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 37.9
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 34.8
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 9.6
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 12.9
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 34.0
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 43.6
      }
    ]
  },
  {
    "country": "Total",
    "items": [
      {
        "food": "Whole grains",
        "level": "No",
        "value": 11.7
      },
      {
        "food": "Whole grains",
        "level": "Low",
        "value": 32.5
      },
      {
        "food": "Whole grains",
        "level": "Medium",
        "value": 33.7
      },
      {
        "food": "Whole grains",
        "level": "High",
        "value": 22.1
      },
      {
        "food": "Vegetables",
        "level": "No",
        "value": 1.5
      },
      {
        "food": "Vegetables",
        "level": "Low",
        "value": 42.2
      },
      {
        "food": "Vegetables",
        "level": "Medium",
        "value": 47.0
      },
      {
        "food": "Vegetables",
        "level": "High",
        "value": 9.4
      },
      {
        "food": "Fruits",
        "level": "No",
        "value": 2.2
      },
      {
        "food": "Fruits",
        "level": "Low",
        "value": 36.4
      },
      {
        "food": "Fruits",
        "level": "Medium",
        "value": 47.5
      },
      {
        "food": "Fruits",
        "level": "High",
        "value": 13.9
      },
      {
        "food": "Fish and shellfish",
        "level": "No",
        "value": 13.5
      },
      {
        "food": "Fish and shellfish",
        "level": "Low",
        "value": 28.3
      },
      {
        "food": "Fish and shellfish",
        "level": "Medium",
        "value": 31.2
      },
      {
        "food": "Fish and shellfish",
        "level": "High",
        "value": 27.1
      },
      {
        "food": "Legumes",
        "level": "No",
        "value": 9.3
      },
      {
        "food": "Legumes",
        "level": "Low",
        "value": 27.0
      },
      {
        "food": "Legumes",
        "level": "Medium",
        "value": 51.5
      },
      {
        "food": "Legumes",
        "level": "High",
        "value": 12.2
      },
      {
        "food": "Nuts",
        "level": "No",
        "value": 11.9
      },
      {
        "food": "Nuts",
        "level": "Low",
        "value": 30.3
      },
      {
        "food": "Nuts",
        "level": "Medium",
        "value": 38.4
      },
      {
        "food": "Nuts",
        "level": "High",
        "value": 19.4
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "No",
        "value": 4.1
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Low",
        "value": 45.7
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "Medium",
        "value": 19.2
      },
      {
        "food": "All plant oils and plant margarines",
        "level": "High",
        "value": 31.0
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "No",
        "value": 19.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Low",
        "value": 36.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "Medium",
        "value": 34.1
      },
      {
        "food": "Animal fats and other saturated fats",
        "level": "High",
        "value": 10.7
      },
      {
        "food": "Added sugars",
        "level": "No",
        "value": 24.6
      },
      {
        "food": "Added sugars",
        "level": "Low",
        "value": 34.1
      },
      {
        "food": "Added sugars",
        "level": "Medium",
        "value": 31.6
      },
      {
        "food": "Added sugars",
        "level": "High",
        "value": 9.8
      },
      {
        "food": "Tubers or Starches",
        "level": "No",
        "value": 8.7
      },
      {
        "food": "Tubers or Starches",
        "level": "Low",
        "value": 13.4
      },
      {
        "food": "Tubers or Starches",
        "level": "Medium",
        "value": 33.0
      },
      {
        "food": "Tubers or Starches",
        "level": "High",
        "value": 44.9
      },
      {
        "food": "Dairy Food",
        "level": "No",
        "value": 13.6
      },
      {
        "food": "Dairy Food",
        "level": "Low",
        "value": 51.0
      },
      {
        "food": "Dairy Food",
        "level": "Medium",
        "value": 19.1
      },
      {
        "food": "Dairy Food",
        "level": "High",
        "value": 16.3
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "No",
        "value": 10.6
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Low",
        "value": 16.9
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "Medium",
        "value": 54.1
      },
      {
        "food": "Beef, lamb, goat, pork, and red meat in its processed form",
        "level": "High",
        "value": 18.4
      },
      {
        "food": "Chicken and other poultry",
        "level": "No",
        "value": 7.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Low",
        "value": 12.8
      },
      {
        "food": "Chicken and other poultry",
        "level": "Medium",
        "value": 35.0
      },
      {
        "food": "Chicken and other poultry",
        "level": "High",
        "value": 44.5
      },
      {
        "food": "Eggs",
        "level": "No",
        "value": 9.2
      },
      {
        "food": "Eggs",
        "level": "Low",
        "value": 12.7
      },
      {
        "food": "Eggs",
        "level": "Medium",
        "value": 36.0
      },
      {
        "food": "Eggs",
        "level": "High",
        "value": 42.1
      }
    ]
  }
];

export default cases;
