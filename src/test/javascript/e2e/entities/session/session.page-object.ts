import { element, by, promise, ElementFinder } from 'protractor';

export class SessionComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-session div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getText();
    }
}

export class SessionUpdatePage {
    pageTitle = element(by.id('jhi-session-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    titleInput = element(by.id('field_title'));
    descriptionInput = element(by.id('file_description'));
    startDateTimeInput = element(by.id('field_startDateTime'));
    endDateTimeInput = element(by.id('field_endDateTime'));

    getPageTitle() {
        return this.pageTitle.getText();
    }

    setTitleInput(title): promise.Promise<void> {
        return this.titleInput.sendKeys(title);
    }

    getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    setDescriptionInput(description): promise.Promise<void> {
        return this.descriptionInput.sendKeys(description);
    }

    getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    setStartDateTimeInput(startDateTime): promise.Promise<void> {
        return this.startDateTimeInput.sendKeys(startDateTime);
    }

    getStartDateTimeInput() {
        return this.startDateTimeInput.getAttribute('value');
    }

    setEndDateTimeInput(endDateTime): promise.Promise<void> {
        return this.endDateTimeInput.sendKeys(endDateTime);
    }

    getEndDateTimeInput() {
        return this.endDateTimeInput.getAttribute('value');
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
