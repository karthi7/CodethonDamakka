import { StreamModel } from './app.model';
import { Contributors } from './app.model';

export const StreamData: StreamModel[] = [
    {
        id: 'coding_challenge',
        title: 'Coding Challenge',
        activeChallenge : '4',
        activeChallengeSinceLastVisit : '3',
        completedChallenges : '3',
        description: 'Challenges for several different domains such as Algorithms, Mathematics, SQL, Functional Programming, AI, and more. You can solve all the challenge directly online (check out this example). They provide a discussion and leaderboard for every challenge, and most challenges come with an editorial that explains more about the challenge and how to approach it to come up with a solution. Aside from the editorial, you cannot currently view the solutions of other users on Colab.',
        avatar: '../../../assets/images/coding_mac8.jpg',
        challenges: [
            {
                title: 'Camel case',
                description: 'Write a code to reverse string. Free to use any programming languages.',
                points: '10',
                endDate: '12/12/2020',
                id:'camel_case',
                status: 'not completed'
            },
            {
                title: 'Palindrome Code',
                description: 'Write a code to implement palindrome. Any programming language is accepted.',
                points: '15',
                endDate: '13/12/2020',
                id:'palindrome',
                status: 'completed'
            },
            {
                title: 'Shortcut to reach the destination',
                description: 'Code snippet to get the shortest steps to reach the destination in any programming languages.',
                points: '25',
                endDate: '15/12/2020',
                id:'shortcut',
                status: 'completed'
            },
            {
                title: 'Coin Change Problem',
                description: 'Give the changes to the amount with least number of coin. Surplus amount of coins will be supplied',
                points: '20',
                endDate: '15/12/2020',
                id:'coinchange',
                status: 'not completed'
            },
            {
                title: 'Fibonacci series',
                description: 'Write a shortest program to implement fibonacci series. Free to use any programming languages',
                points: '30',
                endDate: '19/12/2020',
                id:'fibonacci',
                status: 'not completed'
            },
            {
                title: 'Factorial Numbers',
                description: 'Write a shortest program to implement factorial series. Free to use any programming languages',
                points: '35',
                endDate: '22/12/2020',
                id:'factorial',
                status: 'not completed'
            },
            {
                title: 'Odd Numbers',
                description: 'Write a shortest program to implement odd number series. Free to use any programming languages',
                points: '25',
                endDate: '22/12/2020',
                id:'odd_numbers',
                status: 'not completed'
            },
            {
                title: 'Prime Numbers',
                description: 'Write a shortest program to implement prime number series. Free to use any programming languages',
                points: '15',
                endDate: '22/12/2020',
                id:'prime_numbers',
                status: 'completed'
            },
            {
                title: 'Whole Numbers',
                description: 'Write a shortest program to implement whole number series. Free to use any programming languages',
                points: '20',
                endDate: '22/12/2020',
                id:'whole_numbers',
                status: 'not completed'
            }

        ]
    },
    {
        id: 'orating',
        title: 'Orating',
        activeChallenge : '4',
        activeChallengeSinceLastVisit : '3',
        completedChallenges : '3',
        description: 'Venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        avatar: '../../../assets/images/stream_image_logo4.jpg',
        challenges: [
            {
                title: 'Politics',
                description: 'Prepare your content to deliver speech in politics and day to day events happening in the country',
                points: '10',
                endDate: '12/12/2020',
                id:'politics',
                status: 'not completed'
            },
            {
                title: 'Cricket',
                description: 'Give your speech on cricket. Free to choose any topic and any country with respect to cricket',
                points: '15',
                endDate: '13/12/2020',
                id:'cricket',
                status: 'completed'
            },
            {
                title: 'Photography',
                description: 'Give your speech on photography. Free to choose any topic and any country with respect to cricket',
                points: '25',
                endDate: '15/12/2020',
                id:'photography',
                status: 'not completed'
            },
            {
                title: 'Traffic in Bangalore',
                description: 'Views on the traffic in bangalore and suggest how effectively we can get rid from this',
                points: '20',
                endDate: '15/12/2020',
                id:'traffic',
                status: 'not completed'
            },
            {
                title: 'World war 3',
                description: 'Your view on the world war 3 possibilities and summarize who is the main reason for this.',
                points: '30',
                endDate: '19/12/2020',
                id:'worldwar3',
                status: 'completed'
            },
            {
                title: 'Cine industry',
                description: 'Any lattest news about the kollywoodm tollywood or any other cine industry',
                points: '35',
                endDate: '22/12/2020',
                id:'cine',
                status: 'not completed'
            }
        ]
    },
    {
        id: 'extra_curricular',
        title: 'Extra Curricular',
        activeChallenge : '4',
        activeChallengeSinceLastVisit : '3',
        completedChallenges : '3',
        description: 'Justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        avatar: '../../../assets/images/stream_image_logo3.jpg',
        challenges: [
            {
                title: 'Cooking',
                description: 'Prepare a dish and supply it in your floor. Ask your collegues to try the same.',
                points: '10',
                endDate: '12/12/2020',
                id:'cooking',
                status: 'not completed'
            },
            {
                title: 'Cricket',
                description: 'Give your speech on cricket. Free to choose any topic and any country with respect to cricket',
                points: '15',
                endDate: '13/12/2020',
                id:'cricket',
                status: 'not completed'
            },
            {
                title: 'Photography',
                description: 'Give your speech on photography. Free to choose any topic and any country with respect to cricket',
                points: '25',
                endDate: '15/12/2020',
                id:'photography',
                status: 'not completed'
            },
            {
                title: 'Traffic in Bangalore',
                description: 'Views on the traffic in bangalore and suggest how effectively we can get rid from this',
                points: '20',
                endDate: '15/12/2020',
                id:'traffic',
                status: 'not completed'
            },
            {
                title: 'World war 3',
                description: 'Your view on the world war 3 possibilities and summarize who is the main reason for this.',
                points: '30',
                endDate: '19/12/2020',
                id:'worldwar3',
                status: 'not completed'
            },
            {
                title: 'Cine industry',
                description: 'Any lattest news about the kollywoodm tollywood or any other cine industry',
                points: '35',
                endDate: '22/12/2020',
                id:'cine',
                status: 'not completed'
            }
        ]
    }    
]

export const ContributorList: Contributors[] = [{
        name:'Saravana',
        avatar:'../../../assets/images/icons/contributor2.png',
        points: '20'
    },{
        name:'Shruthi',
        avatar:'../../../assets/images/icons/contributor1.png',
        points: '18'
    },{
        name:'Niranjana',
        avatar:'../../../assets/images/icons/contributor4.png',
        points: '16'
    },{
        name:'Shantha',
        avatar:'../../../assets/images/icons/contributor1.png',
        points: '15'
    },{
        name:'Ganesh',
        avatar:'../../../assets/images/icons/contributor3.png',
        points: '14'
    },{
        name:'Ankit',
        avatar:'../../../assets/images/icons/contributor5.png',
        points: '13'
    },{
        name:'Pramod',
        avatar:'../../../assets/images/icons/contributor7.png',
        points: '12'
    },{
        name:'Sandhya',
        avatar:'../../../assets/images/icons/contributor6.png',
        points: '12'
    },{
        name:'Rajesh',
        avatar:'../../../assets/images/icons/contributor8.png',
        points: '11'
    },{
        name:'Nikhil',
        avatar:'../../../assets/images/icons/contributor2.png',
        points: '11'
    },{
        name:'Karthik',
        avatar:'../../../assets/images/icons/contributor7.png',
        points: '10'
    }
]

export const ProfileDetails = {
    activeChallenge: [{
        streamId:'coding_challenge',
        streamTitle: 'Coding Challenge',
        streamAvatar: '../../../assets/images/coding_mac8.jpg',
        challengeId:'factorial',
        challengeTitle: 'Factorial Numbers',
        points:'35'
    },
    {
        streamId:'orating',
        streamTitle: 'Orating',
        streamAvatar: '../../../assets/images/stream_image_logo4.jpg',
        challengeId:'politics',
        challengeTitle: 'Politics',
        points:'10'
    },{
        streamId:'extra_curricular',
        streamTitle: 'Extra Curricular',
        streamAvatar: '../../../assets/images/stream_image_logo3.jpg',
        challengeId: 'cooking',
        challengeTitle: 'Cooking',
        points: '10'
    }],
    completedChallenge: [{
        streamId:'orating',
        streamTitle: 'Orating',
        streamAvatar: '../../../assets/images/stream_image_logo4.jpg',
        challengeId:'cricket',
        challengeTitle: 'Cricket',
        points:'35'
    },
    {
        streamId:'coding_challenge',
        streamTitle: 'Coding Challenge',
        streamAvatar: '../../../assets/images/coding_mac8.jpg',
        challengeId:'palindrome',
        challengeTitle: 'Palindrome Code',
        points:'10'
    },{
        streamId:'coding_challenge',
        streamTitle: 'Coding Challenge',
        streamAvatar: '../../../assets/images/coding_mac8.jpg',
        challengeId: 'prime_numbers',
        challengeTitle: 'Prime Numbers',
        points: '10'
    }],
    favouriteChallenge: [{
        streamId:'coding_challenge',
        streamTitle: 'Coding Challenge',
        streamAvatar: '../../../assets/images/coding_mac8.jpg',
        challengeId:'factorial',
        challengeTitle: 'Factorial Numbers',
        points:'35'
    },
    {
        streamId:'orating',
        streamTitle: 'Orating',
        streamAvatar: '../../../assets/images/stream_image_logo4.jpg',
        challengeId:'politics',
        challengeTitle: 'Politics',
        points:'10'
    },{
        streamId:'extra_curricular',
        streamTitle: 'Extra Curricular',
        streamAvatar: '../../../assets/images/stream_image_logo3.jpg',
        challengeId: 'cooking',
        challengeTitle: 'Cooking',
        points: '10'
    }]
}
