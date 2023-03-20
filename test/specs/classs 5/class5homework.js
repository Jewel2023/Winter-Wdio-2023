// Due date: Mar 15 (eod)

// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 * 
 */
const { Builder, By } = require('selenium-webdriver');
const moment = require('moment');
const assert = require('assert');

// Test case: Verify the current date is selected by default in Sign Up dropdown
describe('Verify current date is selected by default in Sign Up dropdown', () => {
  let driver;

  // Before each test, create a new Selenium WebDriver instance
  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  // After each test, quit the WebDriver instance
  afterEach(async () => {
    await driver.quit();
  });

  // Test step: Launch facebook.com
  test('Launch facebook.com', async () => {
    await driver.get('https://www.facebook.com');
  });

  // Test step: Click on Create New Account button
  test('Click on Create New Account button', async () => {
    const createAccountBtn = await driver.findElement(By.xpath('//a[contains(@href,"/r.php")]'));
    await createAccountBtn.click();
  });

  // Test step: Verify current date is displayed in the birthdate dropdowns.
  test('Verify current date is displayed in the birthdate dropdowns.', async () => {
    const currentDate = moment().format('MMMM D, YYYY'); // get the current date using moment library
    const dropdownValues = await driver.findElements(By.xpath('//select[contains(@id,"birthday_")]//option[@selected="1"]'));
    let actualDropdownValues = '';
    for (const dropdownValue of dropdownValues) {
      const optionText = await dropdownValue.getText();
      actualDropdownValues += optionText + ' ';
    }
    assert.strictEqual(actualDropdownValues.trim(), currentDate);
  });
});


// TC-2: Verify the travelers count on homepage
/**
 * 1. Launch hotels.com
 * 2. Make Adults=4 in Room-1
 * 3. Click Add another room
 * 4. Make Adults=3 in Room-2
 * 5. Click on Done button
 * 6. Verify total-travalers is equals to the number of adults mentioned in rooms
 * 
 */
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

// Test case: Verify the travelers count on homepage
describe('Verify travelers count on homepage', () => {
  let driver;

  // Before each test, create a new Selenium WebDriver instance
  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  // After each test, quit the WebDriver instance
  afterEach(async () => {
    await driver.quit();
  });

  // Test step: Launch hotels.com
  test('Launch hotels.com', async () => {
    await driver.get('https://www.hotels.com');
  });

  // Test step: Set Adults=4 in Room-1 and click Add another room
  test('Set Adults=4 in Room-1 and click Add another room', async () => {
    const adults1 = await driver.findElement(By.id('qf-0q-occupancy'));
    await adults1.click();

    const option4 = await driver.findElement(By.css('#qf-0q-occupancy option[value="4"]'));
    await option4.click();

    const addRoom = await driver.findElement(By.className('add-room-link'));
    await addRoom.click();
  });

  // Test step: Set Adults=3 in Room-2 and click Done button
  test('Set Adults=3 in Room-2 and click Done button', async () => {
    const adults2 = await driver.findElement(By.id('qf-1q-occupancy'));
    await adults2.click();

    const option3 = await driver.findElement(By.css('#qf-1q-occupancy option[value="3"]'));
    await option3.click();

    const done = await driver.findElement(By.className('apply-button'));
    await done.click();
  });

  // Test step: Verify total-travelers is equals to the number of adults mentioned in rooms
  test('Verify total-travelers is equals to the number of adults mentioned in rooms', async () => {
    const totalTravelers = await driver.findElement(By.id('qf-0q-room-0-adults'));
    const adultsInRoom1 = await driver.findElement(By.css('#qf-0q-room-0-adults option[selected="selected"]'));

    const totalTravelers2 = await driver.findElement(By.id('qf-0q-room-1-adults'));
    const adultsInRoom2 = await driver.findElement(By.css('#qf-0q-room-1-adults option[selected="selected"]'));

    const totalTravelersValue = await totalTravelers.getAttribute('value');
    const adultsInRoom1Value = await adultsInRoom1.getAttribute('value');
    const totalTravelersValue2 = await totalTravelers2.getAttribute('value');
    const adultsInRoom2Value = await adultsInRoom2.getAttribute('value');

    const expectedTotalTravelers = parseInt(adultsInRoom1Value) + parseInt(adultsInRoom2Value);
    const actualTotalTravelers = parseInt(totalTravelersValue) + parseInt(totalTravelersValue2);

    assert.strictEqual(expectedTotalTravelers, actualTotalTravelers);
  });
});