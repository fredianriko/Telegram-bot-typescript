import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// endpoint to send message to user without any prompt first
// this could be used for (reminder, marketing brodcast, ads, etc)
// or, if you already have predefined message you want to brodcast, you could just create simple service and run it using cronjob
// for eg: you input the message into database
// the function should just query the latest message you want to delivery
// make the function to run using cronjob for period you desire eg: every 1 hour

// there are endless possibility that can be used with telegram bot
app.post("/sendMessageToUser", (req, res) => {
  // get parameter
  // process parameter
  // construct message to be sends
  // call telegram bot function to handle the send message to user
  // handle error if hapend
  //return
});

app.listen(process.env.PORT, () => {
  console.log(`Express server running on port ${process.env.PORT}`);
});
