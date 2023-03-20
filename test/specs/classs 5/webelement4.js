/**
 * <tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *     <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
 *         <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         <tag3>Not Unique Text
 *              <subTag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subTag>
 *         </tag3>
 *         <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
 *         <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
 *         <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 31</tag31>
 *     </tag2>
 *     <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *         
 *         <a attr1="value1" attr2="value2">Unique Text 4</a>
 *     </tag4>
 *     <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
 *          <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag7>
 *     </tag6>
 * </tag1>
 * 
 * 
 * parent-tag   ->  tag1 is parent of tag2, tag4, tag6
 *                  tag6 is parent tag7
 *                  tag4 is parent of a
 *                  tag2 is parent of tag3, tag11, tag21, tag31
 *                  tag11 is parent of -
 *                  tag3 is parent of subTag
 *                  tag21 is parent of -
 * 
 *                  subTag -> tag3 -> tag2 -> tag1
 *                  a -> tag4 -> tag1
 * children-tag
 * sibling-tag      tag2, tag4, tag6 are siblings (tag1)
 *                  subTag is child of tag3
 *                  tag11, tag21 are siblings (tag2)
 * 
 * following-sibling (sibling starting-tags which appear in the dom after the tag)
 * following sibling of tag11   ->  tag21, tag31
 * following-sibling of a-tag   ->  -
 * 
 * preceding-sibling (sibling starting-tags which appear in the dom before the tag)
 * preceding sibling of tag11   ->  tag3
 * preceding-sibling of a-tag   ->  -
 * 
 * following (all starting-tags appear in the dom after the tag)
 * following of tag11   ->  tag21, tag31, tag4, a, tag6, tag7
 * following of a-tag   ->  tag6, tag7
 * 
 * preceding (all starting-tags appear in the dom before the tag)
 * preceding of tag11   ->  subTag, tag3, tag2, tag1
 * preceding of a-tag   ->  tag4, tag31, tag21, tag11, subTag, tag3, tag2, tag1
 * 
 */

// Steps to find and interact with a webElement
/**
 * 1. Find the unique locator strategy to find webElement in the DOM
 * 2. Based on the locator strategy, use corresponding code to find the webElement
 * 3. once the webElement is found, interact with webElement
 */

// To find webElement
//      function: $

// Functions to interact with webElement:
/**
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text that we want to type
 * 
 * 2. click
 *      function: click()
 * 
 * 3. to find if webElement is enabled
 *      function: isEnabled()
 *      if the webElement is enabled
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 4. to find if a webElement is selected
 *      function: isSelected()
 *      if the webElement is selected
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 5. to find if a webElement is displayed
 *      function: isDisplayed()
 *      if the webElement is displayed
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 6. to get the value of any attribute
 *      function: getAttribute()
 *      input: attribute-name
 *      returns the attribute's value as a string
 * 
 * 7. to get the text-value
 *      function: getText()
 *      returns the text-value as a string
 *      
 */

// Functions to interact with webElement:
/**
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text that we want to type
 * 
 * 2. click
 *      function: click()
 * 
 * 3. to find if webElement is enabled
 *      function: isEnabled()
 *      if the webElement is enabled
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 4. to find if a webElement is selected
 *      function: isSelected()
 *      if the webElement is selected
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 5. to find if a webElement is displayed
 *      function: isDisplayed()
 *      if the webElement is displayed
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 * 6. to get the value of any attribute
 *      function: getAttribute()
 *      input: attribute-name
 *      returns the attribute's value as a string
 * 
 * 7. to get the text-value
 *      function: getText()
 *      returns the text-value as a string
 *      
 */

// Locator strategies:
/**
 * Locators: way to reach/find a webElement in DOM
 * 
 * 1. Using id-attribute
 *      id-attribute is always going to be unique for the webpage (in the DOM)
 *      To check if id-value is unique, In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = await $('#idValue');
 * 
 * 2. Using other attribute's value instead id-attribute
 *      To check if any-attribute has unique value, In chropath -> //tagName[@attrName="attrValue"]
 *      Note: Attribute's value cannot have spaces (If want to use attribute's value with spaces then refer xpath)
 *      
 *      const webElement = await $('tagName[attrName=attrValue]');
 * 
 * 3. Using text-Value
 *      To check if the text-value with webElement is unique, In chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = await $('tagName=text value');
 * 
 * 4. Using partial attribute's value
 *      To check if the partial attribute's value is unique, In chropath -> //tagName[contains(@attrName, 'partialAttrValue')]
 *      Note: Attribute's partial value cannot have spaces (If want to use attribute's partial value with spaces then refer xpath)
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]');
 * 
 * 5. Using partial text-value
 *      To check if the partial text value is unique, In chropath -> //tagName[contains(text(), 'partial Text Value')]
 * 
 *      const webElement = await $('tagName*=partial text value');
 * 
 * 6. Using link-text
 *      To check if the link text is unique, In chropath -> //a[text()='Link text']
 * 
 *      const webElement = await $('=Link text');
 * 
 * 7. Using partial link-text
 *      To check if the link partial-text is unique, In chropath -> //a[contains(text() , 'partial link text')]
 * 
 *      const webElement = await $('*=partial link text');
 * 
 * 8. Using tagName
 *      To check if the tagName with webElement is unique, In chropath -> //tagName
 * 
 *      const webElement = await $('<tagName>')
 * 
 */

/**
 * 9. Xpath
 *      Types:
 *      1. Absolute xpath
 *          a) starts with root-tag (or html-tag)
 *          b) always starts with single-slash (/)
 *          c) not reliable, any change in the webPage may break the absolute xpath
 *          eg:
 *              /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]
 * 
 *      2. Relative xpath
 *          a) always starts with double-slash (//)
 *          b) reliable bcz we use the tagName, attribute or text-value in any combination to create xpath
 * 
 *      -> Direct xpath (simple xpath)
 *      -> Indirect xpath (advanced xpath)
 */

// Direct xpath (simple xpath)
/**
 * 
 * 
 * 1. using attribute's value
 *      //tagName[@attrName="attr value"]
 *      find the tag(tagName) which has attribiute(attrName) with value equals to "attr value"
 * 
 *      const webElement = await $('//tagName[@attrName="attr value"]')
 * 
 * 2. using text value
 *      //tagName[text()="text value"]
 *      find the tag(tagName) which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[text()="text value"]')
 *      
 * 3. using partial attribute's value (function -> contains())
 *      //tagName[contains(@attrName, "partial attr value")]
 *      find the tag(tagName) in dom where attribute(attrName)'s value contains "partial attr value"
 * 
 *      const webElement = $('//tagName[contains(@attrName, "partial attr value")]');
 * 
 * 4. using partial text value (function -> contains())
 *      //tagName[contains(text(), "partial text value")]
 *      find the tag(tagName) where text contains "partial text value"
 * 
 *      const webElement = $('//tagName[contains(text(), "partial text value")]')
 * 
 * 5. using starting portion of attribute's value (function -> starts-with())
 *      //tagName[starts-with(@attrName, "starting attr value")]
 *      find the tag(tagName) in dom where attribute(attrName)'s value starts with "starting attr value"
 * 
 *      const webElement = $('//tagName[starts-with(@attrName, "starting attr value")]');
 * 
 * 6. using starting portion of text value (function -> starts-with())
 *      //tagName[starts-with(text(),"starting text value")]
 *      find the tag(tagName) in dom where text-value starts with "starting text value"
 * 
 *      const webElement = $('//tagName[starts-with(text(),"starting text value")]');
 * 
 * 7. using not()
 *      //tagName[not(@attrName="attr value")]
 *      find the tag(tagName) which has attribiute(attrName) with value NOT equals to "attr value"
 * 
 *      //tagName[@attrName]
 *      find the tag(tagName) which has attribute(attrName)
 * 
 *      //tagName[not(@attrName)]
 *      find the tag(tagName) which does NOT have attribute(attrName)
 * 
 * 8. using and/or operator
 *      //tagName[@attrName="attr value" and text()="text value"]
 * 
 *      //tagName[contains(text(), "partial text value" or starts-with(@attrName, "starting portion of attrValue")]
 * 
 *      //tagName[text()="value1" or text()="value2"]
 * 
 */

// Indirect xpath (advanced xpath)
/**
 * chained xpath (using parent-tag, grand-parent-tag and so on...)
 * 
 *  (//a[@data-from-string="locationCard"])[5]//span
 *  //div[@class="uitk-menu-trigger"]//button
 *  //div[@class="uitk-menu-trigger"]//button[@aria-label="Going to"]
 *
 */
// Xpath Axes
/**
 * 1. following-sibling (sibling starting-tags which appear in the dom after the tag)
 *      //tagName[condition(s)]/following-sibling::tag2[condition(s)]
 * 
 *      (//h2[text()="Weather Result"]/following-sibling::div//div[@role="heading"]//span)[1]
 *      //label[starts-with(text(),"Fem")]/following-sibling::input
 *      //label[starts-with(text(),"Fem")]/following-sibling::*
 *      //label[text()="Going to"]/following-sibling::button
 * 
 * 2. preceding-sibling (sibling starting-tags which appear in the dom before the tag)
 *      //tagName[condition(s)]/preceding-sibling::tag2[condition(s)]
 * 
 *      //div[text()="Going to"]/preceding-sibling::button
 *  
 * 3. following (all starting-tags appear in the dom after the tag)
 *      //tagName[condition(s)]/following::tag2[condition(s)]
 * 
 * 
 * 4. preceding (all starting-tags appear in the dom before the tag)
 *      //tagName[condition(s)]/preceding::tag2[condition(s)]
 * 
 * 
 * 5. parent (to go to parent-tag from chaild-tag)
 *      //tagName[condition(s)]/parent::tag2[condition(s)]
 * 
 *      //input[@id="date_form_field"]/parent::*
 *      
 *      .. can also be used like parent-axes
 *      //input[@id="date_form_field"]/..
 * 
 * 
 */


// Link
/**
 *      always have a-tag
 *      text of a link is called Link-Text
 *      after clicking the link, user should land on which webPage that is defined in href-attribute.
 * 
 * 
 * 
 * <a href="https://messenger.com/" title="Check out Messenger.">
 *  Messenger
 * </a>
 * Text of a-tag = Messenger
 * 
 */