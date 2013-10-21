Feature: Use geolocational and sentimental data taken from tweets in conjunction with weather data
    In order to find the effect of specific weather on people's mood
    The user will enter their area to specify it to their location
    This will allow us to predict people's mood based on the weather

Scenario: A user accesses our app to determine the effect of the weather on their neighborhood
    Given the data from twitter sentimental
    and the weather data from Forecast
    When the user enters their locational data
    Then give weather data 20 mile radius
    and output forecast
    and output sentimental average for tweets in radius