### Conceptual Exercise

Answer the following questions below:

- What is a JWT? 

JWT stands for "JSON web token." Many devs pronounce JWT as "jot." A JWT is an open standard which is implemented in order to transfer important information in a secure manner. 

- What is the signature portion of the JWT?  What does it do?

The signature portion of JWT is used to verify the identity of the sender. The signature ensures the information sent hasn't been tampered with by a bad actor.

- If a JWT is intercepted, can the attacker see what's inside the payload?

If intercepted an attacker can see what is in the payload. The JWT is not encrypted so it's easy for the attacker to see the JSON data. This is why it is essential you never send sensitive information with the token. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.

In order to authenticate a user the client sends the JWT to the backend. It is sent within the http request. Along the way the token is validated. Once validated access to some user details are granted. 

- Compare and contrast unit, integration and end-to-end tests.

end-to-end tests test every part of the app at once. They are good for testing the full workload of the app. Unit tests focus on individual code blocks to make sure individual moving parts are working as expected. Integration tests test whether specific components of the app work together properly. They may test 2 or 3 blocks of code to see if they work together as expected. However integration tests differ from end-to-end, this is because the former does not tests the entire scope of the app. While end-to-end focuses on the entire flow of the app, integration tests focus on how multiple moving parts work together.

- What is a mock? What are some things you would mock?

Mocks are simply objects or modules that are simulated with the sole purpose of mimicking an actual object or module. They are another way you can test your app. With mocks you write dummy code in order to test parts of your app without having to alter the actual code. This is a great way to test whether certain operations are working as expected. 

- What is continuous integration?

Continuous integration is when multiple devs continuously merge code changes in a central repo, once merged, builds and tests are run. 

- What is an environment variable and what are they used for?

Environment variable allow you to configure a particular environment. They deal with sensitive information such as passwords so they are not easily accessed. They address specific environment details such as what port an application runs on ect. 


- What is TDD? What are some benefits and drawbacks?

TDD stands for Test-Driven Development. It is a method where one writes tests first before the actual implementation. The idea is to test the code before you implement it in your project to ensure it will work as expected. 

- What is the value of using JSONSchema for validation?

JSONSchema ensures your JSON structure is compatible with the API you are interacting with. It allows different languages to work together. It is a very powerful tool. 

- What are some ways to decide which code to test?

You want to test the code that affects the behavior of your app. Focus on the most important code blocks. For example uou should test user authentification if applicable, you should test requests to APIS, test the most essential parts of your app rather than trying to have perfect test coverage. 



- What does `RETURNING` do in SQL? When would you use it?

RETURNING allows you to skip an extra DB queries, it lets you retrive the data right away so it can be used later. Say you need access to the username on the front-end, RETURNING allows you access to such data without having to make any extra requests for data retrieval. 

- What are some differences between Web Sockets and HTTP?

Web sockets maintain a connection, the connection persists, this differs from HTTP because the latter requires a new request per response. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I had an easier time with Flask because I think Python is a better language for server-side code. The syntax is easier to understand and I think it works smoother when dealing with complex back-end code. I feel that JS can get a bit clunky and is better suited for client-side code. I think the simpler syntax and shorter code we enjoy in python is much better when working with the many files, and more complex code one has to implement when writing back-end code. 