import Skill from './Skill';

export default class Profile {
  constructor(
    public profileId: number,
    public profileDescription: string,
    public profileFirstName: string,
    public profileLastName: string,
    public profileLocation: string,
    public profileEmailAddress: string,
    public profileSkillsList: Skill[]
  ) {}
}
