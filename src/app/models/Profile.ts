import Skill from './Skill';

export default class Profile {
  constructor(
    public profileId: number,
    public profileFirstName: string,
    public profileLastName: string,
    public profileLocation: string,
    public profileEmailAddress: string,
    public profileDescription: string,
    public profileSkillsList: Skill[]
  ) {}
}
