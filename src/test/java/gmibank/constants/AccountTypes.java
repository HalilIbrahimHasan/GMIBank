package gmibank.constants;

public enum AccountTypes {

    CHECKING_ACCOUNT("CHECKING"),
    SAVING_ACCOUNT("SAVING"),
    CREDIT_CARD("CREDIT_CARD"),
    INVESTING_ACCOUNT("INVESTING");

    final private String text;

    AccountTypes(final String text){
        this.text = text;
    }

    @Override
    public String toString(){

        return text;
    }
}
