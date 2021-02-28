package gmibank.stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.WriteToTxt;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;

public class CustomerApiSteps {

    Response response;
    String filePath = ConfigurationReader.getProperty("filePath_Customer");
    String filePath2 = ConfigurationReader.getProperty("filePath_Customer2");
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    Customer[] customers;



    @Given("user sets all response using api end point {string}")
    public void user_sets_all_response_using_api_end_point(String url) {


        response = given().headers(
                "Authorization",
                "Bearer " + bearerToken,
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

//        response.prettyPrint();

    }

    @Given("all api data is set to response using  api end point {string}")
    public void all_api_data_is_set_to_response_using_api_end_point(String url) {

        response = given().headers(
                "Authorization",
                "Bearer " + bearerToken,
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

//        response.prettyPrint();



    }

    @Given("all customer info will be set to customers with deserialization")
    public void all_customer_info_will_be_set_to_customers_with_deserialization()throws Exception {
        ObjectMapper obj = new ObjectMapper();
        customers = obj.readValue(response.asString(),Customer[].class);



    }

    @Given("all customer info will be saved to correspondent files")
    public void all_customer_info_will_be_saved_to_correspondent_files() {
//        WriteToTxt.saveDataInFileWithSSN(filePath2, customers);
    }

    @Then("all customer info has been validated")
    public void all_customer_info_has_been_validated() {

        /*
        222-33-5555,
        531-95-8437,
        049-43-2360,
        612-28-5133,
         */

        List <String> expectedSSNs = new ArrayList<>();
        expectedSSNs.add("222-33-5555");
        expectedSSNs.add("531-95-8437");
        expectedSSNs.add("049-43-2360");
        expectedSSNs.add("612-28-5133");

        List <String> actualSSNs = ReadTxt.returnCustomerSNNList(filePath2);
        Assert.assertTrue("The data provided is not matching!!!",actualSSNs.containsAll(expectedSSNs) );


    }



}
