import { useRouter } from "next/dist/client/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const MeetupDetails = (props) => {
  const meetupFoundById = props.meetupFoundById;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return meetupFoundById ? (
    <MeetupDetail
      image={meetupFoundById.image}
      title={meetupFoundById.title}
      address={meetupFoundById.address}
      description={meetupFoundById.description}
    />
  ) : (
    <p>404</p>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = (context) => {
  const meetupId = context.params.meetupId;
  const meetupFoundById = DUMMY_MEETUPS.find(
    (meetup) => meetup.id === meetupId
  );

  return {
    props: {
      meetupFoundById: meetupFoundById ? meetupFoundById : null,
    },
  };
};

export default MeetupDetails;
