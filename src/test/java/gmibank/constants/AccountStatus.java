package gmibank.constants;

public enum AccountStatus {

    ACTIVE("ACTIVE"),
    SUSPENDED("SUESPENDED"),
    CLOSED("CLOSED");

    final private String text;

    AccountStatus(final String text){
        this.text = text;
    }

    @Override
    public String toString(){

        return text;
    }
}
