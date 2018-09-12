import { element, by, promise, ElementFinder } from 'protractor';

export class BlogComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-blog div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getText();
    }
}

export class BlogUpdatePage {
    pageTitle = element(by.id('jhi-blog-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    titleInput = element(by.id('field_title'));
    authorInput = element(by.id('field_author'));
    postInput = element(by.id('file_post'));

    getPageTitle() {
        return this.pageTitle.getText();
    }

    setTitleInput(title): promise.Promise<void> {
        return this.titleInput.sendKeys(title);
    }

    getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    setAuthorInput(author): promise.Promise<void> {
        return this.authorInput.sendKeys(author);
    }

    getAuthorInput() {
        return this.authorInput.getAttribute('value');
    }

    setPostInput(post): promise.Promise<void> {
        return this.postInput.sendKeys(post);
    }

    getPostInput() {
        return this.postInput.getAttribute('value');
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
