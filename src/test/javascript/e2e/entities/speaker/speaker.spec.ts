import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { SpeakerComponentsPage, SpeakerUpdatePage } from './speaker.page-object';
import * as path from 'path';

describe('Speaker e2e test', () => {
    let navBarPage: NavBarPage;
    let speakerUpdatePage: SpeakerUpdatePage;
    let speakerComponentsPage: SpeakerComponentsPage;
    const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Speakers', () => {
        navBarPage.goToEntity('speaker');
        speakerComponentsPage = new SpeakerComponentsPage();
        expect(speakerComponentsPage.getTitle()).toMatch(/Speakers/);
    });

    it('should load create Speaker page', () => {
        speakerComponentsPage.clickOnCreateButton();
        speakerUpdatePage = new SpeakerUpdatePage();
        expect(speakerUpdatePage.getPageTitle()).toMatch(/Create or edit a Speaker/);
        speakerUpdatePage.cancel();
    });

    it('should create and save Speakers', () => {
        speakerComponentsPage.clickOnCreateButton();
        speakerUpdatePage.setFirstNameInput('firstName');
        expect(speakerUpdatePage.getFirstNameInput()).toMatch('firstName');
        speakerUpdatePage.setLastNameInput('lastName');
        expect(speakerUpdatePage.getLastNameInput()).toMatch('lastName');
        speakerUpdatePage.setEmailInput('email');
        expect(speakerUpdatePage.getEmailInput()).toMatch('email');
        speakerUpdatePage.setTwitterInput('twitter');
        expect(speakerUpdatePage.getTwitterInput()).toMatch('twitter');
        speakerUpdatePage.setBioInput(absolutePath);
        // speakerUpdatePage.sessionsSelectLastOption();
        speakerUpdatePage.save();
        expect(speakerUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
