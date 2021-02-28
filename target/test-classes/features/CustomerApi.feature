@customer
Feature: All customer api data testing



  Background: Set the api uri
    Given all api data is set to response using  api end point "https://www.gmibank.com/api/tp-customers"



    Scenario: all api data validation
      Given all customer info will be set to customers with deserialization
      And all customer info will be saved to correspondent files
      Then all customer info has been validated

