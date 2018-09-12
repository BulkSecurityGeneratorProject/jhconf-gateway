import { browser } from 'protractor';
import { NavBarPage } from './../../../page-objects/jhi-page-objects';
import { BlogComponentsPage, BlogUpdatePage } from './blog.page-object';
import * as path from 'path';

describe('Blog e2e test', () => {
    let navBarPage: NavBarPage;
    let blogUpdatePage: BlogUpdatePage;
    let blogComponentsPage: BlogComponentsPage;
    const fileToUpload = '../../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Blogs', () => {
        navBarPage.goToEntity('blog');
        blogComponentsPage = new BlogComponentsPage();
        expect(blogComponentsPage.getTitle()).toMatch(/Blogs/);
    });

    it('should load create Blog page', () => {
        blogComponentsPage.clickOnCreateButton();
        blogUpdatePage = new BlogUpdatePage();
        expect(blogUpdatePage.getPageTitle()).toMatch(/Create or edit a Blog/);
        blogUpdatePage.cancel();
    });

    it('should create and save Blogs', () => {
        blogComponentsPage.clickOnCreateButton();
        blogUpdatePage.setTitleInput('title');
        expect(blogUpdatePage.getTitleInput()).toMatch('title');
        blogUpdatePage.setAuthorInput('author');
        expect(blogUpdatePage.getAuthorInput()).toMatch('author');
        blogUpdatePage.setPostInput(absolutePath);
        blogUpdatePage.save();
        expect(blogUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
