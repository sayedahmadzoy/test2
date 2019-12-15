$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4904553700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4356213800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1152947300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 8642800,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@SDET_RF_DBV"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User fill register form with below information",
  "rows": [
    {
      "comments": [
        {
          "line": 70,
          "value": "#firstname|lastName|email|phone|password|"
        }
      ],
      "cells": [
        "ann",
        "evans",
        "ann.evans@sakilacustomer.org",
        "2021234455",
        "Test123"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User click on \u0027no\u0027 radio button for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User connects to DataBase",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User sends query \u0027select * from public.customer where email\u003d\u0027ann.evans@sakilacustomer.org\u0027\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User verify email account is created with emil \u0027ann.evans@sakilacustomer.org\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 1710380700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_register_on_myAccount_menu()"
});
formatter.result({
  "duration": 842287400,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_fill_register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 757472800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 15
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_yes_radio_button_for_Subscribe(String)"
});
formatter.result({
  "duration": 1073289300,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "duration": 645612200,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "duration": 745353100,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_connects_to_DataBase()"
});
formatter.result({
  "duration": 93263800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1467647800,
  "status": "passed"
});
});