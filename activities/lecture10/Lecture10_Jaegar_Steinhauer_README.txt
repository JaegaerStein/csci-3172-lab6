# Activity 10 / Lab / Assignment / Project Title

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 13 02 2025
* *Last Modification Date*: 13 02 2025
* *Lab URL*: 
Timberlea: https://web.cs.dal.ca/~steinhauer/csci3172/activities/lecture10/
Github: https://git.cs.dal.ca/steinhauer/csci-3172/-/tree/main/activities/lecture10?ref_type=heads


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Jaegar Steinhauer](jg225260@dal.ca) - (Student)
* [Name](email@dal.ca) - (Role)
* [Name](email@dal.ca) - (Role)
* [Name](email@dal.ca) - (Role)
* [Name](email@dal.ca) - (Role)


Lecture 10 Reflection Response: 
Regular Expressions Used: 

First Name: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/i
- Allows only letters
- Allows for middle name seperated by space
- Non case sensitive

Last Name: /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/i
- Allow only letters
- Allows apostrophe's (e.g., O'Brien) and hyphens (e.g., Smith-Burns)
- Non case sensitive

Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
- Ensures a valid email structure
- Supports domain names with a 2-6 characters

Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/
- requires at least one lowercase and one uppercase letters
- requires atleast one number and one special character 
- Allows password to be 12 or more characters long

These RegEx's pass all the test cases provided in the txt file. 

Using Regexr helped visualize the pattern matching in real-time, making learning easier. 
The main challenge was ensuring the email format was correct as I had trouble with emails like:
Someone-someone@somwewhere.somewhere.inform, as I was unaware that emails were allowed "." characters before the domain names.
Overall, the responsive nature of regexr helped me refresh myself on regex functionality. 

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*


### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*



## Artificial Intelligence Tools Used
If in completing your lab / assignment / project you used any Artificial Intelligence Tools or Plugins, then provide a list of the tools or plugins used, the prompt used, the code generated by the AI, where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Tool used
* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Plugin used
* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Tool used


### Prompt Used on *NAME OF AI TOOL*

```
Copy and paste the prompt used 

```

The code prompt above was used [NAME](link) to generate the code shown below: 

```
Copy and paste the entirety of the code generated by the AI Tool listed above.

```

#### File Name
*Lines ## - ##*

```
Copy and paste your code on the lines mentioned

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...


### Prompt Used on *NAME OF AI TOOL*

```
Copy and paste the prompt used 

```

The code prompt above was used [NAME](link) to generate the code shown below: 

```
Copy and paste the entirety of the code generated by the AI Tool listed above.

```

#### File Name
*Lines ## - ##*

```
Copy and paste your code on the lines mentioned

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...


*Repeat as needed*



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
