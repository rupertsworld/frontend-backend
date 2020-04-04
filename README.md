# Basic Frontend/Backend Communication Demo

This codebase demos a basic web frontend that communicates with one of two backends. They are equivalent, with one written in Python (`backend-py`) and one in JavaScript using Node (`backend-js`). When you fire up the frontend in a browser, write your name in the textfield, and hit "Send to server!", a response fires back from the server saying "Hello [your name here]".

Currently, this code is all set up to run only on a local machine. However, with one small tweak they can run on public internet servers.

## How do I get it running?

### The frontend

In a terminal, run:

```
frontend/start-server.sh
```

Now navigate to http://localhost:1234 to see the site in action. You'll notice that nothing will happen (and you'll get an error in the browser console) if you hit the button. We need an API.

### The backend (JavaScript)

Make sure you have Node installed. Type `node` in a terminal and if you get an error, Google installing node.

```
cd backend-js
npm install
node server.js
```

Try your web frontend now, you should get a response from the API server!

### The backend (Python)

The best way to do this is using a virtual environment, so all the packages don't get installed globally. That's what the venv stuff is.

```
cd backend-py
python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt
./start-server.sh
```

Again, you should now get a response from the API server in your frontend (make sure only one backend server is running at a time though!)

## What if I want to deploy it on the web?

To get this working on the web, you will need to update some of the URLs to point to the places you are hosting the frontend and the backend. This happens in two spots.

### Change #1: CORS server address

The only thing stopping this from working on the web right now is the CORS settings. CORS (Cross-Origin Resource Sharing) is a security measure implemented by browsers which stops your API being accessed by anyone but frontend domains you approve of. Right now, that's set to `http://localhost:1234` which is the address of the frontend server when it's running locally on your machine, so that your browser can send messages to the backend.

Edit that URL in either of the server files to be the URL where you're hosting your frontend, and the code should work.\

### Change #2: API URL requested from the frontend

In the `frontend/main.js` file, update the `serverUrl` variable once you know where your server is located (you can get rid of the :3000 now, your production server should use its own port).

### Some potential web hosts

Here are some potential places to host your website. Google how to set up an account and get started hosting a static site and an API (off the top of my head, probably worth researching this to find what's right for you):

**Frontend**

- Github Pages
- Zeit Now
- Heroku
- Google App Engine

**Backend**

- Heroku
- Google App Engine
- Google Cloud Compute (if your API does more gnarly computing)
- Amazon S3

## Why a separate frontend and backend?

In this project, the frontend server is separated from the backend server. This doesn't have to be the case (it's not uncommon for a web server to both serve up the HTML for a website to a browser, and also be open to receive requests from that page in the browser).

However, for this example, we're looking at having a frontend and an external API -- this might make sense if, for example, you are doing some heavy ML/other processor-intensive computing on the API side and don't want to clog up your web frontend server for other site visitors. It also means you can have a faster, more lightweight machine serving your frontend and a more beefy machine for your backend if you need that. There are also website hosts, such as Github Pages and Zeit Now, that are really only for static pages. Your frontend html/js/css files here can be uploaded straight to one of these, and still communicate with your API which can be hosted independently (say, using Heroku, or Google Cloud Compute/App Engine Flex).


