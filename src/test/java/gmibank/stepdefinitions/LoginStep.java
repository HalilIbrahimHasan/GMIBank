package gmibank.stepdefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gmibank.pages.LoginPage;
import gmibank.pojos.User;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.ReadTxt;

import java.util.ArrayList;
import java.util.List;

public class LoginStep {
    LoginPage loginPage = new LoginPage();
    List<User> allUsers = new ArrayList<>();
    int lastUserIndex = allUsers.size();

    @Given("user goes to login page")
    public void user_goes_to_login_page() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
//        loginPage.loginDropdown.click();
        Driver.waitAndClick(loginPage.loginDropdown,5);
        loginPage.signInButton.click();
    }

    @Given("user provides username {string} and password {string}")
    public void user_provides_username_and_password(String username, String password) {

        Driver.waitAndSendText(loginPage.username,username,5);

        Driver.waitAndSendText(loginPage.password,password,5);


    }

    @Given("user provides username {string} and password {string} along with role {string}")
    public void user_provides_username_and_password_along_with_role(String username, String password, String role) {


        if(role.toLowerCase().equals("employee")) {

            Driver.waitAndSendText(loginPage.username, ConfigurationReader.getProperty("employeeRole"), 5);
            Driver.waitAndSendText(loginPage.password, ConfigurationReader.getProperty("employeePassword"), 5);
        }else if(role.toLowerCase().equals("admin")) {

            Driver.waitAndSendText(loginPage.username, ConfigurationReader.getProperty("adminRole"), 5);
            Driver.waitAndSendText(loginPage.password, ConfigurationReader.getProperty("adminPassword"), 5);
        }else if(role.toLowerCase().equals("customer")) {

            Driver.waitAndSendText(loginPage.username, allUsers.get(lastUserIndex).getUsername(), 5);
            Driver.waitAndSendText(loginPage.password, allUsers.get(lastUserIndex).getPassword(), 5);
        }
    }

    @Then("user logs in")
    public void user_logs_in() {


        Driver.waitAndClick(loginPage.loginButton,5);
    }

    @Then("user signs out")
    public void user_signs_out() {

        Driver.waitAndClick(loginPage.signOutDropDown);
        Driver.waitAndClick(loginPage.signOutButton);
    }


}