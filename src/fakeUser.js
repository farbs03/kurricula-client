import { MailIcon, LinkIcon, PhoneIcon } from "@heroicons/react/solid"

export const fakeUser = {
	username: "farbs03",
    id: "43829q7ryuihjewkfkdlsr89327q489o3yuhwjkaflweadk", //you get the idea
    email: "cgeraldfarber@icloud.com",
    password: "KungFuKenny",
    profilePicture: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", //idek what we’re gonna use for this,
    bio: {
        description: "Kung Fu Kenny he was born with a vision...",
        backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        links: [
            {
                title: "cgeraldfarber@icloud.com", 
                link: 'mailto:cgeraldfarber@icloud.com', 
                type: "email"
            },
            {
                title: 'chrisfarbs.com',
                link: "https://chrisfarbs.com",
                type: "website"
            },
            {
                title: '915-490-6814',
                link: "#",
                type: "phone"
            }
        ],
        tags: ['Developer','AP Student','Cool Guy'],
        friends: ["brandini101", "zanesta", "chessgal", "ezlikespie"]
    },
    posts: [{}],
    comments: [{}],
    chats: {
        "brandini101": [
            {
                from: "them",
                message: "Help with calc bc pls",
                time: "2:43 PM" //will be actual time stamp,
            },
            {
                from: "you",
                message: "No :)",
                time: "2:56 PM"
            },
        ],
        "zanesta": [
            {
                from: "them",
                message: "Yo how's the ml project been going",
                time: "2:43 PM" //will be actual time stamp,
            },
            {
                from: "you",
                message: "GPT2 is stupid, pls help",
                time: "2:56 PM"
            },
        ],
    },
    events: {
        onBoard: [
            {
                date: new Date(2022, 1, 4),
                title: "Event 1",
                theme: "red",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 4),
                title: "Event 2",
                theme: "orange",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 5),
                title: "Event 3",
                theme: "green",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 6),
                title: "Event 4",
                theme: "sky",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 7),
                title: "Event 5",
                theme: "indigo",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 8),
                title: "Event 6",
                theme: "violet",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },

        ],
        inProgress: [
            {
                date: new Date(2022, 1, 4),
                title: "Event 1",
                theme: "red",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 4),
                title: "Event 2",
                theme: "orange",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 5),
                title: "Event 3",
                theme: "green",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 6),
                title: "Event 4",
                theme: "sky",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 7),
                title: "Event 5",
                theme: "indigo",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
            {
                date: new Date(2022, 1, 8),
                title: "Event 6",
                theme: "violet",
                startTime: "2:00 PM",
                endTime: "5:00 PM"
            },
        ]
    }
}