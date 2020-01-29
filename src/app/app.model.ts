export interface StreamModel {
    id: string;
    title: string;
    activeChallenge: string;
    activeChallengeSinceLastVisit: string;
    completedChallenges: string;
    description: string;
    challenges: Array<ChallengeModel>;
    avatar:string;
}

export interface ChallengeModel {
    title: string;
    description: string;
    points: string;
    endDate: string;
    id:string;
}

export interface Contributors {
    name:string;
    avatar:string;
    points: string;
}