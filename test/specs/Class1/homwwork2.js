
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
Click on Create New Account button
const createAccountBtn = await driver.findElement(webdriver.By.xpath("//a[@data-testid='open-registration-form-button']"));
await createAccountBtn.click();

// Verify current date is displayed in the birthdate dropdowns
const currentDate = moment().format('MM-DD-YYYY');
const birthdateFields = await driver.findElements(webdriver.By.xpath("//select[contains(@name,'birthday')]"));
for (const field of birthdateFields) {
  const selectedValue = await field.getAttribute('value');
  expect(selectedValue).to.equal(currentDate);
}
// Make Adults=4 in Room-1
const room1Select = await driver.findElement(webdriver.By.xpath("//select[@name='q-room-0-adults']"));
await room1Select.sendKeys(webdriver.Key.ARROW_DOWN);
await room1Select.sendKeys(webdriver.Key.ARROW_DOWN);
await room1Select.sendKeys(webdriver.Key.ARROW_DOWN);
await room1Select.sendKeys(webdriver.Key.ARROW_DOWN);

// Click Add another room
const addRoomBtn = await driver.findElement(webdriver.By.xpath("//button[@class='widget-query-room-add-another']"));
await addRoomBtn.click();

// Make Adults=3 in Room-2
const room2Select = await driver.findElement(webdriver.By.xpath("//select[@name='q-room-1-adults']"));
await room2Select.sendKeys(webdriver.Key.ARROW_DOWN);
await room2Select.sendKeys(webdriver.Key.ARROW_DOWN);
await room2Select.sendKeys(webdriver.Key.ARROW_DOWN);

// Click on Done button
const doneBtn = await driver.findElement(webdriver.By.xpath("//button[@class='widget-query-group widget-query-room-occupancy-done-button']"));
await doneBtn.click();

// Verify total-travalers is equals to the number of adults mentioned in rooms
const totalTravelers = await driver.findElement(webdriver.By.xpath("//span[@class='widget-query-room-guests']"));
const totalTravelersText = await totalTravelers.getText();
const numAdults = 4 + 3;
expect(totalTravelersText).to.include(numAdults.toString());






