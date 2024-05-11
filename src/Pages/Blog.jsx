import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 ">
      <div className="relative flex flex-col max-w-6xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client side?
          </h3>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold text-lg">Access Token:</span> An access
            token is a credential that is used by an application to access an
            API or a protected resource on behalf of a user. It's typically a
            string of characters that grants specific permissions to the
            application. Access tokens are short-lived and have an expiration
            time. They are used to authenticate the user during a specific
            session or interaction with the API. Refresh
            <ol className="pl-4">
              <li className="pl-3 list-disc">
                When a user authenticates with a server (e.g., through OAuth),
                they receive an access token.
              </li>
              <li className="pl-3 list-disc">
                This token is then sent with each request to the server's API to
                access protected resources.
              </li>
              <li className="pl-3 list-disc">
                Typically, access tokens have a relatively short lifespan, often
                just a few minutes or hours, to enhance security.
              </li>
              <li className="pl-3 list-disc">
                They are usually stored in memory on the client side, such as in
                variables or in the client's session storage.
              </li>
              <li className="pl-3 list-disc">
                Since access tokens are short-lived and sent with each request,
                storing them in memory is generally sufficient and secure.
              </li>
            </ol>
            <br />
            <span className="font-bold text-lg">Refresh Token:</span> A refresh
            token is also a credential, but its purpose is different from an
            access token. When an access token expires, the application can use
            a refresh token to obtain a new access token without requiring the
            user to re-authenticate. Refresh tokens are long-lived and can be
            used to request new access tokens multiple times. They are more
            sensitive than access tokens because they can be used to obtain new
            access tokens even without the user's presence.
            <ol className="pl-4">
              <li className="pl-3 list-disc">
                Refresh tokens have a longer lifespan compared to access tokens
                and are used to obtain new access tokens when they expire.
              </li>
              <li className="pl-3 list-disc">
                They are securely stored on the client side, usually in more
                persistent storage such as cookies or local storage.
              </li>
              <li className="pl-3 list-disc">
                When the access token expires, the client sends the refresh
                token to the authentication server.
              </li>
              <li className="pl-3 list-disc">
                The authentication server verifies the refresh token and issues
                a new access token to the client.
              </li>
              <li className="pl-3 list-disc">
                Refresh tokens should be protected against theft or misuse, as
                they grant the ability to obtain new access tokens without
                requiring the user to re-authenticate.
              </li>
            </ol>
          </p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs">April 03, 2021</span>
            <div className="flex flex-wrap gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #javascript
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #react
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #Jwt
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col max-w-6xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">
            What is Nest JS ?What is express js?
          </h3>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold text-lg">NestJS:</span>NestJS is a
            framework for building efficient, scalable, and maintainable
            server-side applications with Node.js. It is built with TypeScript
            and heavily inspired by Angular, making it familiar and comfortable
            for developers who are already experienced with Angular or other
            modern JavaScript frameworks.
            <br />
            <br />
            Key features of Nestjs include:
            <br />
            <br />
            <ol className="pl-4">
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">Modularity: </span>
                NestJS encourages a modular architecture, allowing developers to
                organize their code into modules. Modules encapsulate related
                functionality, making the application easier to maintain and
                scale.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">
                  {' '}
                  Dependency Injection:{' '}
                </span>
                NestJS utilizes dependency injection, a design pattern commonly
                used in enterprise applications, to manage the dependencies
                between different components of the application. This promotes
                loose coupling and makes components more reusable and testable.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">
                  Express Compatibility:{' '}
                </span>
                NestJS is built on top of Express.js, leveraging its robust HTTP
                server capabilities. Developers can use middleware, routing, and
                other features of Express within NestJS applications.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">Middleware: </span>
                NestJS supports middleware, allowing developers to intercept and
                modify incoming HTTP requests and outgoing responses. Middleware
                can be used for tasks such as authentication, logging, error
                handling, and more.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">
                  Decorators and Metadata:
                </span>
                NestJS uses decorators and metadata to define routes,
                controllers, providers, and other components of the application.
                This declarative approach reduces boilerplate code and improves
                readability.
              </li>
            </ol>
            <br />
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold text-lg">Express Js:</span> Express.js is
            a minimalist web application framework for Node.js, designed to make
            building web applications and APIs easier and more efficient. It
            provides a robust set of features for web and mobile applications,
            including routing, middleware support, template engines, and more.
            <br />
            <br />
            Key features of Express.js include:
            <br />
            <br />
            <ol className="pl-4">
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">Routing: </span>
                Express allows you to define routes for handling different HTTP
                requests (GET, POST, PUT, DELETE, etc.) to specific URL paths.
                You can define route handlers to execute code when a request
                matches a particular route.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg"> Middleware: </span>
                Express uses middleware functions to handle tasks such as
                parsing request bodies, logging, authentication, error handling,
                and more. Middleware functions can modify the request and
                response objects, terminate the request-response cycle, or pass
                control to the next middleware function in the stack.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">Template Engines: </span>
                Express supports various template engines such as Pug, EJS,
                Handlebars, and others, allowing you to generate HTML
                dynamically and render views based on data.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">Static File Serving: </span>
                It provides built-in middleware for serving static files such as
                images, CSS, JavaScript, etc., making it easy to serve
                client-side assets.
              </li>
              <li className="pl-3 list-disc">
                <span className="font-bold text-lg">
                  Integration with Node.js:
                </span>
                Express is designed to work seamlessly with Node.js, leveraging
                its asynchronous, event-driven architecture to handle high
                concurrency and scalability.
              </li>
            </ol>
            <br />
          </p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs">April 03, 2021</span>
            <div className="flex flex-wrap gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #javascript
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #react
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                #Jwt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
