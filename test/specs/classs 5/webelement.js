const { expect } = require("chai");

describe('Advanced-xpath locator strategies', () => {
    // Verify current temp is in between 40 and 50
    /**
     * 1. Launch https://www.google.com/
     * 2. Search for "current temp in Manhattan, NY"
     * 3. Verify current-temp is between 40 and 50
     */
    it('Verify current temp is in between 40 and 50', async () => {
        // 1. Launch https://www.google.com/
        await browser.url('https://www.google.com/');

        // 2. Search for "current temp in Manhattan, NY"
        const searchBox = await $('//input[@title="Search"]');
        await searchBox.setValue('current temp in Manhattan, NY');

        await browser.pause(2000);

        const googleSearchBtn = await $('(//input[@aria-label="Google Search"])[1]');
        await googleSearchBtn.click();

        await browser.pause(2000);

        // 3. Verify current-temp is between 40 and 50
        const currentTempLocator = '(//h2[text()="Weather Result"]/following-sibling::div//div[@role="heading"]//span)[1]';
        const currentTempElement = await $(currentTempLocator);
        let currentTemp = await currentTempElement.getText();
        currentTemp = Number(currentTemp);
        expect(currentTemp > 40 && currentTemp < 50, 'Current temp is NOT in between 40 and 50').to.be.true;

    });

    // Verify user gets error when does not mention gender
    /**
     * 1. Launch facebook.com
     * 2. Click on Create New Account button
     * 3. Enter "JOhn" as Firstname
     * 4. Enter "Kial" as Lastname
     * 5. Enter 8767564532 as phone number
     * 6. Enter "abcd@9012#" as New password
     * 7. Enter July 20 2018 as birthdate
     * 8. Click "Sign Up" button
     * 9. Verify error (Please choose a gender. You can change who can see this later.) is displayed
     */
    it.only('Verify user gets error when does not mention gender', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click on Create New Account button
        const createAccountBtn = await $('a*=ccoun');
        await createAccountBtn.click();

        await browser.pause(2000);

        // 3. Enter "JOhn" as Firstname
        const firstNameInput = await $('input[name*=first]');
        await firstNameInput.setValue('JOhn');

        // 4. Enter "Kial" as Lastname
        const lastNameInput = await $('input[aria-label*=Last]');
        await lastNameInput.setValue('Kial');

        // 5. Enter 8767564532 as phone number
        const emailOrPhoneInput = await $('//input[contains(@name, "ail__")]')
        emailOrPhoneInput.setValue("8767564532");

        // 6. Enter "abcd@9012#" as New password
        const newPwdInput = await $('//div[text()="New password"]/following-sibling::*');
        newPwdInput.setValue('abcd@9012#');

        // 7. Enter July 20 2018 as birthdate
        // Select July in month-dropdown
        const monthDropdownElement = await $('#month');
        monthDropdownElement.selectByIndex(6);

        await browser.pause(2000);


        // Select 20 in date-dropdown
        const dateDropdownElement = await $('#day');
        dateDropdownElement.selectByAttribute('value', '28');
        // dateDropdownElement.selectByVisibleText('28');

        await browser.pause(2000);

        // Select 2018 in year-dropdown
        const yearDropdownElement = await $('#year');
        yearDropdownElement.selectByVisibleText('2000');

        // 8. Click "Sign Up" button
        const signUpBtn = await $('button[name*=ubmi]');
        await signUpBtn.click();

        await browser.pause(2000);

        // 9. Verify error is displayed
        const genderErrorElement = await $('//div[text()="Please choose a gender. You can change who can see this later."]');
        const isErrorDisplayed = await genderErrorElement.isDisplayed();

        await browser.pause(20000);

        expect(isErrorDisplayed, 'Gender error is NOT displayed').to.be.true;


        

    });


})