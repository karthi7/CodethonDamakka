import { StreamModel } from './app.model';

export const StreamData: StreamModel[] = [
    {
        id: 'coding_challenge',
        title: 'Coding Challenge',
        activeChallenge : '4',
        activeChallengeSinceLastVisit : '3',
        completedChallenges : '3',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        avatar: '../../../assets/images/coding_mac8.jpg',
        challenges: [
            {
                title: 'Reverse a String',
                description: 'Write a code to reverse string. Free to use any programming languages.',
                points: '10',
                endDate: '12/12/2020'
            },
            {
                title: 'Palindrome Code',
                description: 'Write a code to implement palindrome. Any programming language is accepted.',
                points: '15',
                endDate: '13/12/2020'
            },
            {
                title: 'Shortcut to reach the destination',
                description: 'Code snippet to get the shortest steps to reach the destination in any programming languages.',
                points: '25',
                endDate: '15/12/2020'
            },
            {
                title: 'Coin Change Problem',
                description: 'Give the changes to the amount with least number of coin. Surplus amount of coins will be supplied',
                points: '20',
                endDate: '15/12/2020'
            },
            {
                title: 'Fibonacci series',
                description: 'Write a shortest program to implement fibonacci series. Free to use any programming languages',
                points: '30',
                endDate: '19/12/2020'
            },
            {
                title: 'Factorial Numbers',
                description: 'Write a shortest program to implement factorial series. Free to use any programming languages',
                points: '35',
                endDate: '22/12/2020'
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
                endDate: '12/12/2020'
            },
            {
                title: 'Cricket',
                description: 'Give your speech on cricket. Free to choose any topic and any country with respect to cricket',
                points: '15',
                endDate: '13/12/2020'
            },
            {
                title: 'Photography',
                description: 'Give your speech on photography. Free to choose any topic and any country with respect to cricket',
                points: '25',
                endDate: '15/12/2020'
            },
            {
                title: 'Traffic in Bangalore',
                description: 'Views on the traffic in bangalore and suggest how effectively we can get rid from this',
                points: '20',
                endDate: '15/12/2020'
            },
            {
                title: 'World war 3',
                description: 'Your view on the world war 3 possibilities and summarize who is the main reason for this.',
                points: '30',
                endDate: '19/12/2020'
            },
            {
                title: 'Cine industry',
                description: 'Any lattest news about the kollywoodm tollywood or any other cine industry',
                points: '35',
                endDate: '22/12/2020'
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
                endDate: '12/12/2020'
            },
            {
                title: 'Cricket',
                description: 'Give your speech on cricket. Free to choose any topic and any country with respect to cricket',
                points: '15',
                endDate: '13/12/2020'
            },
            {
                title: 'Photography',
                description: 'Give your speech on photography. Free to choose any topic and any country with respect to cricket',
                points: '25',
                endDate: '15/12/2020'
            },
            {
                title: 'Traffic in Bangalore',
                description: 'Views on the traffic in bangalore and suggest how effectively we can get rid from this',
                points: '20',
                endDate: '15/12/2020'
            },
            {
                title: 'World war 3',
                description: 'Your view on the world war 3 possibilities and summarize who is the main reason for this.',
                points: '30',
                endDate: '19/12/2020'
            },
            {
                title: 'Cine industry',
                description: 'Any lattest news about the kollywoodm tollywood or any other cine industry',
                points: '35',
                endDate: '22/12/2020'
            }
        ]
    }    
]