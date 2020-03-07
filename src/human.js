export default class Human {
    name;
    job;
    skills = []
    getJob(newJob){
        this.job = newJob
    }
    leaveJob(){
        this.job = "unemployed"
    }
    learnNewSkill(newSkill){
        this.skills = this.skills.concat(newSkill)
    }
    forgetSkill() {
        this.skills = this.skills.filter(word=>word.skill)
    }
        // this.learnNewSkill();
        // this.forgetSkill();
}