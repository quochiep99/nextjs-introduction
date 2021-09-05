import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { Head } from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Add A New Meetup</title>
        <meta
          name="description"
          content="Add your onw meetups and create amazing networking opportunites."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
