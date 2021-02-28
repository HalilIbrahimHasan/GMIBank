package gmibank.stepdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.constants.AccountStatus;
import gmibank.constants.AccountTypes;
import gmibank.pages.ManageAccountPage;
import gmibank.pojos.Account;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.WriteToTxt;

public class ManageAccount {

    ManageAccountPage manageAccountPage = new ManageAccountPage();
    Account account = new Account();



    @Given("user provides a description {string}")
    public void user_provides_a_description(String description) {

        Driver.waitAndSendText(manageAccountPage.descriptionTextbox,description,5);
        account.setDescription(description);


    }

    @Given("user provides their balance {string}")
    public void user_provides_their_balance(String balance) {
        Driver.waitAndSendText(manageAccountPage.balanceTextbox,balance,5);

    }

    @Given("user provides an account type {string}")
    public void user_provides_an_account_type(String accountType) {

        if(accountType.equals("SAVING"))
            Driver.selectByVisibleText(manageAccountPage.accountTypeDropdown, AccountTypes.SAVING_ACCOUNT.toString());
        if(accountType.equals("CHECKING"))
            Driver.selectByVisibleText(manageAccountPage.accountTypeDropdown, AccountTypes.CHECKING_ACCOUNT.toString());
        if(accountType.equals("INVESTING"))
            Driver.selectByVisibleText(manageAccountPage.accountTypeDropdown, AccountTypes.INVESTING_ACCOUNT.toString());
        if(accountType.equals("CREDIT"))
            Driver.selectByVisibleText(manageAccountPage.accountTypeDropdown, AccountTypes.CREDIT_CARD.toString());
    }

    @When("user provides the account status {string}")
    public void user_provides_the_account_status(String accountStatus) {

        Driver.selectByVisibleText(manageAccountPage.accountStatusTypeDropdown, AccountStatus.ACTIVE.name().toString());

    }

    @Then("user saves the account")
    public void user_saves_the_account() {
        WriteToTxt.saveAccountInfo(ConfigurationReader.getProperty("accountInfoFile"),account.getDescription());
        Driver.waitAndClick(manageAccountPage.saveButton);
    }



}
