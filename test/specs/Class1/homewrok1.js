const { Builder, By, Key, until } = require('selenium-webdriver');

// TC-1: Verify current temp is less than or equals to feel-like temp
async function testTemperature() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. Launch https://www.accuweather.com/
    await driver.get('https://www.accuweather.com/');

    // 2. Verify current-temp is in between 45 and 55
    let tempElement = await driver.findElement(By.className('current-temp'));
    let tempText = await tempElement.getText();
    let temp = parseInt(tempText);
    if (temp >= 45 && temp <= 55) {
      console.log('Temperature is between 45 and 55');
    } else {
      console.error(`Temperature ${temp} is not between 45 and 55`);
    }
  } finally {
    await driver.quit();
  }
}

// TC-2: Verify error on empty login flow
async function testEmptyLogin() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. Launch https://www.facebook.com/
    await driver.get('https://www.facebook.com/');

    // 2. Click 'Log In' button
    let loginButton = await driver.findElement(By.id('loginbutton'));
    await loginButton.click();

    // 3. Verify error msg is displayed
    let errorMsgElement = await driver.findElement(By.xpath("//div[contains(text(), 'The email or mobile number you entered isn')]"));
    let errorMsgText = await errorMsgElement.getText();
    if (errorMsgText === "The email or mobile number you entered isn’t connected to an account. Find your account and log in.") {
      console.log('Error message is displayed: ' + errorMsgText);
    } else {
      console.error(`Unexpected error message: ${errorMsgText}`);
    }
  } finally {
    await driver.quit();
  }
}

// TC-3: Verify the empty messenger login flow
async function testEmptyMessengerLogin() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. Launch https://www.facebook.com/
    await driver.get('https://www.facebook.com/');

    // 2. Click on 'Messenger' link
    let messengerLink = await driver.findElement(By.xpath("//a[contains(text(), 'Messenger')]"));
    await messengerLink.click();

    // 3. Verify 'Keep me signed in' checkbox is NOT selected
    let keepMeSignedInCheckbox = await driver.findElement(By.name('persistent'));
    let isChecked = await keepMeSignedInCheckbox.isSelected();
    if (!isChecked) {
      console.log('Keep me signed in checkbox is not selected');
    } else {
      console.error('Unexpected checkbox state: checkbox is selected');
    }

    // 4. Click 'Log In' button
    let loginButton = await driver.findElement(By.name('login'));
    await loginButton.click();

    // 5. Verify link -> "Find your account and log in" is displayed
    let findAccountLink = await driver.findElement(By.xpath("//a[contains(text(), 'Find your account and log in')]"));
    let linkText = await findAccountLink.getText();
    if (linkText === 'Find your account and log in') {
      console.log(`Link text is correct: ${linkText}`);
    } else {
      console.error(`Unexpected link text: ${linkText}`);
    }

    // 6. Verify 'Continue' button is enabled
    let continueButton = await driver.findElement



