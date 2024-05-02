// import {Configuration, OpenAIApi} from 'openai';
import openai from "./config/open-ai.js";
import readlineSync from 'readline-sync';
import colors from 'colors';

// const configuration = Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// });

// const openai = new OpenAIApi(configuration);
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// async function main(){
//     const chatCompletion = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             { role: 'user', content: 'What is the capital of Massachusetts?' }
//         ]
//     });

//     console.log(chatCompletion);
// }
async function main() {
      // const chatCompletion = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [{ role: "user", content: "Hello, who are you?" }]
      // });
      // console.log(chatCompletion.choices[0].message.content);
      // const userName = readlineSync.question('May I have your name?');
      // console.log(`Hello ${userName}`);
      console.log(colors.bold.green('Welcome to the Chatbot Program!'));
      console.log(colors.bold.green('You can start chatting with the bot.'));

      const chatHistory = []; //Store conversation history

      while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
          //Construct messages by iterating over the history
          const messages = chatHistory.map(([role, content]) => ({role, content}))

          // Add latest user input
          messages.push({ role:'user', content: userInput})

          //Call the API with user input
          const completion = await openai.chat.completions.create({
               model: "gpt-3.5-turbo",
               messages: messages,
             });

             //Get completion text/content
             const completionText = completion.choices[0].message.content;

          if (userInput.toLowerCase() === 'exit'){
            console.log(colors.green('Bot: ') + completionText);
            return;
          }

          console.log(colors.green('Bot: ') + completionText);

          // Update history with user input and assistant response
          chatHistory.push(['user', userInput]);
          chatHistory.push(['assistant', completionText]);
        } catch (error) {
          console.error(colors.red(error));
        }
      }
  }

main();