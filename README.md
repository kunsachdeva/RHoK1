# BookTalky



Built @ [Random Hacks of Kindness, Delhi](https://twitter.com/RHoK_Delhi/status/886550109009223684) 

### Further resources for imporvement

Education Ministry already has done a lot of [work](http://epathshala.nic.in/e-pathshala-4/e-resources-2/?opt_class=Senior+Secondary&opt_lang=English&opt_type=audio&search=Search&searching_text=)

## Setting Up the code

We assume that before you begin, you will have [node.js and npm](http://www.nodejs.org) and installed on your system.  Before you can run this project, you will need to set three system environment variables.  These are:

* `TWILIO_ACCOUNT_SID` : Your Twilio "account SID" - it's like your username for the Twilio API.  This and the auth token (below) can be found [on your account dashboard](https://www.twilio.com/user/account).
* `TWILIO_AUTH_TOKEN` : Your Twilio "auth token" - it's your password for the Twilio API.  This and the account SID (above) can be found [on your account dashboard](https://www.twilio.com/user/account).
* `TWILIO_NUMBER` : A Twilio number that you own, that can be used for making calls and sending messages.  You can find a list of phone numbers you control (and buy another one, if necessary) [in the account portal](https://www.twilio.com/user/account/phone-numbers/incoming).

For Mac and Linux, environment variables can be set by opening a terminal window and typing the following three commands - replace all the characters after the `=` with values from your Twilio account:

    export TWILIO_ACCOUNT_SID=ACXXXXXXXXX
    export TWILIO_AUTH_TOKEN=XXXXXXXXX
    export TWILIO_NUMBER=+16518675309

To make these changes persist for every new terminal (on OS X), you can edit the file `~/.bash_profile` to contain the three commands above.  This will set these environment variables for every subsequent session. Once you have edited the file to contain these commands, run `source ~/.bash_profile` in the terminal to set up these variables.

On Windows, the easiest way to set permanent environment variables (as of Windows 8) is using the `setx` command.  Note that there is no `=`, just the key and value separated by a space:

    setx TWILIO_ACCOUNT_SID ACXXXXXXXXX
    setx TWILIO_AUTH_TOKEN XXXXXXXXX
    setx TWILIO_NUMBER +16518675309

## Running the application

[Download the project source code directly](https://github.com/kunsachdeva/RHoK1/archive/master.zip) or [clone the repository on GitHub](https://github.com/kunsachdeva/RHoK1).
Navigate to the folder with the source code on your machine in a terminal window.
You will first need to install the application's dependencies.  You can do this using npm, the bundled package manager for node.js:

    npm install
    node app

Now, you should be able to launch the application.  From your terminal, run `node app.js`.  This should launch your Express application on port 3000 - [visit that URL on your local host](http://localhost:3000/).  Enter your mobile number in the fields provided, and test both SMS text messages and phone calls being sent to the mobile number you provide.

If your phone receives both a call and text message, you're good to go!
