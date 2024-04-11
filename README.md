# Telegram bot base Typescript

---

**TABLE OF CONTENT**
[TOC]

---

# TIPS:

## remove unused config in tsconfig after initializing, run using wsl

```
sed -i -r '/^[ \t]_\//d; /^[[:space:]]_$/d; s/\/\*(.*?)\*\///g; s/[[:blank:]]+$//' tsconfig.json
```

---

# This is my first telegram bot

# Steps

1. make sure you already have telegram account, if you don't have yet, create one
2. create obtain your bot api token by chat to use @BotFather -> this is the official bot to generate new bot in telegram
3. chat '/newbot' to it, usually when you "start" messaging the @BotFather, it will tell you all the basic command to use it
4. you would be prompted to name your bot, and it will generate new api token to access your telegram bot
5. to check your bot exist or not, type this to your browser

   eg:

   - https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe
   - https://api.telegram.org/botxxxxxxxxx/getMe -> no need for <>

this will show you like this [bot-created](./images/checkBot.png)
