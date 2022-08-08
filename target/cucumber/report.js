$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/createAccount.feature");
formatter.feature({
  "line": 3,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters correct username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters correct password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user landed to the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click Bank\u0026Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should click New Account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should fill Account Title \"\u003cAccount Title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should fill Description \"\u003cDescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should fill Inital Balance \"\u003cInitial_Balance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should fill Account Number \"\u003cAccount_Number\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should fill Contact Person \"\u003cContact_Person\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should fill Phone Number \"\u003cPhone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User should fill Internet Banking Url \"\u003cInternet Banking Url\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User land to the Accounts page",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Account Title",
        "Description",
        "Initial_Balance",
        "Account_Number",
        "Contact_Person",
        "Phone",
        "Internet Banking Url"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Fixed",
        "User",
        "$23344",
        "233445",
        "Mark",
        "5667764",
        "https://www.citizensebank.com/"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5291348500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters correct username \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters correct password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user landed to the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click Bank\u0026Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should click New Account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should fill Account Title \"Fixed\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should fill Description \"User\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should fill Inital Balance \"$23344\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should fill Account Number \"233445\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should fill Contact Person \"Mark\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should fill Phone Number \"5667764\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User should fill Internet Banking Url \"https://www.citizensebank.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User land to the Accounts page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_in_login_page()"
});
formatter.result({
  "duration": 1010909700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enters_correct_username(String)"
});
formatter.result({
  "duration": 2070418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enters_correct_password(String)"
});
formatter.result({
  "duration": 2059091700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_submit_button()"
});
formatter.result({
  "duration": 3236587300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_landed_to_the_Dashboard_page()"
});
formatter.result({
  "duration": 2038245800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_Bank_Cash()"
});
formatter.result({
  "duration": 3086489900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_New_Account()"
});
formatter.result({
  "duration": 3407979000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fixed",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_should_fill_Account_Title(String)"
});
formatter.result({
  "duration": 3114167600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_should_fill_Description(String)"
});
formatter.result({
  "duration": 3062822900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$23344",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_should_fill_Inital_Balance(String)"
});
formatter.result({
  "duration": 3116424200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "233445",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_should_fill_Account_Number(String)"
});
formatter.result({
  "duration": 3092417300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_should_fill_Contact_Person(String)"
});
formatter.result({
  "duration": 3094941200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5667764",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_should_fill_PhoneNumber(String)"
});
formatter.result({
  "duration": 3067336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.citizensebank.com/",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_should_fill(String)"
});
formatter.result({
  "duration": 2063243000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_click_Submit()"
});
formatter.result({
  "duration": 2818065900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_land_to_the_Accounts_page()"
});
formatter.result({
  "duration": 2047989900,
  "status": "passed"
});
formatter.after({
  "duration": 728513600,
  "status": "passed"
});
});