### Welcome to the SignalPet Home Assigment

In order to get started with the project, fisrt get the frontend up and running.

1. Clone this repository to your local machine.
2. Open the project in your preferred IDE (e.g., Visual Studio Code).
3. Install the required dependencies by running the following command in the project directory:

```
npm install && npm run build && npm run start
```

4. The application will be available at http://localhost:3000.

After that, you need to get the Libretranslate library up and running, by following the steps below:

1. Check you have docker installed on your machine.
2. Go to the LibraTranslate [folder](https://github.com/LibreTranslate/LibreTranslate?tab=readme-ov-file) and clone it to your local machine.
3. Run the following command in the project directory:
   ```
   ./run.sh --load-only en,es,de,pt,fr --update-models --port 5000
   ```
   now the you should have the api running on port 5000.

### Consideration for approaching the project

First, the scale:
this home assigment scale is very small, so you can complete it in the frintend only, while not sacrificing the speed.
When talking about a bigger scale, you can use the backend to get the data from the api, and then use the frontend to display it, or even just put all the translated text in a database and fetch it from there.

Second, the cost: it has been mentioned that _Each translation request costs the company 0.05 USD._ which mean that the db approach is the best one, since you dont need to pay for the translations, but you need to take another things into consideration, you need to pay for deploying the api, and you need to pay for the database.

On the other hand, using only the frontend will cut these costs, but you will have to pay for the translations, every time a new user transalting the app. in order to reduce the number of requests, i used PersistQueryClientProvider to store every query in the local storage for the user to use, so there are trade-offs in every approach. and i decided to go with the fronend approach, since it is the quickest one, and the project scale don't necesseraly need all the infrustructures do get to the goal.

Another feature a wanted to add is baching requests, in order to reduce the cost event more, but i did not made it due to time constriants.

As you can see from the code in the various branches. first i wanted to implement the Nest.js as suggested, but after starting i came to the conclusion above and switched to use only the frontend.

After that i started to implement the solution without i18next since i wa not fdamiliar with the library, and i looked up the internet to check what it the most affactive approach to my case.

In the middle of the project i found out about i18next, so i tried to implement it, but saw no significant difference, and it resulted in more code, so i swiched back to the without-i18next approach, and finished the project.

Other suggestions are: using vite instead of create-react-app, loading all the translation together, which is related to the request baching feature.

About the second point in the Reuirements in the explenation: _Receive as an input the output language code. (The source language will always be
English)_. i did not quite well understood it, so a implemented select in order to choose which language the website will be presented as.
