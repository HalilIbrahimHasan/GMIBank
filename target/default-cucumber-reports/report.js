$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\EndToEnd.feature");
formatter.feature({
  "name": "Register new applicants",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@NewApplicants"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register new users for GMI Bank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endToEnd"
    },
    {
      "name": "@registerNewUserUI"
    }
  ]
});
formatter.step({
  "name": "user is on the registration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters ssn number as \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters firstname and lastname as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides address \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides mobilephone as \"\u003cmobilephone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides a username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides email id as \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters the password as \"\u003cfirstpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user confirms the new password \"\u003csecondpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on register button and sees the success message as \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "firstname",
        "lastname",
        "address",
        "mobilephone",
        "username",
        "email",
        "firstpassword",
        "secondpassword",
        "message"
      ]
    },
    {
      "cells": [
        "333-45-2345",
        "Ben",
        "Student",
        "Long Island",
        "689-345-2354",
        "StakeHolder",
        "stakeholder@gmail.com",
        "stakeholder[1].",
        "stakeholder[1].",
        "successfully registered"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register new users for GMI Bank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@registerNewUserUI"
    }
  ]
});
formatter.step({
  "name": "user is on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationUIStep.user_is_on_the_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ssn number as \"333-45-2345\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationUIStep.user_enters_ssn_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname and lastname as \"Ben\" and \"Student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationUIStep.user_enters_firstname_and_lastname_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address \"Long Island\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationUIStep.user_provides_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides mobilephone as \"689-345-2354\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationUIStep.user_provides_mobilephone_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides a username \"StakeHolder\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationUIStep.user_provides_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides email id as \"stakeholder@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationUIStep.user_provides_email_id_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password as \"stakeholder[1].\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationUIStep.user_enters_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms the new password \"stakeholder[1].\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationUIStep.user_confirms_the_new_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button and sees the success message as \"successfully registered\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationUIStep.user_clicks_on_register_button_and_sees_the_success_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "admin account activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endToEnd"
    },
    {
      "name": "@adminActivation"
    }
  ]
});
formatter.step({
  "name": "user goes to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user provides username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" along with role \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user logs in",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the administration dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the userManagement button",
  "keyword": "And "
});
formatter.step({
  "name": "user activates the current customer",
  "keyword": "When "
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.examples({
  "name": "all admin data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "role"
      ]
    },
    {
      "cells": [
        "CWoburn",
        "Cw192837?",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "admin account activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@adminActivation"
    }
  ]
});
formatter.step({
  "name": "user goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides username \"CWoburn\" and password \"Cw192837?\" along with role \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_provides_username_and_password_along_with_role(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the administration dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "UserManagementStep.user_clicks_on_the_administration_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the userManagement button",
  "keyword": "And "
});
formatter.match({
  "location": "UserManagementStep.user_clicks_on_the_userManagement_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user activates the current customer",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagementStep.user_activates_the_current_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_signs_out()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "go to registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endToEnd"
    },
    {
      "name": "@loginEmployee"
    }
  ]
});
formatter.step({
  "name": "user goes to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user provides username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" along with role \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user logs in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "role"
      ]
    },
    {
      "cells": [
        "gino.wintheiser",
        "%B6B*q1!TH",
        "employee"
      ]
    }
  ]
});
formatter.scenario({
  "name": "go to registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@loginEmployee"
    }
  ]
});
formatter.step({
  "name": "user goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides username \"gino.wintheiser\" and password \"%B6B*q1!TH\" along with role \"employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_provides_username_and_password_along_with_role(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "All account info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endToEnd"
    },
    {
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "name": "user navigates to my operations",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on manageAccount",
  "keyword": "And "
});
formatter.step({
  "name": "user creates a new account",
  "keyword": "When "
});
formatter.step({
  "name": "user provides a description \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides their balance \"\u003cbalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides an account type \"\u003ctype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides the account status \"\u003caccount_status\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user saves the account",
  "keyword": "Then "
});
formatter.examples({
  "name": "all data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "description",
        "balance",
        "type",
        "account_status"
      ]
    },
    {
      "cells": [
        "checking account for user mahir5",
        "20000",
        "CHECKING",
        "ACTIVE"
      ]
    },
    {
      "cells": [
        "saving account for user mahir5",
        "20000",
        "CHECKING",
        "ACTIVE"
      ]
    }
  ]
});
formatter.scenario({
  "name": "All account info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "name": "user navigates to my operations",
  "keyword": "Given "
});
formatter.match({
  "location": "Employee.user_navigates_to_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on manageAccount",
  "keyword": "And "
});
formatter.match({
  "location": "Employee.user_clicks_on_manageAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates a new account",
  "keyword": "When "
});
formatter.match({
  "location": "Employee.user_creates_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides a description \"checking account for user mahir5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_provides_a_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides their balance \"20000\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccount.user_provides_their_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides an account type \"CHECKING\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccount.user_provides_an_account_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides the account status \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_the_account_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves the account",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_saves_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All account info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "name": "user navigates to my operations",
  "keyword": "Given "
});
formatter.match({
  "location": "Employee.user_navigates_to_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on manageAccount",
  "keyword": "And "
});
formatter.match({
  "location": "Employee.user_clicks_on_manageAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates a new account",
  "keyword": "When "
});
formatter.match({
  "location": "Employee.user_creates_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides a description \"saving account for user mahir5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_provides_a_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides their balance \"20000\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccount.user_provides_their_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides an account type \"CHECKING\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccount.user_provides_an_account_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides the account status \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_the_account_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves the account",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_saves_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create customer info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endToEnd"
    },
    {
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "name": "user navigates to my operations",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on manageCustomer",
  "keyword": "When "
});
formatter.step({
  "name": "user creates a customer",
  "keyword": "Then "
});
formatter.step({
  "name": "user types the ssn as \"\u003cSSNsearch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the searchbox",
  "keyword": "And "
});
formatter.step({
  "name": "user types the firstname as \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user also types the lastname as \"\u003clastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides the middle initial as \"\u003cmidleInitial\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user types the email id as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user types the mobilePhoneNumber as \"\u003cmobilePhoneNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user types the actual phone number as \"\u003cphoneNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types the zipCode as \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user the address as \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user types the city as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user types the same ssn as \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects a country as \"\u003ccountryName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types the state name as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects an account from dropdown as \"\u003caccountDropdown\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.examples({
  "name": "all data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSNsearch",
        "firstName",
        "lastName",
        "midleInitial",
        "email",
        "mobilePhoneNumber",
        "phoneNumber",
        "zipCode",
        "address",
        "city",
        "SSN",
        "countryName",
        "state",
        "accountDropdown"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Fairfax",
        "",
        "USA",
        "Virginia",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create customer info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicants"
    },
    {
      "name": "@endToEnd"
    },
    {
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "name": "user navigates to my operations",
  "keyword": "And "
});
formatter.match({
  "location": "Employee.user_navigates_to_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on manageCustomer",
  "keyword": "When "
});
formatter.match({
  "location": "Employee.user_clicks_on_manageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates a customer",
  "keyword": "Then "
});
formatter.match({
  "location": "Employee.user_creates_a_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the ssn as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_ssn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the searchbox",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_clicks_on_the_searchbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the firstname as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_firstname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user also types the lastname as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageCustomer.user_also_types_the_lastname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides the middle initial as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_provides_the_middle_initial_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the email id as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_email_id_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the mobilePhoneNumber as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_mobilePhoneNumber_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the actual phone number as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_actual_phone_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the zipCode as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_zipCode_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user the address as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageCustomer.user_the_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the city as \"Fairfax\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_city_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the same ssn as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_same_ssn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a country as \"USA\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomer.user_selects_a_country_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the state name as \"Virginia\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_types_the_state_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects an account from dropdown as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomer.user_selects_an_account_from_dropdown_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomer.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_signs_out()"
});
formatter.result({
  "status": "passed"
});
});