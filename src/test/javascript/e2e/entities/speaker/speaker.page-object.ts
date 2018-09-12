import { element, by, promise, ElementFinder } from 'protractor';

export class SpeakerComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-speaker div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getText();
    }
}

export class SpeakerUpdatePage {
    pageTitle = element(by.id('jhi-speaker-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    firstNameInput = element(by.id('field_firstName'));
    lastNameInput = element(by.id('field_lastName'));
    emailInput = element(by.id('field_email'));
    twitterInput = element(by.id('field_twitter'));
    bioInput = element(by.id('file_bio'));
    sessionsSelect = element(by.id('field_sessions'));

    getPageTitle() {
        return this.pageTitle.getText();
    }

    setFirstNameInput(firstName): promise.Promise<void> {
        return this.firstNameInput.sendKeys(firstName);
    }

    getFirstNameInput() {
        return this.firstNameInput.getAttribute('value');
    }

    setLastNameInput(lastName): promise.Promise<void> {
        return this.lastNameInput.sendKeys(lastName);
    }

    getLastNameInput() {
        return this.lastNameInput.getAttribute('value');
    }

    setEmailInput(email): promise.Promise<void> {
        return this.emailInput.sendKeys(email);
    }

    getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    setTwitterInput(twitter): promise.Promise<void> {
        return this.twitterInput.sendKeys(twitter);
    }

    getTwitterInput() {
        return this.twitterInput.getAttribute('value');
    }

    setBioInput(bio): promise.Promise<void> {
        return this.bioInput.sendKeys(bio);
    }

    getBioInput() {
        return this.bioInput.getAttribute('value');
    }

    sessionsSelectLastOption(): promise.Promise<void> {
        return this.sessionsSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    sessionsSelectOption(option): promise.Promise<void> {
        return this.sessionsSelect.sendKeys(option);
    }

    getSessionsSelect(): ElementFinder {
        return this.sessionsSelect;
    }

    getSessionsSelectedOption() {
        return this.sessionsSelect.element(by.css('option:checked')).getText();
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
