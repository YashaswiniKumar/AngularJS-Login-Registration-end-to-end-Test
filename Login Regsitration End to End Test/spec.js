// spec.js
describe('Protractor end to end App', function() {
  it('Login page and Registration end to end testing', function() {
	  
	//opens browser with website in local machine
   browser.get('http://localhost:8080/#!/login');

   
   //Register page //
   element(by.linkText("Register")).click();
   element(by.id('firstName')).sendKeys('John');
   element(by.id('Text1')).sendKeys('Mayer');
   element(by.id('username')).sendKeys('john_mayer@gmail.com');
   element(by.id('password')).sendKeys('Password');
   
   browser.sleep(1000);//creates delay
	//clicks the register button
   var registerbtn=element(by.buttonText('Register'));
   registerbtn.click();
   
    browser.sleep(1000);
	
	//enters username and password
	element(by.id('username')).sendKeys('john_mayer@gmail.com');
    browser.sleep(1000);
	element(by.id('password')).sendKeys('Password');
	browser.sleep(1000);
	
	//Clicks on login button
	var loginbtn= element(by.buttonText('Login'));
	//or //var loginbtn=element(by.className('btn btn-primary'));
	loginbtn.click();
  
  //deleting the user account
	browser.sleep(1000);
	element(by.css('[ng-click="vm.deleteUser(user.id)"]')).click();
   
  //Click on logout button
   var logoutbtn=element(by.className('btn btn-primary'));
   browser.sleep(1000);
   logoutbtn.click();
   
  });
});



