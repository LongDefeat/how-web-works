// What is HTTP?
// HTTP is a protocol which allows a user/server to fetch data; it is the foundational data exchange between clients and servers on the Web

// What is a URL?
// URL - Uniform Resource Locator; this is a way for a client to retrieve any published resource online

// What is DNS?
// DNS - Domain Name System; it is like the phonebook for the web in that it takes a hostname such as "facebook.com" and turns it into an ip address. This makes searching and connecting on the web much easier for humans to understand rather than numbers.

// What is a query string?
// Provides "extra info" in a URL such as search terms, info from forms submitted. These are typically after a "?" is present on a URL. The query string allows you to pass key value pairs as well.

// What are two HTTP verbs and how are they different?
// The two main HTTP verbs are GET and POST
// GET: a request that gets information, but does not change the data in any way
// Post: a request to get information, but will change that data in addition to requesting it.

// What is an HTTP response?
// An HTTP response is made by a server to a client with the aim of returning the client's resource it requested. It may also return an error if there was one in the process of the retrieval.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// An HTTP header lets the client and the server pass additional info such as html/text, dates, etc.
// Request Headers: Host, User-Agent, Accept, Cookie, Cache-Control
// Response Headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// 1) Your browser turns the host name into an IP address
// 2) Your browser makes a request to that IP address, including any headers
// 3) The browswer makes a DOM from that HTML and may fetch other information needed for the web page(images, javascript, etc.)
// 4) The browswer makes a separate HTTP Request for any of those extra resources and receives additional responses from servers for each request (ex: if an image is needed, it will make the request to the proper server and then nest the response into the web page)

// https://icanhazdadjoke.com/
// Server:		2600:1700:5d80:d691::1
// Address:	2600:1700:5d80:d691::1#53
