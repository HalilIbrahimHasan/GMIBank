package gmibank.stepdefinitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.CommonPageElements;
import gmibank.pages.CustomerPage;
import gmibank.pojos.User;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.ReadTxt;

import java.util.List;

public class ManageCustomer {

    CustomerPage customerPage = new CustomerPage();
    Faker faker = new Faker();
    List<User> users = ReadTxt.returnAWholeUser(ConfigurationReader.getProperty("fileNameOfCustomer"));

    @Then("user types the ssn as {string}")
    public void user_types_the_ssn_as(String ssn) {
        ssn = users.get(users.size()-1).getSsn();
        Driver.waitAndSendText(customerPage.ssnTextbox,ssn,5);

    }

    @Then("user clicks on the searchbox")
    public void user_clicks_on_the_searchbox() {
        Driver.waitAndClick(customerPage.searchButton);
    }

    @When("user types the firstname as {string}")
    public void user_types_the_firstname_as(String firstname) {

    }

    @Then("user also types the lastname as {string}")
    public void user_also_types_the_lastname_as(String lastname) {

    }

    @Then("user provides the middle initial as {string}")
    public void user_provides_the_middle_initial_as(String string) {
        Driver.waitAndSendTextWithDefaultTime(customerPage.middleInitialTextbox,faker.name().nameWithMiddle().substring(0,1));
    }

    @Then("user types the email id as {string}")
    public void user_types_the_email_id_as(String email) {

    }

    @Then("user types the mobilePhoneNumber as {string}")
    public void user_types_the_mobilePhoneNumber_as(String mobilePhoneNumber) {

    }

    @When("user types the actual phone number as {string}")
    public void user_types_the_actual_phone_number_as(String phoneNumber) {

    }

    @When("user types the zipCode as {string}")
    public void user_types_the_zipCode_as(String zipCode) {
        zipCode = faker.address().zipCode();
        Driver.waitAndSendText(customerPage.zipCodeTextbox,zipCode,5);
    }

    @Then("user the address as {string}")
    public void user_the_address_as(String address) {

    }

    @Then("user types the city as {string}")
    public void user_types_the_city_as(String city) {

        Driver.waitAndSendText(customerPage.cityTextbox,city,5);
    }

    @Then("user types the same ssn as {string}")
    public void user_types_the_same_ssn_as(String string) {

    }

    @When("user selects a country as {string}")
    public void user_selects_a_country_as(String country) {


        Driver.selectByVisibleText(customerPage.countryDropdown,country);
    }

    @When("user types the state name as {string}")
    public void user_types_the_state_name_as(String state) {
        Driver.waitAndSendText(customerPage.stateTextbox,state,5);
    }

    @When("user selects an account from dropdown as {string}")
    public void user_selects_an_account_from_dropdown_as(String account) {

        List <String> accounts = ReadTxt.returnAllAccounts(ConfigurationReader.getProperty("accountInfoFile"));
        Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-1));
        Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-2));

    }

    @Then("user clicks on save button")
    public void user_clicks_on_save_button() {

        Driver.waitAndClick(customerPage.saveButton);

    }
}