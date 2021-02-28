@NewApplicants
Feature: Register new applicants



  @endToEnd
  @registerNewUserUI
  Scenario Outline: Register new users for GMI Bank
    Given user is on the registration page
    And user enters ssn number as "<SSN>"
    Then user enters firstname and lastname as "<firstname>" and "<lastname>"
    When user provides address "<address>"
    Then user provides mobilephone as "<mobilephone>"
    And user provides a username "<username>"
    Then user provides email id as "<email>"
    When user enters the password as "<firstpassword>"
    And user confirms the new password "<secondpassword>"
    Then user clicks on register button and sees the success message as "<message>"


    Examples:
      |SSN|firstname|lastname|address|mobilephone|username|email|firstpassword|secondpassword|message|
#    |393-45-5678|newUser|lastbatch|Milky way|456-679-5588|utilisateur|kalin54@gmail.com|Utilisateur123.|Utilisateur123.|successfully registered|
      |333-45-2345|Ben|Student|Long Island|689-345-2354|StakeHolder|stakeholder@gmail.com|stakeholder[1].|stakeholder[1].|successfully registered|
#    |120-45-2345|,batch133333333|,batch2|,Gallows road 8765|321-345-2354|user2|hisetkal@gmail.com|344321user5[3]|4321user5[3]|successfully registered|
#    |109-45-2345|,batch1333|,batch2|,Gallows road 8765|321-345-2354|user2|hisetkal@gmail.com|4321user5[3]|024321user5[3]|successfully registered     |

  @endToEnd
  @adminActivation
    Scenario Outline: admin account activation
      Given user goes to login page
      And user provides username "<username>" and password "<password>" along with role "<role>"
      And user logs in
      And user clicks on the administration dropdown
      And user clicks on the userManagement button
      When user activates the current customer
      Then user signs out


      Examples: all admin data
      |username|password|role|
      |CWoburn |Cw192837?|admin|

  @endToEnd
  @loginEmployee
  Scenario Outline: go to registration
    Given user goes to login page
    And user provides username "<username>" and password "<password>" along with role "<role>"
    Then user logs in




    Examples:
      |username|password|role|
      |gino.wintheiser|%B6B*q1!TH|employee|



    @endToEnd
    @CreateAccount
    Scenario Outline: All account info
      Given user navigates to my operations
      And user clicks on manageAccount
      When user creates a new account
      Then user provides a description "<description>"
      And user provides their balance "<balance>"
      And user provides an account type "<type>"
      When user provides the account status "<account_status>"
      Then user saves the account

      Examples: all data
      |description|balance|type|account_status|
      |checking account for user mahir5|20000|CHECKING|ACTIVE|
      |saving account for user mahir5|20000|CHECKING|ACTIVE|



  @endToEnd
      @CustomerCreation
      Scenario Outline: Create customer info

    And user navigates to my operations
    When user clicks on manageCustomer
    Then user creates a customer
    And user types the ssn as "<SSNsearch>"
    And user clicks on the searchbox
    When user types the firstname as "<firstName>"
    Then user also types the lastname as "<lastName>"
    And user provides the middle initial as "<midleInitial>"
    And user types the email id as "<email>"
    Then user types the mobilePhoneNumber as "<mobilePhoneNumber>"
    When user types the actual phone number as "<phoneNumber>"
    And user types the zipCode as "<zipCode>"
    Then user the address as "<address>"
    And user types the city as "<city>"
    And user types the same ssn as "<SSN>"
    When user selects a country as "<countryName>"
    And user types the state name as "<state>"
    When user selects an account from dropdown as "<accountDropdown>"
    And user clicks on save button
    Then user signs out
    Examples: all data
      |SSNsearch|firstName|lastName|midleInitial|email|mobilePhoneNumber|phoneNumber|zipCode|address|city|SSN|countryName|state|accountDropdown|
      |         |         |        |            |     |                 |           |       |       | Fairfax   |   |USA|Virginia|               |


