import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const newMeetup = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://hiep123:hiep123@cluster0.bepv1.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    await meetupsCollection.insertOne(newMeetup);

    res.status(201).json({ message: "meetup inserted" });
    client.close();
  }
};
export default handler;
