nst { expect } = require("chai");

describe('basic locator strategies', () => {

    it('Locator strategy : Using other attribute instead id-attribute and text-value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Type (abcd@gmail.com) in the Email or phone number field/element
         * 3. Type (abcd@1234) in the Password field/element
         * 4. Click the Log-in button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Type (abcd@gmail.com) in the Email or phone number field/element
        const loginEmailElement = await $('input[name=email]')
            // $(findElement) has to find a webElement where tagName=input which has attr(name) with value(email)
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3. Type (abcd@1234) in the Password field/element
        const loginPasswordElement = await $('input[data-testid=royal_pass]');
            // $(findElement) has to find a webElement where tagName=input which has attr(data-testid) with value(royal_pass)
        await loginPasswordElement.setValue('abcd@1234');
        
        // 4. Click the Log-in button
        const logInBtn = await $('button=Log In');
            // $(findElement) has to find a webElement where tagName=button which has textValue = 'Log In'
        await logInBtn.click();

        await browser.pause(10000);

    })

    it('Locator strategy : Using partial attribute Value and text Value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Create New Account
         * 3. Enter 'John' as Firstname
         * 4. Enter 'Reed' as Lastname
         * 5. Click Sign Up button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click on Create New Account
        const createAccountBtn = await $('a*=ccoun');
        await createAccountBtn.click();

        // 3. Enter 'John' as Firstname
        const firstNameInput = await $('input[name*=first]');
        await firstNameInput.setValue('John');

        // 4. Enter 'Reed' as Lastname
        const lastNameInput = await $('input[aria-label*=Last]');
        await lastNameInput.setValue('Reed');

        // 5. Click Sign Up button
        //button[contains(@name, 'ubmi')]
        const signUpBtn = await $('button[name*=ubmi]');
        await signUpBtn.click();

        await browser.pause(15000);



    })

    it('Locator strategy : Using link-text and partial-link-text', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Messenger
         * 3. Click on "Forgot your password?""
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click on Messenger
        const messengerLink = await $('=Messenger');
        await messengerLink.click();

        await browser.pause(2000);

        // 3. Click on "Forgot your password?"
        const fypLink = await $('*=Forgot');
        await fypLink.click();

    })

    it('Locator strategy : Using tagName', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Type (abcd@gmail.com) in the Email or phone number field/element
         * 3. Type (abcd@1234) in the Password field/element
         * 4. Click the Log-in button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Type (abcd@gmail.com) in the Email or phone number field/element
        const loginEmailElement = await $('input[name=email]')
            // $(findElement) has to find a webElement where tagName=input which has attr(name) with value(email)
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3. Type (abcd@1234) in the Password field/element
        const loginPasswordElement = await $('input[data-testid=royal_pass]');
            // $(findElement) has to find a webElement where tagName=input which has attr(data-testid) with value(royal_pass)
        await loginPasswordElement.setValue('abcd@1234');
        
        // 4. Click the Log-in button
        const logInBtn = await $('<button>');
            // $(findElement) has to find a webElement where tagName=button
        await logInBtn.click();

        await browser.pause(15000);

    })

    // Verify login fields and button are enabled when user lands on facebook.com
    /**
     * 1. Launch facebook.com
     * 2. Verify loginEmail field is enabled
     * 3. Verify loginPassword field is enabled
     * 4. Verify login button is enabled
     */
    it('Verify login fields and button are enabled when user lands on facebook.com', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify loginEmail field is enabled
        const loginEmail = await $('#email');
        const isLoginEmailEnabled = await loginEmail.isEnabled();
        expect(isLoginEmailEnabled, 'Login email is NOT enabled').to.be.true;

        // 3. Verify loginPassword field is enabled
        const loginPassword = await $('input[aria-label=Password]');
        const isLoginPasswordEnabled = await loginPassword.isEnabled();
        expect(isLoginPasswordEnabled, 'Login password is NOT enabled').to.be.true;

        // 4. Verify login button is enabled
        const loginBtn = await $('button*=Log');
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        expect(isLoginBtnEnabled, 'Login button is NOT enabled').to.be.true;

    });

    // Verify no gender is selected on sign up
    /**
     * 1. Launch facebook.com
     * 2. Click Create new account button
     * 3. Verify female radio button is not selected
     * 4. Verify male radio button is not selected
     * 5. Verify custom radio button is not selected
     */
    it('Verify no gender is selected on sign up', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click Create new account button
        const createAccountBtn = await $('a*=ccoun');
        await createAccountBtn.click();

        await browser.pause(2000);

        // 3. Verify female radio button is not selected
        const femaleRadioBtn = await $('input[value="1"]');
        const isFemaleBtnSelected = await femaleRadioBtn.isSelected();
        expect(isFemaleBtnSelected, 'Female radio button is selected').to.be.false;

        // 4. Verify male radio button is not selected
        const maleRadioBtn = await $('input[value="2"]');
        const isMaleBtnSelected = await maleRadioBtn.isSelected();
        expect(isMaleBtnSelected, 'Male radio button is selected').to.be.false;

        // 5. Verify custom radio button is not selected
        const customRadioBtn = await $('input[value="-1"]');
        const isCustomBtnSelected = await customRadioBtn.isSelected();
        expect(isCustomBtnSelected, 'Custom radio button is selected').to.be.false;
    
    });

    // Verify user lands on forgot your password page after clicking the link
    /**
     * 1. Launch facebook.com
     * 2. Click "Forgot password?"
     * 3. Verify user lands on forgot your password page
     */
    it('Verify user lands on forgot your password page after clicking the link', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click "Forgot password?"
        //a[contains(text() , 'word')]
        const forgotPasswordLink = await $('*=word');
        await forgotPasswordLink.click();

        await browser.pause(1000);

        // 3. Verify user lands on forgot your password page
        /**
         * if "Find your account" heading is displayed means we are on Forgot your password page
         * if url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
         * if pageTitle starts with "Forgot password" means we are on Forgot your password page
         */
        // if "Find your account" heading is displayed means we are on Forgot your password page
        const pageHeading = await $('h2[class=uiHeaderTitle]');
        const isHeadingDisplayed = await pageHeading.isDisplayed();
        expect(isHeadingDisplayed, 'Heading: We are not on Forgot password page').to.be.true;

        // if url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
        const currentUrl = await browser.getUrl();
        const isUrlContain = currentUrl.includes('www.facebook.com/login/identify/');
        expect(isUrlContain, 'Url: We are not on Forgot password page').to.be.true;

        // if pageTitle starts with "Forgot password" means we are on Forgot your password page
        const pageTitle = await browser.getTitle();
        const isTitleStartsWith = pageTitle.startsWith('Forgot password');
        expect(isTitleStartsWith, 'Title: We are not on Forgot password page').to.be.true;
    })


});